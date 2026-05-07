import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "AI Agent Development", href: "/services#ai-agent-development" },
    { label: "Workflow Automation", href: "/services#workflow-automation" },
    { label: "Document Intelligence", href: "/services#document-intelligence" },
    { label: "CRM Automation", href: "/services#crm-automation" },
    { label: "Data Infrastructure", href: "/services#data-infrastructure" },
    { label: "API Integration", href: "/services#api-integration" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="py-16 lg:py-20"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Home">
              <Image
                src="/iybots-logo.svg"
                alt="Iybots Technologies"
                width={100}
                height={27}
                className="mb-4"
              />
            </Link>
            <p
              className="text-sm leading-relaxed max-w-[28ch]"
              style={{ color: "var(--muted)" }}
            >
              Custom AI systems that cut manual work and scale with your business.
            </p>
            <p
              className="text-xs mt-6"
              style={{ color: "var(--muted)" }}
            >
              ibrahim@iybots.com
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p
                className="font-syne text-[10px] font-semibold uppercase tracking-[0.18em] mb-5"
                style={{ color: "var(--muted)" }}
              >
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: "var(--muted)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            &copy; {new Date().getFullYear()} Iybots Technologies. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            Built for businesses that move faster than their processes.
          </p>
        </div>
      </div>
    </footer>
  );
}
