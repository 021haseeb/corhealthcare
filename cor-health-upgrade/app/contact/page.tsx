import type { Metadata } from 'next';
import ContactPage from '@/components/sections/contact/ContactPage';

export const metadata: Metadata = {
  title: 'Contact | Cor Health',
  description:
    'Get in touch with Cor Health for residential healthcare services. Contact us today.',
};

export default function ContactRoute() {
  return (
    <div>
      <ContactPage />
    </div>
  );
}

