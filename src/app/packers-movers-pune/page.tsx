import type { Metadata } from 'next';
import { cities } from '@/data/cities';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema';
import CityPageClient from '@/components/sections/CityPageClient';

const city = cities.find((c) => c.slug === 'pune')!;

export const metadata: Metadata = {
  title: `Packers and Movers in Pune - Affordable & Trusted | Box & Go Movers`,
  description: `Reliable packers and movers in Pune. Professional household shifting, office relocation services in Hinjewadi, Kharadi, Wakad & all Pune areas. Call 9881343100.`,
  keywords: 'packers and movers pune, movers pune, household shifting pune, office relocation pune',
  openGraph: {
    title: 'Packers and Movers in Pune | Box & Go Movers',
    description: 'Trusted packers and movers in Pune with affordable rates and safe moving services.',
  },
};

export default function PackersMoversPune() {
  const schema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://boxandgomovers.in' },
    { name: 'Packers and Movers in Pune', url: 'https://boxandgomovers.in/packers-movers-pune' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CityPageClient city={city} />
    </>
  );
}
