import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';

const TrustBadges = dynamic(() => import('@/components/sections/TrustBadges'));
const WhyChooseUs = dynamic(() => import('@/components/sections/WhyChooseUs'));
const ServicesGrid = dynamic(() => import('@/components/sections/ServicesGrid'));
const MovingTimeline = dynamic(() => import('@/components/sections/MovingTimeline'));
const StatsCounter = dynamic(() => import('@/components/sections/StatsCounter'));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'));
const ServiceLocations = dynamic(() => import('@/components/sections/ServiceLocations'));
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'));
const FinalCTA = dynamic(() => import('@/components/sections/FinalCTA'));

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="section-defer">
        <TrustBadges />
        <WhyChooseUs />
        <ServicesGrid />
        <MovingTimeline />
        <StatsCounter />
        <Testimonials />
        <ServiceLocations />
        <ContactSection />
        <FinalCTA />
      </div>
    </>
  );
}
