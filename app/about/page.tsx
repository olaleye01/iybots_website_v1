import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Iybots Technologies — AI Automation Experts in Lagos",
  description:
    "Learn about Iybots Technologies, an AI automation agency in Lagos, Nigeria. Our team builds custom AI systems, workflow automation, and document intelligence for businesses worldwide.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Iybots Technologies — AI Automation Experts",
    description:
      "Meet the team behind 847+ deployed automation workflows. Custom AI systems for businesses across 12 industries and 4 continents.",
    url: "https://iybots.com/about",
  },
};

const values = [
  {
    title: "Precision over speed",
    description:
      "We'd rather deploy a system that works flawlessly on day one than rush something to production that needs constant babysitting. Every automation we build is tested against edge cases before your team ever sees it.",
  },
  {
    title: "Transparency by default",
    description:
      "You own every piece of code, documentation, and architecture we produce. No vendor lock-in, no black boxes, no proprietary wrappers. Your team gets the keys, not a dependency on us.",
  },
  {
    title: "Compound impact",
    description:
      "We don't build one-off tools. Every system we deploy is designed to get better as your business scales — learning from data, adapting to new edge cases, and reducing marginal cost over time.",
  },
  {
    title: "Human-in-the-loop",
    description:
      "AI should augment your team, not replace their judgment. Every agent we build includes escalation paths, audit trails, and override mechanisms. Automation handles the volume; your team handles the exceptions.",
  },
];

const milestones = [
  { year: "2023", event: "Founded in Lagos, Nigeria with a focus on AI agent development" },
  { year: "2023", event: "Deployed first enterprise AI pipeline for Ferrum Capital" },
  { year: "2024", event: "Expanded to 15+ enterprise clients across 3 continents" },
  { year: "2024", event: "Launched document intelligence vertical" },
  { year: "2025", event: "847+ workflows deployed, serving 31 enterprise clients" },
  { year: "2025", event: "Expanded operations across 12 industries, 4 continents" },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <p
              className="font-syne text-[10px] font-semibold uppercase tracking-[0.2em] mb-6"
              style={{ color: "var(--accent)" }}
            >
              About Us
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.04] mb-8"
              style={{ color: "var(--text)" }}
            >
              We build AI systems
              <br />
              that earn their place
              <br />
              in your stack.
            </h1>
            <p
              className="text-lg leading-relaxed max-w-[60ch]"
              style={{ color: "var(--muted)" }}
            >
              Iybots Technologies is an AI automation agency based in Lagos, Nigeria. 
              We design and deploy custom automation systems — intelligent agents, 
              workflow orchestration, document intelligence, and CRM integration — 
              for businesses that need to move faster than their processes allow. 
              Every system we build is custom-fitted to your existing tech stack 
              and shipped in weeks, not quarters.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section
          className="py-20 lg:py-28"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p
                  className="font-syne text-[10px] font-semibold uppercase tracking-[0.2em] mb-4"
                  style={{ color: "var(--accent)" }}
                >
                  Our Mission
                </p>
                <h2
                  className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1.08] mb-6"
                  style={{ color: "var(--text)" }}
                >
                  Eliminate repetitive work.
                  <br />
                  Permanently.
                </h2>
                <p
                  className="text-base leading-relaxed max-w-[50ch]"
                  style={{ color: "var(--muted)" }}
                >
                  Every business has processes that consume human attention but don&apos;t 
                  require human judgment. Data entry, lead qualification, document 
                  processing, pipeline management — these tasks are predictable, 
                  rule-based, and high-volume. They&apos;re exactly what AI does best.
                </p>
                <p
                  className="text-base leading-relaxed max-w-[50ch] mt-4"
                  style={{ color: "var(--muted)" }}
                >
                  We exist to identify these opportunities and build production-grade 
                  automation that handles them reliably, at scale, forever. Not proof 
                  of concepts. Not demos. Real systems that run in production and 
                  deliver measurable ROI.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "847+", label: "Workflows deployed" },
                  { value: "63.4%", label: "Avg time saved" },
                  { value: "14ms", label: "Median response" },
                  { value: "31", label: "Enterprise clients" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="surface-card rounded-2xl p-6"
                  >
                    <p
                      className="font-syne text-3xl font-bold tracking-tight mb-2"
                      style={{ color: "var(--text)" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-sm" style={{ color: "var(--muted)" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section
          className="py-20 lg:py-28"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <p
              className="font-syne text-[10px] font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "var(--accent)" }}
            >
              Our Values
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1.08] mb-16"
              style={{ color: "var(--text)" }}
            >
              How we think about
              <br />
              building systems.
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="surface-card rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                    <h3
                      className="font-syne text-xl font-bold tracking-tight"
                      style={{ color: "var(--text)" }}
                    >
                      {value.title}
                    </h3>
                  </div>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section
          className="py-20 lg:py-28"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <p
              className="font-syne text-[10px] font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "var(--accent)" }}
            >
              Our Journey
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1.08] mb-16"
              style={{ color: "var(--text)" }}
            >
              From first agent
              <br />
              to global operations.
            </h2>
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[80px_1fr] gap-6 py-6"
                  style={{
                    borderTop: i > 0 ? "1px solid var(--border)" : undefined,
                  }}
                >
                  <span
                    className="font-syne text-sm font-semibold tabular-nums"
                    style={{ color: "var(--accent)" }}
                  >
                    {m.year}
                  </span>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {m.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-20 lg:py-28"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1.08] mb-6"
              style={{ color: "var(--text)" }}
            >
              Ready to automate?
            </h2>
            <p
              className="text-base leading-relaxed mb-10 max-w-[50ch] mx-auto"
              style={{ color: "var(--muted)" }}
            >
              Book a 30-minute discovery call. We&apos;ll map the highest-value 
              automation opportunity in your business and tell you exactly what 
              it would take to build it.
            </p>
            <a
              href="/contact"
              className="font-syne inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm"
              style={{ background: "var(--accent)", color: "#09090b" }}
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
