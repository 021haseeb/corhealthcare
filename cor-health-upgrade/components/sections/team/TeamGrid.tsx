'use client';

import { motion } from 'framer-motion';
import { teamMembers } from '@/data/team';
import type { TeamMember } from '@/types/team';
import { FiLinkedin } from 'react-icons/fi';

function TeamCard({ m }: { m: TeamMember }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white p-6 shadow-soft"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <div className="flex items-start gap-4">
          <div className="h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-soft">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={m.photoDataUri} alt={`${m.name} photo`} className="h-full w-full object-cover" />
          </div>
          <div className="min-w-0">
            <h3 className="truncate font-poppins text-[16px] font-semibold text-dark">{m.name}</h3>
            <p className="mt-1 text-[13px] text-dark/70">{m.position}</p>
          </div>
        </div>

        <p className="mt-5 text-[13px] leading-relaxed text-dark/70">{m.bio}</p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-[12px] font-semibold text-primary">Healthcare-first leadership</span>
          <a
            href={m.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-dark/10 bg-white hover:bg-primary/5 transition"
            aria-label={`LinkedIn profile for ${m.name}`}
          >
            <FiLinkedin className="h-5 w-5 text-primary" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function TeamGrid() {
  return (
    <section className="bg-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-[13px] font-semibold tracking-wide text-primary">Team</div>
            <h1 className="mt-3 font-poppins text-3xl font-semibold text-dark sm:text-4xl">Meet the care professionals behind Cor Health</h1>
            <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-dark/70">
              A compassionate, healthcare-focused team dedicated to comfortable living and trusted coordination.
            </p>
          </div>
          <div className="rounded-2xl border border-dark/10 bg-white/70 p-4">
            <div className="text-[12px] text-dark/60">Total members</div>
            <div className="mt-1 text-[24px] font-semibold text-dark">{teamMembers.length}</div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <TeamCard m={m} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

