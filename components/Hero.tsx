"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Circle } from "@phosphor-icons/react";

const phrases = [
  "without extra headcount.",
  "in a fraction of the time.",
  "at scale, reliably.",
  "while your team focuses on growth.",
];

function TypewriterText() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = phrases[idx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 48);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 22);
    } else {
      setDeleting(false);
      setIdx((p) => (p + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx]);

  return (
    <span style={{ color: "var(--accent)" }}>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        style={{ display: "inline-block", marginLeft: "1px" }}
      >
        |
      </motion.span>
    </span>
  );
}

const workflowSteps = [
  { label: "CRM data extraction", status: "done", count: "1,284 records" },
  { label: "AI lead scoring", status: "active", count: "" },
  { label: "Pipeline assignment", status: "pending", count: "queued" },
];

function SpinnerIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
    >
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

function WorkflowPreview() {
  const [processed, setProcessed] = useState(847);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setProcessed((p) => (p < 1284 ? p + 1 : p));
    }, 280);
    return () => clearInterval(interval);
  }, [isPaused]);

  const pct = Math.round((processed / 1284) * 100);

  return (
    <motion.div
      className="rounded-[2rem] p-7"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.05), 0 40px 80px -20px rgba(0,0,0,0.6)",
      }}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <p
            className="font-syne text-[10px] font-semibold uppercase tracking-[0.18em] mb-1"
            style={{ color: "var(--muted)" }}
          >
            Live Automation
          </p>
          <h3 className="text-sm font-semibold" style={{ color: "var(--text)" }}>
            Lead Qualification Pipeline
          </h3>
        </div>
        <div className="flex items-center gap-2">
          {/* Pause / Resume Button */}
          <motion.button
            onClick={() => setIsPaused(!isPaused)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-1 rounded-full text-[11px] font-medium transition-colors"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "var(--text)",
            }}
          >
            {isPaused ? "Resume" : "Pause"}
          </motion.button>

          {/* Status Pill */}
          <motion.div
            animate={{
              background: isPaused ? "rgba(245, 158, 11, 0.1)" : "rgba(34,197,94,0.1)",
              borderColor: isPaused ? "rgba(245, 158, 11, 0.2)" : "rgba(34,197,94,0.2)",
            }}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border"
          >
            <motion.span
              className={`w-1.5 h-1.5 rounded-full ${isPaused ? "bg-amber-400" : "bg-green-400"}`}
              animate={{ opacity: isPaused ? 1 : [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: isPaused ? 0 : Infinity, ease: "easeInOut" }}
            />
            <motion.span
              className="text-[11px] font-medium"
              animate={{ color: isPaused ? "#fbbf24" : "#4ade80" }}
            >
              {isPaused ? "Paused" : "Running"}
            </motion.span>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isPaused && (
          <motion.p
            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
            animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
            className="text-[11px] text-amber-400/80 mb-4"
          >
            Automation paused. Resume anytime.
          </motion.p>
        )}
      </AnimatePresence>

      {!isPaused && <div className="h-4" /> /* spacer when helper text is gone */}

      {/* Steps */}
      <motion.div
        className="space-y-2.5 mb-6"
        animate={{ opacity: isPaused ? 0.6 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {workflowSteps.map((step, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-3 p-3 rounded-xl"
            animate={{
              backgroundColor: step.status === "active" && !isPaused
                ? ["#18181d", "#222228", "#18181d"]
                : "#18181d"
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {step.status === "done" && (
              <CheckCircle weight="fill" className="w-4 h-4 flex-shrink-0" style={{ color: "var(--accent)" }} />
            )}
            {step.status === "active" && (
              <SpinnerIcon
                className="w-4 h-4 flex-shrink-0"
                style={{
                  color: "var(--accent)",
                  animation: isPaused ? "none" : "spin 1s linear infinite",
                }}
              />
            )}
            {step.status === "pending" && (
              <Circle weight="regular" className="w-4 h-4 flex-shrink-0" style={{ color: "var(--muted)" }} />
            )}
            <span
              className="text-xs flex-1"
              style={{ color: step.status === "pending" ? "var(--muted)" : "var(--text)" }}
            >
              {step.label}
            </span>
            <span
              className="text-xs font-mono tabular-nums"
              style={{ color: "var(--muted)" }}
            >
              {step.status === "active" ? `${processed} / 1,284` : step.count}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-xs mb-2" style={{ color: "var(--muted)" }}>
          <span>Completion</span>
          <span className="font-mono tabular-nums">{pct}%</span>
        </div>
        <div className="h-[3px] rounded-full" style={{ background: "var(--surface-2, #18181d)" }}>
          <motion.div
            className="h-[3px] rounded-full"
            style={{ background: "var(--accent)" }}
            initial={{ width: "66%" }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Accuracy", value: "94.2%" },
          { label: "Avg time", value: "0.8s" },
          { label: "Cost / lead", value: "$0.003" },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="p-3 rounded-xl"
            style={{ background: "var(--surface-2, #18181d)" }}
          >
            <p className="text-[10px] mb-1" style={{ color: "var(--muted)" }}>
              {label}
            </p>
            <p
              className="font-syne text-base font-semibold tracking-tight"
              style={{ color: "var(--text)" }}
            >
              {value}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      className="min-h-[100dvh] flex items-center"
      style={{ paddingTop: "64px" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full py-20 lg:py-0">
        <div className="grid lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_520px] gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8"
              style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
              <span
                className="font-syne text-[10px] font-semibold uppercase tracking-[0.15em]"
                style={{ color: "var(--muted)" }}
              >
                AI Automation Agency
              </span>
            </motion.div>

            <h1
              className="text-5xl md:text-6xl xl:text-[68px] font-bold tracking-tighter leading-[1.04] mb-6"
              style={{ color: "var(--text)" }}
            >
              AI systems that
              <br />
              work for your
              <br />
              business,
            </h1>

            <p
              className="font-syne text-2xl md:text-3xl font-semibold tracking-tight mb-8"
              style={{ color: "var(--text)" }}
            >
              <TypewriterText />
            </p>

            <p
              className="text-base leading-relaxed mb-10 max-w-[55ch]"
              style={{ color: "var(--muted)" }}
            >
              Iybots builds custom AI automation systems: autonomous agents, workflow
              orchestration, document processing, and CRM integration. Each one built
              for your stack and shipped in weeks, not quarters.
            </p>

            <motion.div
              className="flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <a
                href="/start-project"
                className="font-syne inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-150 active:scale-[0.97] active:-translate-y-[1px]"
                style={{ background: "var(--accent)", color: "#09090b" }}
              >
                Start a Project
                <ArrowRight weight="bold" className="w-4 h-4" />
              </a>
              <a
                href="/services"
                className="font-syne inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:border-white/20"
                style={{ border: "1px solid var(--border)", color: "var(--text)" }}
              >
                View Services
              </a>
            </motion.div>
          </div>

          {/* Right — floating automation preview */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <WorkflowPreview />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
