'use client';

import { motion } from 'framer-motion';
import { FiActivity, FiHeart, FiHome, FiShield } from 'react-icons/fi';

const cards = [
  {
    icon: FiHeart,
    title: 'Compassionate care that feels personal',
    desc: 'We coordinate daily support with a family-first approach — dignified, calm, and consistent.',
  },
  {
    icon: FiHome,
    title: 'Comfortable living, designed to relax',
    desc: 'Clean, modern spaces with warm lighting, privacy-first flow, and premium amenities.',
  },
  {
    icon: FiActivity,
    title: 'Trusted healthcare partnerships',
    desc: 'Collaborative coordination with healthcare teams so residents get the support they need.',
  },
  {
    icon: FiShield,
    title: 'Premium standards, measurable results',
    desc: 'Safety, cleanliness, and proactive care planning — built for trust and peace of mind.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <div className="text-[13px] font-semibold tracking-wide text-primary">
              Why families choose Cor Health
            </div>
            <h2 className="mt-3 font-poppins text-3xl font-semibold text-dark sm:text-4xl">
              Care you can trust. Living you’ll love.
            </h2>
            <p className="mt-4 max-w-md text-[14px] leading-relaxed text-dark/70">
              A healthcare-focused approach to residential living — combining compassion, coordination,
              and a premium environment.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {cards.map((c, i) => {
                const Icon = c.icon;
                return (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.04 }}
                    whileHover={{ y: -4 }}
                    className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white p-6 shadow-soft"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition" />
                    <div className="relative">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-primary/15 to-secondary/15 border border-white/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="mt-4 font-poppins text-[15px] font-semibold text-dark">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-dark/70">
                        {c.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

