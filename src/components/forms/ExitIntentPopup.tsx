'use client';

import { useState, useEffect, type FormEvent } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import { SUCCESS_MESSAGE } from '@/lib/quote/types';
import { mapMoveTypeLabel, submitQuoteRequest } from '@/lib/quote/client';

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formStartedAt] = useState(() => Date.now());
  const [form, setForm] = useState({
    name: '',
    phone: '',
    fromCity: '',
    toCity: '',
    website: '',
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const alreadyShown = sessionStorage.getItem('exitPopupShown');
    if (alreadyShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true);
        sessionStorage.setItem('exitPopupShown', 'true');
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };

    // Delay adding listener so it doesn't fire immediately
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await submitQuoteRequest({
      name: form.name,
      phone: form.phone,
      pickupLocation: form.fromCity,
      deliveryLocation: form.toCity,
      movingDate: new Date().toISOString().slice(0, 10),
      serviceType: mapMoveTypeLabel('Other'),
      source: 'Exit Intent Popup',
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

  return (
    <AnimatePresence>
      {show && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/65"
          onClick={() => setShow(false)}
        >
          <m.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 250 }}
            className="relative w-full max-w-md rounded-2xl bg-white p-6 md:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle size={28} className="text-green-600" />
                </div>
                <h3 className="text-lg font-heading font-bold text-primary mb-2">
                  Thank You!
                </h3>
                <p className="text-sm text-neutral-500">
                  {SUCCESS_MESSAGE}
                </p>
                <button
                  onClick={() => setShow(false)}
                  className="btn-primary mt-4 !py-2.5 !text-sm"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                {/* Orange accent bar */}
                <div className="absolute top-0 left-6 right-6 h-1 rounded-b-full bg-accent" />

                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary mb-1 mt-2">
                  Wait! Get Your Free Moving Quote
                </h3>
                <p className="text-sm text-neutral-500 mb-6">
                  Don&apos;t leave without getting your free estimate. It takes just
                  30 seconds!
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
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
                    <p className="text-sm text-red-600">{error}</p>
                  )}
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    required
                    pattern="[0-9]{10}"
                    title="Enter a 10-digit phone number"
                    value={form.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      name="fromCity"
                      placeholder="From City *"
                      required
                      value={form.fromCity}
                      onChange={handleChange}
                      className="form-input"
                    />
                    <input
                      type="text"
                      name="toCity"
                      placeholder="To City *"
                      required
                      value={form.toCity}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <button type="submit" disabled={loading} className="btn-primary !w-full flex items-center justify-center gap-2">
                    {loading ? <Loader2 size={16} className="animate-spin" /> : null}
                    Get Free Quote Now
                  </button>
                </form>
              </>
            )}
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
