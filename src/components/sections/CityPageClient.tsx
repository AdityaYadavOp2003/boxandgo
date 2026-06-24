'use client';

import { useState } from 'react';
import { m } from 'framer-motion';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  MessageCircle,
  CheckCircle,
  Shield,
  Clock,
  Truck,
  BadgeCheck,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Home,
  Building2,
  Bike,
  Warehouse,
  Package,
  Loader2,
} from 'lucide-react';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';
import type { City } from '@/data/cities';
import { SUCCESS_MESSAGE } from '@/lib/quote/types';
import { mapMoveTypeLabel, submitQuoteRequest } from '@/lib/quote/client';

const iconMap: Record<string, React.ElementType> = {
  Home,
  Building2,
  MapPin,
  Truck,
  Bike,
  Warehouse,
  Package,
};

interface CityPageClientProps {
  city: City;
}

export default function CityPageClient({ city }: CityPageClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    fromCity: city.name,
    toCity: '',
    date: '',
    moveType: '',
    notes: '',
    website: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formStartedAt] = useState(() => Date.now());

  const cityTestimonials = testimonials.filter(
    (t) => t.city.toLowerCase() === city.name.toLowerCase()
  );

  const cityFaqs = [
    {
      question: `How much do packers and movers cost in ${city.name}?`,
      answer: `The cost of packers and movers in ${city.name} depends on the volume of goods, distance, and type of service. Local shifting within ${city.name} typically starts from ₹3,000-₹8,000 for a 1BHK, ₹6,000-₹15,000 for a 2BHK, and ₹10,000-₹25,000 for a 3BHK. Contact us for a free, customized quote.`,
    },
    {
      question: `Which areas in ${city.name} do you serve?`,
      answer: `We provide packers and movers services across all areas of ${city.name} including ${city.areas.join(', ')}, and surrounding regions. Our team has extensive knowledge of local routes and logistics in ${city.name}.`,
    },
    {
      question: `How do I book movers in ${city.name}?`,
      answer: `Booking is simple! Call us at 9881343100, WhatsApp us, or fill out the quote form on this page. We'll schedule a free survey, provide a transparent quote, and handle everything from packing to delivery.`,
    },
    {
      question: `Do you provide insurance for moves in ${city.name}?`,
      answer: `Yes, all our moving services in ${city.name} include transit insurance coverage. We offer comprehensive protection for your belongings during packing, loading, transportation, and unloading.`,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await submitQuoteRequest({
      name: formData.name,
      phone: formData.phone,
      pickupLocation: formData.fromCity,
      deliveryLocation: formData.toCity,
      movingDate: formData.date,
      serviceType: mapMoveTypeLabel(formData.moveType),
      notes: formData.notes || undefined,
      source: `City Page - ${city.name}`,
      website: formData.website,
      formStartedAt,
    });

    setLoading(false);

    if (!result.success) {
      setError(result.error || 'Something went wrong. Please try again.');
      return;
    }

    setSubmitted(true);
  };

  const whyChoosePoints = [
    { icon: MapPin, title: `Local ${city.name} Expertise`, desc: `Deep knowledge of ${city.name}'s neighborhoods, routes, and logistics.` },
    { icon: Shield, title: 'Fully Insured Moves', desc: 'Comprehensive transit insurance for complete peace of mind.' },
    { icon: Clock, title: 'On-Time Guarantee', desc: 'We respect your time with punctual pickups and deliveries.' },
    { icon: BadgeCheck, title: 'Professional Service', desc: `Experienced crews serving families and businesses across ${city.name}.` },
  ];

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 text-accent-300 mb-4">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-medium">{city.state}, India</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
              Packers and Movers in {city.name}
            </h1>
            <p className="text-lg text-neutral-300 mb-8">
              {city.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:9881343100" className="btn-primary">
                <Phone className="w-4 h-4" /> Call: 9881343100
              </a>
              <a
                href="https://wa.me/919881343100?text=Hi%20Box%20%26%20Go%20Movers%2C%20I%20need%20movers%20in%20{{city.name}}"
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </m.div>
        </div>
      </section>

      {/* Services in City */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="w-12 h-1 bg-accent mx-auto mb-4 rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-3">
              Our Services in {city.name}
            </h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              Complete range of professional moving services available in {city.name} and surrounding areas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Package;
              return (
                <m.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="glass-card rounded-xl p-6 block group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-bold text-primary group-hover:text-accent transition-colors mb-2">
                      {service.shortTitle}
                    </h3>
                    <p className="text-sm text-neutral-500 line-clamp-2">
                      {service.shortDescription}
                    </p>
                  </Link>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-heading text-primary mb-3">
              Areas We Serve in {city.name}
            </h2>
            <p className="text-neutral-500">
              Door-to-door service available across all major localities.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {city.areas.map((area) => (
              <m.span
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white rounded-full border border-neutral-200 text-sm font-medium text-primary hover:border-accent hover:text-accent hover:bg-accent/5 transition-all cursor-default"
              >
                <MapPin className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
                {area}
              </m.span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-primary mb-3">
              Why Choose Us in {city.name}?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoosePoints.map((point, i) => (
              <m.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <point.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-2">{point.title}</h3>
                <p className="text-sm text-neutral-500">{point.desc}</p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials from City */}
      {cityTestimonials.length > 0 && (
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold font-heading text-primary mb-3">
                What {city.name} Customers Say
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {cityTestimonials.map((testimonial) => (
                <m.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl p-6"
                >
                  <p className="text-neutral-600 mb-4 italic">
                    &ldquo;{testimonial.review}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-neutral-400">
                      {testimonial.city} • {testimonial.service}
                    </p>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quote Form */}
      <section className="section-padding gradient-primary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-heading mb-3">
              Get a Free Quote in {city.name}
            </h2>
            <p className="text-neutral-300">
              Fill in your details and get an instant, no-obligation moving estimate.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 md:p-8">
            {submitted ? (
              <m.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-neutral-300">
                  {SUCCESS_MESSAGE}
                </p>
              </m.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                  className="absolute opacity-0 pointer-events-none h-0 w-0 overflow-hidden"
                />
                {error && (
                  <div className="rounded-xl border border-red-300/40 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    className="form-input bg-white/10 border-white/20 text-white placeholder:text-neutral-400"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    className="form-input bg-white/10 border-white/20 text-white placeholder:text-neutral-400"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    required
                    placeholder="Moving From"
                    className="form-input bg-white/10 border-white/20 text-white placeholder:text-neutral-400"
                    value={formData.fromCity}
                    onChange={(e) => setFormData({ ...formData, fromCity: e.target.value })}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Moving To"
                    className="form-input bg-white/10 border-white/20 text-white placeholder:text-neutral-400"
                    value={formData.toCity}
                    onChange={(e) => setFormData({ ...formData, toCity: e.target.value })}
                  />
                </div>
                <input
                  type="date"
                  required
                  className="form-input bg-white/10 border-white/20 text-white"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
                <select
                  required
                  className="form-select bg-white/10 border-white/20 text-white"
                  value={formData.moveType}
                  onChange={(e) => setFormData({ ...formData, moveType: e.target.value })}
                >
                  <option value="" className="text-neutral-800">Type of Move</option>
                  <option value="household" className="text-neutral-800">Household Shifting</option>
                  <option value="office" className="text-neutral-800">Office Relocation</option>
                  <option value="bike" className="text-neutral-800">Bike Transportation</option>
                  <option value="storage" className="text-neutral-800">Warehousing</option>
                </select>
                <textarea
                  placeholder="Additional notes (optional)"
                  rows={2}
                  className="form-input bg-white/10 border-white/20 text-white placeholder:text-neutral-400 resize-none"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
                <button type="submit" disabled={loading} className="btn-primary w-full text-lg py-4 flex items-center justify-center gap-2">
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Truck className="w-5 h-5" />}
                  Get Free Quote
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-heading text-primary mb-3">
              FAQs — Movers in {city.name}
            </h2>
          </div>
          <div className="space-y-3">
            {cityFaqs.map((faq, i) => (
              <div
                key={i}
                className="glass-card rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-primary pr-4">{faq.question}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <m.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="px-5 pb-5"
                  >
                    <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
                  </m.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold font-heading text-primary mb-4">
            Ready to Move in {city.name}?
          </h2>
          <p className="text-neutral-500 text-lg mb-8">
            Get your free estimate today. Our {city.name} team is just a call away.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:9881343100" className="btn-primary">
              <Phone className="w-4 h-4" /> Call 9881343100
            </a>
            <Link href="/contact" className="btn-outline">
              <ArrowRight className="w-4 h-4" /> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
