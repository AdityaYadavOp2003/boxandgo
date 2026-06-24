'use client';

import { memo } from 'react';
import { m } from 'framer-motion';
import { fadeUp, VIEWPORT_ONCE } from '@/lib/motion';

const partners = [
  { name: 'E-Commerce', abbr: 'EC' },
  { name: 'Manufacturing', abbr: 'MF' },
  { name: 'IT & Tech', abbr: 'IT' },
  { name: 'Healthcare', abbr: 'HC' },
  { name: 'Retail', abbr: 'RT' },
  { name: 'Enterprise', abbr: 'EN' },
];

function HeroTrustedLogos() {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      variants={fadeUp}
      className="relative z-10 border-t border-white/[0.08]"
    >
      <div className="hero-shell py-6 lg:py-8">
        <p className="text-center text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 mb-5">
          Trusted by teams across industries
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 lg:gap-12">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-2 opacity-45 hover:opacity-90 transition-opacity duration-200"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[10px] font-bold text-white/55">
                {p.abbr}
              </div>
              <span className="text-sm font-semibold text-white/40 hidden sm:inline">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </m.div>
  );
}

export default memo(HeroTrustedLogos);
