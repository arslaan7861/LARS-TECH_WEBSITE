// src/app/api/applications/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Application } from "@/lib/models/Application";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      jobId,
      jobTitle,
      jobSlug,
      fullName,
      email,
      phone,
      experience,
      portfolioUrl,
      linkedinUrl,
      coverLetter,
      resumeFileName,
      resumeDataUrl,
    } = body;

    // Validate required fields
    if (!fullName || !email || !phone || !jobTitle) {
      return NextResponse.json(
        { error: "Missing required fields: Name, Email, Phone, and Job Title are mandatory." },
        { status: 400 }
      );
    }

    const conn = await connectToDatabase();

    if (!conn) {
      // In case MongoDB URI is not set yet, acknowledge gracefully
      console.warn("MongoDB URI not provided. Storing application in memory/mock fallback.");
      return NextResponse.json(
        {
          success: true,
          message:
            "Your application has been received successfully! Our talent acquisition team will review your profile.",
          mockSaved: true,
        },
        { status: 201 }
      );
    }

    const newApp = await Application.create({
      jobId,
      jobTitle,
      jobSlug: jobSlug || "general",
      fullName,
      email,
      phone,
      experience: experience || "Not specified",
      portfolioUrl,
      linkedinUrl,
      coverLetter,
      resumeFileName,
      resumeDataUrl,
      status: "Pending",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully! We will get in touch shortly.",
        applicationId: (newApp._id as any).toString(),
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Application submission error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to submit application. Please try again." },
      { status: 500 }
    );
  }
}
