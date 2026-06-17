'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import { FiStar } from 'react-icons/fi';

export default function Testimonials() {
  return (
    <section className="bg-dark text-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between gap-5">
          <div>
            <div className="text-[13px] font-semibold tracking-wide text-secondary">Testimonials</div>
            <h2 className="mt-3 font-poppins text-3xl font-semibold sm:text-4xl">
              Families trust Cor Health.
            </h2>
          </div>
          <div className="hidden sm:flex gap-2 items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <FiStar key={i} className="h-4 w-4 text-secondary" />
            ))}
            <div className="ml-2 text-[13px] text-light/80">Top-rated care experience</div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t, idx: number) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <div className="text-[13px] font-semibold text-secondary">Verified family</div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FiStar key={i} className="h-4 w-4 text-secondary/90" />
                  ))}
                </div>
              </div>

              <p className="mt-4 text-[14px] leading-relaxed text-light/80">“{t.quote}”</p>
              <div className="mt-5">
                <div className="text-[14px] font-semibold text-light">{t.name}</div>
                <div className="text-[13px] text-light/60">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

