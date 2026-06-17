'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiClock, FiMapPin } from 'react-icons/fi';

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ContactErrors = Partial<Record<keyof ContactForm, string>>;

function validate(form: ContactForm): ContactErrors {
  const errors: ContactErrors = {};

  if (form.name.trim().length < 2) errors.name = 'Please enter your full name.';
  const email = form.email.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Please enter a valid email address.';

  const phone = form.phone.trim();
  if (phone.length < 7) errors.phone = 'Please enter a phone number (at least 7 digits).';

  if (form.message.trim().length < 20) errors.message = 'Message must be at least 20 characters.';

  return errors;
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const canSubmit = useMemo(() => {
    const e = validate(form);
    return Object.keys(e).length === 0;
  }, [form]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('submitting');
    await new Promise((r) => setTimeout(r, 900));
    setStatus('success');
  }

  return (
    <section className="bg-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-[13px] font-semibold tracking-wide text-primary">Contact</div>
            <h1 className="mt-3 font-poppins text-3xl font-semibold text-dark sm:text-4xl">Talk to our care team</h1>
            <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-dark/70">
              We respond within 1 business day. Share what you need and we’ll coordinate the next steps.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-dark/10 bg-white/70 p-4">
              <div className="flex items-center gap-3 text-dark/70">
                <FiPhone className="text-primary" />
                <div>
                  <div className="text-[12px] font-semibold">Phone</div>
                  <div className="text-[14px] font-semibold text-dark">(555) 010-2020</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-dark/10 bg-white/70 p-4">
              <div className="flex items-center gap-3 text-dark/70">
                <FiMail className="text-primary" />
                <div>
                  <div className="text-[12px] font-semibold">Email</div>
                  <div className="text-[14px] font-semibold text-dark">care@corhealth.example</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 rounded-[32px] border border-dark/10 bg-white/80 p-6 md:p-8 shadow-soft"
          >
            <form onSubmit={onSubmit} className="grid gap-4" aria-label="Contact form">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-[13px] font-semibold text-dark">Full name</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    className={`mt-2 w-full rounded-2xl border px-4 py-3 text-[14px] outline-none transition ${
                      errors.name ? 'border-red-400/80' : 'border-dark/10 focus:border-primary'
                    }`}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && <div className="mt-1 text-[12px] text-red-500">{errors.name}</div>}
                </div>

                <div>
                  <label className="text-[13px] font-semibold text-dark">Email</label>
                  <input
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    className={`mt-2 w-full rounded-2xl border px-4 py-3 text-[14px] outline-none transition ${
                      errors.email ? 'border-red-400/80' : 'border-dark/10 focus:border-primary'
                    }`}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && <div className="mt-1 text-[12px] text-red-500">{errors.email}</div>}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-[13px] font-semibold text-dark">Phone</label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                    className={`mt-2 w-full rounded-2xl border px-4 py-3 text-[14px] outline-none transition ${
                      errors.phone ? 'border-red-400/80' : 'border-dark/10 focus:border-primary'
                    }`}
                    placeholder="(555) 010-1234"
                    aria-invalid={Boolean(errors.phone)}
                  />
                  {errors.phone && <div className="mt-1 text-[12px] text-red-500">{errors.phone}</div>}
                </div>

                <div>
                  <label className="text-[13px] font-semibold text-dark">Business hours</label>
                  <div className="mt-2 rounded-2xl border border-dark/10 bg-white px-4 py-3 text-[14px] text-dark/70">
                    <span className="inline-flex items-center gap-2">
                      <FiClock className="text-primary" /> Mon–Fri, 9am–6pm
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-[13px] font-semibold text-dark">How can we help?</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  className={`mt-2 h-32 w-full resize-none rounded-2xl border px-4 py-3 text-[14px] outline-none transition ${
                    errors.message ? 'border-red-400/80' : 'border-dark/10 focus:border-primary'
                  }`}
                  placeholder="Tell us about your needs (care level, timing, location)."
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && <div className="mt-1 text-[12px] text-red-500">{errors.message}</div>}
              </div>

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                disabled={!canSubmit || status === 'submitting' || status === 'success'}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-[14px] font-semibold text-light shadow-luxury disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'idle' && 'Send message'}
                {status === 'submitting' && 'Sending...'}
                {status === 'success' && 'Submitted ✓'}
              </motion.button>
            </form>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-4"
              >
                <div className="text-[14px] font-semibold text-dark">Thank you.</div>
                <div className="mt-1 text-[13px] text-dark/70">
                  Your message has been received. A care coordinator will reach out within 1 business day.
                </div>
              </motion.div>
            )}
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.04 }}
            className="lg:col-span-5 rounded-[32px] border border-dark/10 bg-white/80 p-6 md:p-8 shadow-soft"
          >
            <div className="text-[13px] font-semibold tracking-wide text-primary">Address & details</div>
            <h2 className="mt-3 font-poppins text-2xl font-semibold text-dark">Cor Health Headquarters</h2>

            <div className="mt-5 grid gap-4">
              <div className="flex items-start gap-3">
                <FiMapPin className="mt-1 text-primary" />
                <div>
                  <div className="text-[13px] font-semibold">Address</div>
                  <div className="mt-1 text-[13px] text-dark/70">123 Trusted Healthcare Ave, City, State</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiPhone className="mt-1 text-primary" />
                <div>
                  <div className="text-[13px] font-semibold">Phone</div>
                  <div className="mt-1 text-[13px] text-dark/70">(555) 010-2020</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiMail className="mt-1 text-primary" />
                <div>
                  <div className="text-[13px] font-semibold">Email</div>
                  <div className="mt-1 text-[13px] text-dark/70">care@corhealth.example</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiClock className="mt-1 text-primary" />
                <div>
                  <div className="text-[13px] font-semibold">Business hours</div>
                  <div className="mt-1 text-[13px] text-dark/70">Mon–Fri, 9am–6pm</div>
                </div>
              </div>
            </div>

                <div className="mt-7 overflow-hidden rounded-[24px] border border-dark/10">
              <iframe
                title="Cor Health map"
                src="https://www.google.com/maps?q=United%20States&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

