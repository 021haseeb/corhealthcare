'use client';

import { motion } from 'framer-motion';
import { FiCheckCircle, FiShield } from 'react-icons/fi';
import Link from 'next/link';

function HeroStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-soft"
    >
      <div className="text-[24px] font-semibold text-light">{value}</div>
      <div className="mt-1 text-[13px] text-light/70">{label}</div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12">
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 py-10">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="text-primary">●</span>
                <span className="text-[13px] font-medium text-light/85">
                  Licensed healthcare residential services
                </span>
              </div>

              <h1 className="mt-5 font-poppins text-4xl font-semibold leading-tight text-light sm:text-5xl">
                <motion.span
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                >
                  Compassionate Care.
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.12 }}
                >
                  Comfortable Living.
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.19 }}
                >
                  Trusted Healthcare Partners.
                </motion.span>
              </h1>

              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-light/75">
                Premium residential care that feels clinical where it matters — and
                comfortable where you deserve it. From daily support to coordinated
                healthcare partnerships.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 text-[14px] font-semibold text-light shadow-luxury hover:bg-secondary transition"
                  >
                    Request a Private Tour
                    <span className="inline-block">
                      <FiCheckCircle />
                    </span>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                >
                  <Link
                    href="/locations"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-[14px] font-semibold text-light/90 backdrop-blur hover:bg-white/10 transition"
                  >
                    Explore Locations
                    <span>
                      <FiShield />
                    </span>
                  </Link>
                </motion.div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-[13px] font-semibold text-light">Care that adapts</div>
                  <div className="mt-1 text-[13px] text-light/70">Daily support & coordinated plans</div>
                </div>
                <div className="hidden sm:block rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-[13px] font-semibold text-light">Luxury environment</div>
                  <div className="mt-1 text-[13px] text-light/70">Clean, modern, comforting spaces</div>
                </div>
                <div className="hidden sm:block rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-[13px] font-semibold text-light">Trusted partnerships</div>
                  <div className="mt-1 text-[13px] text-light/70">Healthcare collaboration you can trust</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-soft"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[13px] font-semibold text-light/85">Next availability</div>
                    <div className="mt-1 text-[24px] font-semibold text-light">This Week</div>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-r from-primary/25 to-secondary/25 border border-white/10 px-3 py-2">
                    <div className="text-[12px] text-light/70">Priority tours</div>
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  <HeroStat label="Residents supported" value="24/7" />
                  <HeroStat label="Care coordination" value="On-Plan" />
                  <HeroStat label="Family updates" value="Daily" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                className="mt-5 overflow-hidden rounded-[28px] border border-white/10 bg-dark/40"
              >
                <div className="relative h-56">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/20" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(248,250,252,0.35),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(20,184,166,0.25),transparent_45%)]" />
                  <div className="absolute inset-0 flex flex-col items-start justify-end p-5">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-secondary" />
                      <span className="text-[13px] font-medium text-light/90">Premium residential care</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-primary/30 blur-2xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

