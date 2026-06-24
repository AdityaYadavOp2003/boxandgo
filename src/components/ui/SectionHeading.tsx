'use client';

import { memo } from 'react';
import { m } from 'framer-motion';
import { fadeUp, VIEWPORT_ONCE } from '@/lib/motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  centered?: boolean;
  light?: boolean;
}

function SectionHeading({
  title,
  subtitle,
  eyebrow,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <m.header
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      className={`mb-8 sm:mb-10 md:mb-12 min-w-0 ${centered ? 'text-center' : 'text-left'}`}
    >
      {eyebrow && (
        <p
          className={`text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-2 sm:mb-3 ${
            centered ? 'mx-auto' : ''
          } text-accent`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold leading-tight tracking-tight break-words ${
          light ? 'text-white' : 'text-primary'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed break-words ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-neutral-300' : 'text-neutral-500'}`}
        >
          {subtitle}
        </p>
      )}
    </m.header>
  );
}

export default memo(SectionHeading);
