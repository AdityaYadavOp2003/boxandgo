import { google } from 'googleapis';
import type { QuoteLead } from './types';
import { leadToSheetRow, sheetRowToLead } from './format-message';

const SHEET_NAME = 'Leads';
const HEADER_ROW = [
  'Timestamp',
  'Name',
  'Phone',
  'Pickup',
  'Delivery',
  'Moving Date',
  'Service',
  'Notes',
  'Source',
  'Email',
];

function getCredentials() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Record<string, string>;
  } catch {
    return null;
  }
}

function isConfigured(): boolean {
  return Boolean(getCredentials() && process.env.GOOGLE_SHEETS_ID);
}

async function getSheetsClient() {
  const credentials = getCredentials();
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
  if (!credentials || !spreadsheetId) {
    throw new Error('Google Sheets is not configured.');
  }

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return {
    sheets: google.sheets({ version: 'v4', auth }),
    spreadsheetId,
  };
}

export async function ensureSheetHeaders(): Promise<void> {
  if (!isConfigured()) return;

  const { sheets, spreadsheetId } = await getSheetsClient();
  const range = `${SHEET_NAME}!A1:J1`;

  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  if (!existing.data.values?.length) {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: { values: [HEADER_ROW] },
    });
  }
}

export async function appendLeadToSheet(lead: QuoteLead): Promise<void> {
  if (!isConfigured()) {
    console.warn('[leads] Google Sheets not configured — skipping storage.');
    return;
  }

  await ensureSheetHeaders();
  const { sheets, spreadsheetId } = await getSheetsClient();

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${SHEET_NAME}!A:J`,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [leadToSheetRow(lead)],
    },
  });
}

export async function fetchLeadsFromSheet(search?: string): Promise<QuoteLead[]> {
  if (!isConfigured()) return [];

  const { sheets, spreadsheetId } = await getSheetsClient();
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `${SHEET_NAME}!A2:J`,
  });

  const rows = response.data.values || [];
  let leads = rows
    .map((row) => sheetRowToLead(row as string[]))
    .filter((lead): lead is QuoteLead => lead !== null)
    .reverse();

  if (search?.trim()) {
    const q = search.trim().toLowerCase();
    leads = leads.filter((lead) =>
      [
        lead.name,
        lead.phone,
        lead.pickupLocation,
        lead.deliveryLocation,
        lead.serviceType,
        lead.notes,
        lead.source,
        lead.email,
      ]
        .join(' ')
        .toLowerCase()
        .includes(q)
    );
  }

  return leads;
}

export function isGoogleSheetsConfigured(): boolean {
  return isConfigured();
}
