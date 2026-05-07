import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Marquee from "@/components/Marquee";
import ServicesGrid from "@/components/ServicesGrid";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/* JSON-LD: Service offerings */
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "AI Automation Services by Iybots Technologies",
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "AI Agent Development",
      description:
        "Custom autonomous agents that research, decide, and act across your systems. Multi-agent orchestration, memory & reasoning, tool use, human-in-the-loop.",
      provider: { "@id": "https://iybots.com/#organization" },
      serviceType: "AI Agent Development",
      areaServed: "Worldwide",
    },
    {
      "@type": "Service",
      position: 2,
      name: "Workflow Automation",
      description:
        "End-to-end process automation connecting every tool in your stack, eliminating handoffs and manual triggers.",
      provider: { "@id": "https://iybots.com/#organization" },
      serviceType: "Workflow Automation",
      areaServed: "Worldwide",
    },
    {
      "@type": "Service",
      position: 3,
      name: "Document Intelligence",
      description:
        "Extract, classify, and route structured data from any document type: invoices, contracts, forms, emails. OCR + LLM powered.",
      provider: { "@id": "https://iybots.com/#organization" },
      serviceType: "Document Processing",
      areaServed: "Worldwide",
    },
    {
      "@type": "Service",
      position: 4,
      name: "CRM & Pipeline Automation",
      description:
        "Automated lead scoring, assignment, follow-up sequences, and deal tracking without manual CRM hygiene.",
      provider: { "@id": "https://iybots.com/#organization" },
      serviceType: "CRM Automation",
      areaServed: "Worldwide",
    },
    {
      "@type": "Service",
      position: 5,
      name: "Data Infrastructure",
      description:
        "Real-time data pipelines, transformation layers, and warehousing. ETL/ELT, streaming, and analytics-ready outputs.",
      provider: { "@id": "https://iybots.com/#organization" },
      serviceType: "Data Engineering",
      areaServed: "Worldwide",
    },
    {
      "@type": "Service",
      position: 6,
      name: "Custom API Integration",
      description:
        "Connect any combination of tools, internal systems, and third-party APIs. REST, GraphQL, webhooks, and reverse engineering.",
      provider: { "@id": "https://iybots.com/#organization" },
      serviceType: "API Integration",
      areaServed: "Worldwide",
    },
  ],
};

/* JSON-LD: Client reviews/testimonials */
const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://iybots.com/#organization",
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Marcus Adebayo",
        jobTitle: "COO",
        worksFor: { "@type": "Organization", name: "Ferrum Capital" },
      },
      reviewBody:
        "Iybots rebuilt our entire lead qualification flow in three weeks. What used to consume 18 hours of SDR time per week now runs end-to-end without a single manual step. The accuracy is better than what our team was achieving.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5,
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Lena Voss",
        jobTitle: "Head of Operations",
        worksFor: { "@type": "Organization", name: "Ardent Labs" },
      },
      reviewBody:
        "We were skeptical about AI automation fitting into our compliance-heavy operations. Iybots handled every constraint and built audit logs into each step. Our ops team now spends time on exceptions, not routine processing.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5,
      },
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Tariq Nasser",
        jobTitle: "Founder",
        worksFor: { "@type": "Organization", name: "Meridian Ventures" },
      },
      reviewBody:
        "The document intelligence system they built processes 400+ contracts a week with a 97.1% extraction accuracy. We cut our legal review prep time by more than half.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5,
      },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 5,
    reviewCount: 3,
    bestRating: 5,
  },
};

export default function Home() {
  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewsSchema).replace(/</g, "\\u003c"),
        }}
      />

      <Nav />
      <main>
        <Hero />
        <Clients />
        <Marquee />
        <ServicesGrid />
        <Process />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
