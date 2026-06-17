import type { Metadata } from 'next';
import TeamGrid from '@/components/sections/team/TeamGrid';

export const metadata: Metadata = {
  title: 'Team | Cor Health',
  description:
    'Meet our compassionate healthcare and residential care professionals.',
};

export default function TeamPage() {
  return (
    <div>
      <TeamGrid />
    </div>
  );
}

