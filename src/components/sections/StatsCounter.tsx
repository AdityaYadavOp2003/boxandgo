'use client';

import { memo } from 'react';
import { Truck, MapPin, ThumbsUp, Calendar } from 'lucide-react';
import AnimatedCounter from '../ui/AnimatedCounter';
import SectionHeading from '../ui/SectionHeading';

const stats = [
  { end: 5000, suffix: '+', label: 'Moves Completed', icon: Truck },
  { end: 100, suffix: '+', label: 'Cities Served', icon: MapPin },
  { end: 98, suffix: '%', label: 'Customer Satisfaction', icon: ThumbsUp },
  { end: 12, suffix: '+', label: 'Years of Experience', icon: Calendar },
];

function StatsCounter() {
  return (
    <section
      className="section-padding relative overflow-hidden bg-gradient-to-br from-primary via-primary-800 to-primary-900"
      aria-label="Company statistics"
    >
      <div className="relative z-10 page-container">
        <SectionHeading
          eyebrow="Our track record"
          title="Numbers that reflect real relocations"
          subtitle="Thousands of families and businesses trust Box & Go for moves across India."
          light
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-8 md:gap-10">
          {stats.map((stat) => (
            <div key={stat.label} className="min-w-0">
              <AnimatedCounter
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
                icon={stat.icon}
                light
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(StatsCounter);
