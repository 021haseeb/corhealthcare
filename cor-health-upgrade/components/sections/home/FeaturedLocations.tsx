'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';
import { locations } from '@/data/locations';
import type { Location } from '@/types/locations';

function LocationCard({ loc }: { loc: Location }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white p-6 shadow-soft"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] font-semibold text-primary">
              <FiMapPin className="h-4 w-4" />
              {loc.city}
            </div>
            <h3 className="mt-4 font-poppins text-[16px] font-semibold text-dark">
              {loc.name}
            </h3>
            <p className="mt-1 text-[13px] leading-relaxed text-dark/70">
              {loc.services.join(' • ')}
            </p>
          </div>

          <div className="text-right">
            <div className="text-[12px] text-dark/60">Capacity</div>
            <div className="mt-1 text-[18px] font-semibold text-dark">{loc.capacity} Beds</div>
            <div className="text-[12px] text-dark/60">Availability: {loc.availability}%</div>
          </div>
        </div>

        <div className="mt-5 h-1 w-full rounded-full bg-dark/5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${loc.availability}%` }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
          />
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-[13px] text-dark/70">Includes daily care coordination</div>
          <Link
            href={`/locations?location=${encodeURIComponent(loc.slug)}`}
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-[13px] font-semibold text-dark/80 hover:bg-white/10 transition"
          >
            View
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedLocations() {
  const featured = locations.slice(0, 4);

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between gap-5">
          <div>
            <div className="text-[13px] font-semibold tracking-wide text-primary">Featured Locations</div>
            <h2 className="mt-3 font-poppins text-3xl font-semibold text-dark sm:text-4xl">
              Residential healthcare across trusted communities.
            </h2>
          </div>
          <Link
            href="/locations"
            className="hidden sm:inline-flex rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-[14px] font-semibold text-dark/80 hover:bg-white/10 transition"
          >
            Browse all locations
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
        {featured.map((loc: Location, idx: number) => (
            <motion.div
              key={loc.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.05 }}
            >
              <LocationCard loc={loc} />
            </motion.div>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link
            href="/locations"
            className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-[14px] font-semibold text-dark/80 hover:bg-white/10 transition"
          >
            Browse all locations
          </Link>
        </div>
      </div>
    </section>
  );
}

