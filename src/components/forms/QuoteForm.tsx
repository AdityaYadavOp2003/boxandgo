'use client';

import { useState, type FormEvent } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Clock,
  Lock,
  CheckCircle,
  ArrowRight,
  Loader2,
  Zap,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { QUOTE_SERVICE_TYPES, SUCCESS_MESSAGE } from '@/lib/quote/types';
import { mapMoveTypeLabel, submitQuoteRequest } from '@/lib/quote/client';

const moveTypes = [...QUOTE_SERVICE_TYPES];

const trustBadges = [
  { icon: Shield, label: 'Free Estimate' },
  { icon: Clock, label: 'No Obligation' },
  { icon: Lock, label: '100% Secure' },
];

const stepLabels = ['Details', 'Move Info', 'Confirm'];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 12 : -12,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({
    x: dir > 0 ? -12 : 12,
    opacity: 0,
  }),
};

const confettiColors = [
  '#3D6098',
  '#5A7FB5',
  '#8AADD4',
  '#243B6A',
  '#25D366',
  '#0A1628',
];

function ConfettiParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={i}
          className="absolute block rounded-sm"
          style={{
            width: 6 + (i % 5),
            height: 6 + (i % 4),
            left: `${5 + (i * 7) % 90}%`,
            top: -10,
            backgroundColor: confettiColors[i % confettiColors.length],
            animation: `confetti-fall ${1.5 + (i % 3) * 0.5}s ease-out ${(i % 5) * 0.15}s forwards`,
          }}
        />
      ))}
    </div>
  );
}

function FloatingInput({
  label,
  name,
  type = 'text',
  required = false,
  value,
  onChange,
  pattern,
  title,
  hero = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pattern?: string;
  title?: string;
  hero?: boolean;
}) {
  return (
    <div className={cn('relative', hero && 'hero-input-wrap')}>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        pattern={pattern}
        title={title}
        placeholder=" "
        className={cn(
          'form-input peer w-full',
          hero && 'form-input-hero'
        )}
      />
      <label
        className={cn(
          'absolute left-4 top-3.5 text-sm transition-all duration-200 pointer-events-none',
          'peer-focus:top-2 peer-focus:text-xs',
          'peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs',
          hero
            ? 'form-hero-label peer-focus:form-hero-label-active peer-[:not(:placeholder-shown)]:form-hero-label-active'
            : 'text-neutral-400 peer-focus:text-accent peer-[:not(:placeholder-shown)]:text-accent'
        )}
      >
        {label}
      </label>
    </div>
  );
}

interface QuoteFormProps {
  variant?: 'default' | 'hero';
}

export default function QuoteForm({ variant = 'default' }: QuoteFormProps) {
  const isHero = variant === 'hero';
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formStartedAt] = useState(() => Date.now());

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    fromCity: '',
    toCity: '',
    date: '',
    moveType: '',
    notes: '',
    website: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const next = () => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, 2));
  };
  const back = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 0));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await submitQuoteRequest({
      name: form.name,
      phone: form.phone,
      email: form.email || undefined,
      pickupLocation: form.fromCity,
      deliveryLocation: form.toCity,
      movingDate: form.date,
      serviceType: mapMoveTypeLabel(form.moveType),
      notes: form.notes || undefined,
      source: 'Website',
      website: form.website,
      formStartedAt,
    });

    setLoading(false);

    if (!result.success) {
      setError(result.error || 'Something went wrong. Please try again.');
      return;
    }

    setSubmitted(true);
  };

  const progress = ((step + 1) / stepLabels.length) * 100;

  const wrapperClass = isHero
    ? 'form-hero-glow relative w-full min-w-0'
    : 'gradient-border-animated w-full min-w-0';

  const cardClass = isHero
    ? 'form-hero-inner relative z-[1]'
    : 'glass-card-premium rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 min-w-0';

  if (submitted) {
    return (
      <div className={wrapperClass}>
        <m.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={cn(
            cardClass,
            'p-8 text-center relative overflow-hidden'
          )}
        >
          <ConfettiParticles />
          <m.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
            className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100"
          >
            <CheckCircle size={36} className="text-green-600" />
          </m.div>
          <h3 className="text-lg font-heading font-bold text-primary mb-2">
            Quote Request Received!
          </h3>
          <p className="text-neutral-500 text-sm">
            {SUCCESS_MESSAGE}
          </p>
        </m.div>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <div className={cardClass}>
        <div className={cn('mb-6', isHero && 'mb-5')}>
          <h3
            className={cn(
              'font-heading font-bold',
              isHero ? 'text-lg text-white mb-1' : 'text-xl text-primary mb-1'
            )}
          >
            Get Free Quote
          </h3>
          <p
            className={cn(
              'flex items-center gap-2 font-medium',
              isHero ? 'text-xs text-accent-300' : 'text-sm text-accent'
            )}
          >
            <Zap size={14} aria-hidden />
            Estimate in 30 seconds
          </p>
        </div>

        <div className="mb-6">
          <div
            className={cn(
              'flex justify-between text-[10px] font-semibold uppercase tracking-wider mb-2',
              isHero ? 'text-neutral-400' : 'text-neutral-400'
            )}
          >
            <span>Step {step + 1} of {stepLabels.length}</span>
            <span>{stepLabels[step]}</span>
          </div>
          <div
            className={cn(
              'h-1.5 rounded-full overflow-hidden',
              isHero ? 'form-hero-progress-track' : 'bg-neutral-100'
            )}
          >
            <m.div
              className="h-full w-full origin-left rounded-full bg-gradient-to-r from-accent to-primary-300"
              initial={false}
              animate={{ scaleX: progress / 100 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'left center' }}
            />
          </div>
        </div>

        {/* Step dots */}
        <div className="flex items-center justify-between mb-6 gap-3">
          {stepLabels.map((label, i) => (
            <div
              key={label}
              className={cn(
                'flex flex-col items-center flex-1 min-w-0',
                i <= step ? 'opacity-100' : 'opacity-45'
              )}
            >
              <div
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-bold transition-colors duration-200',
                  i < step
                    ? 'bg-green-500 text-white'
                    : i === step
                      ? 'bg-accent text-white'
                      : isHero
                        ? 'form-hero-step-idle'
                        : 'bg-neutral-100 text-neutral-400'
                )}
              >
                {i < step ? <CheckCircle size={14} /> : i + 1}
              </div>
              <span
                className={cn(
                  'text-[9px] font-medium mt-1.5 truncate w-full text-center hidden sm:block',
                  isHero ? 'text-neutral-500' : 'text-neutral-500'
                )}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden
            className="absolute opacity-0 pointer-events-none h-0 w-0 overflow-hidden"
          />
          {error && (
            <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}
          <AnimatePresence mode="wait" custom={direction}>
            {step === 0 && (
              <m.div
                key="step-0"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4"
              >
                <FloatingInput
                  label="Full Name *"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  hero={isHero}
                />
                <FloatingInput
                  label="Phone Number *"
                  name="phone"
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  title="Enter a 10-digit phone number"
                  value={form.phone}
                  onChange={handleChange}
                  hero={isHero}
                />
                <FloatingInput
                  label="Email (optional)"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  hero={isHero}
                />
                <button
                  type="button"
                  onClick={next}
                  className="btn-primary !w-full !py-3 flex items-center justify-center gap-2 mt-1"
                >
                  Continue
                  <ArrowRight size={16} />
                </button>
              </m.div>
            )}

            {step === 1 && (
              <m.div
                key="step-1"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 gap-3">
                  <FloatingInput
                    label="Moving From *"
                    name="fromCity"
                    required
                    value={form.fromCity}
                    onChange={handleChange}
                    hero={isHero}
                  />
                  <FloatingInput
                    label="Moving To *"
                    name="toCity"
                    required
                    value={form.toCity}
                    onChange={handleChange}
                    hero={isHero}
                  />
                </div>
                <input
                  type="date"
                  name="date"
                  required
                  value={form.date}
                  onChange={handleChange}
                  className={cn('form-input w-full', isHero && 'form-input-hero')}
                />
                <select
                  name="moveType"
                  required
                  value={form.moveType}
                  onChange={handleChange}
                  className={cn('form-select w-full', isHero && 'form-input-hero')}
                >
                  <option value="" disabled>
                    Type of Move *
                  </option>
                  {moveTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <div className="flex gap-2.5 pt-1">
                  <button
                    type="button"
                    onClick={back}
                    className="btn-secondary btn-secondary-light flex-1 !py-2.5 !text-sm"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="btn-primary flex-1 !py-2.5 flex items-center justify-center gap-2 !text-sm"
                  >
                    Next
                    <ArrowRight size={16} />
                  </button>
                </div>
              </m.div>
            )}

            {step === 2 && (
              <m.div
                key="step-2"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4"
              >
                <div
                  className={cn(
                    'rounded-xl border p-4 text-xs space-y-1.5',
                    isHero
                      ? 'bg-white/5 border-white/10 text-neutral-300'
                      : 'bg-neutral-50 border-neutral-100'
                  )}
                >
                  <p
                    className={cn(
                      'font-semibold uppercase tracking-wider mb-2 text-[10px]',
                      isHero ? 'text-white/80' : 'text-primary'
                    )}
                  >
                    Summary
                  </p>
                  <p>
                    <span className="text-neutral-500">Name:</span>{' '}
                    <span className="font-medium">{form.name || '—'}</span>
                  </p>
                  <p>
                    <span className="text-neutral-500">Route:</span>{' '}
                    <span className="font-medium">
                      {form.fromCity || '—'} → {form.toCity || '—'}
                    </span>
                  </p>
                </div>
                <textarea
                  name="notes"
                  placeholder="Notes (optional)"
                  rows={2}
                  value={form.notes}
                  onChange={handleChange}
                  className={cn(
                    'form-input resize-none w-full',
                    isHero && 'form-input-hero'
                  )}
                />
                <div className="flex gap-2.5">
                  <button
                    type="button"
                    onClick={back}
                    className="btn-secondary btn-secondary-light flex-1 !py-2.5 !text-sm"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary flex-1 !py-2.5 flex items-center justify-center gap-2 !text-sm"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      'Get Quote'
                    )}
                  </button>
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </form>

        <div
          className={cn(
            'mt-6 flex flex-wrap items-center justify-center gap-4 border-t pt-4',
            isHero ? 'form-hero-trust-footer' : 'border-neutral-100'
          )}
        >
          {trustBadges.map((badge) => (
            <span
              key={badge.label}
              className={cn(
                'flex items-center gap-1.5 text-[10px] font-medium',
                isHero ? 'text-neutral-400' : 'text-neutral-500'
              )}
            >
              <badge.icon size={12} className="text-accent" aria-hidden />
              {badge.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
