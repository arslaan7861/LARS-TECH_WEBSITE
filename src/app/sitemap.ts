// src/app/sitemap.ts
import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { servicesData } from "@/data/services";
import { getJobs, getBlogPosts } from "@/lib/data-service";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;

  // Core static routes
  const staticRoutes = [
    "",
    "/about",
    "/careers",
    "/careers/apply",
    "/blog",
    "/contact",
    "/school-erp",
    "/services",
    "/privacy/schoolapp",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Service dynamic routes
  const serviceRoutes = servicesData.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Jobs dynamic routes
  const jobs = await getJobs();
  const jobRoutes = jobs.flatMap((j) => [
    {
      url: `${baseUrl}/careers/${j.slug}`,
      lastModified: new Date(j.postedAt || Date.now()),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/careers/${j.slug}/apply`,
      lastModified: new Date(j.postedAt || Date.now()),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]);

  // Blog dynamic routes
  const blogs = await getBlogPosts();
  const blogRoutes = blogs.map((b) => ({
    url: `${baseUrl}/blog/${b.slug}`,
    lastModified: new Date(b.publishedAt || Date.now()),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes, ...jobRoutes, ...blogRoutes];
}
