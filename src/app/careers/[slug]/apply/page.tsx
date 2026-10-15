// src/app/careers/[slug]/apply/page.tsx
"use client";

import { useState, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Send,
  Loader2,
  FileText,
  Building2,
  Mail,
  Phone,
  User,
  Globe,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface ApplyPageProps {
  params: Promise<{ slug: string }>;
}

export default function ApplyJobPage({ params }: ApplyPageProps) {
  const { slug } = use(params);
  const router = useRouter();

  // Convert slug to a human-readable title fallback
  const fallbackTitle = slug
    ? slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    : "General Application";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "3-5 years",
    portfolioUrl: "",
    linkedinUrl: "",
    coverLetter: "",
    resumeFileName: "",
    resumeDataUrl: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size exceeds 5MB limit");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setFormData((prev) => ({
        ...prev,
        resumeFileName: file.name,
        resumeDataUrl: reader.result as string,
      }));
      toast.success(`Attached ${file.name}`);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone) {
      toast.error("Please fill in your name, email, and phone number.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          jobTitle: fallbackTitle,
          jobSlug: slug,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit application");
      }

      setSubmitted(true);
      toast.success("Application received successfully!");
    } catch (err: any) {
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen pt-28 pb-20 flex items-center justify-center p-4">
        <Card className="max-w-lg w-full text-center p-8 shadow-2xl">
          <div className="w-16 h-16 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <CardTitle className="text-2xl font-bold">Application Received!</CardTitle>
          <CardDescription className="text-base mt-2">
            Thank you, <span className="font-semibold text-foreground">{formData.fullName}</span>.
            We have recorded your application for <span className="font-semibold text-foreground">{fallbackTitle}</span>.
          </CardDescription>
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
            Our talent acquisition team will review your qualifications and reach out to you within 3-5 business days via email or phone.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/careers">
              <Button variant="outline" className="w-full sm:w-auto">
                Explore Other Roles
              </Button>
            </Link>
            <Link href="/">
              <Button className="w-full sm:w-auto">Return to Home</Button>
            </Link>
          </div>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="mb-6">
          <Link
            href={`/careers/${slug}`}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Job Details
          </Link>
        </div>

        <Card className="shadow-xl border-border/80">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">Application Form</Badge>
              <Badge variant="outline">{fallbackTitle}</Badge>
            </div>
            <CardTitle className="text-2xl sm:text-3xl font-bold">
              Apply for {fallbackTitle}
            </CardTitle>
            <CardDescription>
              Complete the form below and attach your resume. All submissions are stored securely.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <div className="relative">
                    <User className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                    <Input
                      id="fullName"
                      placeholder="e.g. Rahul Sharma"
                      className="pl-9"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                      }
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="rahul@example.com"
                      className="pl-9"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                      }
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                    <Input
                      id="phone"
                      placeholder="+91 98765 43210"
                      className="pl-9"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input
                    id="experience"
                    placeholder="e.g. 3 years"
                    value={formData.experience}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, experience: e.target.value }))
                    }
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="portfolioUrl">Portfolio or GitHub URL</Label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                    <Input
                      id="portfolioUrl"
                      placeholder="https://github.com/username"
                      className="pl-9"
                      value={formData.portfolioUrl}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, portfolioUrl: e.target.value }))
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedinUrl">LinkedIn Profile</Label>
                  <div className="relative">
                    <ExternalLink className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                    <Input
                      id="linkedinUrl"
                      placeholder="https://linkedin.com/in/username"
                      className="pl-9"
                      value={formData.linkedinUrl}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, linkedinUrl: e.target.value }))
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="coverLetter">Why are you interested in this role?</Label>
                <Textarea
                  id="coverLetter"
                  rows={4}
                  placeholder="Share a brief overview of relevant projects, achievements, and why you want to join Lars Tech..."
                  value={formData.coverLetter}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, coverLetter: e.target.value }))
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="resume">Resume / CV (PDF, DOC, DOCX up to 5MB) *</Label>
                <Input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                  required={!formData.resumeDataUrl}
                />
                {formData.resumeFileName && (
                  <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Attached: {formData.resumeFileName}
                  </p>
                )}
              </div>

              <Button type="submit" size="lg" className="w-full group" disabled={submitting}>
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting Application...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
