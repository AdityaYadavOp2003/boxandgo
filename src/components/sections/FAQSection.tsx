'use client';

import { useState } from 'react';
import Link from 'next/link';
import { homeFaqs } from '@/data/faq';
import AccordionItem from '../ui/AccordionItem';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="section-padding bg-neutral-50"
      aria-labelledby="faq-heading"
    >
      <div className="page-container max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions about your move"
          subtitle="Clear answers on pricing, insurance, timelines, and how we work."
        />

        <div className="rounded-xl sm:rounded-2xl border border-neutral-100 bg-white p-4 sm:p-6 md:p-8 shadow-sm min-w-0">
          {homeFaqs.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <ScrollReveal className="mt-8 text-center">
          <p className="text-sm text-neutral-500">
            Still have questions?{' '}
            <Link href="/contact" className="font-semibold text-accent hover:underline">
              Contact our team
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
