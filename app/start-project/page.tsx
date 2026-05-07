import { Metadata } from "next";
import ProjectOnboarding from "@/components/ProjectOnboarding";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Tell us about the AI automation or agent you want to build. We'll design a custom solution for your business in less than 2 minutes.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function StartProjectPage() {
  return (
    <main className="min-h-[100dvh] bg-[#09090b]">
      <ProjectOnboarding />
    </main>
  );
}
