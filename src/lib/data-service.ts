// src/lib/data-service.ts
import { connectToDatabase } from "@/lib/db";
import { Job, IJob } from "@/lib/models/Job";
import { BlogPost, IBlogPost } from "@/lib/models/BlogPost";
import { Application, IApplication } from "@/lib/models/Application";
import { seedJobs, SeedJob } from "@/data/seed/jobs";
import { seedBlogPosts, SeedBlogPost } from "@/data/seed/blogs";

export type PublicJob = {
  _id?: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  benefits: string[];
  isActive: boolean;
  postedAt: string;
};

export type PublicBlogPost = {
  _id?: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  category: "Products & ERP" | "AI & Emerging Tech" | "Engineering";
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  coverImage: string;
  readTime: string;
  featured: boolean;
  seoKeywords: string[];
  publishedAt: string;
};

export async function getJobs(includeInactive = false): Promise<PublicJob[]> {
  try {
    const conn = await connectToDatabase();
    if (conn) {
      const query = includeInactive ? {} : { isActive: true };
      const jobs = await Job.find(query).sort({ postedAt: -1 }).lean();
      if (jobs && jobs.length > 0) {
        return jobs.map((j) => ({
          _id: (j._id as any).toString(),
          title: j.title,
          slug: j.slug,
          department: j.department,
          location: j.location,
          type: j.type,
          experience: j.experience,
          salary: j.salary,
          description: j.description,
          responsibilities: j.responsibilities || [],
          requirements: j.requirements || [],
          niceToHave: j.niceToHave || [],
          benefits: j.benefits || [],
          isActive: j.isActive,
          postedAt: j.postedAt ? new Date(j.postedAt).toISOString() : new Date().toISOString(),
        }));
      }
    }
  } catch (err) {
    console.error("Failed fetching jobs from DB, falling back to seed:", err);
  }

  // Graceful fallback to seed data
  return seedJobs
    .filter((j) => (includeInactive ? true : j.isActive))
    .map((j) => ({ ...j }));
}

export async function getJobBySlug(slug: string): Promise<PublicJob | null> {
  try {
    const conn = await connectToDatabase();
    if (conn) {
      const job = await Job.findOne({ slug }).lean();
      if (job) {
        return {
          _id: (job._id as any).toString(),
          title: job.title,
          slug: job.slug,
          department: job.department,
          location: job.location,
          type: job.type,
          experience: job.experience,
          salary: job.salary,
          description: job.description,
          responsibilities: job.responsibilities || [],
          requirements: job.requirements || [],
          niceToHave: job.niceToHave || [],
          benefits: job.benefits || [],
          isActive: job.isActive,
          postedAt: job.postedAt ? new Date(job.postedAt).toISOString() : new Date().toISOString(),
        };
      }
    }
  } catch (err) {
    console.error("Failed fetching job by slug from DB:", err);
  }

  const fallback = seedJobs.find((j) => j.slug === slug);
  return fallback ? { ...fallback } : null;
}

export async function getBlogPosts(includeUnpublished = false): Promise<PublicBlogPost[]> {
  try {
    const conn = await connectToDatabase();
    if (conn) {
      const query = includeUnpublished ? {} : { isPublished: true };
      const posts = await BlogPost.find(query).sort({ publishedAt: -1 }).lean();
      if (posts && posts.length > 0) {
        return posts.map((p) => ({
          _id: (p._id as any).toString(),
          title: p.title,
          slug: p.slug,
          description: p.description,
          content: p.content,
          category: p.category as any,
          author: {
            name: p.author?.name || "Lars Tech Research Team",
            role: p.author?.role || "Solutions Architecture",
            avatar: p.author?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
          },
          tags: p.tags || [],
          coverImage: p.coverImage,
          readTime: p.readTime || "5 min read",
          featured: !!p.featured,
          seoKeywords: p.seoKeywords || [],
          publishedAt: p.publishedAt ? new Date(p.publishedAt).toISOString() : new Date().toISOString(),
        }));
      }
    }
  } catch (err) {
    console.error("Failed fetching blog posts from DB, falling back to seed:", err);
  }

  return seedBlogPosts.map((p) => ({ ...p }));
}

export async function getBlogPostBySlug(slug: string): Promise<PublicBlogPost | null> {
  try {
    const conn = await connectToDatabase();
    if (conn) {
      const post = await BlogPost.findOne({ slug }).lean();
      if (post) {
        return {
          _id: (post._id as any).toString(),
          title: post.title,
          slug: post.slug,
          description: post.description,
          content: post.content,
          category: post.category as any,
          author: {
            name: post.author?.name || "Lars Tech Research Team",
            role: post.author?.role || "Solutions Architecture",
            avatar: post.author?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
          },
          tags: post.tags || [],
          coverImage: post.coverImage,
          readTime: post.readTime || "5 min read",
          featured: !!post.featured,
          seoKeywords: post.seoKeywords || [],
          publishedAt: post.publishedAt ? new Date(post.publishedAt).toISOString() : new Date().toISOString(),
        };
      }
    }
  } catch (err) {
    console.error("Failed fetching blog post by slug from DB:", err);
  }

  const fallback = seedBlogPosts.find((p) => p.slug === slug);
  return fallback ? { ...fallback } : null;
}
