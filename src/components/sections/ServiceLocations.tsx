'use client';

import Link from 'next/link';
import { m } from 'framer-motion';
import { MapPin } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { locationItem, staggerContainer, VIEWPORT_ONCE } from '@/lib/motion';

const locations = [
  { name: 'Nagpur', slug: 'nagpur', hasPage: true },
  { name: 'Mumbai', slug: 'mumbai', hasPage: true },
  { name: 'Pune', slug: 'pune', hasPage: true },
  { name: 'Hyderabad', slug: 'hyderabad', hasPage: true },
  { name: 'Bangalore', slug: 'bangalore', hasPage: true },
  { name: 'Chennai', slug: 'chennai', hasPage: false },
  { name: 'Delhi', slug: 'delhi', hasPage: false },
  { name: 'Gurgaon', slug: 'gurgaon', hasPage: false },
  { name: 'Noida', slug: 'noida', hasPage: false },
];

export default function ServiceLocations() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <svg
          viewBox="0 0 600 700"
          className="w-[500px] h-[580px]"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M275 45 L310 30 L345 50 L380 35 L410 55 L430 45 L450 70 L470 60 L485 85 L500 80 L510 105 L495 120 L510 140 L500 165 L480 170 L490 195 L475 215 L485 240 L470 260 L480 285 L465 305 L475 330 L455 350 L465 375 L445 395 L430 380 L415 400 L395 385 L380 405 L365 390 L350 415 L340 440 L350 465 L340 490 L355 515 L340 540 L350 565 L330 580 L310 570 L290 585 L275 570 L260 590 L240 575 L225 595 L210 575 L200 550 L215 530 L200 510 L215 485 L200 465 L190 440 L175 420 L160 435 L145 415 L130 430 L120 405 L105 420 L95 395 L110 375 L95 355 L110 330 L100 305 L115 285 L105 260 L120 240 L110 215 L125 195 L115 170 L135 155 L125 130 L145 115 L140 90 L160 75 L175 90 L195 70 L215 80 L235 60 L255 70 Z" />
        </svg>
      </div>

      <div className="relative z-10 page-container">
        <SectionHeading
          eyebrow="Coverage"
          title="We serve across India"
          subtitle="Professional relocation in major metros — with dedicated teams in our core cities."
        />

        <m.div
          variants={staggerContainer(0.06, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
        >
          {locations.map((loc) => {
            const card = (
              <m.div
                variants={locationItem}
                className="glass-card-premium location-card-hover group flex flex-col items-center rounded-xl p-4 sm:p-6 text-center cursor-pointer border border-transparent min-w-0"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent/15 to-primary-300/15 text-accent transition-[background,color] duration-300 group-hover:from-accent group-hover:to-primary-400 group-hover:text-white">
                  <MapPin size={22} strokeWidth={1.8} />
                </div>
                <h3 className="text-sm font-heading font-bold text-primary mb-1.5">
                  {loc.name}
                </h3>
                <span className="text-[11px] text-accent font-semibold group-hover:underline underline-offset-2">
                  View Services →
                </span>
              </m.div>
            );

            return (
              <Link
                key={loc.slug}
                href={loc.hasPage ? `/packers-movers-${loc.slug}` : '/services'}
                className="block"
              >
                {card}
              </Link>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}
