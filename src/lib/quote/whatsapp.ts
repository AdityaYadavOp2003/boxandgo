import type { QuoteLead } from './types';
import { formatWhatsAppMessage } from './format-message';

function getRecipientPhone(): string {
  const phone = process.env.NOTIFICATION_PHONE || process.env.WHATSAPP_RECIPIENT || '9881343100';
  return phone.replace(/\D/g, '');
}

function toWhatsAppNumber(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.startsWith('91') && digits.length === 12) return digits;
  if (digits.length === 10) return `91${digits}`;
  return digits;
}

async function sendViaMetaCloud(message: string): Promise<{ ok: boolean; error?: string }> {
  const accessToken = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;

  if (!accessToken || !phoneNumberId) {
    return { ok: false, error: 'meta_not_configured' };
  }

  const response = await fetch(
    `https://graph.facebook.com/v21.0/${phoneNumberId}/messages`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: toWhatsAppNumber(getRecipientPhone()),
        type: 'text',
        text: { body: message },
      }),
    }
  );

  if (!response.ok) {
    const body = await response.text();
    console.error('[whatsapp] Meta API error:', body);
    return { ok: false, error: 'meta_api_failed' };
  }

  return { ok: true };
}

async function sendViaTwilio(message: string): Promise<{ ok: boolean; error?: string }> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_WHATSAPP_FROM;

  if (!accountSid || !authToken || !from) {
    return { ok: false, error: 'twilio_not_configured' };
  }

  const to = `whatsapp:+${toWhatsAppNumber(getRecipientPhone())}`;
  const params = new URLSearchParams({
    From: from.startsWith('whatsapp:') ? from : `whatsapp:${from}`,
    To: to,
    Body: message,
  });

  const response = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    }
  );

  if (!response.ok) {
    const body = await response.text();
    console.error('[whatsapp] Twilio error:', body);
    return { ok: false, error: 'twilio_api_failed' };
  }

  return { ok: true };
}

async function sendViaCallMeBot(message: string): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.CALLMEBOT_API_KEY;
  if (!apiKey) return { ok: false, error: 'callmebot_not_configured' };

  const phone = getRecipientPhone();
  const url = new URL('https://api.callmebot.com/whatsapp.php');
  url.searchParams.set('phone', phone);
  url.searchParams.set('text', message);
  url.searchParams.set('apikey', apiKey);

  const response = await fetch(url.toString());
  if (!response.ok) {
    console.error('[whatsapp] CallMeBot error:', await response.text());
    return { ok: false, error: 'callmebot_api_failed' };
  }

  return { ok: true };
}

export async function sendWhatsAppNotification(
  lead: QuoteLead
): Promise<{ ok: boolean; provider?: string; error?: string }> {
  const message = formatWhatsAppMessage(lead);

  const providers = [
    { name: 'meta', send: () => sendViaMetaCloud(message) },
    { name: 'twilio', send: () => sendViaTwilio(message) },
    { name: 'callmebot', send: () => sendViaCallMeBot(message) },
  ];

  for (const provider of providers) {
    const result = await provider.send();
    if (result.ok) {
      return { ok: true, provider: provider.name };
    }
    if (result.error?.endsWith('_not_configured')) continue;
  }

  console.warn('[whatsapp] No WhatsApp provider configured or all providers failed.');
  return { ok: false, error: 'not_configured' };
}

export function isWhatsAppConfigured(): boolean {
  return Boolean(
    process.env.WHATSAPP_ACCESS_TOKEN ||
      process.env.TWILIO_ACCOUNT_SID ||
      process.env.CALLMEBOT_API_KEY
  );
}
