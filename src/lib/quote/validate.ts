import type { QuoteLead, QuoteSubmissionPayload } from './types';
import { QUOTE_SERVICE_TYPES } from './types';

const PHONE_REGEX = /^[6-9]\d{9}$/;
const MIN_FORM_DURATION_MS = 2500;

export interface ValidationResult {
  ok: true;
  lead: QuoteLead;
}

export interface ValidationError {
  ok: false;
  error: string;
  status: number;
}

export type ValidateQuoteResult = ValidationResult | ValidationError;

function sanitize(value: unknown, maxLength = 500): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

export function validateQuotePayload(
  payload: QuoteSubmissionPayload
): ValidateQuoteResult {
  if (payload.website && payload.website.trim().length > 0) {
    return { ok: false, error: 'Invalid submission.', status: 400 };
  }

  if (
    payload.formStartedAt &&
    Date.now() - payload.formStartedAt < MIN_FORM_DURATION_MS
  ) {
    return { ok: false, error: 'Please take a moment to complete the form.', status: 429 };
  }

  const name = sanitize(payload.name, 120);
  const phone = sanitize(payload.phone, 15).replace(/\D/g, '');
  const pickupLocation = sanitize(payload.pickupLocation, 120);
  const deliveryLocation = sanitize(payload.deliveryLocation, 120);
  const movingDate = sanitize(payload.movingDate, 20);
  const serviceType = sanitize(payload.serviceType, 80);
  const notes = sanitize(payload.notes, 1000);
  const email = sanitize(payload.email, 120);
  const source = sanitize(payload.source, 80) || 'Website';

  if (name.length < 2) {
    return { ok: false, error: 'Please enter a valid full name.', status: 400 };
  }

  if (!PHONE_REGEX.test(phone)) {
    return { ok: false, error: 'Please enter a valid 10-digit phone number.', status: 400 };
  }

  if (pickupLocation.length < 2) {
    return { ok: false, error: 'Please enter a pickup location.', status: 400 };
  }

  if (deliveryLocation.length < 2) {
    return { ok: false, error: 'Please enter a delivery location.', status: 400 };
  }

  if (!movingDate) {
    return { ok: false, error: 'Please select a moving date.', status: 400 };
  }

  const parsedDate = new Date(movingDate);
  if (Number.isNaN(parsedDate.getTime())) {
    return { ok: false, error: 'Please enter a valid moving date.', status: 400 };
  }

  if (
    !QUOTE_SERVICE_TYPES.includes(
      serviceType as (typeof QUOTE_SERVICE_TYPES)[number]
    ) &&
    serviceType.length < 2
  ) {
    return { ok: false, error: 'Please select a service type.', status: 400 };
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: 'Please enter a valid email address.', status: 400 };
  }

  return {
    ok: true,
    lead: {
      name,
      phone,
      pickupLocation,
      deliveryLocation,
      movingDate,
      serviceType: serviceType || 'Other',
      notes,
      email: email || undefined,
      source,
      submittedAt: new Date().toISOString(),
    },
  };
}
