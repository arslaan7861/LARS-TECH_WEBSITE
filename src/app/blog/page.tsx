// src/app/blog/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  Sparkles,
  BookOpen,
  Layers,
  Cpu,
  ArrowRight,
  Filter,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/blog/blog-card";
import { AdBanner } from "@/components/common/ad-banner";
import { PublicBlogPost } from "@/lib/data-service";
import { seedBlogPosts } from "@/data/seed/blogs";
import { adsConfig } from "@/config/ads";

const categories = ["All", "Products & ERP", "AI & Emerging Tech", "Engineering"] as const;

export default function BlogIndexPage() {
  const [posts, setPosts] = useState<PublicBlogPost[]>(seedBlogPosts as any);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Attempt to fetch fresh from DB
  useEffect(() => {
    fetch("/api/admin/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (data.posts && data.posts.length > 0) {
          setPosts(data.posts);
        }
      })
      .catch(() => {});
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.tags && post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const regularPosts = filteredPosts.filter((p) => p.slug !== featuredPost?.slug);

  return (
    <main className="min-h-screen pt-24 pb-20 overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-primary/5 -z-20" />
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.02] -z-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors px-3 py-1">
            <Sparkles className="w-3.5 h-3.5 mr-1 inline" />
            Lars Tech Insights &amp; Engineering
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Products, AI &amp; Emerging Tech
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            In-depth guides, architectural blueprints, and field insights from our engineers building School ERPs, SaaS platforms, and agentic AI systems.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto mb-10">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {categories.map((cat) => (
              <Button
                key={cat}
                size="sm"
                variant={activeCategory === cat ? "default" : "outline"}
                onClick={() => setActiveCategory(cat)}
                className="rounded-full text-xs whitespace-nowrap"
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <Input
              placeholder="Search guides, tags, AI..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 rounded-full text-sm"
            />
          </div>
        </div>

        {/* Featured Post (Only show if on 'All' and no search filter) */}
        {activeCategory === "All" && !searchQuery && featuredPost && (
          <div className="max-w-5xl mx-auto mb-12">
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Featured Story
            </div>
            <BlogCard post={featuredPost} featured={true} />
          </div>
        )}

        {/* AdSense Banner 1 */}
        <AdBanner slot={adsConfig.slots.blogArticle} className="my-10" />

        {/* Articles Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16 p-8 border rounded-2xl bg-card/40">
              <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
              <h3 className="text-xl font-bold">No matching articles found</h3>
              <p className="text-sm text-muted-foreground mt-1 max-w-sm mx-auto">
                We couldn't find any articles matching "{searchQuery}". Try searching for another keyword like "ERP", "AI", or "Architecture".
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
