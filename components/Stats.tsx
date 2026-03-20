"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const stats = [
  {
    value: 847,
    suffix: "+",
    label: "Workflows deployed",
    description: "Across finance, logistics, SaaS, and professional services",
  },
  {
    value: 63,
    suffix: ".4%",
    label: "Average time saved",
    description: "Per automated process, measured at 30-day post-deployment",
  },
  {
    value: 14,
    suffix: "ms",
    label: "Median response time",
    description: "For AI agent decision cycles in production environments",
  },
  {
    value: 31,
    suffix: "",
    label: "Enterprise clients",
    description: "Operating in 12 industries across 4 continents",
  },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, target]);

  return (
    <span ref={ref} className="font-syne tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      id="results"
      className="py-24 lg:py-32"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          className="mb-16 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="font-syne text-[10px] font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "var(--accent)" }}
          >
            By the numbers
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1.08]"
            style={{ color: "var(--text)" }}
          >
            Results that
            <br />
            compound over time.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px" style={{ background: "var(--border)" }}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="p-10 lg:p-12"
              style={{ background: "var(--bg)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="font-syne text-5xl lg:text-6xl font-bold tracking-tighter mb-3"
                style={{ color: "var(--text)" }}
              >
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p
                className="font-syne text-base font-semibold tracking-tight mb-2"
                style={{ color: "var(--text)" }}
              >
                {stat.label}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
