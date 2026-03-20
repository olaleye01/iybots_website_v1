"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function MagneticWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 22 });
  const springY = useSpring(y, { stiffness: 220, damping: 22 });

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
      {children}
    </motion.div>
  );
}

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50"
      style={{
        transition: "background 0.35s, border-color 0.35s, backdrop-filter 0.35s",
        background: scrolled ? "rgba(9,9,11,0.88)" : "transparent",
        borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
        backdropFilter: scrolled ? "blur(20px) saturate(160%)" : "none",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/iybots-logo.svg"
            alt="Iybots Technologies"
            width={100}
            height={27}
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="font-syne text-sm font-medium transition-colors duration-200 hover:text-white"
              style={{ color: "var(--muted)" }}
            >
              {label}
            </Link>
          ))}
        </div>

        <MagneticWrapper>
          <a
            href="#contact"
            className="font-syne px-4 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all duration-150 active:scale-[0.97] active:-translate-y-[1px]"
            style={{
              background: "var(--accent)",
              color: "#09090b",
              letterSpacing: "0.06em",
            }}
          >
            Book a Call
          </a>
        </MagneticWrapper>
      </div>
    </nav>
  );
}
