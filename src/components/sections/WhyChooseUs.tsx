'use client';

import { m } from 'framer-motion';
import {
  ShieldCheck,
  Users,
  IndianRupee,
  Headphones,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { staggerContainer, staggerItem, VIEWPORT_ONCE } from '@/lib/motion';

const features = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    description:
      'Fully compliant operations with transit insurance and documented handling standards for total peace of mind.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description:
      'Background-verified crews trained in packing, lifting, and route planning for homes, offices, and two-wheelers.',
  },
  {
    icon: IndianRupee,
    title: 'Transparent Pricing',
    description:
      'Detailed surveys and itemized quotes — no hidden fees. You approve the plan before we pack a single box.',
  },
  {
    icon: Headphones,
    title: 'Real-Time Support',
    description:
      'Dedicated coordinators plus phone and WhatsApp updates from booking through final delivery and setup.',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="section-padding bg-neutral-50 relative overflow-hidden"
      aria-labelledby="why-us-heading"
    >
      <div className="relative page-container">
        <SectionHeading
          eyebrow="Why Box & Go"
          title="Built on trust, delivered with precision"
          subtitle="The reliability of enterprise logistics — tailored for families and businesses relocating across India."
        />

        <m.div
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <m.div
              key={feature.title}
              variants={staggerItem}
              className="ui-card ui-card-hover p-6 md:p-8"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <feature.icon size={20} strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="text-lg font-heading font-bold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {feature.description}
              </p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
