import type { Metadata } from 'next';
import { cities } from '@/data/cities';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema';
import CityPageClient from '@/components/sections/CityPageClient';

const city = cities.find((c) => c.slug === 'hyderabad')!;

export const metadata: Metadata = {
  title: `Packers and Movers in Hyderabad - Professional & Safe | Box & Go Movers`,
  description: `Best packers and movers in Hyderabad. Safe household shifting, office relocation services in HITEC City, Gachibowli, Madhapur & all Hyderabad areas. Call 9881343100.`,
  keywords: 'packers and movers hyderabad, movers hyderabad, household shifting hyderabad, office relocation hyderabad',
  openGraph: {
    title: 'Packers and Movers in Hyderabad | Box & Go Movers',
    description: 'Professional packers and movers in Hyderabad offering reliable moving services.',
  },
};

export default function PackersMoversHyderabad() {
  const schema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://boxandgomovers.in' },
    { name: 'Packers and Movers in Hyderabad', url: 'https://boxandgomovers.in/packers-movers-hyderabad' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CityPageClient city={city} />
    </>
  );
}
