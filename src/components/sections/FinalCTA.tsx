'use client';

import { memo } from 'react';
import { m } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { PHONE_URL, WHATSAPP_URL } from '@/lib/utils';
import { fadeUp, VIEWPORT_ONCE } from '@/lib/motion';

function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-20 bg-gradient-to-br from-primary via-primary-800 to-primary-900"
      aria-label="Call to action"
    >
      <div className="relative z-10 page-container max-w-4xl text-center">
        <m.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">
            Ready when you are
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 sm:mb-5 leading-tight break-words">
            Your next chapter starts with one conversation
          </h2>
          <p className="text-lg text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get a free, no-obligation quote from India&apos;s trusted relocation
            specialists. Transparent pricing. Licensed crews. Real support.
          </p>

          <div className="flex flex-col w-full max-w-sm sm:max-w-none mx-auto sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <a
              href="#quote"
              className="btn-primary btn-interactive btn-block sm:!w-auto inline-flex items-center justify-center gap-2"
            >
              Get Free Quote
              <ArrowRight size={18} aria-hidden />
            </a>
            <a
              href={PHONE_URL}
              className="btn-secondary btn-interactive btn-block sm:!w-auto justify-center"
            >
              <Phone size={18} aria-hidden />
              Call Now
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-interactive btn-block sm:!w-auto inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-[0.9375rem] text-white bg-[#25D366]"
            >
              <MessageCircle size={18} aria-hidden />
              WhatsApp
            </a>
          </div>
        </m.div>
      </div>
    </section>
  );
}

export default memo(FinalCTA);
