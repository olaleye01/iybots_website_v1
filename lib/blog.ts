export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    slug: "how-we-automated-a-400-invoice-per-week-processing-pipeline",
    title: "How We Automated a 400-Invoice-per-Week Processing Pipeline",
    category: "Case Study",
    date: "March 15, 2026",
    readTime: "6 min read",
    excerpt: "A deep dive into the OCR + LLM architecture we built to handle unstructured invoices in multiple languages, achieving 97.1% accuracy without templates.",
    content: `
      <h2>The Problem: Unstructured Chaos</h2>
      <p>Our client, a mid-sized logistics firm, was drowning in unstructured invoices. They were processing roughly 400 invoices per week manually, with a team of four data entry clerks spending 20+ hours each just keying data into their ERP.</p>
      <p>The core issue? <strong>No two vendors used the same template.</strong> Some sent PDFs, some sent scanned JPEGs, and others just dumped the invoice details into the body of an email. Traditional OCR failed miserably because it relied on rigid bounding boxes.</p>
      
      <h2>The Architecture: Vision Models + LLMs</h2>
      <p>We engineered a pipeline that completely decoupled extraction from layout:</p>
      <ul>
        <li><strong>Ingestion:</strong> A webhook listener attached to a dedicated accounts-payable email inbox.</li>
        <li><strong>Classification & Routing:</strong> A lightweight model to classify the attachment type and run OCR if necessary (using Tesseract for legacy scans).</li>
        <li><strong>LLM Extraction:</strong> The raw text was passed to an LLM with a strict JSON schema prompt, forcing it to extract exactly: <em>Vendor Name, Invoice Date, Line Items, Tax, Total, and Due Date</em>.</li>
      </ul>

      <h2>The Results</h2>
      <p>After a 3-week deployment and tuning phase, the system achieved <strong>97.1% extraction accuracy</strong>. The client redeployed three of their data entry clerks to higher-value vendor negotiation roles, saving an estimated $140,000 annually.</p>
    `
  },
  {
    slug: "why-most-ai-agents-fail-in-production",
    title: "Why Most AI Agents Fail in Production (And How to Fix It)",
    category: "Engineering",
    date: "February 28, 2026",
    readTime: "8 min read",
    excerpt: "Chatbots are easy. Autonomous agents that can reliably mutate data in production databases are hard. Here's our framework for building agents that don't hallucinate destructive actions.",
    content: `
      <h2>The Illusion of Competence</h2>
      <p>It's incredibly easy to build a demo of an AI agent that looks magical. You give it a natural language prompt, it writes a SQL query, and it returns the data. But what happens when you deploy that agent to production with write access to your CRM?</p>
      <p><strong>Disaster.</strong></p>

      <h2>Why Agents Fail</h2>
      <p>Most agents fail because they lack <em>deterministic constraints</em>. LLMs are inherently probabilistic. If you ask an LLM to update a customer's billing address, there is a non-zero chance it might also wipe their billing history if the prompt isn't perfectly constrained.</p>
      
      <h2>The Iybots Framework for Production Agents</h2>
      <p>We build agents differently:</p>
      <ol>
        <li><strong>Tool Isolation:</strong> Our agents do not write SQL. They only have access to strictly typed REST APIs. If the agent wants to update an address, it must call the <code>updateAddress(userId, payload)</code> function.</li>
        <li><strong>Human-in-the-Loop (HITL) for Destructive Actions:</strong> Any action that mutates state beyond a certain threshold requires a Slack/Teams approval ping before execution.</li>
        <li><strong>State Machines over Chain-of-Thought:</strong> Instead of letting the agent wander infinitely, we force it through a deterministic state machine where the LLM only decides the <em>transition</em> between predefined states.</li>
      </ol>
    `
  },
  {
    slug: "lead-qualification-on-autopilot-crm-architecture",
    title: "Lead Qualification on Autopilot: The CRM Architecture",
    category: "Automation",
    date: "February 12, 2026",
    readTime: "5 min read",
    excerpt: "How to combine behavioral intent signals with LLM analysis to instantly score and route incoming leads without SDR intervention.",
    content: `
      <h2>The Bottleneck in B2B Sales</h2>
      <p>Speed to lead is everything. Yet, in most B2B orgs, a high-intent lead fills out a form, and then waits 24 to 48 hours for an SDR to manually research their company, score them, and reach out.</p>

      <h2>Building the Automated SDR</h2>
      <p>We implemented an automated qualification pipeline for a B2B SaaS client that executes the following workflow in under 4 seconds:</p>
      <ul>
        <li><strong>Enrichment:</strong> When a form is submitted, the email domain is instantly passed to Clearbit/Apollo to fetch company size, revenue, and tech stack.</li>
        <li><strong>LLM Scoring:</strong> We pass the enriched data plus the lead's "How can we help?" text to an LLM. The LLM evaluates the lead against the client's Ideal Customer Profile (ICP) and assigns a score from 1-100.</li>
        <li><strong>Routing:</strong> Leads scoring >80 are instantly assigned to Account Executives and pushed an automated Calendly link. Leads <80 are put into an automated nurturing sequence.</li>
      </ul>

      <h2>The Impact</h2>
      <p>By automating the top of the funnel, the client increased their meeting-booked rate by 41% and allowed their sales team to focus entirely on closing rather than researching.</p>
    `
  }
];

export function getAllPosts(): BlogPost[] {
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
