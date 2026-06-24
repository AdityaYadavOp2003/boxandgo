'use client';

import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { m } from 'framer-motion';
import {
  Phone,
  Shield,
  BadgeCheck,
  Headphones,
  MapPin,
  ThumbsUp,
  ArrowRight,
  Package,
} from 'lucide-react';
import QuoteForm from '../forms/QuoteForm';
import HeroDecorations from './HeroDecorations';
import HeroStatCard from '../ui/HeroStatCard';
import { PHONE, PHONE_URL } from '@/lib/utils';
import {
  heroEyebrow,
  heroHeadline,
  heroSubheadline,
  heroButtonStagger,
  heroButtonItem,
  heroTrustStagger,
  heroTrustChip,
  heroStatsStagger,
  heroStatItem,
  heroFormEnter,
} from '@/lib/motion';

const HERO_IMAGE = '/boxngo.jpg';

const trustBadges = [
  { icon: BadgeCheck, label: 'GST Verified' },
  { icon: Shield, label: 'Fully Insured' },
  { icon: Headphones, label: '24/7 Support' },
];

const heroStats = [
  { end: 5000, suffix: '+', label: 'Moves Completed', icon: Package },
  { end: 100, suffix: '+', label: 'Cities Served', icon: MapPin },
  { end: 98, suffix: '%', label: 'On-Time Delivery', icon: ThumbsUp },
];

function HeroSection() {
  return (
    <section id="hero" className="hero-section" aria-label="Hero">
      <div className="hero-section__bg" aria-hidden>
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          preload
          quality={75}
          className="hero-section__image"
          sizes="100vw"
        />
        <div className="hero-section__image-overlay" />
        <div className="hero-section__image-vignette" />
      </div>

      <div className="hero-section__decor">
        <HeroDecorations />
      </div>

      <div className="hero-section__body">
        <div className="hero-section__main hero-shell">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,55fr)_minmax(0,45fr)] gap-8 lg:gap-12 xl:gap-16 items-center w-full">
            <div className="hero-section__column hero-section__column--animate flex flex-col justify-center">
              <m.div
                initial="hidden"
                animate="visible"
                variants={heroEyebrow}
                className="mb-6"
              >
                <span className="hero-eyebrow w-fit">
                  <Package size={14} className="text-accent shrink-0" aria-hidden />
                  National Relocation &amp; Logistics
                </span>
              </m.div>

              <m.h1
                initial="hidden"
                animate="visible"
                variants={heroHeadline}
                className="hero-headline-xl font-heading font-bold text-white mb-8 md:mb-10 max-w-[20ch] sm:max-w-none"
              >
                India&apos;s most trusted
                <br />
                <span className="gradient-text">way to relocate.</span>
              </m.h1>

              <m.p
                initial="hidden"
                animate="visible"
                variants={heroSubheadline}
                className="hero-subheadline text-neutral-300 mt-6 mb-10 md:mb-12 max-w-[34rem] leading-relaxed"
              >
                Shifting Made Simple, Box Karo & Go Karo!
              </m.p>

              <m.div
                initial="hidden"
                animate="visible"
                variants={heroButtonStagger}
                className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-12"
              >
                <m.a
                  variants={heroButtonItem}
                  href="#quote"
                  className="btn-primary btn-interactive inline-flex items-center justify-center gap-2"
                >
                  Get Free Quote
                  <ArrowRight size={18} aria-hidden />
                </m.a>
                <m.a
                  variants={heroButtonItem}
                  href={PHONE_URL}
                  className="btn-secondary btn-interactive inline-flex items-center justify-center gap-2"
                >
                  <Phone size={18} aria-hidden />
                  <span className="sm:hidden">Call Now</span>
                  <span className="hidden sm:inline">Call {PHONE}</span>
                  
                </m.a>
              </m.div>

              <m.div
                initial="hidden"
                animate="visible"
                variants={heroTrustStagger}
                className="hero-trust-row mb-10 md:mb-14"
              >
                {trustBadges.map((b) => (
                  <m.span
                    key={b.label}
                    variants={heroTrustChip}
                    className="hero-trust-chip hero-trust-chip-interactive"
                  >
                    <b.icon size={14} className="text-accent shrink-0" aria-hidden />
                    {b.label}
                  </m.span>
                ))}
              </m.div>

              <m.div
                initial="hidden"
                animate="visible"
                variants={heroStatsStagger}
                className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6 lg:mb-0"
              >
                {heroStats.map((stat) => (
                  <m.div key={stat.label} variants={heroStatItem}>
                    <HeroStatCard
                      end={stat.end}
                      suffix={stat.suffix}
                      label={stat.label}
                      icon={stat.icon}
                    />
                  </m.div>
                ))}
              </m.div>

            </div>

            <m.div
              className="hero-section__column min-w-0 w-full flex flex-col justify-center lg:justify-center overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={heroFormEnter}
              id="quote"
            >
              
              <div className="w-full max-w-[420px] mx-auto lg:mx-0 lg:ml-auto mt-6 lg:mt-0">
                <QuoteForm variant="hero" />
              </div>
              <p className="mt-3 text-center lg:text-right text-xs text-neutral-500 max-w-[420px] mx-auto lg:ml-auto lg:mr-0 leading-relaxed">
                Free survey · No hidden fees ·{' '}
                <Link href="/services" className="text-accent hover:underline font-medium">
                  Explore services
                </Link>
              </p>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(HeroSection);
