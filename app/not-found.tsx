"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    if (countdown === 0) {
      router.push("/");
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown, router]);

  return (
    <>
      <Nav />
      <main className="min-h-[100dvh] flex items-center justify-center pt-[64px]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              className="text-[120px] md:text-[180px] font-bold tracking-tighter leading-none mb-4"
              style={{ color: "var(--accent)" }}
            >
              404
            </h1>
            <h2
              className="text-3xl md:text-4xl font-syne font-bold tracking-tight mb-6"
              style={{ color: "var(--text)" }}
            >
              System Error: Page Not Found
            </h2>
            <p
              className="text-base leading-relaxed mb-10 max-w-[50ch] mx-auto"
              style={{ color: "var(--muted)" }}
            >
              It looks like you've wandered into an undocumented sector. 
              The page you're looking for doesn't exist or has been moved.
              <br /><br />
              Redirecting to the home page in{" "}
              <span style={{ color: "var(--accent)" }} className="font-mono font-bold">
                {countdown}
              </span>{" "}
              seconds...
            </p>

            <motion.button
              onClick={() => router.push("/")}
              className="font-syne inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-150 active:scale-[0.97]"
              style={{ background: "var(--surface)", color: "var(--text)", border: "1px solid var(--border)" }}
              whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
            >
              Return Home Now
              <ArrowRight weight="bold" className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
