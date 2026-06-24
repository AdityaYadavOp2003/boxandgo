import type { Metadata } from 'next';
import ServicesPageClient from './ServicesPageClient';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore Box & Go Movers\' complete range of moving services: household shifting, office relocation, local shifting, domestic relocation, bike transport, and warehousing. Professional, safe & affordable.',
  openGraph: {
    title: 'Our Moving Services | Box & Go Movers',
    description:
      'Complete range of professional moving services across India — household, office, bike transport & more.',
    url: 'https://boxandgomovers.in/services',
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
