import type { QuoteSubmissionPayload } from './types';
import { SUCCESS_MESSAGE } from './types';

export interface SubmitQuoteResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export async function submitQuoteRequest(
  payload: QuoteSubmissionPayload
): Promise<SubmitQuoteResponse> {
  try {
    const response = await fetch('/api/quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = (await response.json()) as SubmitQuoteResponse;

    if (!response.ok) {
      return {
        success: false,
        error: data.error || 'Something went wrong. Please try again.',
      };
    }

    return {
      success: true,
      message: data.message || SUCCESS_MESSAGE,
    };
  } catch {
    return {
      success: false,
      error: 'Network error. Please check your connection and try again.',
    };
  }
}

export function mapMoveTypeLabel(value: string): string {
  const map: Record<string, string> = {
    Household: 'Household Shifting',
    household: 'Household Shifting',
    Office: 'Office Relocation',
    office: 'Office Relocation',
    Bike: 'Bike Transportation',
    bike: 'Bike Transportation',
    Storage: 'Warehousing & Storage',
    storage: 'Warehousing & Storage',
    Other: 'Other',
    other: 'Other',
    local: 'Local Shifting',
    domestic: 'Domestic Relocation',
  };
  return map[value] || value;
}
