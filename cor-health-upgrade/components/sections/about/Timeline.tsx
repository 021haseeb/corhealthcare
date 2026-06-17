'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    year: '2017',
    title: 'Built for comfort, designed for trust',
    body: 'Cor Health began with a simple promise: healthcare coordination should feel as calm and supportive as home.',
  },
  {
    year: '2019',
    title: 'Family-first care communication',
    body: 'We implemented consistent updates and proactive planning to help families stay informed and confident.',
  },
  {
    year: '2021',
    title: 'Luxury environment standards',
    body: 'Premium comfort and modern cleanliness became core requirements — not optional enhancements.',
  },
  {
    year: '2024',
    title: 'Healthcare partnerships at scale',
    body: 'We expanded trusted coordination partnerships across communities to support residents at every stage.',
  },
];

export default function Timeline() {
  return (
    <section className="bg-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div>
          <div className="text-[13px] font-semibold tracking-wide text-primary">Animated Timeline</div>
          <h2 className="mt-3 font-poppins text-3xl font-semibold text-dark sm:text-4xl">How Cor Health grew</h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-dark/70">
            A timeline of how compassion, communication, and healthcare coordination became the standard.
          </p>
        </div>

        <div className="mt-10 relative">
          <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary to-secondary/70" />

          <div className="space-y-6">
            {steps.map((s, idx) => (
              <motion.div
                key={s.year}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.04 }}
                className="relative pl-8"
              >
                <div className="absolute left-[-4px] top-2 h-10 w-10 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-white/10 flex items-center justify-center">
                  <div className="text-primary font-poppins font-semibold">{s.year}</div>
                </div>
                <div className="rounded-[28px] border border-dark/10 bg-white/70 p-6 shadow-soft">
                  <div className="text-[16px] font-semibold text-dark">{s.title}</div>
                  <div className="mt-2 text-[13px] leading-relaxed text-dark/70">{s.body}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

