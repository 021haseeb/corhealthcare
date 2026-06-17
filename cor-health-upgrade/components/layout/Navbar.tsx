'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/team', label: 'Team' },
  { href: '/locations', label: 'Locations' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const activeIndex = useMemo(() => {
    const idx = navItems.findIndex((n) => n.href === pathname);
    return idx >= 0 ? idx : 0;
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -14, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-3 rounded-2xl border border-white/10 bg-dark/70 backdrop-blur-xl shadow-soft">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            <Link
              href="/"
              className="flex items-center gap-3 font-poppins text-[15px] font-semibold tracking-wide text-light"
              aria-label="Cor Health home"
            >
              <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-b from-secondary/30 to-primary/20" />
                <span className="relative text-primary">CH</span>
              </span>
              <span className="hidden sm:inline">Cor Health</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item, i) => {
                const isActive = i === activeIndex;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative px-3 py-2 text-[13px] font-medium text-light/90 hover:text-light transition-colors"
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navActive"
                        className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-primary/25 to-secondary/25 border border-white/10"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-light hover:bg-white/10 transition"
                aria-label="Open menu"
              >
                <FiMenu size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <div className="absolute inset-0 bg-dark/60 backdrop-blur" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="absolute left-3 right-3 top-3 rounded-2xl border border-white/10 bg-dark/90 backdrop-blur-xl shadow-soft p-4"
            >
              <div className="flex items-center justify-between">
                <div className="font-poppins text-[14px] font-semibold text-light">Navigation</div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-light hover:bg-white/10 transition"
                  aria-label="Close menu"
                >
                  <FiX size={18} />
                </button>
              </div>

              <div className="mt-4 grid gap-2">
                {navItems.map((item) => {
                  const isActive = item.href === pathname;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-xl border px-4 py-3 text-[14px] font-medium transition ${
                        isActive
                          ? 'border-white/15 bg-gradient-to-r from-primary/25 to-secondary/25 text-light'
                          : 'border-white/10 bg-white/5 text-light/90 hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

