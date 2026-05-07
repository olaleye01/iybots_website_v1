import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProjectInviteCard from "./ProjectInviteCard";

export const metadata: Metadata = {
  title: "Contact Us — Book a Discovery Call",
  description:
    "Get in touch with Iybots Technologies. Book a free 30-minute discovery call to discuss your AI automation needs. Based in Lagos, Nigeria — serving businesses worldwide.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Iybots Technologies — AI Automation Agency",
    description:
      "Book a free discovery call. We'll map the highest-value automation opportunity in your business and tell you exactly what it takes to build it.",
    url: "https://iybots.com/contact",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Iybots Technologies",
  url: "https://iybots.com/contact",
  mainEntity: {
    "@type": "Organization",
    "@id": "https://iybots.com/#organization",
    name: "Iybots Technologies",
    email: "ibrahim@iybots.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Nav />
      <main>
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-20">
              {/* Left */}
              <div>
                <p
                  className="font-syne text-[10px] font-semibold uppercase tracking-[0.2em] mb-6"
                  style={{ color: "var(--accent)" }}
                >
                  Get in Touch
                </p>
                <h1
                  className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.04] mb-8"
                  style={{ color: "var(--text)" }}
                >
                  Let&apos;s build your
                  <br />
                  next automation.
                </h1>
                <p
                  className="text-base leading-relaxed mb-10 max-w-[50ch]"
                  style={{ color: "var(--muted)" }}
                >
                  Book a free 30-minute discovery call. We&apos;ll map the
                  highest-value automation opportunity in your business and tell
                  you exactly what it would take to build it. No commitments, no
                  contracts.
                </p>

                <div className="space-y-6">
                  <div>
                    <p
                      className="font-syne text-xs font-semibold uppercase tracking-[0.15em] mb-2"
                      style={{ color: "var(--text)" }}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:ibrahim@iybots.com"
                      className="text-base transition-colors hover:text-white"
                      style={{ color: "var(--muted)" }}
                    >
                      ibrahim@iybots.com
                    </a>
                  </div>
                  <div>
                    <p
                      className="font-syne text-xs font-semibold uppercase tracking-[0.15em] mb-2"
                      style={{ color: "var(--text)" }}
                    >
                      Location
                    </p>
                    <p className="text-base" style={{ color: "var(--muted)" }}>
                      Lagos, Nigeria
                    </p>
                    <p className="text-sm mt-1" style={{ color: "var(--muted-2)" }}>
                      Serving businesses worldwide
                    </p>
                  </div>
                  <div>
                    <p
                      className="font-syne text-xs font-semibold uppercase tracking-[0.15em] mb-2"
                      style={{ color: "var(--text)" }}
                    >
                      Response Time
                    </p>
                    <p className="text-base" style={{ color: "var(--muted)" }}>
                      Within 24 hours
                    </p>
                  </div>
                </div>

                {/* Guarantee */}
                <div
                  className="mt-12 p-5 rounded-xl flex items-start gap-3"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                    style={{ background: "var(--accent)" }}
                  />
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    <strong style={{ color: "var(--text)" }}>14-day guarantee:</strong>{" "}
                    If your first automation isn&apos;t live within 14 days of project
                    kickoff, we credit your entire first month. No contracts. Cancel
                    any time.
                  </p>
                </div>
              </div>

              {/* Right — Project Invite Card */}
              <ProjectInviteCard />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
