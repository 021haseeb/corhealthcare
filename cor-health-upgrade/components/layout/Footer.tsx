import Link from 'next/link';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/team', label: 'Team' },
  { href: '/locations', label: 'Locations' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-white/10 bg-dark/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-[14px] font-poppins font-semibold tracking-wide text-light">
              Cor Health
            </div>
            <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-light/70">
              Premium residential healthcare services designed for comfort, safety, and trusted partnership.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-light/90 hover:bg-white/10 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[13px] font-semibold text-light">Quick Links</div>
            <ul className="mt-3 grid gap-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[13px] text-light/70 hover:text-light transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[13px] font-semibold text-light">Contact</div>
            <div className="mt-3 grid gap-3">
              <div className="flex gap-3 text-[13px] text-light/70">
                <span className="mt-1 text-primary">
                  <FiPhone size={16} />
                </span>
                <div>
                  <div className="font-medium text-light">(555) 010-2020</div>
                  <div>Mon–Fri, 9am–6pm</div>
                </div>
              </div>
              <div className="flex gap-3 text-[13px] text-light/70">
                <span className="mt-1 text-primary">
                  <FiMail size={16} />
                </span>
                <div>
                  <div className="font-medium text-light">care@corhealth.example</div>
                  <div>We respond within 1 business day</div>
                </div>
              </div>
              <div className="flex gap-3 text-[13px] text-light/70">
                <span className="mt-1 text-primary">
                  <FiMapPin size={16} />
                </span>
                <div>
                  <div className="font-medium text-light">123 Trusted Healthcare Ave</div>
                  <div>City, State</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="text-[12px] text-light/55">
            © {year} Cor Health. All rights reserved.
          </div>
          <div className="text-[12px] text-light/55">Privacy • Terms • Accessibility</div>
        </div>
      </div>
    </footer>
  );
}

