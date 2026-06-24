import type { QuoteLead } from './types';
import { appendLeadToSheet } from './google-sheets';
import { sendQuoteEmail } from './email';
import { sendWhatsAppNotification } from './whatsapp';

export interface ProcessLeadResult {
  stored: boolean;
  emailSent: boolean;
  whatsappSent: boolean;
  warnings: string[];
}

export async function processQuoteLead(lead: QuoteLead): Promise<ProcessLeadResult> {
  const warnings: string[] = [];

  let stored = false;
  try {
    await appendLeadToSheet(lead);
    stored = true;
  } catch (error) {
    console.error('[leads] Storage failed:', error);
    warnings.push('Lead storage unavailable.');
  }

  const emailResult = await sendQuoteEmail(lead);
  if (!emailResult.ok && emailResult.error !== 'not_configured') {
    warnings.push('Email notification failed.');
  }

  const whatsappResult = await sendWhatsAppNotification(lead);
  if (!whatsappResult.ok && whatsappResult.error !== 'not_configured') {
    warnings.push('WhatsApp notification failed.');
  }

  // Require at least one notification channel or storage to succeed
  const anySuccess =
    stored || emailResult.ok || whatsappResult.ok;

  if (!anySuccess) {
    if (process.env.NODE_ENV === 'development') {
      console.info('[dev] Quote lead received (notifications not configured):', lead);
      return {
        stored: false,
        emailSent: false,
        whatsappSent: false,
        warnings: ['Development mode: configure notification env vars for production.'],
      };
    }

    throw new Error(
      'Unable to process lead. Notification services are not configured.'
    );
  }

  return {
    stored,
    emailSent: emailResult.ok,
    whatsappSent: whatsappResult.ok,
    warnings,
  };
}
