'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import SectionHeading from '../ui/SectionHeading';

import 'swiper/css';
import 'swiper/css/pagination';

const avatarGradients = [
  'from-blue-500 to-indigo-600',
  'from-accent to-primary-400',
  'from-emerald-500 to-teal-600',
  'from-violet-500 to-purple-600',
  'from-rose-500 to-pink-500',
  'from-cyan-500 to-blue-500',
  'from-primary-400 to-primary-600',
  'from-primary-500 to-primary-700',
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding bg-neutral-50 relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="relative z-10 page-container">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our customers say"
          subtitle="Real feedback from customers who chose Box & Go for their relocation."
        />

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          speed={600}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 },
            1100: { slidesPerView: 3, spaceBetween: 24 },
          }}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          className="testimonial-swiper !pb-14"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={t.id}>
              <article className="h-full flex flex-col rounded-2xl border border-neutral-100 bg-white p-6 md:p-7 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-md">
                <Quote
                  size={32}
                  className="text-accent/25 mb-4 shrink-0"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <p className="text-sm text-neutral-600 leading-relaxed flex-1 my-4">
                  &ldquo;{t.review}&rdquo;
                </p>
                <footer className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                  <div
                    className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${avatarGradients[i % avatarGradients.length]} shadow-md overflow-hidden`}
                  >
                    <span className="text-white font-heading font-bold text-lg">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-primary truncate">
                      {t.name}
                    </p>
                    <p className="text-xs text-neutral-400">{t.city}</p>
                  </div>
                  <span className="hidden sm:inline-flex rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-semibold text-accent whitespace-nowrap">
                    {t.service}
                  </span>
                </footer>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
