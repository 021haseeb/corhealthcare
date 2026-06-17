'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { locations } from '@/data/locations';
import type { Location } from '@/types/locations';
import { FiSearch, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

function serviceOptions(all: Location[]) {
  const set = new Set<string>();
  all.forEach((l) => l.services.forEach((s) => set.add(s)));
  return Array.from(set).sort();
}

function locationMatches({ loc, q, service, minCapacity }: { loc: Location; q: string; service: string; minCapacity: number }) {
  const query = q.trim().toLowerCase();
  const text = `${loc.name} ${loc.city} ${loc.state} ${loc.services.join(' ')} ${loc.specialties.join(' ')}`.toLowerCase();
  const okQuery = query.length === 0 ? true : text.includes(query);
  const okService = service === 'All' ? true : loc.services.includes(service);
  const okCapacity = loc.capacity >= minCapacity;
  return okQuery && okService && okCapacity;
}

function LocationCard({ loc }: { loc: Location }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white p-6 shadow-soft"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-dark/10 bg-white/60 px-3 py-1 text-[12px] font-semibold text-primary">
              <FiMapPin className="h-4 w-4" />
              {loc.city}, {loc.state}
            </div>
            <h2 className="mt-4 font-poppins text-[16px] font-semibold text-dark">{loc.name}</h2>
            <p className="mt-2 text-[13px] text-dark/70">{loc.address}</p>
          </div>
          <div className="text-right">
            <div className="text-[12px] text-dark/60">Capacity</div>
            <div className="mt-1 text-[18px] font-semibold text-dark">{loc.capacity} Beds</div>
            <div className="text-[12px] text-dark/60">Availability: {loc.availability}%</div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {loc.services.slice(0, 4).map((s) => (
            <span key={s} className="rounded-xl border border-dark/10 bg-white/60 px-3 py-1 text-[12px] font-semibold text-dark/70">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-dark/5">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${loc.availability}%` }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
          />
        </div>

        <div className="mt-6 grid gap-2 sm:grid-cols-3">
          <div className="flex items-center gap-2 text-[13px] text-dark/70">
            <FiPhone className="text-primary" />
            <span>{loc.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-[13px] text-dark/70 sm:col-span-2">
            <FiMail className="text-primary" />
            <span className="truncate">{loc.email}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function LocationsPage() {
  const [q, setQ] = useState('');
  const [service, setService] = useState('All');
  const [minCapacity, setMinCapacity] = useState(40);

  const opts = useMemo(() => serviceOptions(locations), []);

  const filtered = useMemo(() => {
    return locations.filter((loc) =>
      locationMatches({ loc, q, service, minCapacity })
    );
  }, [q, service, minCapacity]);

  return (
    <section className="bg-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-[13px] font-semibold tracking-wide text-primary">Locations</div>
            <h1 className="mt-3 font-poppins text-3xl font-semibold text-dark sm:text-4xl">Find your trusted residential care community</h1>
            <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-dark/70">
              Search services, compare capacity, and explore contact information.
            </p>
          </div>

          <div className="rounded-2xl border border-dark/10 bg-white/70 p-4">
            <div className="text-[12px] text-dark/60">Results</div>
            <div className="mt-1 text-[24px] font-semibold text-dark">{filtered.length}</div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mt-10 rounded-[32px] border border-dark/10 bg-white/80 p-5 md:p-7 shadow-soft"
        >
          <div className="grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 rounded-2xl border border-dark/10 bg-white px-4 py-3">
                <FiSearch className="text-primary" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search by city, state, or service..."
                  className="w-full bg-transparent text-[14px] outline-none"
                  aria-label="Search locations"
                />
              </div>
            </div>

            <div className="lg:col-span-3">
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-2xl border border-dark/10 bg-white px-4 py-3 text-[14px] font-medium outline-none"
                aria-label="Filter by service"
              >
                <option value="All">All services</option>
                {opts.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-dark/10 bg-white px-4 py-3">
                <div className="flex items-center justify-between">
                  <div className="text-[12px] font-semibold text-dark/60">Min capacity</div>
                  <div className="text-[13px] font-semibold text-dark">{minCapacity}+ Beds</div>
                </div>
                <input
                  type="range"
                  min={0}
                  max={90}
                  step={5}
                  value={minCapacity}
                  onChange={(e) => setMinCapacity(Number(e.target.value))}
                  className="mt-2 w-full accent-primary"
                  aria-label="Minimum capacity filter"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {filtered.map((loc) => (
            <motion.div
              key={loc.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <LocationCard loc={loc} />
            </motion.div>
          ))}
        </div>

        <div className="mt-14 rounded-[32px] border border-dark/10 bg-white/80 p-6 md:p-10 shadow-soft">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[13px] font-semibold tracking-wide text-primary">Map</div>
              <h2 className="mt-3 font-poppins text-2xl font-semibold text-dark">Explore community neighborhoods</h2>
              <p className="mt-2 text-[14px] text-dark/70">Embedded map for location discovery (dummy coordinates).</p>
            </div>
            <div className="rounded-2xl border border-dark/10 bg-white px-4 py-3">
              <div className="text-[12px] text-dark/60">Need help selecting?</div>
              <div className="mt-1 text-[14px] font-semibold text-dark">Contact our care team</div>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-[24px] border border-dark/10">
            <iframe
              title="Cor Health locations map"
              src="https://www.google.com/maps?q=United%20States&output=embed"
              className="h-72 w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

