import type { Metadata } from 'next';
import { cities } from '@/data/cities';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema';
import CityPageClient from '@/components/sections/CityPageClient';

const city = cities.find((c) => c.slug === 'bangalore')!;

export const metadata: Metadata = {
  title: `Packers and Movers in Bangalore - Trusted & Affordable | Box & Go Movers`,
  description: `Top packers and movers in Bangalore. Household shifting, office relocation, bike transport in Whitefield, Electronic City, Koramangala & all Bangalore areas. Call 9881343100.`,
  keywords: 'packers and movers bangalore, movers bangalore, household shifting bangalore, office relocation bangalore',
  openGraph: {
    title: 'Packers and Movers in Bangalore | Box & Go Movers',
    description: 'Trusted packers and movers in Bangalore with safe and affordable moving services.',
  },
};

export default function PackersMoversBangalore() {
  const schema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://boxandgomovers.in' },
    { name: 'Packers and Movers in Bangalore', url: 'https://boxandgomovers.in/packers-movers-bangalore' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CityPageClient city={city} />
    </>
  );
}
