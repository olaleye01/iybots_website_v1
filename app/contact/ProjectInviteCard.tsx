"use client";

import { motion } from "framer-motion";
import { Clock, Lightning, FileText, ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";

export default function ProjectInviteCard() {
  return (
    <div className="relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[var(--accent)] blur-[100px] opacity-[0.15] rounded-full" />
      
      {/* Main Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-[2rem] p-8 lg:p-10"
        style={{
          background: "rgba(17, 17, 22, 0.6)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 20px 40px -10px rgba(0,0,0,0.5)"
        }}
      >
        <p className="font-syne text-[10px] font-semibold uppercase tracking-[0.2em] mb-4 text-[var(--accent)]">
          Project Brief
        </p>
        <h2 className="font-syne text-3xl font-bold tracking-tight mb-4 text-white">
          Tell us what you want to build
        </h2>
        <p className="text-base leading-relaxed mb-8 text-[var(--muted)]">
          Skip the long form. Answer a few quick questions and we’ll understand your project, your goals, and the best automation path for your business.
        </p>

        {/* Benefit Rows */}
        <div className="space-y-4 mb-10">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-[var(--accent)] flex-shrink-0">
              <Clock size={16} weight="fill" />
            </div>
            <span className="text-sm font-medium text-white/90">Takes less than 2 minutes</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-[var(--accent)] flex-shrink-0">
              <Lightning size={16} weight="fill" />
            </div>
            <span className="text-sm font-medium text-white/90">Helps us understand your needs faster</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-[var(--accent)] flex-shrink-0">
              <FileText size={16} weight="fill" />
            </div>
            <span className="text-sm font-medium text-white/90">Creates a clear project brief</span>
          </div>
        </div>

        {/* Animated Preview Stack */}
        <div className="relative h-[140px] mb-10 w-full max-w-sm mx-auto">
          {/* Progress line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent opacity-30" />
          
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 right-6 bg-[#18181d] border border-white/10 rounded-xl p-3 flex items-center gap-3 shadow-lg z-30"
          >
            <div className="w-6 h-6 rounded-full bg-[var(--accent-dim)] text-[var(--accent)] flex items-center justify-center text-xs font-bold font-syne">1</div>
            <span className="text-xs font-medium text-white/90">Choose project type</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-11 left-4 right-2 bg-[#18181d] border border-white/10 rounded-xl p-3 flex items-center gap-3 shadow-lg z-20 opacity-80 scale-[0.96]"
          >
            <div className="w-6 h-6 rounded-full bg-white/5 text-white/50 flex items-center justify-center text-xs font-bold font-syne">2</div>
            <span className="text-xs font-medium text-white/60">Select your business goal</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 2, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[88px] left-8 right-[-8px] bg-[#18181d] border border-white/10 rounded-xl p-3 flex items-center gap-3 shadow-lg z-10 opacity-60 scale-[0.92]"
          >
            <div className="w-6 h-6 rounded-full bg-white/5 text-white/50 flex items-center justify-center text-xs font-bold font-syne">3</div>
            <span className="text-xs font-medium text-white/40">Submit your brief</span>
          </motion.div>
        </div>

        {/* CTA */}
        <Link href="/start-project" className="block w-full">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full font-syne flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-[var(--accent)] text-[#09090b] shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(217,119,6,0.4)] transition-shadow"
          >
            Start Project Flow
            <ArrowRight weight="bold" className="w-4 h-4" />
          </motion.button>
        </Link>

        {/* Secondary */}
        <p className="text-center mt-6 text-sm text-[var(--muted)]">
          Prefer email? Reach us at{" "}
          <a href="mailto:ibrahim@iybots.com" className="text-white hover:text-[var(--accent)] transition-colors">
            ibrahim@iybots.com
          </a>
        </p>

      </motion.div>
    </div>
  );
}
