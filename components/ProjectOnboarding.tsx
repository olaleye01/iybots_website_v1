"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  ChatCircleDots,
  EnvelopeSimple,
  Microphone,
  Funnel,
  Lightning,
  Question,
  Clock,
  Target,
  Briefcase,
  Users,
  Wrench,
  RocketLaunch,
  Check,
  SpinnerGap
} from "@phosphor-icons/react";
import Link from "next/link";
import { submitProjectBrief } from "@/app/actions/submit-project";

type ProjectPayload = {
  projectType: string;
  businessGoal: string;
  tools: string[];
  otherTools: string;
  timeline: string;
  name: string;
  email: string;
  companyName: string;
  projectNote: string;
};

const PROJECT_TYPES = [
  { id: "support", label: "AI Customer Support Agent", icon: ChatCircleDots },
  { id: "email", label: "Email Automation System", icon: EnvelopeSimple },
  { id: "voice", label: "AI Voice Agent", icon: Microphone },
  { id: "lead", label: "Lead Generation Automation", icon: Funnel },
  { id: "internal", label: "Internal Workflow Automation", icon: Lightning },
  { id: "unsure", label: "Not sure yet", icon: Question },
];

const BUSINESS_GOALS = [
  { id: "save_time", label: "Save time on repetitive tasks", icon: Clock },
  { id: "response", label: "Respond to customers faster", icon: ChatCircleDots },
  { id: "leads", label: "Generate or manage leads", icon: Target },
  { id: "admin", label: "Reduce manual admin work", icon: Briefcase },
  { id: "operations", label: "Improve team operations", icon: Users },
  { id: "custom", label: "Something custom", icon: Wrench },
];

const TOOLS_OPTIONS = [
  "Gmail", "Outlook", "Slack", "WhatsApp", "Telegram", 
  "Google Sheets", "Notion", "Airtable", "HubSpot", 
  "Calendly", "Stripe", "Other"
];

const TIMELINES = [
  "Immediately",
  "This week",
  "This month",
  "Still exploring"
];

const fadeVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
};

export default function ProjectOnboarding() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<ProjectPayload>({
    projectType: "",
    businessGoal: "",
    tools: [],
    otherTools: "",
    timeline: "",
    name: "",
    email: "",
    companyName: "",
    projectNote: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const updateData = (fields: Partial<ProjectPayload>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const toggleTool = (tool: string) => {
    setData((prev) => {
      const tools = prev.tools.includes(tool)
        ? prev.tools.filter((t) => t !== tool)
        : [...prev.tools, tool];
      return { ...prev, tools };
    });
  };

  const submitProject = async () => {
    setIsSubmitting(true);
    setSubmitError("");
    
    const response = await submitProjectBrief({
      projectType: data.projectType,
      businessGoal: data.businessGoal,
      tools: data.tools,
      otherTools: data.otherTools,
      timeline: data.timeline,
      name: data.name,
      email: data.email,
      companyName: data.companyName,
      projectNote: data.projectNote,
    });

    setIsSubmitting(false);

    if (response.success) {
      nextStep(); // Go to success screen
    } else {
      setSubmitError(response.error || "Something went wrong. Please try again.");
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="text-center max-w-lg mx-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 bg-[#18181d] border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl"
            >
              <RocketLaunch size={32} weight="duotone" style={{ color: "var(--accent)" }} />
            </motion.div>
            <h1 className="font-syne text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Let’s understand what you want to build.
            </h1>
            <p className="text-[var(--muted)] text-base mb-10 leading-relaxed">
              Answer a few quick questions so we can recommend the right automation or AI agent for your business. It takes less than 2 minutes.
            </p>
            <button
              onClick={nextStep}
              className="font-syne inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-150 active:scale-[0.98]"
              style={{ background: "var(--accent)", color: "#09090b", letterSpacing: "0.02em" }}
            >
              Start Project Brief
              <ArrowRight weight="bold" className="ml-2 w-4 h-4" />
            </button>
            <p className="mt-6">
              <Link href="/" className="text-xs text-[var(--muted)] hover:text-white transition-colors underline underline-offset-4">
                Back to website
              </Link>
            </p>
          </div>
        );
      
      case 2:
        return (
          <div className="w-full">
            <h2 className="font-syne text-2xl md:text-3xl font-bold mb-8">What do you want to build?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {PROJECT_TYPES.map((type) => {
                const Icon = type.icon;
                const isSelected = data.projectType === type.label;
                return (
                  <button
                    key={type.id}
                    onClick={() => updateData({ projectType: type.label })}
                    className={`flex items-start gap-4 p-5 rounded-2xl border text-left transition-all duration-200 ${
                      isSelected
                        ? "border-[var(--accent)] bg-[var(--accent-dim)]"
                        : "border-white/10 bg-[#111116] hover:border-white/20 hover:bg-[#18181d]"
                    }`}
                  >
                    <Icon size={24} weight={isSelected ? "fill" : "regular"} className={isSelected ? "text-[var(--accent)]" : "text-[var(--muted)]"} />
                    <span className={`font-syne font-medium text-sm md:text-base ${isSelected ? "text-white" : "text-white/80"}`}>
                      {type.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="w-full">
            <h2 className="font-syne text-2xl md:text-3xl font-bold mb-8">What problem should this solve?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {BUSINESS_GOALS.map((goal) => {
                const Icon = goal.icon;
                const isSelected = data.businessGoal === goal.label;
                return (
                  <button
                    key={goal.id}
                    onClick={() => updateData({ businessGoal: goal.label })}
                    className={`flex items-start gap-4 p-5 rounded-2xl border text-left transition-all duration-200 ${
                      isSelected
                        ? "border-[var(--accent)] bg-[var(--accent-dim)]"
                        : "border-white/10 bg-[#111116] hover:border-white/20 hover:bg-[#18181d]"
                    }`}
                  >
                    <Icon size={24} weight={isSelected ? "fill" : "regular"} className={isSelected ? "text-[var(--accent)]" : "text-[var(--muted)]"} />
                    <span className={`font-syne font-medium text-sm md:text-base ${isSelected ? "text-white" : "text-white/80"}`}>
                      {goal.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="w-full">
            <h2 className="font-syne text-2xl md:text-3xl font-bold mb-3">What tools do you currently use?</h2>
            <p className="text-[var(--muted)] mb-8 text-sm">Select all that apply. This helps us understand your tech stack.</p>
            <div className="flex flex-wrap gap-3 mb-8">
              {TOOLS_OPTIONS.map((tool) => {
                const isSelected = data.tools.includes(tool);
                return (
                  <button
                    key={tool}
                    onClick={() => toggleTool(tool)}
                    className={`px-4 py-2 rounded-full border text-sm transition-all duration-200 font-medium flex items-center gap-2 ${
                      isSelected
                        ? "border-[var(--accent)] bg-[var(--accent)] text-[#09090b]"
                        : "border-white/10 bg-[#111116] text-white/80 hover:border-white/20"
                    }`}
                  >
                    {isSelected && <Check size={14} weight="bold" />}
                    {tool}
                  </button>
                );
              })}
            </div>
            {data.tools.includes("Other") && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="overflow-hidden"
              >
                <label className="block text-sm font-medium mb-2 text-white/80">Please specify other tools</label>
                <input
                  type="text"
                  value={data.otherTools}
                  onChange={(e) => updateData({ otherTools: e.target.value })}
                  placeholder="e.g. Salesforce, Make, Shopify..."
                  className="w-full bg-[#111116] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[var(--muted)] text-white"
                />
              </motion.div>
            )}
          </div>
        );

      case 5:
        return (
          <div className="w-full">
            <h2 className="font-syne text-2xl md:text-3xl font-bold mb-8">How soon do you want to start?</h2>
            <div className="flex flex-col gap-3">
              {TIMELINES.map((time) => {
                const isSelected = data.timeline === time;
                return (
                  <button
                    key={time}
                    onClick={() => updateData({ timeline: time })}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? "border-[var(--accent)] bg-[var(--accent-dim)] text-white"
                        : "border-white/10 bg-[#111116] text-white/80 hover:border-white/20 hover:bg-[#18181d]"
                    }`}
                  >
                    <span className="font-medium text-base">{time}</span>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      isSelected ? "border-[var(--accent)] bg-[var(--accent)]" : "border-white/20"
                    }`}>
                      {isSelected && <div className="w-2 h-2 rounded-full bg-[#09090b]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="w-full">
            <h2 className="font-syne text-2xl md:text-3xl font-bold mb-3">Almost done. Who are we talking to?</h2>
            <p className="text-[var(--muted)] mb-8 text-sm">We'll use this to reach out and schedule our intro call.</p>
            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={data.name}
                    onChange={(e) => updateData({ name: e.target.value })}
                    className="w-full bg-[#111116] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent)] transition-colors text-white"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Email *</label>
                  <input
                    type="email"
                    required
                    value={data.email}
                    onChange={(e) => updateData({ email: e.target.value })}
                    className="w-full bg-[#111116] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent)] transition-colors text-white"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-white/80">Company Name <span className="text-[var(--muted)]">(Optional)</span></label>
                <input
                  type="text"
                  value={data.companyName}
                  onChange={(e) => updateData({ companyName: e.target.value })}
                  className="w-full bg-[#111116] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent)] transition-colors text-white"
                  placeholder="Acme Corp"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-white/80">Project Notes <span className="text-[var(--muted)]">(Optional)</span></label>
                <textarea
                  value={data.projectNote}
                  onChange={(e) => updateData({ projectNote: e.target.value })}
                  className="w-full bg-[#111116] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent)] transition-colors text-white min-h-[100px] resize-none"
                  placeholder="Any extra details we should know before our call?"
                />
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="w-full">
            <h2 className="font-syne text-2xl md:text-3xl font-bold mb-3">Your project brief is ready.</h2>
            <p className="text-[var(--muted)] mb-8 text-sm">Review your selections below and submit when you're ready.</p>
            
            <div className="bg-[#111116] border border-white/10 rounded-2xl p-6 space-y-6 mb-8">
              <div className="flex justify-between border-b border-white/5 pb-4">
                <span className="text-[var(--muted)] text-sm">Project Type</span>
                <span className="font-medium text-sm text-right text-white">{data.projectType}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-4">
                <span className="text-[var(--muted)] text-sm">Main Goal</span>
                <span className="font-medium text-sm text-right text-white">{data.businessGoal}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-4">
                <span className="text-[var(--muted)] text-sm">Tools</span>
                <span className="font-medium text-sm text-right text-white max-w-[50%]">
                  {data.tools.filter(t => t !== "Other").concat(data.otherTools ? [data.otherTools] : []).join(", ") || "None selected"}
                </span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-4">
                <span className="text-[var(--muted)] text-sm">Timeline</span>
                <span className="font-medium text-sm text-right text-white">{data.timeline}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--muted)] text-sm">Contact</span>
                <span className="font-medium text-sm text-right text-white">{data.name} <span className="text-[var(--muted)]">({data.email})</span></span>
              </div>
            </div>

            <button
              onClick={submitProject}
              disabled={isSubmitting}
              className="w-full font-syne inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-150 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed gap-2"
              style={{ background: "var(--accent)", color: "#09090b", letterSpacing: "0.02em" }}
            >
              {isSubmitting ? (
                <>
                  <SpinnerGap className="animate-spin w-5 h-5" />
                  Submitting...
                </>
              ) : (
                "Submit Project Request"
              )}
            </button>
            {submitError && (
              <p className="text-red-500 text-sm mt-4 text-center">{submitError}</p>
            )}
          </div>
        );

      case 8:
        return (
          <div className="text-center w-full max-w-lg mx-auto py-10">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <CheckCircle size={40} weight="fill" className="text-green-500" />
            </motion.div>
            <h2 className="font-syne text-3xl md:text-4xl font-bold mb-4">
              Got it, your project request has been sent.
            </h2>
            <p className="text-[var(--muted)] text-base mb-10 leading-relaxed">
              We’ll review your brief and reach out within 24 hours with the best next step. We look forward to working with you!
            </p>
            <Link
              href="/"
              className="font-syne inline-flex px-8 py-3 rounded-xl text-sm font-medium transition-all duration-200 border border-white/10 hover:border-white/30 hover:bg-white/5"
            >
              Return to Website
            </Link>
          </div>
        );

      default:
        return null;
    }
  };

  const isNextDisabled = () => {
    switch (step) {
      case 2: return !data.projectType;
      case 3: return !data.businessGoal;
      case 4: return data.tools.length === 0 || (data.tools.includes("Other") && !data.otherTools);
      case 5: return !data.timeline;
      case 6: return !data.name || !data.email || !data.email.includes("@");
      default: return false;
    }
  };

  const totalSteps = 6;
  const progress = ((step - 1) / totalSteps) * 100;

  return (
    <div className="min-h-[100dvh] bg-[#09090b] flex flex-col relative text-white font-dm-sans selection:bg-[var(--accent)] selection:text-[#09090b]">
      {/* Progress Bar */}
      {step > 1 && step < 8 && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-[#18181d] z-50">
          <motion.div
            className="h-full bg-[var(--accent)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>
      )}

      {/* Header with back button */}
      {step > 1 && step < 8 && (
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-40">
          <button
            onClick={prevStep}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--muted)] hover:text-white hover:bg-white/10 transition-colors"
          >
            <ArrowLeft size={18} />
          </button>
          <span className="text-[var(--muted)] text-xs font-medium tracking-widest uppercase">
            Step {step - 1} of {totalSteps}
          </span>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center p-6 w-full max-w-3xl mx-auto pt-24 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full"
          >
            {renderStepContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Fixed Bottom Navigation (for steps 2-6) */}
      {step > 1 && step < 7 && (
        <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#09090b] via-[#09090b]/90 to-transparent z-40">
          <div className="max-w-3xl mx-auto flex justify-end">
            <button
              onClick={nextStep}
              disabled={isNextDisabled()}
              className="font-syne flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-[var(--muted)] hover:scale-[1.02] active:scale-[0.98] bg-[var(--accent)] text-[#09090b]"
            >
              Continue
              <ArrowRight weight="bold" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
