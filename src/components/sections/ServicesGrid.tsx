'use client';

import Link from 'next/link';
import { m } from 'framer-motion';
import {
  Home,
  Building2,
  Package,
  PackageOpen,
  Bike,
  Warehouse,
  ArrowRight,
} from 'lucide-react';
import { homeServices } from '@/data/homeServices';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal from '../ui/ScrollReveal';
import { staggerContainer, staggerItem, VIEWPORT_ONCE } from '@/lib/motion';

const iconMap: Record<string, React.ElementType> = {
  Home,
  Building2,
  Package,
  PackageOpen,
  Bike,
  Warehouse,
};

export default function ServicesGrid() {
  return (
    <section id="services" className="section-padding bg-white" aria-labelledby="services-heading">
      <div className="page-container">
        <SectionHeading
          eyebrow="What we offer"
          title="Relocation services built for every need"
          subtitle="Professional packing, moving, and storage — delivered with the care and accountability you expect from a national logistics partner."
        />

        <m.div
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {homeServices.map((service) => {
            const Icon = iconMap[service.icon] || Package;
            return (
              <m.article
                key={service.title}
                variants={staggerItem}
                className="ui-card ui-card-hover group relative flex flex-col min-w-0 p-6 md:p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-600 text-white shadow-sm">
                  <Icon size={22} strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="text-lg font-heading font-bold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed flex-1 mb-5">
                  {service.description}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2 transition-[gap] duration-200"
                  >
                    View Services
                    <ArrowRight size={16} aria-hidden />
                  </Link>
                  <Link
                    href="/contact"
                    className="ml-auto text-xs font-semibold text-neutral-500 hover:text-primary transition-colors"
                  >
                    Get quote
                  </Link>
                </div>
              </m.article>
            );
          })}
        </m.div>

        <ScrollReveal className="mt-12 text-center">
          <Link href="/services" className="btn-outline btn-interactive">
            View all services
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
