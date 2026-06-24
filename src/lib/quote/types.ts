export interface QuoteLead {
  name: string;
  phone: string;
  pickupLocation: string;
  deliveryLocation: string;
  movingDate: string;
  serviceType: string;
  notes: string;
  email?: string;
  source: string;
  submittedAt: string;
}

export interface QuoteSubmissionPayload {
  name: string;
  phone: string;
  pickupLocation: string;
  deliveryLocation: string;
  movingDate: string;
  serviceType: string;
  notes?: string;
  email?: string;
  source?: string;
  /** Honeypot — must be empty */
  website?: string;
  /** Client timestamp when form was opened (ms) */
  formStartedAt?: number;
}

export const QUOTE_SERVICE_TYPES = [
  'Household Shifting',
  'Office Relocation',
  'Local Shifting',
  'Domestic Relocation',
  'Bike Transportation',
  'Warehousing & Storage',
  'Other',
] as const;

export const SUCCESS_MESSAGE =
  'Thank you for contacting Box & Go Movers. Our team will contact you shortly.';
