import type { Metadata } from 'next';
import AdminLeadsClient from './AdminLeadsClient';

export const metadata: Metadata = {
  title: 'Lead Dashboard',
  robots: { index: false, follow: false },
};

export default function AdminLeadsPage() {
  return <AdminLeadsClient />;
}
