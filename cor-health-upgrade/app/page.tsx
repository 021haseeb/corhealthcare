import type { Metadata } from 'next';
import Hero from '@/components/sections/home/Hero';
import Stats from '@/components/sections/home/Stats';
import WhyChooseUs from '@/components/sections/home/WhyChooseUs';
import FeaturedLocations from '@/components/sections/home/FeaturedLocations';
import Testimonials from '@/components/sections/home/Testimonials';
import HomeCTA from '@/components/sections/home/HomeCTA';

export const metadata: Metadata = {
  title: 'Compassionate Care. Comfortable Living. Trusted Healthcare Partners.',
  description:
    'Discover premium residential healthcare services designed for comfort, safety, and trust.',
};

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Stats />
      <WhyChooseUs />
      <FeaturedLocations />
      <Testimonials />
      <HomeCTA />
    </div>
  );
}

