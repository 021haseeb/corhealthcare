import type { TeamMember } from '@/types/team';

function makeAvatarDataUri(opts: { name: string; a: string; b: string }) {
  const [first, last] = opts.name.split(' ');
  const initials = `${(first || '').charAt(0)}${(last || '').charAt(0)}`.toUpperCase();
  const svg = `
  <svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='${opts.a}' stop-opacity='0.95'/>
        <stop offset='100%' stop-color='${opts.b}' stop-opacity='0.95'/>
      </linearGradient>
      <filter id='s' x='-20%' y='-20%' width='140%' height='140%'>
        <feDropShadow dx='0' dy='10' stdDeviation='18' flood-color='rgba(0,0,0,0.25)'/>
      </filter>
    </defs>
    <rect width='400' height='400' rx='72' fill='url(#g)'/>
    <circle cx='305' cy='110' r='58' fill='rgba(255,255,255,0.18)'/>
    <circle cx='95' cy='280' r='88' fill='rgba(255,255,255,0.12)'/>
    <text x='200' y='235' text-anchor='middle' font-family='Inter, Arial' font-size='92' font-weight='800' fill='rgba(255,255,255,0.92)' filter='url(#s)'>${initials}</text>
    <text x='200' y='320' text-anchor='middle' font-family='Inter, Arial' font-size='22' font-weight='600' fill='rgba(255,255,255,0.86)'>Cor Health</text>
  </svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg.trim())}`;
}

export const teamMembers: TeamMember[] = [
  {
    id: 't-1',
    name: 'Dr. Olivia Bennett',
    position: 'Medical Director',
    bio: 'Leads clinical coordination and quality standards across all residential care programs.',
    linkedinUrl: 'https://www.linkedin.com',
    photoDataUri: makeAvatarDataUri({ name: 'Olivia Bennett', a: '#14B8A6', b: '#0F766E' }),
  },
  {
    id: 't-2',
    name: 'Ethan Ramirez',
    position: 'Resident Care Manager',
    bio: 'Builds daily care plans with families and ensures smooth transitions between support levels.',
    linkedinUrl: 'https://www.linkedin.com',
    photoDataUri: makeAvatarDataUri({ name: 'Ethan Ramirez', a: '#0F766E', b: '#14B8A6' }),
  },
  {
    id: 't-3',
    name: 'Grace Thompson',
    position: 'Care Coordination Specialist',
    bio: 'Supports healthcare partnerships with clear updates and proactive care communication.',
    linkedinUrl: 'https://www.linkedin.com',
    photoDataUri: makeAvatarDataUri({ name: 'Grace Thompson', a: '#14B8A6', b: '#0F172A' }),
  },
  {
    id: 't-4',
    name: 'Daniel Chen',
    position: 'Wellness & Activities Lead',
    bio: 'Designs premium wellness routines that bring calm, comfort, and meaningful engagement.',
    linkedinUrl: 'https://www.linkedin.com',
    photoDataUri: makeAvatarDataUri({ name: 'Daniel Chen', a: '#0F172A', b: '#14B8A6' }),
  },
  {
    id: 't-5',
    name: 'Ava Morgan',
    position: 'Family Liaison',
    bio: 'Provides family-first support, guidance, and consistent updates throughout each care plan.',
    linkedinUrl: 'https://www.linkedin.com',
    photoDataUri: makeAvatarDataUri({ name: 'Ava Morgan', a: '#0F766E', b: '#0F172A' }),
  },
  {
    id: 't-6',
    name: 'Noah Patel',
    position: 'Quality & Safety Lead',
    bio: 'Maintains safety protocols, cleanliness standards, and outcome-driven care improvements.',
    linkedinUrl: 'https://www.linkedin.com',
    photoDataUri: makeAvatarDataUri({ name: 'Noah Patel', a: '#14B8A6', b: '#0F766E' }),
  },
  {
    id: 't-7',
    name: 'Sophia Walker',
    position: 'Nursing Supervisor',
    bio: 'Guides compassionate nursing support and ensures coordinated care across shifts.',
    linkedinUrl: 'https://www.linkedin.com',
    photoDataUri: makeAvatarDataUri({ name: 'Sophia Walker', a: '#0F172A', b: '#0F766E' }),
  },
  {
    id: 't-8',
    name: 'Liam Stewart',
    position: 'Operations & Facilities',
    bio: 'Ensures premium, comfortable living environments with consistent maintenance and readiness.',
    linkedinUrl: 'https://www.linkedin.com',
    photoDataUri: makeAvatarDataUri({ name: 'Liam Stewart', a: '#14B8A6', b: '#0F172A' }),
  },
];

