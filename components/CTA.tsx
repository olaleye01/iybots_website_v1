"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, CalendarBlank } from "@phosphor-icons/react";

function MagneticButton({
  href,
  children,
  primary,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 22 });
  const springY = useSpring(y, { stiffness: 200, damping: 22 });

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.3);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.3);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, display: "inline-block" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <a
        href={href}
        className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-150 active:scale-[0.97] active:-translate-y-[1px]"
        style={
          primary
            ? { background: "var(--accent)", color: "#09090b" }
            : {
                border: "1px solid var(--border)",
                color: "var(--text)",
                background: "transparent",
              }
        }
      >
        {children}
      </a>
    </motion.div>
  );
}

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-end">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-6"
              style={{ color: "var(--accent)" }}
            >
              Get started
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05] mb-6"
              style={{ color: "var(--text)" }}
            >
              Start automating in
              <br />
              14 days, or your
              <br />
              first month is free.
            </h2>
            <p
              className="text-base leading-relaxed max-w-[50ch]"
              style={{ color: "var(--muted)" }}
            >
              Book a 30-minute discovery call. We map the highest-value automation
              opportunity in your business and tell you exactly what it would take to build it.
            </p>
          </motion.div>

          {/* Right — CTAs */}
          <motion.div
            className="flex flex-col gap-3 items-start lg:items-end"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <MagneticButton href="mailto:hello@iybots.com" primary>
              <CalendarBlank weight="bold" className="w-4 h-4" />
              Schedule a Discovery Call
            </MagneticButton>
            <MagneticButton href="#services">
              See what we build
              <ArrowRight weight="bold" className="w-4 h-4" />
            </MagneticButton>
          </motion.div>
        </div>

        {/* Guarantee note */}
        <motion.div
          className="mt-16 pt-8 flex items-center gap-3"
          style={{ borderTop: "1px solid var(--border)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            If your first automation isn&apos;t live within 14 days of project kickoff, we credit your entire first month.
            No contracts. Cancel any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
