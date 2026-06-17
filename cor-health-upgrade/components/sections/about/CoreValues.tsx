'use client';

import { motion } from 'framer-motion';
import { FiAward, FiHeart, FiShield, FiUsers } from 'react-icons/fi';

const values = [
  {
    icon: FiHeart,
    title: 'Compassion & dignity',
    body: 'Every interaction is gentle, respectful, and family-first — because care should feel human.',
  },
  {
    icon: FiShield,
    title: 'Safety you can see',
    body: 'Clean environments, proactive planning, and healthcare coordination standards.',
  },
  {
    icon: FiUsers,
    title: 'Trust through communication',
    body: 'Clear updates, consistent care routines, and responsive coordination.',
  },
  {
    icon: FiAward,
    title: 'Quality with outcomes',
    body: 'We measure progress, refine processes, and continually improve resident comfort.',
  },
];

export default function CoreValues() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-[13px] font-semibold tracking-wide text-primary">Core Values</div>
            <h2 className="mt-3 font-poppins text-3xl font-semibold text-dark sm:text-4xl">What we stand for</h2>
          </div>
          <p className="max-w-xl text-[14px] leading-relaxed text-dark/70">
            Premium residential healthcare requires more than service — it demands consistent
            principles that guide every shift, every interaction, and every care plan.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.04 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/70 p-6 shadow-soft"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-primary/15 to-secondary/15 border border-white/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-[16px] font-semibold text-dark">{v.title}</div>
                  </div>
                  <p className="mt-3 text-[13px] leading-relaxed text-dark/70">{v.body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

