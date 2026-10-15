// src/app/api/admin/seed/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { Job } from "@/lib/models/Job";
import { BlogPost } from "@/lib/models/BlogPost";
import { seedJobs } from "@/data/seed/jobs";
import { seedBlogPosts } from "@/data/seed/blogs";
import { verifyAdminSession } from "@/lib/admin-auth";

export async function POST(req: NextRequest) {
  if (!verifyAdminSession(req)) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  try {
    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json(
        { error: "Cannot seed: MONGODB_URI is not configured in .env.local" },
        { status: 500 }
      );
    }

    // Seed jobs if empty
    let seededJobsCount = 0;
    const existingJobsCount = await Job.countDocuments();
    if (existingJobsCount === 0) {
      await Job.insertMany(seedJobs);
      seededJobsCount = seedJobs.length;
    }

    // Seed blogs if empty
    let seededBlogsCount = 0;
    const existingBlogsCount = await BlogPost.countDocuments();
    if (existingBlogsCount === 0) {
      await BlogPost.insertMany(seedBlogPosts);
      seededBlogsCount = seedBlogPosts.length;
    }

    return NextResponse.json({
      success: true,
      message: `Database seeding completed: ${seededJobsCount} jobs added, ${seededBlogsCount} blog posts added.`,
      currentCounts: {
        jobs: await Job.countDocuments(),
        blogs: await BlogPost.countDocuments(),
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
