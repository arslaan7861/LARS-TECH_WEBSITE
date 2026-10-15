// src/app/api/admin/applications/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Application } from "@/lib/models/Application";
import { verifyAdminSession } from "@/lib/admin-auth";

export async function GET(req: NextRequest) {
  if (!verifyAdminSession(req)) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  try {
    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json({
        applications: [],
        message: "MongoDB not connected. Please set MONGODB_URI.",
      });
    }

    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const query: Record<string, any> = status && status !== "All" ? { status } : {};

    const applications = await Application.find(query).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ applications });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  if (!verifyAdminSession(req)) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  try {
    const { id, status, notes } = await req.json();
    if (!id) {
      return NextResponse.json({ error: "Application ID is required" }, { status: 400 });
    }

    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json({ error: "MongoDB not connected" }, { status: 500 });
    }

    const updated = await Application.findByIdAndUpdate(
      id,
      { ...(status ? { status } : {}), ...(notes !== undefined ? { notes } : {}) },
      { new: true }
    );

    return NextResponse.json({ success: true, application: updated });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
