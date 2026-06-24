'use client';

import { memo } from 'react';
import { m } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeUp, VIEWPORT_ONCE } from '@/lib/motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  return (
    <m.div
      className={cn(className)}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      transition={{ delay }}
    >
      {children}
    </m.div>
  );
}

export default memo(ScrollReveal);
