'use client';

import { m } from 'framer-motion';
import {
  FileText,
  ClipboardList,
  Package,
  PackageCheck,
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { processContainer, processStep, VIEWPORT_ONCE } from '@/lib/motion';

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Request Quote',
    description:
      'Share your move details online or by phone. We respond quickly with clear next steps and scheduling options.',
  },
  {
    icon: ClipboardList,
    step: '02',
    title: 'Schedule Survey',
    description:
      'A coordinator visits or connects virtually to inventory items, assess access, and prepare an accurate quote.',
  },
  {
    icon: Package,
    step: '03',
    title: 'Packing & Moving',
    description:
      'Expert packing, careful loading, and GPS-tracked transport with updates at every milestone.',
  },
  {
    icon: PackageCheck,
    step: '04',
    title: 'Safe Delivery',
    description:
      'Unload, unpack, and place items as directed. We confirm satisfaction before closing your move file.',
  },
];

export default function MovingTimeline() {
  return (
    <section
      id="how-it-works"
      className="section-padding bg-white"
      aria-labelledby="how-it-works-heading"
    >
      <div className="page-container">
        <SectionHeading
          eyebrow="How it works"
          title="Four simple steps to your new address"
          subtitle="A structured relocation process — from first quote to keys in hand."
        />

        <m.div
          variants={processContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5"
        >
          {steps.map((step, i) => (
            <m.div key={step.title} variants={processStep} className="relative group">
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-accent/40 to-neutral-200"
                  aria-hidden
                />
              )}
              <div className="h-full rounded-2xl border border-neutral-100 bg-neutral-50/50 p-6 transition-[transform,border-color,background-color,box-shadow] duration-300 group-hover:border-accent/30 group-hover:bg-white group-hover:-translate-y-1 group-hover:shadow-md">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white shadow-md shadow-accent/25">
                    <step.icon size={24} strokeWidth={1.75} aria-hidden />
                  </div>
                  <span className="text-3xl font-heading font-bold text-neutral-200 group-hover:text-accent/30 transition-colors duration-300">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-bold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
