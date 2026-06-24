'use client';

import { m } from 'framer-motion';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import {
  PHONE,
  PHONE_URL,
  EMAIL,
  EMAIL_URL,
  WHATSAPP_URL,
} from '@/lib/utils';

const contactMethods = [
  {
    icon: Phone,
    label: 'Phone',
    value: `+91 ${PHONE}`,
    href: PHONE_URL,
    description: 'Speak with a relocation expert',
  },
  {
    icon: Mail,
    label: 'Email',
    value: EMAIL,
    href: EMAIL_URL,
    description: 'We reply within 2 business hours',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us',
    href: WHATSAPP_URL,
    description: 'Quick quotes & live updates',
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section-padding bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="page-container">
        <SectionHeading
          eyebrow="Get in touch"
          title="Start your move today"
          subtitle="Reach our team directly — we're here to help plan every detail of your relocation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <m.a
              key={method.label}
              href={method.href}
              target={method.label === 'WhatsApp' ? '_blank' : undefined}
              rel={method.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col items-center text-center rounded-2xl border border-neutral-100 bg-neutral-50/80 p-6 transition-all hover:border-accent/30 hover:bg-white hover:shadow-md group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors mb-4">
                <method.icon size={22} aria-hidden />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                {method.label}
              </p>
              <p className="text-sm sm:text-base font-semibold text-primary mt-1 break-all">
                {method.value}
              </p>
              <p className="text-sm text-neutral-500 mt-1">
                {method.description}
              </p>
            </m.a>
          ))}
        </div>
      </div>
    </section>
  );
}
