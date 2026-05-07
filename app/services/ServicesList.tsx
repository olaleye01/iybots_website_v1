const services = [
  {
    id: "ai-agent-development",
    title: "AI Agent Development",
    subtitle: "Autonomous intelligence for your operations",
    description:
      "We build custom AI agents that operate autonomously across your systems — researching, deciding, and acting without manual intervention. These aren't chatbots or simple rule engines. They're production-grade autonomous systems with memory, reasoning, and the ability to use tools across your entire stack.",
    capabilities: [
      "Multi-agent orchestration — coordinate multiple specialized agents working in parallel",
      "Persistent memory — agents learn from past interactions and improve over time",
      "Tool use and function calling — agents interact with APIs, databases, and internal systems",
      "Human-in-the-loop escalation — intelligent routing to humans for edge cases",
      "Production monitoring — full observability with logging, metrics, and alerting",
    ],
    useCases: ["Research & intelligence", "Lead qualification", "Support triage", "Report generation"],
    result: "We've replaced entire analyst workflows with agents that run 24/7 without accumulating errors.",
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    subtitle: "End-to-end process orchestration",
    description:
      "We connect every tool in your stack into seamless automated workflows that eliminate handoffs, manual triggers, and human bottlenecks. From simple trigger-action sequences to complex multi-step orchestrations with conditional logic, error handling, and real-time monitoring.",
    capabilities: [
      "Trigger-based automation — events, schedules, webhooks, and manual triggers",
      "Cross-platform orchestration — connect any SaaS tool, database, or internal system",
      "Conditional branching — dynamic routing based on data, rules, or AI decisions",
      "Error handling and retry logic — graceful failure management with human escalation",
      "Real-time status monitoring — dashboards and alerts for every running workflow",
    ],
    useCases: ["Employee onboarding", "Order processing", "Invoice approval", "Campaign orchestration"],
    result: "Teams save an average of 63.4% of time per automated process within 30 days of deployment.",
  },
  {
    id: "document-intelligence",
    title: "Document Intelligence",
    subtitle: "AI-powered extraction at scale",
    description:
      "We build intelligent document processing systems that extract, classify, and route structured data from any document type — invoices, contracts, forms, emails, PDFs, and scanned images. Our systems combine OCR with LLM-powered understanding to handle documents that traditional extraction tools can't.",
    capabilities: [
      "OCR + LLM extraction — understand document structure, not just text",
      "Template-free processing — handle new document formats without retraining",
      "Multi-language support — process documents in any language",
      "Classification and routing — automatically categorize and direct documents",
      "Accuracy validation — confidence scoring with human review for edge cases",
    ],
    useCases: ["Invoice processing", "Contract analysis", "Claims processing", "Legal review"],
    result: "Our systems process 400+ documents per week at 97.1% extraction accuracy.",
  },
  {
    id: "crm-automation",
    title: "CRM & Pipeline Automation",
    subtitle: "Revenue operations on autopilot",
    description:
      "We automate the entire sales pipeline — from lead capture to deal close — eliminating the manual CRM hygiene that drains your team's time. AI-powered lead scoring, automated assignment, personalized follow-up sequences, and real-time pipeline analytics.",
    capabilities: [
      "AI-powered lead scoring — predict conversion probability from behavioral signals",
      "Auto-routing and assignment — match leads to the right rep based on fit and capacity",
      "Personalized sequences — automated follow-ups that feel human",
      "Pipeline analytics — real-time visibility into deal velocity and bottlenecks",
      "CRM data enrichment — automatically fill in missing contact and company data",
    ],
    useCases: ["Lead qualification", "Sales follow-up", "Pipeline forecasting", "Lifecycle management"],
    result: "What used to consume 18 hours of SDR time per week now runs end-to-end without a single manual step.",
  },
  {
    id: "data-infrastructure",
    title: "Data Infrastructure",
    subtitle: "Operational data that's actually useful",
    description:
      "We build real-time data pipelines, transformation layers, and warehousing solutions that turn your raw operational data into analytics-ready outputs. From ETL/ELT pipeline design to streaming architectures and data modeling.",
    capabilities: [
      "ETL/ELT pipeline design — reliable data movement at any scale",
      "Real-time streaming — sub-second data availability for operational decisions",
      "Data warehousing and modeling — structured, queryable data stores",
      "Quality monitoring — automated data quality checks and anomaly detection",
      "Analytics-ready outputs — clean data feeds for BI tools and dashboards",
    ],
    useCases: ["Executive dashboards", "Supply chain tracking", "Customer analytics", "Financial reporting"],
    result: "14ms median response time for AI agent decision cycles in production data environments.",
  },
  {
    id: "api-integration",
    title: "Custom API Integration",
    subtitle: "Connect anything to anything",
    description:
      "We integrate any combination of tools, internal systems, and third-party APIs into a cohesive automation layer. We work with whatever documentation exists — including none. REST, GraphQL, webhooks, custom protocols, and even reverse-engineered undocumented APIs.",
    capabilities: [
      "REST and GraphQL integration — standard API connectivity",
      "Webhook management — real-time event-driven communication",
      "Rate limiting and error handling — production-grade reliability",
      "Reverse engineering — integrating with undocumented or legacy APIs",
      "Authentication flow management — OAuth, API keys, JWT, custom auth",
    ],
    useCases: ["Legacy modernization", "Unified API layers", "Data migration", "Custom middleware"],
    result: "We work with whatever documentation exists, including none — and ship reliable integrations in weeks.",
  },
];

export default function ServicesList() {
  return (
    <>
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className="py-20 lg:py-24"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
              <div>
                <span
                  className="font-syne text-[80px] lg:text-[100px] font-bold tracking-tighter leading-none select-none block mb-4"
                  style={{ color: "transparent", WebkitTextStroke: "1px var(--muted-2)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold tracking-tighter leading-[1.08] mb-3"
                  style={{ color: "var(--text)" }}
                >
                  {service.title}
                </h2>
                <p className="font-syne text-sm font-medium mb-6" style={{ color: "var(--accent)" }}>
                  {service.subtitle}
                </p>
                <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                  {service.description}
                </p>
                <div
                  className="mt-8 p-5 rounded-xl"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>
                    <span style={{ color: "var(--accent)" }}>↳</span> {service.result}
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3
                    className="font-syne text-sm font-semibold uppercase tracking-[0.1em] mb-4"
                    style={{ color: "var(--text)" }}
                  >
                    Capabilities
                  </h3>
                  <ul className="space-y-3">
                    {service.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-start gap-3 text-sm leading-relaxed"
                        style={{ color: "var(--muted)" }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ background: "var(--accent)" }}
                        />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3
                    className="font-syne text-sm font-semibold uppercase tracking-[0.1em] mb-4"
                    style={{ color: "var(--text)" }}
                  >
                    Use Cases
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((uc) => (
                      <span
                        key={uc}
                        className="font-syne text-xs px-3 py-1.5 rounded-full"
                        style={{ background: "var(--surface)", color: "var(--muted)", border: "1px solid var(--border)" }}
                      >
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
