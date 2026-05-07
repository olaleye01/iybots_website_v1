"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function submitProjectBrief(data: {
  projectType: string;
  businessGoal: string;
  tools: string[];
  otherTools?: string;
  timeline: string;
  name: string;
  email: string;
  companyName?: string;
  projectNote?: string;
}) {
  try {
    const brief = await prisma.projectBrief.create({
      data: {
        projectType: data.projectType,
        businessGoal: data.businessGoal,
        tools: data.tools,
        otherTools: data.otherTools || null,
        timeline: data.timeline,
        name: data.name,
        email: data.email,
        companyName: data.companyName || null,
        projectNote: data.projectNote || null,
      },
    });

    return { success: true, id: brief.id };
  } catch (error) {
    console.error("Error submitting project brief:", error);
    return { success: false, error: "Failed to submit project brief" };
  }
}
