// src/lib/models/Job.ts
import mongoose, { Schema, Document, Model } from "mongoose";

export interface IJob extends Document {
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
  postedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const JobSchema: Schema<IJob> = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    department: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, required: true, default: "Full-time" },
    experience: { type: String, required: true },
    salary: { type: String, required: true },
    description: { type: String, required: true },
    responsibilities: [{ type: String, required: true }],
    requirements: [{ type: String, required: true }],
    niceToHave: [{ type: String }],
    benefits: [{ type: String }],
    isActive: { type: Boolean, default: true, index: true },
    postedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Job: Model<IJob> =
  mongoose.models.Job || mongoose.model<IJob>("Job", JobSchema);
