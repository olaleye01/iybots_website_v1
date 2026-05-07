"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission — replace with actual API endpoint
    setTimeout(() => {
      setStatus("sent");
    }, 1200);
  };

  if (status === "sent") {
    return (
      <div className="text-center py-12">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)" }}
        >
          <span className="text-green-400 text-2xl">✓</span>
        </div>
        <h3
          className="font-syne text-xl font-bold tracking-tight mb-3"
          style={{ color: "var(--text)" }}
        >
          Message sent!
        </h3>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-medium mb-2"
            style={{ color: "var(--muted)" }}
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
            style={{
              background: "var(--surface-2, #18181d)",
              border: "1px solid var(--border)",
              color: "var(--text)",
            }}
          />
        </div>
        <div>
          <label
            htmlFor="contact-company"
            className="block text-xs font-medium mb-2"
            style={{ color: "var(--muted)" }}
          >
            Company
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            placeholder="Your company"
            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
            style={{
              background: "var(--surface-2, #18181d)",
              border: "1px solid var(--border)",
              color: "var(--text)",
            }}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block text-xs font-medium mb-2"
          style={{ color: "var(--muted)" }}
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors"
          style={{
            background: "var(--surface-2, #18181d)",
            border: "1px solid var(--border)",
            color: "var(--text)",
          }}
        />
      </div>

      <div>
        <label
          htmlFor="contact-service"
          className="block text-xs font-medium mb-2"
          style={{ color: "var(--muted)" }}
        >
          Service interested in
        </label>
        <select
          id="contact-service"
          name="service"
          className="w-full px-4 py-3 rounded-xl text-sm outline-none appearance-none"
          style={{
            background: "var(--surface-2, #18181d)",
            border: "1px solid var(--border)",
            color: "var(--muted)",
          }}
        >
          <option value="">Select a service</option>
          <option value="ai-agents">AI Agent Development</option>
          <option value="workflow">Workflow Automation</option>
          <option value="documents">Document Intelligence</option>
          <option value="crm">CRM & Pipeline Automation</option>
          <option value="data">Data Infrastructure</option>
          <option value="api">Custom API Integration</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs font-medium mb-2"
          style={{ color: "var(--muted)" }}
        >
          Tell us about your project
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="What manual processes are consuming your team's time? What tools are you currently using?"
          className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-colors"
          style={{
            background: "var(--surface-2, #18181d)",
            border: "1px solid var(--border)",
            color: "var(--text)",
          }}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="font-syne w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-150 active:scale-[0.98]"
        style={{
          background: "var(--accent)",
          color: "#09090b",
          opacity: status === "sending" ? 0.7 : 1,
        }}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      <p className="text-xs text-center" style={{ color: "var(--muted-2)" }}>
        We respond within 24 hours. No spam, ever.
      </p>
    </form>
  );
}
