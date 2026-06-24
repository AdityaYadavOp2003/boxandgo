import { NextResponse } from 'next/server';
import { fetchLeadsFromSheet } from '@/lib/quote/google-sheets';

export const runtime = 'nodejs';

function isAuthorized(request: Request): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) return false;

  const authHeader = request.headers.get('authorization');
  if (authHeader === `Bearer ${adminPassword}`) return true;

  const cookie = request.headers.get('cookie') || '';
  const match = cookie.match(/admin_auth=([^;]+)/);
  return match?.[1] === adminPassword;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search') || undefined;

  try {
    const leads = await fetchLeadsFromSheet(search);
    return NextResponse.json({ leads });
  } catch (error) {
    console.error('[api/admin/leads] Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leads. Check Google Sheets configuration.' },
      { status: 500 }
    );
  }
}
