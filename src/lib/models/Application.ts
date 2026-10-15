// src/lib/models/Application.ts
import mongoose, { Schema, Document, Model } from "mongoose";

export interface IApplication extends Document {
  jobId?: string;
  jobTitle: string;
  jobSlug: string;
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  portfolioUrl?: string;
  linkedinUrl?: string;
  coverLetter?: string;
  resumeFileName?: string;
  resumeDataUrl?: string; // base64 or stored url
  status: "Pending" | "Reviewing" | "Shortlisted" | "Rejected";
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ApplicationSchema: Schema<IApplication> = new Schema(
  {
    jobId: { type: String },
    jobTitle: { type: String, required: true },
    jobSlug: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    experience: { type: String, required: true },
    portfolioUrl: { type: String },
    linkedinUrl: { type: String },
    coverLetter: { type: String },
    resumeFileName: { type: String },
    resumeDataUrl: { type: String },
    status: {
      type: String,
      enum: ["Pending", "Reviewing", "Shortlisted", "Rejected"],
      default: "Pending",
      index: true,
    },
    notes: { type: String, default: "" },
  },
  { timestamps: true }
);

export const Application: Model<IApplication> =
  mongoose.models.Application ||
  mongoose.model<IApplication>("Application", ApplicationSchema);
