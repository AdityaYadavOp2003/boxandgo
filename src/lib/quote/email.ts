import { Resend } from 'resend';
import type { QuoteLead } from './types';
import { formatEmailHtml, formatEmailText } from './format-message';

const RECIPIENT_EMAIL = 'boxandgoquery@gmail.com';
const ONBOARDING_FROM = 'Box & Go Movers Website <onboarding@resend.dev>';

function getRecipientEmail(): string {
  return process.env.NOTIFICATION_EMAIL || RECIPIENT_EMAIL;
}

function getFromEmail(): string {
  if (process.env.RESEND_FROM_EMAIL) {
    return process.env.RESEND_FROM_EMAIL;
  }

  // Resend sandbox sender — use for local dev/testing without a verified domain
  return ONBOARDING_FROM;
}

function isConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}

function logDeliveryContext(lead: QuoteLead, stage: 'attempt' | 'success' | 'failure') {
  const context = {
    stage,
    environment: process.env.NODE_ENV ?? 'unknown',
    from: getFromEmail(),
    recipient: getRecipientEmail(),
    subject: 'New Quote Request - Box & Go Movers',
    lead: {
      submittedAt: lead.submittedAt,
      name: lead.name,
      phone: lead.phone,
      email: lead.email ?? null,
      source: lead.source,
    },
    replyTo: lead.email ?? null,
    resendConfigured: isConfigured(),
  };

  if (stage === 'attempt') {
    console.info('[email] Sending quote notification:', context);
  } else if (stage === 'success') {
    console.info('[email] Quote notification delivered:', context);
  } else {
    console.error('[email] Quote notification delivery failed:', context);
  }
}

export async function sendQuoteEmail(lead: QuoteLead): Promise<{ ok: boolean; error?: string }> {
  if (!isConfigured()) {
    console.warn('[email] Resend not configured — skipping notification.', {
      environment: process.env.NODE_ENV ?? 'unknown',
      recipient: getRecipientEmail(),
      resendApiKeyPresent: false,
    });
    return { ok: false, error: 'not_configured' };
  }

  logDeliveryContext(lead, 'attempt');

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: getFromEmail(),
      to: [getRecipientEmail()],
      replyTo: lead.email || undefined,
      subject: 'New Quote Request - Box & Go Movers',
      text: formatEmailText(lead),
      html: formatEmailHtml(lead),
    });

    if (error) {
      console.error('[email] Resend API returned an error:', {
        name: error.name,
        message: error.message,
        from: getFromEmail(),
        recipient: getRecipientEmail(),
        leadSubmittedAt: lead.submittedAt,
        fullError: error,
      });
      logDeliveryContext(lead, 'failure');
      return { ok: false, error: error.message };
    }

    console.info('[email] Resend API response:', {
      messageId: data?.id ?? null,
      from: getFromEmail(),
      recipient: getRecipientEmail(),
      leadSubmittedAt: lead.submittedAt,
      fullResponse: data,
    });
    logDeliveryContext(lead, 'success');

    return { ok: true };
  } catch (error) {
    console.error('[email] Unexpected error sending notification:', {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      from: getFromEmail(),
      recipient: getRecipientEmail(),
      leadSubmittedAt: lead.submittedAt,
    });
    logDeliveryContext(lead, 'failure');
    return {
      ok: false,
      error: error instanceof Error ? error.message : 'email_failed',
    };
  }
}

export function isEmailConfigured(): boolean {
  return isConfigured();
}
