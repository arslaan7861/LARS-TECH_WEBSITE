// src/lib/models/BlogPost.ts
import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBlogPost extends Document {
  title: string;
  slug: string;
  description: string;
  content: string; // Markdown or formatted text
  category: "Products & ERP" | "AI & Emerging Tech" | "Engineering";
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  coverImage: string;
  readTime: string;
  isPublished: boolean;
  featured: boolean;
  seoKeywords: string[];
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const BlogPostSchema: Schema<IBlogPost> = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    category: {
      type: String,
      enum: ["Products & ERP", "AI & Emerging Tech", "Engineering"],
      required: true,
      index: true,
    },
    author: {
      name: { type: String, required: true, default: "Arslaan Ansari" },
      role: { type: String, required: true, default: "Founder & Lead Architect" },
      avatar: { type: String, default: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" },
    },
    tags: [{ type: String }],
    coverImage: { type: String, required: true },
    readTime: { type: String, default: "5 min read" },
    isPublished: { type: Boolean, default: true, index: true },
    featured: { type: Boolean, default: false },
    seoKeywords: [{ type: String }],
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const BlogPost: Model<IBlogPost> =
  mongoose.models.BlogPost ||
  mongoose.model<IBlogPost>("BlogPost", BlogPostSchema);
