import type { QuoteLead } from './types';

export function formatWhatsAppMessage(lead: QuoteLead): string {
  const notesLine = lead.notes ? `\nAdditional Notes: ${lead.notes}` : '';

  return [
    '🚚 New Quote Request',
    '',
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Pickup Location: ${lead.pickupLocation}`,
    `Delivery Location: ${lead.deliveryLocation}`,
    `Moving Date: ${lead.movingDate}`,
    `Service Type: ${lead.serviceType}${notesLine}`,
    '',
    `Source: ${lead.source}`,
    '',
    'Please contact this customer as soon as possible.',
  ].join('\n');
}

export function formatEmailHtml(lead: QuoteLead): string {
  const rows = [
    ['Name', lead.name],
    ['Phone', lead.phone],
    ['Pickup Location', lead.pickupLocation],
    ['Delivery Location', lead.deliveryLocation],
    ['Moving Date', lead.movingDate],
    ['Service Type', lead.serviceType],
    ['Additional Notes', lead.notes || '—'],
    ['Email', lead.email || '—'],
    ['Source', lead.source],
    ['Submitted At', lead.submittedAt],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;">${label}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;">${value}</td></tr>`
    )
    .join('');

  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#243B6A;">New Quote Request - Box & Go Movers</h2>
      <table style="border-collapse:collapse;width:100%;">${tableRows}</table>
      <p style="margin-top:16px;color:#6b7280;font-size:14px;">Please contact this customer as soon as possible.</p>
    </div>
  `;
}

export function formatEmailText(lead: QuoteLead): string {
  const notesLine = lead.notes ? `\nAdditional Notes: ${lead.notes}` : '';

  return [
    '🚚 New Quote Request',
    '',
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Pickup Location: ${lead.pickupLocation}`,
    `Delivery Location: ${lead.deliveryLocation}`,
    `Moving Date: ${lead.movingDate}`,
    `Service Type: ${lead.serviceType}${notesLine}`,
    '',
    `Source: ${lead.source}`,
  ].join('\n');
}

export function leadToSheetRow(lead: QuoteLead): string[] {
  return [
    lead.submittedAt,
    lead.name,
    lead.phone,
    lead.pickupLocation,
    lead.deliveryLocation,
    lead.movingDate,
    lead.serviceType,
    lead.notes,
    lead.source,
    lead.email || '',
  ];
}

export function sheetRowToLead(row: string[]): QuoteLead | null {
  if (!row[0] || !row[1]) return null;
  return {
    submittedAt: row[0],
    name: row[1],
    phone: row[2] || '',
    pickupLocation: row[3] || '',
    deliveryLocation: row[4] || '',
    movingDate: row[5] || '',
    serviceType: row[6] || '',
    notes: row[7] || '',
    source: row[8] || 'Website',
    email: row[9] || undefined,
  };
}
