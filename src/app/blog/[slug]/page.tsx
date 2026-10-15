// src/app/blog/[slug]/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  Calendar,
  ArrowLeft,
  Share2,
  Tag,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { AdBanner } from "@/components/common/ad-banner";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/data-service";
import { siteConfig } from "@/config/site";
import { adsConfig } from "@/config/ads";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts(true);
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${post.title} | ${siteConfig.name} Insights`,
    description: post.description,
    keywords: post.seoKeywords,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getBlogPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && (p.category === post.category || p.featured))
    .slice(0, 2);

  // Article JSON-LD Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: [post.coverImage],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: [
      {
        "@type": "Person",
        name: post.author.name,
        jobTitle: post.author.role,
      },
    ],
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo-full.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <main className="min-h-screen pt-24 pb-20 overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Back button */}
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to All Insights
            </Link>
          </div>

          {/* Article Header */}
          <header className="space-y-4 mb-8">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="px-3 py-1">
                {post.category}
              </Badge>
              {post.featured && (
                <Badge className="bg-primary text-primary-foreground px-3 py-1">
                  Featured Story
                </Badge>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {post.description}
            </p>

            {/* Author & Timestamp Bar */}
            <div className="pt-4 flex items-center justify-between border-t border-b py-3 text-sm">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover border"
                />
                <div>
                  <div className="font-semibold text-foreground leading-none">
                    {post.author.name}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {post.author.role}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </header>

          {/* Cover Hero Image */}
          <div className="relative rounded-2xl overflow-hidden mb-10 h-72 sm:h-96 w-full shadow-lg border">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <article className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-6 text-base sm:text-lg">
            {post.content.split("\n\n").map((block, idx) => {
              const trimmed = block.trim();
              if (trimmed.startsWith("## ")) {
                return (
                  <h2 key={idx} className="text-2xl sm:text-3xl font-bold text-foreground mt-8 mb-4">
                    {trimmed.replace("## ", "")}
                  </h2>
                );
              }
              if (trimmed.startsWith("### ")) {
                return (
                  <h3 key={idx} className="text-xl sm:text-2xl font-semibold text-foreground mt-6 mb-3">
                    {trimmed.replace("### ", "")}
                  </h3>
                );
              }
              if (trimmed.startsWith("```")) {
                const codeContent = trimmed.replace(/```[a-z]*\n?/g, "");
                return (
                  <pre
                    key={idx}
                    className="bg-card text-foreground p-4 rounded-xl border font-mono text-xs sm:text-sm overflow-x-auto my-4"
                  >
                    <code>{codeContent}</code>
                  </pre>
                );
              }
              if (trimmed.startsWith("- ")) {
                const items = trimmed.split("\n").map((li) => li.replace(/^- /, ""));
                return (
                  <ul key={idx} className="space-y-2 my-4 pl-4 list-disc">
                    {items.map((it, i) => (
                      <li key={i}>{it}</li>
                    ))}
                  </ul>
                );
              }
              if (trimmed.startsWith("---")) {
                return <Separator key={idx} className="my-8" />;
              }
              return (
                <p key={idx} className="text-foreground/90 leading-relaxed">
                  {trimmed}
                </p>
              );
            })}
          </article>

          {/* In-article Tasteful AdSense Unit */}
          <AdBanner slot={adsConfig.slots.blogArticle} className="my-12" />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="pt-8 border-t flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mr-1">
                Topics:
              </span>
              {post.tags.map((tag, i) => (
                <Badge key={i} variant="outline" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-8 border-t">
              <h2 className="text-2xl font-bold mb-6">Related Insights</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="p-5 rounded-xl border bg-card/60 hover:border-primary/40 transition-colors block group"
                  >
                    <Badge variant="secondary" className="text-[10px] mb-2">
                      {rel.category}
                    </Badge>
                    <h3 className="font-bold text-base group-hover:text-primary transition-colors line-clamp-2">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                      {rel.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
