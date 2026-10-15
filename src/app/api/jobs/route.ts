// src/app/api/jobs/route.ts
import { NextResponse } from "next/server";
import { getJobs } from "@/lib/data-service";

export async function GET() {
  try {
    const jobs = await getJobs(false);
    return NextResponse.json({ jobs });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to fetch jobs" }, { status: 500 });
  }
}
