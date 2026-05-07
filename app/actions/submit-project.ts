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

    // Trigger n8n Webhook
    try {
      await fetch("https://oracle.iybots.com/webhook/1d7945d2-3762-4191-8297-923bab138a99", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Basic " + Buffer.from("iyb:Testtest123").toString("base64")
        },
        body: JSON.stringify(brief)
      });
    } catch (webhookError) {
      console.error("Failed to trigger n8n webhook:", webhookError);
      // We don't fail the request here, since it successfully saved to the DB
    }

    return { success: true, id: brief.id };
  } catch (error) {
    console.error("Error submitting project brief:", error);
    return { success: false, error: "Failed to submit project brief" };
  }
}
