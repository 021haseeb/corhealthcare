'use client';

import { motion } from 'framer-motion';
import { FiAward, FiUsers } from 'react-icons/fi';

const achievements = [
  { icon: FiUsers, value: '98%', label: 'Family satisfaction score' },
  { icon: FiAward, value: '24/7', label: 'Care coordination readiness' },
  { icon: FiAward, value: 'Top 1%', label: 'Quality standards compliance' },
  { icon: FiUsers, value: 'Daily', label: 'Care updates delivered' },
];

export default function Achievements() {
  return (
    <section className="bg-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div>
          <div className="text-[13px] font-semibold tracking-wide text-primary">Company Achievements</div>
          <h2 className="mt-3 font-poppins text-3xl font-semibold text-dark sm:text-4xl">
            Measurable outcomes for comfort & trust
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-dark/70">
            We continuously refine our processes — focusing on resident well-being, cleanliness, and coordinated healthcare support.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {achievements.map((a, idx) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.04 }}
                whileHover={{ y: -3 }}
                className="rounded-[28px] border border-dark/10 bg-white/70 p-6 shadow-soft"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[12px] font-semibold text-dark/60">{a.label}</div>
                    <div className="mt-2 font-poppins text-3xl font-semibold text-dark">{a.value}</div>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-primary/15 to-secondary/15 border border-white/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="mt-4 h-1 w-full rounded-full bg-gradient-to-r from-primary to-secondary opacity-70" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

