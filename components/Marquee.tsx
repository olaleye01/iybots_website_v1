const capabilities = [
  "Workflow Automation",
  "AI Agent Development",
  "Document Intelligence",
  "CRM Integration",
  "Data Pipelines",
  "Process Mining",
  "API Orchestration",
  "Custom AI Models",
  "RPA Augmentation",
  "Intelligent Routing",
  "Predictive Analytics",
  "Contract Analysis",
];

export default function Marquee() {
  const doubled = [...capabilities, ...capabilities];

  return (
    <div
      className="w-full py-5 overflow-hidden"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((cap, i) => (
          <span key={i} className="inline-flex items-center">
            <span
              className="text-xs font-medium uppercase tracking-[0.14em] px-8"
              style={{ color: "var(--muted)" }}
            >
              {cap}
            </span>
            <span
              className="w-1 h-1 rounded-full flex-shrink-0"
              style={{ background: "var(--muted-2)" }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
