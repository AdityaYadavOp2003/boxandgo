'use client';

import { m } from 'framer-motion';
import {
  Home,
  Building2,
  MapPin,
  Truck,
  Bike,
  Warehouse,
  ArrowRight,
  CheckCircle,
  Phone,
} from 'lucide-react';
import Link from 'next/link';
import { services } from '@/data/services';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Building2,
  MapPin,
  Truck,
  Bike,
  Warehouse,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ServicesPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <m.h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="gradient-text">Moving Services</span>
          </m.h1>
          <m.p
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Comprehensive moving solutions tailored to your needs — from household shifting to warehousing.
          </m.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Home;
              return (
                <m.div
                  key={service.slug}
                  className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
                  variants={fadeInUp}
                >
                  <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-primary mb-3">
                    {service.title}
                  </h2>
                  <p className="text-neutral-500 mb-5 leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-neutral-600">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="btn-primary text-sm !py-2.5 !px-5"
                    >
                      View Services <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a href="tel:9881343100" className="btn-outline text-sm !py-2.5 !px-5">
                      <Phone className="w-4 h-4" /> Call Now
                    </a>
                  </div>
                </m.div>
              );
            })}
          </m.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding gradient-accent text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Call us or request a free quote — our experts will recommend the best solution for your move.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:9881343100" className="btn-secondary">
                <Phone className="w-5 h-5" /> Call 9881343100
              </a>
            </div>
          </m.div>
        </div>
      </section>
    </>
  );
}
