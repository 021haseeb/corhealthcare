import type { Metadata } from 'next';
import LocationsPage from '@/components/sections/locations/LocationsPage';

export const metadata: Metadata = {
  title: 'Locations | Cor Health',
  description:
    'Explore our healthcare residential care locations, services, capacity, and contact information.',
};

export default function LocationsRoute() {
  return (
    <div>
      <LocationsPage />
    </div>
  );
}

