'use client';

import { motion } from 'framer-motion';

export default function CEOMessage() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-[32px] border border-dark/10 bg-white/80 p-6 md:p-10 shadow-soft"
          whileHover={{ y: -3 }}
        >
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <div className="text-[13px] font-semibold tracking-wide text-primary">CEO Message</div>
              <h2 className="mt-3 font-poppins text-3xl font-semibold text-dark sm:text-4xl">
                “Comfort and clinical trust belong together.”
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-dark/70">
                At Cor Health, we believe premium residential living should feel like healthcare at its best:
                coordinated, responsive, and dignified. We build processes that protect peace of mind —
                so families can feel confident and residents can feel comfortable.
              </p>
              <p className="mt-4 text-[14px] leading-relaxed text-dark/70">
                Our teams lead with compassion, communicate with clarity, and continuously refine care
                standards to deliver measurable comfort and outcomes.
              </p>

              <div className="mt-6">
                <div className="text-[16px] font-semibold text-dark">Dr. Amelia Carter</div>
                <div className="text-[13px] text-dark/60">Chief Executive Officer</div>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative rounded-[28px] border border-dark/10 bg-gradient-to-br from-primary/15 via-secondary/10 to-white/60 overflow-hidden p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.35),transparent_50%),radial-gradient(circle_at_80%_60%,rgba(15,118,110,0.25),transparent_52%)]" />
                <div className="relative h-48 rounded-[24px] border border-white/20 bg-white/60" />
                <div className="relative mt-4">
                  <div className="text-[12px] font-semibold text-dark/60">Leadership focus</div>
                  <div className="mt-2 text-[14px] font-semibold text-dark">Family-first coordination</div>
                  <div className="mt-1 text-[13px] text-dark/70">Clear updates, consistent care planning, measurable outcomes.</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

