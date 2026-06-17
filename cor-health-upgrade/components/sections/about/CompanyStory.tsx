'use client';

import { motion } from 'framer-motion';

export default function CompanyStory() {
  return (
    <section className="bg-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="rounded-[32px] border border-dark/10 bg-white/80 p-6 md:p-10 shadow-soft">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="max-w-xl">
                <div className="text-[13px] font-semibold tracking-wide text-primary">Our Story</div>
                <h1 className="mt-3 font-poppins text-3xl font-semibold text-dark sm:text-4xl">
                  Premium residential healthcare, built on compassion.
                </h1>
                <p className="mt-4 text-[14px] leading-relaxed text-dark/70">
                  Cor Health was created to bring healthcare-grade coordination to the comfort of
                  home. We designed every part of our residential care model to feel calm,
                  dignified, and trustworthy — for residents and their families.
                </p>
                <p className="mt-4 text-[14px] leading-relaxed text-dark/70">
                  Our approach blends daily support with proactive communication and safe,
                  modern environments — so families can feel confident every step of the way.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-dark/10 bg-white p-5">
                  <div className="text-[12px] font-semibold text-dark/60">Care philosophy</div>
                  <div className="mt-2 text-[16px] font-semibold text-dark">Compassion-first</div>
                  <div className="mt-1 text-[13px] text-dark/70">Dignity, calm, consistency</div>
                </div>
                <div className="rounded-2xl border border-dark/10 bg-white p-5">
                  <div className="text-[12px] font-semibold text-dark/60">Healthcare focus</div>
                  <div className="mt-2 text-[16px] font-semibold text-dark">Coordinated support</div>
                  <div className="mt-1 text-[13px] text-dark/70">Partnerships & family updates</div>
                </div>
                <div className="rounded-2xl border border-dark/10 bg-white p-5">
                  <div className="text-[12px] font-semibold text-dark/60">Environment</div>
                  <div className="mt-2 text-[16px] font-semibold text-dark">Luxury comfort</div>
                  <div className="mt-1 text-[13px] text-dark/70">Modern, clean, welcoming</div>
                </div>
                <div className="rounded-2xl border border-dark/10 bg-white p-5">
                  <div className="text-[12px] font-semibold text-dark/60">Accountability</div>
                  <div className="mt-2 text-[16px] font-semibold text-dark">Measurable outcomes</div>
                  <div className="mt-1 text-[13px] text-dark/70">Quality standards you can see</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

