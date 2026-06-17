'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function HomeCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-[32px] border border-white/15 bg-white/80 backdrop-blur shadow-soft p-7 md:p-10"
        >
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <div className="text-[13px] font-semibold tracking-wide text-primary">Ready to tour?</div>
              <h2 className="mt-3 font-poppins text-3xl font-semibold text-dark sm:text-4xl">
                Schedule a private tour with our care team.
              </h2>
              <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-dark/70">
                We’ll help you choose the right level of residential support and coordinate healthcare partnerships.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <motion.div whileHover={{ y: -2 }}>
                  <Link
                    href="/contact"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-[14px] font-semibold text-light shadow-luxury hover:bg-secondary transition"
                  >
                    Contact Us
                    <FiArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -2 }}>
                  <Link
                    href="/locations"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-dark/10 bg-white/70 px-6 py-3 text-[14px] font-semibold text-dark/80 hover:bg-white transition"
                  >
                    View Locations
                  </Link>
                </motion.div>
              </div>
              <div className="mt-4 text-[12px] text-dark/60">
                Typical response time: within 1 business day.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

