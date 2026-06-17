'use client';

import { motion } from 'framer-motion';

function Block({
  kicker,
  title,
  body,
}: {
  kicker: string;
  title: string;
  body: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      whileHover={{ y: -3 }}
      className="rounded-[28px] border border-dark/10 bg-white/70 p-6 shadow-soft"
    >
      <div className="text-[12px] font-semibold tracking-wide text-primary">{kicker}</div>
      <h2 className="mt-3 font-poppins text-2xl font-semibold text-dark">{title}</h2>
      <p className="mt-3 text-[14px] leading-relaxed text-dark/70">{body}</p>
    </motion.div>
  );
}

export default function MissionVision() {
  return (
    <section className="bg-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-4 lg:grid-cols-2">
          <Block
            kicker="Mission"
            title="Deliver comfort with healthcare-grade coordination."
            body="We provide premium residential services and trusted support partnerships — with proactive updates for families and clear care planning."
          />
          <Block
            kicker="Vision"
            title="A new standard for compassionate residential healthcare."
            body="We aim to make premium comfort the baseline for every resident experience, combining modern living environments with clinical trust."
          />
        </div>
      </div>
    </section>
  );
}

