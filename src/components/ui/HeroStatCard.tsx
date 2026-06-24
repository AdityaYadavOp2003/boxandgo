'use client';

import { memo, useRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';

interface HeroStatCardProps {
  end: number;
  suffix?: string;
  label: string;
  icon: LucideIcon;
}

function HeroStatCard({
  end,
  suffix = '',
  label,
  icon: Icon,
}: HeroStatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div
      ref={ref}
      className="premium-metric-card premium-metric-card-interactive"
    >
      <div className="premium-metric-card__inner">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
          <Icon size={20} strokeWidth={1.75} aria-hidden />
        </div>
        <div className="min-w-0">
          <p className="text-xl sm:text-2xl font-heading font-bold text-white tabular-nums leading-none">
            {isInView ? (
              <CountUp end={end} duration={1.6} suffix={suffix} />
            ) : (
              <span>0{suffix}</span>
            )}
          </p>
          <p className="mt-1.5 text-[11px] sm:text-xs font-medium text-neutral-400 leading-snug">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(HeroStatCard);
