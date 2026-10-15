// src/components/blog/blog-card.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PublicBlogPost } from "@/lib/data-service";

interface BlogCardProps {
  post: PublicBlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Card
      className={`overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary/40 flex flex-col bg-background/80 backdrop-blur-sm group ${
        featured ? "lg:grid lg:grid-cols-12 lg:gap-6" : ""
      }`}
    >
      <div className={`relative overflow-hidden bg-muted ${featured ? "lg:col-span-7 h-72 sm:h-96" : "h-52"}`}>
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className="bg-background/90 text-foreground backdrop-blur-md border shadow-sm">
            {post.category}
          </Badge>
          {post.featured && (
            <Badge className="bg-primary text-primary-foreground">
              Featured
            </Badge>
          )}
        </div>
      </div>

      <div className={`p-6 flex flex-col justify-between flex-1 ${featured ? "lg:col-span-5" : ""}`}>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-primary" />
              {post.readTime}
            </span>
            <span>•</span>
            <span>
              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <Link href={`/blog/${post.slug}`}>
            <h3
              className={`font-bold tracking-tight hover:text-primary transition-colors ${
                featured ? "text-2xl sm:text-3xl" : "text-xl line-clamp-2"
              }`}
            >
              {post.title}
            </h3>
          </Link>

          <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
            {post.description}
          </p>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {post.tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 text-[11px] bg-muted/60 text-muted-foreground px-2 py-0.5 rounded-md"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="pt-6 mt-4 border-t flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-7 h-7 rounded-full object-cover border"
            />
            <div className="text-xs font-medium">{post.author.name}</div>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="text-xs font-semibold text-primary inline-flex items-center gap-1 hover:underline"
          >
            Read Article
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </Card>
  );
}
