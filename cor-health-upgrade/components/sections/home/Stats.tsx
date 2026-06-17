'use client';

import { motion } from 'framer-motion';
import { FiHeart, FiUsers, FiShield } from 'react-icons/fi';

const items = [
  { icon: FiHeart, value: 'Compassion-first', label: 'Care plans built around comfort' },
  { icon: FiUsers, value: 'Trusted teams', label: 'Coordinated across partners & families' },
  { icon: FiShield, value: 'Healthcare ready', label: 'Safety, cleanliness, and clinical coordination' },
];

export default function Stats() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between gap-5">
          <div>
            <div className="text-[13px] font-semibold tracking-wide text-primary">
              Trusted residential healthcare services
            </div>
            <h2 className="mt-3 font-poppins text-3xl font-semibold text-dark sm:text-4xl">
              A premium standard of care, every day.
            </h2>
          </div>
          <p className="max-w-md text-[14px] leading-relaxed text-dark/70">
            From supportive living to coordinated healthcare partnerships, we deliver
            clean, modern environments — with the compassion families expect.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map((it, idx) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.value}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: idx * 0.05 }}
                whileHover={{ y: -3 }}
                className="group rounded-[28px] border border-white/10 bg-white shadow-soft p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-primary/15 to-secondary/15 border border-white/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold text-dark group-hover:text-primary transition">
                      {it.value}
                    </div>
                    <div className="mt-1 text-[13px] text-dark/70">{it.label}</div>
                  </div>
                </div>

                <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-secondary opacity-70" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

