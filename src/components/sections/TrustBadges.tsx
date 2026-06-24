'use client';

import { m } from 'framer-motion';
import {
  Shield,
  BadgeCheck,
  ShieldCheck,
  Headphones,
  Award,
} from 'lucide-react';
import { staggerContainer, staggerItem, VIEWPORT_ONCE } from '@/lib/motion';

const badges = [
  { icon: Shield, label: 'GST Registered' },
  { icon: BadgeCheck, label: 'Verified Business' },
  { icon: ShieldCheck, label: 'Fully Insured' },
  { icon: Headphones, label: '24/7 Support' },
  { icon: Award, label: 'Licensed Operator' },
];

export default function TrustBadges() {
  return (
    <section
      className="border-y border-neutral-100 bg-white relative z-20"
      aria-label="Trust indicators"
    >
      <div className="page-container py-5 sm:py-6">
        <m.ul
          variants={staggerContainer(0.06, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="flex overflow-x-auto md:flex-wrap md:justify-center gap-8 md:gap-10 scrollbar-hide snap-x snap-mandatory"
        >
          {badges.map((badge) => (
            <m.li
              key={badge.label}
              variants={staggerItem}
              className="flex items-center gap-3 shrink-0 snap-center text-sm font-medium text-neutral-600"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <badge.icon size={18} strokeWidth={1.75} aria-hidden />
              </span>
              {badge.label}
            </m.li>
          ))}
        </m.ul>
      </div>
    </section>
  );
}
