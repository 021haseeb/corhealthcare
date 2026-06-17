export type LocationData = {
  slug: string;
  name: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  email: string;
  capacity: number;
  availability: number; // 0-100
  services: string[];
  specialties: string[];
};

export const locations: LocationData[] = [
  {
    slug: 'cor-health-downtown',
    name: 'Cor Health Downtown Residence',
    city: 'Springfield',
    state: 'IL',
    address: '1200 Trusted Healthcare Ave, Springfield, IL',
    phone: '(555) 010-1101',
    email: 'downtown@corhealth.example',
    capacity: 72,
    availability: 86,
    services: ['Assisted Living', 'Skilled Support', 'Daily Care Coordination'],
    specialties: ['Post-surgery support', 'Mobility assistance', 'Medication reminders'],
  },
  {
    slug: 'cor-health-hillside',
    name: 'Cor Health Hillside Care Community',
    city: 'Fairview',
    state: 'TX',
    address: '88 Compassion Lane, Fairview, TX',
    phone: '(555) 010-2202',
    email: 'hillside@corhealth.example',
    capacity: 64,
    availability: 74,
    services: ['Memory Care', 'Clinical Collaboration', 'Family Updates'],
    specialties: ['Cognitive support', '24/7 care planning', 'Calm environment design'],
  },
  {
    slug: 'cor-health-riverside',
    name: 'Cor Health Riverside Living',
    city: 'Dayton',
    state: 'OH',
    address: '450 River Comfort Blvd, Dayton, OH',
    phone: '(555) 010-3303',
    email: 'riverside@corhealth.example',
    capacity: 80,
    availability: 91,
    services: ['Residential Care', 'Skilled Nursing Coordination', 'Wellness Programs'],
    specialties: ['Rehabilitation support', 'Wellness routines', 'Safe mobility zones'],
  },
  {
    slug: 'cor-health-summit',
    name: 'Cor Health Summit Premium Residence',
    city: 'Austin',
    state: 'TX',
    address: '2200 Summit Trust Rd, Austin, TX',
    phone: '(555) 010-4404',
    email: 'summit@corhealth.example',
    capacity: 58,
    availability: 62,
    services: ['Assisted Living', 'Care Coordination', 'Luxury Amenities'],
    specialties: ['Dietary planning', 'Daily activity support', 'Comfort-centered living'],
  },
  {
    slug: 'cor-health-oakridge',
    name: 'Cor Health Oakridge Care',
    city: 'Charlotte',
    state: 'NC',
    address: '77 Oakridge Serenity Dr, Charlotte, NC',
    phone: '(555) 010-5505',
    email: 'oakridge@corhealth.example',
    capacity: 66,
    availability: 79,
    services: ['Memory Care', 'Clinical Partnership', 'Family-first Updates'],
    specialties: ['Sensory-friendly rooms', 'Care team communication', 'Routine-based comfort'],
  },
  {
    slug: 'cor-health-seaside',
    name: 'Cor Health Seaside Residential Care',
    city: 'Santa Cruz',
    state: 'CA',
    address: '15 Seaside Wellness Way, Santa Cruz, CA',
    phone: '(555) 010-6606',
    email: 'seaside@corhealth.example',
    capacity: 74,
    availability: 88,
    services: ['Skilled Support', 'Wellness Programs', 'Daily Care Coordination'],
    specialties: ['Mobility assistance', 'On-plan wellness', 'Comfort-focused environment'],
  },
  {
    slug: 'cor-health-golden-crest',
    name: 'Cor Health Golden Crest Community',
    city: 'Tampa',
    state: 'FL',
    address: '340 Crestway Comfort, Tampa, FL',
    phone: '(555) 010-7707',
    email: 'goldencrest@corhealth.example',
    capacity: 61,
    availability: 70,
    services: ['Assisted Living', 'Clinical Collaboration', 'Family Updates'],
    specialties: ['Medication reminders', 'Gentle movement support', 'Care coordination'],
  },
  {
    slug: 'cor-health-parkview',
    name: 'Cor Health Parkview Residence',
    city: 'Mesa',
    state: 'AZ',
    address: '980 Parkview Trust St, Mesa, AZ',
    phone: '(555) 010-8808',
    email: 'parkview@corhealth.example',
    capacity: 69,
    availability: 83,
    services: ['Residential Care', 'Skilled Support', 'Wellness Programs'],
    specialties: ['Daily routines', 'Family coordination', 'Comfort-first living'],
  },
];

