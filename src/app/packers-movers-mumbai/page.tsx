import type { Metadata } from 'next';
import { cities } from '@/data/cities';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema';
import CityPageClient from '@/components/sections/CityPageClient';

const city = cities.find((c) => c.slug === 'mumbai')!;

export const metadata: Metadata = {
  title: `Packers and Movers in Mumbai - Safe & Reliable | Box & Go Movers`,
  description: `Top-rated packers and movers in Mumbai. Expert household shifting, office relocation, bike transport services in Andheri, Bandra, Thane & all Mumbai areas. Call 9881343100.`,
  keywords: 'packers and movers mumbai, movers mumbai, household shifting mumbai, office relocation mumbai',
  openGraph: {
    title: 'Packers and Movers in Mumbai | Box & Go Movers',
    description: 'Professional packers and movers in Mumbai offering safe, affordable moving services.',
  },
};

export default function PackersMoversMumbai() {
  const schema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://boxandgomovers.in' },
    { name: 'Packers and Movers in Mumbai', url: 'https://boxandgomovers.in/packers-movers-mumbai' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CityPageClient city={city} />
    </>
  );
}
