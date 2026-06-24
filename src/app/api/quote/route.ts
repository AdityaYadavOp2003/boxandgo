import { NextResponse } from 'next/server';
import { validateQuotePayload } from '@/lib/quote/validate';
import { checkRateLimit, getClientIp } from '@/lib/quote/rate-limit';
import { processQuoteLead } from '@/lib/quote/process-lead';
import { SUCCESS_MESSAGE } from '@/lib/quote/types';
import type { QuoteSubmissionPayload } from '@/lib/quote/types';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(ip);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please try again later.',
        },
        {
          status: 429,
          headers: rateLimit.retryAfterSeconds
            ? { 'Retry-After': String(rateLimit.retryAfterSeconds) }
            : undefined,
        }
      );
    }

    const payload = (await request.json()) as QuoteSubmissionPayload;
    const validation = validateQuotePayload(payload);

    if (!validation.ok) {
      return NextResponse.json(
        { success: false, error: validation.error },
        { status: validation.status }
      );
    }

    const result = await processQuoteLead(validation.lead);

    return NextResponse.json({
      success: true,
      message: SUCCESS_MESSAGE,
      meta: {
        stored: result.stored,
        emailSent: result.emailSent,
        whatsappSent: result.whatsappSent,
        warnings: result.warnings,
      },
    });
  } catch (error) {
    console.error('[api/quote] Error:', error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : 'Unable to submit your request. Please call us at 9881343100.',
      },
      { status: 500 }
    );
  }
}
console.log("Sheets ID:", !!process.env.GOOGLE_SHEETS_ID);
console.log("Service JSON:", !!process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
console.log("Resend API Key:", !!process.env.RESEND_API_KEY);