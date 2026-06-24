'use client';

import { useRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  label: string;
  icon?: LucideIcon;
  compact?: boolean;
  className?: string;
  light?: boolean;
}

export default function AnimatedCounter({
  end,
  suffix = '',
  label,
  icon: Icon,
  compact = false,
  className,
  light = false,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const value = isInView ? (
    <CountUp end={end} duration={2.5} suffix={suffix} />
  ) : (
    <span>0{suffix}</span>
  );

  if (compact) {
    return (
      <span ref={ref} className={cn('inline tabular-nums', className)}>
        {value}
      </span>
    );
  }

  return (
    <div
      ref={ref}
      className={cn('flex flex-col items-center text-center min-w-0 px-1', className)}
    >
      {Icon && (
        <div className="mb-2 sm:mb-3 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/10">
          <Icon size={22} className="text-accent sm:w-7 sm:h-7" aria-hidden />
        </div>
      )}
      <div
        className={cn(
          'text-2xl sm:text-4xl md:text-5xl font-bold font-heading tabular-nums',
          light ? 'text-white' : 'gradient-text'
        )}
      >
        {value}
      </div>
      {label ? (
        <p
          className={cn(
            'mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base leading-snug max-w-[9rem] sm:max-w-none',
            light ? 'text-neutral-300' : 'text-neutral-500'
          )}
        >
          {label}
        </p>
      ) : null}
    </div>
  );
}
