'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Download,
  Loader2,
  Lock,
  LogOut,
  RefreshCw,
  Search,
} from 'lucide-react';
import type { QuoteLead } from '@/lib/quote/types';

function leadsToCsv(leads: QuoteLead[]): string {
  const headers = [
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

  const escape = (value: string) => `"${value.replace(/"/g, '""')}"`;

  const rows = leads.map((lead) =>
    [
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
    ]
      .map(escape)
      .join(',')
  );

  return [headers.join(','), ...rows].join('\n');
}

export default function AdminLeadsClient() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const [leads, setLeads] = useState<QuoteLead[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState('');

  const fetchLeads = useCallback(async (query = search) => {
    setLoading(true);
    setFetchError('');
    try {
      const params = query ? `?search=${encodeURIComponent(query)}` : '';
      const response = await fetch(`/api/admin/leads${params}`);
      const data = await response.json();

      if (response.status === 401) {
        setAuthenticated(false);
        setFetchError('Session expired. Please sign in again.');
        return;
      }

      if (!response.ok) {
        setFetchError(data.error || 'Failed to load leads.');
        return;
      }

      setLeads(data.leads || []);
    } catch {
      setFetchError('Network error while loading leads.');
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetch('/api/admin/leads')
      .then((res) => {
        if (res.ok) {
          setAuthenticated(true);
          return res.json();
        }
        return null;
      })
      .then((data) => {
        if (data?.leads) setLeads(data.leads);
      })
      .catch(() => undefined);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError('');

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        const data = await response.json();
        setAuthError(data.error || 'Invalid password.');
        return;
      }

      setAuthenticated(true);
      setPassword('');
      await fetchLeads('');
    } catch {
      setAuthError('Unable to sign in.');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    setAuthenticated(false);
    setLeads([]);
  };

  const handleExport = () => {
    const csv = leadsToCsv(leads);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `boxngo-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const stats = useMemo(
    () => ({
      total: leads.length,
      today: leads.filter((lead) =>
        lead.submittedAt.startsWith(new Date().toISOString().slice(0, 10))
      ).length,
    }),
    [leads]
  );

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-neutral-100 p-8"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mx-auto mb-4">
            <Lock size={22} />
          </div>
          <h1 className="text-xl font-heading font-bold text-primary text-center mb-2">
            Lead Dashboard
          </h1>
          <p className="text-sm text-neutral-500 text-center mb-6">
            Sign in to view and export quote requests.
          </p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Admin password"
            className="form-input w-full mb-4"
            required
          />
          {authError && (
            <p className="text-sm text-red-600 mb-4">{authError}</p>
          )}
          <button
            type="submit"
            disabled={authLoading}
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            {authLoading ? <Loader2 size={16} className="animate-spin" /> : null}
            Sign In
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-heading font-bold text-primary">
              Quote Leads
            </h1>
            <p className="text-sm text-neutral-500">
              {stats.total} total · {stats.today} today
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => fetchLeads()}
              className="btn-secondary btn-secondary-light !py-2 !px-3 text-sm flex items-center gap-2"
            >
              <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
              Refresh
            </button>
            <button
              type="button"
              onClick={handleExport}
              disabled={!leads.length}
              className="btn-primary !py-2 !px-3 text-sm flex items-center gap-2"
            >
              <Download size={14} />
              Export CSV
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="btn-secondary btn-secondary-light !py-2 !px-3 text-sm flex items-center gap-2"
            >
              <LogOut size={14} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
            />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && fetchLeads()}
              placeholder="Search by name, phone, city, service..."
              className="form-input w-full pl-9"
            />
          </div>
          <button
            type="button"
            onClick={() => fetchLeads()}
            className="btn-primary !py-2.5 sm:!px-6"
          >
            Search
          </button>
        </div>

        {fetchError && (
          <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {fetchError}
          </div>
        )}

        <div className="bg-white rounded-2xl border border-neutral-100 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-16 text-neutral-500 gap-2">
              <Loader2 size={18} className="animate-spin" />
              Loading leads...
            </div>
          ) : leads.length === 0 ? (
            <div className="py-16 text-center text-neutral-500 text-sm">
              No leads found. Configure Google Sheets to store submissions.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50 text-left">
                  <tr>
                    {[
                      'Submitted',
                      'Name',
                      'Phone',
                      'Pickup',
                      'Delivery',
                      'Date',
                      'Service',
                      'Source',
                    ].map((heading) => (
                      <th
                        key={heading}
                        className="px-4 py-3 font-semibold text-neutral-600 whitespace-nowrap"
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead, index) => (
                    <tr
                      key={`${lead.submittedAt}-${lead.phone}-${index}`}
                      className="border-t border-neutral-100 hover:bg-neutral-50/80"
                    >
                      <td className="px-4 py-3 whitespace-nowrap text-neutral-500">
                        {new Date(lead.submittedAt).toLocaleString('en-IN')}
                      </td>
                      <td className="px-4 py-3 font-medium text-primary whitespace-nowrap">
                        {lead.name}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <a href={`tel:${lead.phone}`} className="text-accent hover:underline">
                          {lead.phone}
                        </a>
                      </td>
                      <td className="px-4 py-3">{lead.pickupLocation}</td>
                      <td className="px-4 py-3">{lead.deliveryLocation}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{lead.movingDate}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{lead.serviceType}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{lead.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
