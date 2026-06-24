'use client';

import { useState } from 'react';
import { m } from 'framer-motion';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  Shield,
  CheckCircle,
  Headphones,
  Loader2,
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '9881343100',
    href: 'tel:9881343100',
    color: 'bg-accent/10 text-accent',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '9881343100',
    href: 'https://wa.me/919881343100?text=Hi%20Box%20%26%20Go%20Movers%2C%20I%20need%20a%20quote%20for%20moving%20services.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'boxandgomovers@gmail.com',
    href: 'mailto:boxandgomovers@gmail.com',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Near Bandhan Celebration, Wathoda Nagpur - 440035',
    href: 'https://maps.google.com/?q=Wathoda+Nagpur+440035',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon - Sun: 8:00 AM - 10:00 PM',
    href: null,
    color: 'bg-accent/10 text-accent',
  },
];

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [website, setWebsite] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, website }),
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        setLoading(false);
        return;
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError('Network error. Please try again or call 9881343100.');
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4"
          >
            Get In Touch
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto"
          >
            Have questions about your move? We&apos;re here to help 24/7.
            Reach out and let&apos;s plan your perfect relocation.
          </m.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Contact Form */}
            <m.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-bold font-heading text-primary mb-2">
                  Send Us a Message
                </h2>
                <p className="text-neutral-500 mb-6">
                  Fill out the form below and we&apos;ll get back to you within 30 minutes.
                </p>

                {submitted && (
                  <m.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-green-800 font-medium">
                      Thank you! We&apos;ll contact you shortly.
                    </p>
                  </m.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="text"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden
                    className="absolute opacity-0 pointer-events-none h-0 w-0 overflow-hidden"
                  />
                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
                      {error}
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Your phone number"
                        className="form-input"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
                      Subject *
                    </label>
                    <select
                      required
                      className="form-select"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="">Select a subject</option>
                      <option value="quote">Get a Moving Quote</option>
                      <option value="household">Household Shifting Inquiry</option>
                      <option value="office">Office Relocation Inquiry</option>
                      <option value="bike">Bike Transportation</option>
                      <option value="storage">Warehousing & Storage</option>
                      <option value="complaint">Complaint / Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your moving requirements..."
                      className="form-input resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" disabled={loading} className="btn-primary w-full md:w-auto flex items-center justify-center gap-2">
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    Send Message
                  </button>
                </form>

                {/* Trust badges */}
                <div className="mt-6 flex flex-wrap items-center gap-4 pt-6 border-t border-neutral-100">
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span>100% Secure</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <Headphones className="w-4 h-4 text-accent" />
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Quick Response</span>
                  </div>
                </div>
              </div>
            </m.div>

            {/* Contact Info */}
            <m.div
              className="lg:col-span-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <m.div key={item.label} variants={itemVariants}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="glass-card rounded-xl p-5 flex items-start gap-4 hover:shadow-lg transition-all duration-300 group block"
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-neutral-500 mb-0.5">{item.label}</p>
                          <p className="font-semibold text-primary group-hover:text-accent transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="glass-card rounded-xl p-5 flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-neutral-500 mb-0.5">{item.label}</p>
                          <p className="font-semibold text-primary">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </m.div>
                ))}
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-neutral-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5!2d79.088!3d21.145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA4JzQyLjAiTiA3OcKwMDUnMTcuNSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Box & Go Movers Location - Wathoda, Nagpur"
            />
          </div>
        </div>
      </section>
    </>
  );
}
