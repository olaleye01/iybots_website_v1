"use client";

import { motion } from "framer-motion";
import {
  Robot,
  GitBranch,
  FileText,
  UsersThree,
  Database,
  Plugs,
} from "@phosphor-icons/react";

const services = [
  {
    id: "agents",
    icon: Robot,
    label: "AI Agent Development",
    description:
      "Custom autonomous agents that research, decide, and act across your systems. We've replaced entire analyst workflows with agents that run 24/7 without accumulating errors.",
    tags: ["Multi-agent orchestration", "Memory & reasoning", "Tool use", "Human-in-the-loop"],
    featured: true,
  },
  {
    id: "workflow",
    icon: GitBranch,
    label: "Workflow Automation",
    description:
      "End-to-end process automation connecting every tool in your stack, eliminating handoffs and manual triggers.",
    tags: ["Trigger-based", "Cross-platform", "Error handling"],
    featured: false,
  },
  {
    id: "docs",
    icon: FileText,
    label: "Document Intelligence",
    description:
      "Extract, classify, and route structured data from any document type: invoices, contracts, forms, emails.",
    tags: ["OCR + LLM", "Classification", "Routing"],
    featured: false,
  },
  {
    id: "crm",
    icon: UsersThree,
    label: "CRM & Pipeline Automation",
    description:
      "Automated lead scoring, assignment, follow-up sequences, and deal tracking without manual CRM hygiene.",
    tags: ["Lead scoring", "Auto-routing", "Sequences"],
    featured: false,
  },
  {
    id: "data",
    icon: Database,
    label: "Data Infrastructure",
    description:
      "Real-time data pipelines, transformation layers, and warehousing that make your operational data actually useful.",
    tags: ["ETL/ELT", "Streaming", "Warehousing"],
    featured: false,
  },
  {
    id: "api",
    icon: Plugs,
    label: "Custom API Integration",
    description:
      "Connect any combination of tools, internal systems, and third-party APIs. We work with whatever documentation exists, including none.",
    tags: ["REST / GraphQL", "Webhooks", "Reverse engineering"],
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ServicesGrid() {
  const featured = services[0];
  const rest = services.slice(1);

  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          className="mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="font-syne text-[10px] font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: "var(--accent)" }}
          >
            Services
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1.08] mb-4"
            style={{ color: "var(--text)" }}
          >
            Every layer of your
            <br />
            automation stack.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            We cover the full stack, from agent orchestration to low-level API
            integration. One vendor, one coherent system.
          </p>
        </motion.div>

        {/* Bento grid — 5 columns asymmetric */}
        <motion.div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(5, 1fr)",
            gridTemplateRows: "auto auto auto",
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Featured — spans col 1-3, rows 1-2 */}
          <motion.div
            variants={cardVariants}
            className="surface-card rounded-[2rem] p-8 lg:p-10 flex flex-col"
            style={{
              gridColumn: "1 / 4",
              gridRow: "1 / 3",
            }}
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: "var(--accent-dim, rgba(217,119,6,0.12))" }}
            >
              <featured.icon weight="duotone" className="w-6 h-6" style={{ color: "var(--accent)" }} />
            </div>
            <p
              className="font-syne text-[10px] font-semibold uppercase tracking-[0.18em] mb-3"
              style={{ color: "var(--accent)" }}
            >
              Featured
            </p>
            <h3
              className="text-2xl font-bold tracking-tight mb-4"
              style={{ color: "var(--text)" }}
            >
              {featured.label}
            </h3>
            <p
              className="text-base leading-relaxed mb-8 flex-1 max-w-[50ch]"
              style={{ color: "var(--muted)" }}
            >
              {featured.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-syne text-xs px-3 py-1.5 rounded-full"
                  style={{
                    background: "var(--surface-2, #18181d)",
                    color: "var(--muted)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2 — col 4-5, row 1 */}
          {rest.slice(0, 2).map((svc, i) => (
            <motion.div
              key={svc.id}
              variants={cardVariants}
              className="surface-card rounded-[2rem] p-7 flex flex-col"
              style={{
                gridColumn: "4 / 6",
                gridRow: `${i + 1} / ${i + 2}`,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "var(--surface-2, #18181d)" }}
              >
                <svc.icon weight="duotone" className="w-5 h-5" style={{ color: "var(--muted)" }} />
              </div>
              <h3
                className="text-lg font-bold tracking-tight mb-3"
                style={{ color: "var(--text)" }}
              >
                {svc.label}
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                {svc.description}
              </p>
            </motion.div>
          ))}

          {/* Cards 4–6 — bottom row */}
          {rest.slice(2).map((svc, i) => (
            <motion.div
              key={svc.id}
              variants={cardVariants}
              className="surface-card rounded-[2rem] p-7 flex flex-col"
              style={{
                gridColumn: i === 0 ? "1 / 3" : i === 1 ? "3 / 4" : "4 / 6",
                gridRow: "3 / 4",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "var(--surface-2, #18181d)" }}
              >
                <svc.icon weight="duotone" className="w-5 h-5" style={{ color: "var(--muted)" }} />
              </div>
              <h3
                className="text-base font-bold tracking-tight mb-2"
                style={{ color: "var(--text)" }}
              >
                {svc.label}
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>
                {svc.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile fallback — single column */}
        <style>{`
          @media (max-width: 767px) {
            #services .grid {
              grid-template-columns: 1fr !important;
              grid-template-rows: auto !important;
            }
            #services .grid > div {
              grid-column: 1 / 2 !important;
              grid-row: auto !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
