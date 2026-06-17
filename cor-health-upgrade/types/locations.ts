export type Location = {
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

