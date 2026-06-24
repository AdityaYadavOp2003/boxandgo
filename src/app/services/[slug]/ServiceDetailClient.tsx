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
  ChevronRight,
  Phone,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import type { Service } from '@/data/services';
import QuoteForm from '@/components/forms/QuoteForm';

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

interface ServiceDetailClientProps {
  service: Service;
  relatedServices: Service[];
}

export default function ServiceDetailClient({ service, relatedServices }: ServiceDetailClientProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const IconComponent = iconMap[service.icon] || Home;

  return (
    <>
      {/* Hero with Breadcrumb */}
      <section className="gradient-hero text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/80">{service.shortTitle}</span>
          </nav>
          <m.div
            className="flex items-start gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl gradient-accent flex items-center justify-center shrink-0">
              <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <div>
              <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                {service.title}
              </h1>
              <p className="text-lg text-white/70 mt-2 max-w-2xl">{service.shortDescription}</p>
            </div>
          </m.div>
        </div>
      </section>

      {/* Service Description */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            className="max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-heading text-3xl font-bold text-primary mb-6">
              About Our {service.shortTitle} Service
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">{service.description}</p>
          </m.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Key Features
            </h2>
            <p className="text-neutral-500 text-lg">What makes our {service.shortTitle.toLowerCase()} stand out</p>
          </m.div>
          <m.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {service.features.map((feature) => (
              <m.div
                key={feature}
                className="glass-card rounded-2xl p-6 flex items-start gap-4"
                variants={fadeInUp}
              >
                <div className="w-10 h-10 rounded-xl bg-accent-50 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <p className="text-neutral-700 font-medium">{feature}</p>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-white/60 text-lg">Step-by-step approach for a seamless experience</p>
          </m.div>
          <m.div
            className="max-w-3xl mx-auto space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {service.process.map((step, index) => (
              <m.div key={step.step} className="flex gap-4 sm:gap-6" variants={fadeInUp}>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {index + 1}
                  </div>
                  {index < service.process.length - 1 && (
                    <div className="w-0.5 h-full bg-white/10 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-heading text-xl font-bold text-white mb-2">{step.step}</h3>
                  <p className="text-white/60 leading-relaxed">{step.description}</p>
                </div>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <m.div
              className="text-center mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                Get a Free {service.shortTitle} Quote
              </h2>
              <p className="text-neutral-500 text-lg">
                Fill the form below and get an instant estimate for your move.
              </p>
            </m.div>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
          </m.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {service.faqs.map((faq, index) => (
              <m.div
                key={faq.question}
                className="glass-card rounded-xl overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-heading font-semibold text-primary pr-4">{faq.question}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-accent shrink-0 transition-transform ${
                      openFaqIndex === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === index && (
                  <div className="px-5 pb-5">
                    <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Other Services
            </h2>
          </m.div>
          <m.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {relatedServices.map((related) => {
              const RelatedIcon = iconMap[related.icon] || Home;
              return (
                <m.div key={related.slug} variants={fadeInUp}>
                  <Link
                    href={`/services/${related.slug}`}
                    className="glass-card rounded-2xl p-6 block hover:shadow-lg transition-shadow group"
                  >
                    <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <RelatedIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-primary mb-2">{related.shortTitle}</h3>
                    <p className="text-neutral-500 text-sm mb-3">{related.shortDescription}</p>
                    <span className="text-accent font-semibold text-sm inline-flex items-center gap-1">
                      View Services <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </m.div>
              );
            })}
          </m.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-accent text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Contact us today for professional {service.shortTitle.toLowerCase()} services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9881343100" className="btn-secondary">
              <Phone className="w-5 h-5" /> Call 9881343100
            </a>
            <a
              href="https://wa.me/919881343100"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              WhatsApp Us <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
