const footerLinks = {
  Services: [
    "AI Agent Development",
    "Workflow Automation",
    "Document Intelligence",
    "CRM Automation",
    "Data Pipelines",
    "API Integration",
  ],
  Company: ["About", "Case Studies", "Blog", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
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
            <span
              className="text-[11px] font-bold tracking-[0.3em] uppercase block mb-4"
              style={{ color: "var(--text)" }}
            >
              IYBOTS
            </span>
            <p
              className="text-sm leading-relaxed max-w-[28ch]"
              style={{ color: "var(--muted)" }}
            >
              Custom AI systems that cut manual work and scale with your business.
            </p>
            <p
              className="text-xs mt-6"
              style={{ color: "var(--muted-2)" }}
            >
              hello@iybots.com
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-5"
                style={{ color: "var(--muted)" }}
              >
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: "var(--muted-2)" }}
                    >
                      {link}
                    </a>
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
          <p className="text-xs" style={{ color: "var(--muted-2)" }}>
            &copy; {new Date().getFullYear()} Iybots Technologies. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--muted-2)" }}>
            Built for businesses that move faster than their processes.
          </p>
        </div>
      </div>
    </footer>
  );
}
