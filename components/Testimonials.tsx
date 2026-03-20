"use client";

import { motion } from "framer-motion";
import { Quotes } from "@phosphor-icons/react";

const testimonials = [
  {
    quote:
      "Iybots rebuilt our entire lead qualification flow in three weeks. What used to consume 18 hours of SDR time per week now runs end-to-end without a single manual step. The accuracy is better than what our team was achieving.",
    name: "Marcus Adebayo",
    title: "COO",
    company: "Ferrum Capital",
    avatar: "MA",
    featured: true,
  },
  {
    quote:
      "We were skeptical about AI automation fitting into our compliance-heavy operations. Iybots handled every constraint and built audit logs into each step. Our ops team now spends time on exceptions, not routine processing.",
    name: "Lena Voss",
    title: "Head of Operations",
    company: "Ardent Labs",
    avatar: "LV",
    featured: false,
  },
  {
    quote:
      "The document intelligence system they built processes 400+ contracts a week with a 97.1% extraction accuracy. We cut our legal review prep time by more than half.",
    name: "Tariq Nasser",
    title: "Founder",
    company: "Meridian Ventures",
    avatar: "TN",
    featured: false,
  },
];

function Avatar({ initials }: { initials: string }) {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
      style={{
        background: "var(--surface-2, #18181d)",
        color: "var(--muted)",
        border: "1px solid var(--border)",
        fontFamily: "var(--font-geist-mono), monospace",
      }}
    >
      {initials}
    </div>
  );
}

export default function Testimonials() {
  const featured = testimonials[0];
  const secondary = testimonials.slice(1);

  return (
    <section
      className="py-24 lg:py-32"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="mb-16 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "var(--accent)" }}
          >
            Client outcomes
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1.08]"
            style={{ color: "var(--text)" }}
          >
            What teams say after
            <br />
            automating with us.
          </h2>
        </motion.div>

        {/* Asymmetric 2-column layout */}
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
          {/* Featured testimonial */}
          <motion.div
            className="surface-card rounded-[2rem] p-10 flex flex-col justify-between"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <Quotes weight="fill" className="w-8 h-8 mb-8" style={{ color: "var(--accent)" }} />
              <p
                className="text-xl lg:text-2xl font-medium leading-relaxed mb-10"
                style={{ color: "var(--text)" }}
              >
                &ldquo;{featured.quote}&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Avatar initials={featured.avatar} />
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                  {featured.name}
                </p>
                <p className="text-xs" style={{ color: "var(--muted)" }}>
                  {featured.title}, {featured.company}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Two stacked */}
          <div className="flex flex-col gap-6">
            {secondary.map((t, i) => (
              <motion.div
                key={i}
                className="surface-card rounded-[2rem] p-8 flex flex-col justify-between flex-1"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: (i + 1) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <p
                  className="text-base leading-relaxed mb-8"
                  style={{ color: "var(--muted)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <Avatar initials={t.avatar} />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: "var(--muted)" }}>
                      {t.title}, {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
