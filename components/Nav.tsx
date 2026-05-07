"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";

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
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <a href="/" className="flex items-center" aria-label="Home">
          <Image
            src="/iybots-logo.svg"
            alt="Iybots Technologies"
            width={100}
            height={27}
            priority
          />
        </a>

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

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <MagneticWrapper>
              <a
                href="#"
                data-cal-link="ibrahim-from-iybots-ybtypr/15min"
                data-cal-namespace="15min"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
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
          
          <button
            className="md:hidden text-white p-1 hover:text-gray-300 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <List size={28} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-[#09090b] flex flex-col px-6 pt-4 pb-12 overflow-y-auto"
          >
            <div className="max-w-[1400px] w-full mx-auto flex items-center justify-between">
              <a href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/iybots-logo.svg"
                  alt="Iybots Technologies"
                  width={100}
                  height={27}
                  priority
                />
              </a>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white p-1 hover:text-gray-300 transition-colors"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            
            <div className="flex flex-col gap-8 mt-24 items-center">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-syne text-3xl font-medium text-white transition-colors hover:text-gray-300"
                >
                  {label}
                </Link>
              ))}
              
              <a
                href="#"
                data-cal-link="ibrahim-from-iybots-ybtypr/15min"
                data-cal-namespace="15min"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                className="mt-8 font-syne px-8 py-4 rounded-lg text-sm font-semibold tracking-wide uppercase transition-all duration-150 active:scale-[0.97]"
                style={{ background: "var(--accent)", color: "#09090b", letterSpacing: "0.06em" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
