import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: ['400', '500', '600', '700'] });

function getMetadataBase(): URL {
  const fallback = new URL('https://corhealth.example');
  const raw = process.env.NEXT_PUBLIC_SITE_URL;

  if (!raw) return fallback;

  try {
    return new URL(raw);
  } catch {
    // If Vercel env var is misconfigured (missing protocol, invalid URL, etc.),
    // avoid build-time crashes.
    return fallback;
  }
}

export const metadata: Metadata = {
  title: {
    default: 'Cor Health | Compassionate Care. Comfortable Living.',
    template: '%s | Cor Health',
  },
  description:
    'Premium healthcare and residential care services. Compassionate care, comfortable living, and trusted healthcare partners.',
  metadataBase: getMetadataBase(),

  keywords: ['residential care', 'healthcare services', 'senior living', 'assisted living', 'memory care'],
  openGraph: {
    title: 'Cor Health | Compassionate Care. Comfortable Living.',
    description:
      'Premium healthcare and residential care services. Compassionate care, comfortable living, and trusted healthcare partners.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cor Health | Compassionate Care. Comfortable Living.',
    description:
      'Premium healthcare and residential care services. Compassionate care, comfortable living, and trusted healthcare partners.',
  },
};



export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} bg-light text-dark antialiased`}>
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="bg-grain" />
          <Navbar />
          <main className="pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

