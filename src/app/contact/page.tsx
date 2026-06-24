import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';
import { generateLocalBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Box & Go Movers for all your moving needs. Call 9881343100, WhatsApp us, or fill out our contact form for a free quote. Available 24/7.',
  openGraph: {
    title: 'Contact Us | Box & Go Movers',
    description:
      'Reach out to Box & Go Movers for professional packing and moving services. Call, WhatsApp, or email us today.',
  },
};

export default function ContactPage() {
  const schema = generateLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ContactPageClient />
    </>
  );
}
