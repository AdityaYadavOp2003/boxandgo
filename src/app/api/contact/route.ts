import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { checkRateLimit, getClientIp } from '@/lib/quote/rate-limit';

export const runtime = 'nodejs';

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  website?: string;
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const rateLimit = checkRateLimit(`contact:${ip}`);

  if (!rateLimit.allowed) {
    return NextResponse.json(
      { success: false, error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  const payload = (await request.json()) as ContactPayload;

  if (payload.website?.trim()) {
    return NextResponse.json({ success: false, error: 'Invalid submission.' }, { status: 400 });
  }

  const name = payload.name?.trim().slice(0, 120) || '';
  const email = payload.email?.trim().slice(0, 120) || '';
  const phone = payload.phone?.replace(/\D/g, '') || '';
  const subject = payload.subject?.trim().slice(0, 120) || 'General Inquiry';
  const message = payload.message?.trim().slice(0, 2000) || '';

  if (name.length < 2 || phone.length !== 10 || message.length < 5) {
    return NextResponse.json(
      { success: false, error: 'Please fill in all required fields.' },
      { status: 400 }
    );
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    if (process.env.NODE_ENV === 'development') {
      console.info('[dev] Contact message:', { name, email, phone, subject, message });
      return NextResponse.json({ success: true });
    }
    return NextResponse.json(
      { success: false, error: 'Contact form is temporarily unavailable.' },
      { status: 503 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const recipient = process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER;

    await transporter.sendMail({
      from: `"Box & Go Movers Website" <${process.env.EMAIL_USER}>`,
      to: recipient,
      replyTo: email || undefined,
      subject: `Contact Form: ${subject}`,
      text: [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email || '—'}`,
        `Subject: ${subject}`,
        '',
        message,
      ].join('\n'),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[api/contact] Error:', error);
    return NextResponse.json(
      { success: false, error: 'Unable to send your message. Please call 9881343100.' },
      { status: 500 }
    );
  }
}
