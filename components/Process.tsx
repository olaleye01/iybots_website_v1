"use client";

import { motion } from "framer-motion";
import { MagnifyingGlass, Compass, Rocket, ChartLineUp } from "@phosphor-icons/react";

const steps = [
  {
    number: "01",
    label: "Discover",
    icon: MagnifyingGlass,
    description:
      "We map your current operations: every manual step, every bottleneck, every repetitive task. Then we rank automation opportunities by ROI and build a prioritized roadmap.",
    deliverable: "Operations audit + automation roadmap",
  },
  {
    number: "02",
    label: "Design",
    icon: Compass,
    description:
      "We architect an automation system tailored to your tech stack, data models, and team workflows. No off-the-shelf templates. Everything is built to fit your existing setup.",
    deliverable: "System architecture + integration spec",
  },
  {
    number: "03",
    label: "Deploy",
    icon: Rocket,
    description:
      "We build, test, and integrate each automation with your existing tools. Full documentation is included. Your team gets the keys, not a dependency on us.",
    deliverable: "Production-ready system + documentation",
  },
  {
    number: "04",
    label: "Optimize",
    icon: ChartLineUp,
    description:
      "We monitor performance, measure impact, and iterate as your business scales. Automation is a living system. We keep it accurate, fast, and useful.",
    deliverable: "Monthly performance reports + iterations",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="mb-20 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="font-syne text-[10px] font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "var(--accent)" }}
          >
            How we work
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1.08]"
            style={{ color: "var(--text)" }}
          >
            From discovery
            <br />
            to compounding results.
          </h2>
        </motion.div>

        {/* Steps — alternating layout */}
        <div className="space-y-12 lg:space-y-0">
          {steps.map((step, i) => {
            const isRight = i % 2 !== 0;
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center lg:py-16"
                style={{
                  borderTop: i > 0 ? "1px solid var(--border)" : undefined,
                }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Number side */}
                <div className={`${isRight ? "lg:order-2" : ""}`}>
                  <div className="flex items-baseline gap-4 mb-2">
                    <span
                      className="font-syne text-[80px] lg:text-[100px] font-bold tracking-tighter leading-none select-none"
                      style={{
                        color: "transparent",
                        WebkitTextStroke: "1px var(--muted-2)",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content side */}
                <div className={`${isRight ? "lg:order-1" : ""}`}>
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                  >
                    <Icon weight="duotone" className="w-5 h-5" style={{ color: "var(--accent)" }} />
                  </div>
                  <h3
                    className="text-3xl font-bold tracking-tight mb-4"
                    style={{ color: "var(--text)" }}
                  >
                    {step.label}
                  </h3>
                  <p
                    className="text-base leading-relaxed mb-6 max-w-[48ch]"
                    style={{ color: "var(--muted)" }}
                  >
                    {step.description}
                  </p>
                  <div
                    className="font-syne inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      color: "var(--muted)",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                    {step.deliverable}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
