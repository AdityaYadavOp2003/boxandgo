'use client';

import { m } from 'framer-motion';
import {
  Shield,
  Users,
  Heart,
  Lightbulb,
  Award,
  CheckCircle,
  Phone,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'We believe in transparent pricing, honest communication, and keeping every promise we make to our customers.',
  },
  {
    icon: Heart,
    title: 'Customer First',
    description:
      'Every decision we make is guided by what\'s best for our customers. Your satisfaction is our ultimate measure of success.',
  },
  {
    icon: Shield,
    title: 'Safety',
    description:
      'Your belongings are treated with the same care as our own. We use premium packing materials and trained professionals.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We continuously invest in technology, training, and processes to deliver the best moving experience possible.',
  },
];

const team = [
  {
    name: 'Rahul Meshram',
    role: 'Founder & CEO',
    description:
      'Visionary leader with 10+ years in the logistics industry, passionate about transforming the moving experience.',
  },
  {
    name: 'Priya Wankhede',
    role: 'Operations Head',
    description:
      'Expert in supply chain management ensuring every move is executed with precision and efficiency.',
  },
  {
    name: 'Amit Deshmukh',
    role: 'Logistics Manager',
    description:
      'Fleet and route optimization specialist ensuring timely deliveries across India.',
  },
  {
    name: 'Sneha Kulkarni',
    role: 'Customer Relations',
    description:
      'Dedicated to ensuring every customer has a delightful experience from inquiry to delivery.',
  },
];

const certifications = [
  { icon: Award, title: 'GST Registered', description: 'Fully compliant with Indian tax regulations' },
  { icon: CheckCircle, title: 'ISO Standards', description: 'Following international quality standards' },
  { icon: Shield, title: 'Insurance Partner', description: 'Comprehensive transit insurance coverage' },
  { icon: Users, title: 'IBMA Member', description: 'Indian Business Movers Association member' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function AboutPageClient() {
  return (
    <>
      {/* Hero Banner */}
      <section className="gradient-hero text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <m.h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About <span className="gradient-text">Box &amp; Go Movers</span>
          </m.h1>
          <m.p
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Shifting made simple — Your trusted partner for safe and affordable moving across India.
          </m.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Story
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              Founded in the heart of Nagpur, Box &amp; Go Movers began with a simple mission — to
              transform the way India moves. What started as a small local moving team in 2018 has
              grown into a trusted pan-India packers and movers company, serving thousands of families
              and businesses across major cities.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              Our founder, driven by personal frustrating experiences with unreliable movers, set out
              to build a company that prioritizes transparency, safety, and customer satisfaction above
              everything else. Today, Box &amp; Go Movers is synonymous with trust and reliability in the
              Indian moving industry.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              With a fleet of GPS-tracked vehicles, professionally trained staff, and a technology-first
              approach, we have completed over 5,000 successful relocations across India. From Nagpur to
              Mumbai, Pune to Bangalore — we are proud to be India&apos;s growing favorite moving partner.
            </p>
          </m.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">
              Mission &amp; Vision
            </h2>
          </m.div>
          <m.div
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <m.div className="glass-card rounded-2xl p-8 md:p-10" variants={fadeInUp}>
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-neutral-600 leading-relaxed text-lg">
                To make every relocation experience stress-free, safe, and affordable for families
                and businesses across India.
              </p>
            </m.div>
            <m.div className="glass-card rounded-2xl p-8 md:p-10" variants={fadeInUp}>
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-neutral-600 leading-relaxed text-lg">
                To become India&apos;s most trusted and technology-driven moving company, setting new
                standards in the packers and movers industry.
              </p>
            </m.div>
          </m.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Values
            </h2>
            <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at Box &amp; Go Movers.
            </p>
          </m.div>
          <m.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {values.map((value) => (
              <m.div
                key={value.title}
                className="glass-card rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
                variants={fadeInUp}
              >
                <div className="w-14 h-14 rounded-xl bg-accent-50 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-2">{value.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{value.description}</p>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* Team Section
      <section className="section-padding section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              The people behind every successful move.
            </p>
          </m.div>
          <m.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {team.map((member) => (
              <m.div key={member.name} className="glass rounded-2xl p-6 text-center" variants={fadeInUp}>
                <div className="w-20 h-20 rounded-full gradient-accent flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-accent-400 font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-white/60 text-sm leading-relaxed">{member.description}</p>
              </m.div>
            ))}
          </m.div>
        </div>
      </section> */}

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
              Certifications &amp; Compliance
            </h2>
          </m.div>
          <m.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {certifications.map((cert) => (
              <m.div
                key={cert.title}
                className="glass-card rounded-2xl p-6 text-center"
                variants={fadeInUp}
              >
                <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-1">{cert.title}</h3>
                <p className="text-neutral-500 text-sm">{cert.description}</p>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-accent text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready to experience the Box &amp; Go difference?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Get a free quote today and discover why thousands trust us with their moves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:9881343100" className="btn-secondary">
                <Phone className="w-5 h-5" /> Call 9881343100
              </a>
            </div>
          </m.div>
        </div>
      </section>
    </>
  );
}
