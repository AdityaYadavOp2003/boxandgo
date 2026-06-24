import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Box & Go Movers — India\'s trusted packers and movers. Founded in Nagpur, we provide safe, affordable, and professional moving services pan-India. Meet our team, values, and mission.',
  openGraph: {
    title: 'About Us | Box & Go Movers',
    description:
      'Learn about Box & Go Movers — India\'s trusted packers and movers company with pan-India operations.',
    url: 'https://boxandgomovers.in/about',
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
