import type { Metadata } from 'next';
import { cities } from '@/data/cities';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema';
import CityPageClient from '@/components/sections/CityPageClient';

const city = cities.find((c) => c.slug === 'nagpur')!;

export const metadata: Metadata = {
  title: `Packers and Movers in Nagpur - Trusted & Affordable | Box & Go Movers`,
  description: `Best packers and movers in Nagpur. Safe household shifting, office relocation, bike transport, and storage services. Get free quotes. Call 9881343100.`,
  keywords: 'packers and movers nagpur, movers nagpur, household shifting nagpur, office relocation nagpur, bike transport nagpur',
  openGraph: {
    title: 'Packers and Movers in Nagpur | Box & Go Movers',
    description: 'Trusted packers and movers in Nagpur offering safe, affordable moving services across all areas.',
  },
};

export default function PackersMoversNagpur() {
  const schema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://boxandgomovers.in' },
    { name: 'Packers and Movers in Nagpur', url: 'https://boxandgomovers.in/packers-movers-nagpur' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CityPageClient city={city} />
    </>
  );
}
