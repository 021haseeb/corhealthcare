import type { Metadata } from 'next';
import CompanyStory from '@/components/sections/about/CompanyStory';
import MissionVision from '@/components/sections/about/MissionVision';
import CoreValues from '@/components/sections/about/CoreValues';
import Timeline from '@/components/sections/about/Timeline';
import CEOMessage from '@/components/sections/about/CEOMessage';
import Achievements from '@/components/sections/about/Achievements';

export const metadata: Metadata = {
  title: 'About Us | Cor Health',
  description:
    'Our mission, vision, values, leadership message, timeline, and achievements.',
};

export default function AboutPage() {
  return (
    <div>
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <Timeline />
      <CEOMessage />
      <Achievements />
    </div>
  );
}

