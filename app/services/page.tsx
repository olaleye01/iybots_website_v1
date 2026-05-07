import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ServicesList from "./ServicesList";

export const metadata: Metadata = {
  title: "AI Automation Services — Custom AI Agents, Workflows & Integrations",
  description:
    "Explore Iybots Technologies' full suite of AI automation services: AI agent development, workflow automation, document intelligence, CRM automation, data pipelines, and custom API integration.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "AI Automation Services — Iybots Technologies",
    description:
      "Full-stack AI automation: agents, workflows, document intelligence, CRM, data pipelines, and API integration. Custom-built for your stack.",
    url: "https://iybots.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <p
              className="font-syne text-[10px] font-semibold uppercase tracking-[0.2em] mb-6"
              style={{ color: "var(--accent)" }}
            >
              Services
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.04] mb-8"
              style={{ color: "var(--text)" }}
            >
              Every layer of your
              <br />
              automation stack.
            </h1>
            <p
              className="text-lg leading-relaxed max-w-[60ch]"
              style={{ color: "var(--muted)" }}
            >
              We cover the full stack — from AI agent orchestration to low-level
              API integration. One vendor, one coherent system, zero gaps between
              components. Each service is custom-built for your existing tech stack.
            </p>
          </div>
        </section>

        <ServicesList />

        <section
          className="py-20 lg:py-28"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1.08] mb-6"
              style={{ color: "var(--text)" }}
            >
              Not sure which service
              <br />
              you need?
            </h2>
            <p
              className="text-base leading-relaxed mb-10 max-w-[50ch] mx-auto"
              style={{ color: "var(--muted)" }}
            >
              Book a discovery call and we&apos;ll audit your operations for free.
              We&apos;ll identify the highest-ROI automation opportunities and recommend
              exactly what to build first.
            </p>
            <a
              href="#"
              data-cal-link="ibrahim-from-iybots-ybtypr/15min"
              data-cal-namespace="15min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              className="font-syne inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-150 active:scale-[0.97]"
              style={{ background: "var(--accent)", color: "#09090b" }}
            >
              Book a Discovery Call
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
