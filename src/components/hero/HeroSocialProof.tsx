'use client';

import { memo } from 'react';
import { m } from 'framer-motion';
import StarRating from '../ui/StarRating';
import { fadeIn } from '@/lib/motion';

const avatars = [
  { initials: 'RK', color: 'from-blue-500 to-indigo-600' },
  { initials: 'PS', color: 'from-accent to-amber-500' },
  { initials: 'AM', color: 'from-emerald-500 to-teal-600' },
  { initials: 'VN', color: 'from-violet-500 to-purple-600' },
  { initials: 'SK', color: 'from-rose-500 to-pink-500' },
];

export const CustomerAvatarStrip = memo(function CustomerAvatarStrip() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-2.5">
        {avatars.map((a, i) => (
          <div
            key={a.initials}
            className={`relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary bg-gradient-to-br ${a.color} text-[10px] font-bold text-white`}
            style={{ zIndex: avatars.length - i }}
          >
            {a.initials}
          </div>
        ))}
        <div className="relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary bg-primary-700 text-[9px] font-bold text-white">
          +10k
        </div>
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-white leading-snug">10,000+ happy customers</p>
        <p className="text-xs text-neutral-400 mt-0.5">Across 100+ cities in India</p>
      </div>
    </div>
  );
});

export const GoogleReviewBadge = memo(function GoogleReviewBadge({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div
      className={
        compact
          ? 'inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2'
          : 'premium-google-card'
      }
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
      </div>
      <div className={compact ? '' : 'flex-1 min-w-0'}>
        <div className="flex items-center gap-2">
          <span className="text-lg font-heading font-bold text-white">4.9</span>
          <StarRating rating={5} size={14} />
        </div>
        <p className={`${compact ? 'text-[10px]' : 'text-xs'} text-neutral-400`}>
          2,400+ Google reviews
        </p>
      </div>
    </div>
  );
});

export const FormTrustBadge = memo(function FormTrustBadge() {
  return (
    <m.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="flex items-center justify-center gap-2 mb-4"
    >
      <div className="flex -space-x-2">
        {avatars.slice(0, 3).map((a) => (
          <div
            key={a.initials}
            className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary-700 bg-gradient-to-br ${a.color} text-[9px] font-bold text-white`}
          >
            {a.initials}
          </div>
        ))}
      </div>
      <span className="text-xs font-medium text-neutral-300">
        Trusted by <span className="text-accent font-semibold">10,000+</span> customers
      </span>
    </m.div>
  );
});
