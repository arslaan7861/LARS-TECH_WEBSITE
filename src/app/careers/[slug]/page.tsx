// src/app/careers/[slug]/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Share2,
  ArrowLeft,
  Building2,
  Shield,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AdBanner } from "@/components/common/ad-banner";
import { getJobBySlug, getJobs } from "@/lib/data-service";
import { siteConfig } from "@/config/site";
import { adsConfig } from "@/config/ads";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const jobs = await getJobs(true);
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job) {
    return { title: "Job Not Found" };
  }

  return {
    title: `${job.title} | Careers at ${siteConfig.name}`,
    description: job.description,
    openGraph: {
      title: `${job.title} — ${siteConfig.name}`,
      description: job.description,
      type: "website",
      url: `${siteConfig.url}/careers/${job.slug}`,
    },
    alternates: {
      canonical: `${siteConfig.url}/careers/${job.slug}`,
    },
  };
}

export default async function JobDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  // Google JobPosting Schema
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    identifier: {
      "@type": "PropertyValue",
      name: siteConfig.name,
      value: job.slug,
    },
    datePosted: job.postedAt,
    employmentType: job.type.toUpperCase().replace("-", "_"),
    hiringOrganization: {
      "@type": "Organization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
      logo: `${siteConfig.url}/logo-full.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.region,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.countryCode,
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: {
        "@type": "QuantitativeValue",
        value: job.salary,
        unitText: "YEAR",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />

      <main className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back button */}
          <div className="mb-8">
            <Link
              href="/careers"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to All Openings
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content (2 cols) */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header Box */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="px-3 py-1">
                    {job.department}
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    {job.type}
                  </Badge>
                  {job.isActive ? (
                    <Badge className="bg-green-500/10 text-green-600 border-green-500/20 px-3 py-1">
                      Actively Hiring
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="text-muted-foreground">
                      Closed
                    </Badge>
                  )}
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {job.title}
                </h1>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span>{job.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Posted recently</span>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Role Overview */}
              <section className="space-y-3">
                <h2 className="text-xl font-bold">About the Role</h2>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {job.description}
                </p>
              </section>

              {/* Responsibilities */}
              {job.responsibilities && job.responsibilities.length > 0 && (
                <section className="space-y-4">
                  <h2 className="text-xl font-bold">What You Will Do</h2>
                  <ul className="space-y-3">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {resp}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Requirements */}
              {job.requirements && job.requirements.length > 0 && (
                <section className="space-y-4">
                  <h2 className="text-xl font-bold">Requirements &amp; Qualifications</h2>
                  <ul className="space-y-3">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {req}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Nice to have */}
              {job.niceToHave && job.niceToHave.length > 0 && (
                <section className="space-y-4">
                  <h2 className="text-xl font-bold">Nice to Have</h2>
                  <ul className="space-y-3">
                    {job.niceToHave.map((nth, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {nth}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Benefits */}
              {job.benefits && job.benefits.length > 0 && (
                <section className="space-y-4">
                  <h2 className="text-xl font-bold">Perks &amp; Benefits</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {job.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl border bg-card/60 flex items-center gap-3 text-sm"
                      >
                        <Shield className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* In-article Ad Banner */}
              <AdBanner slot={adsConfig.slots.careersFeed} className="my-8" />

              {/* CTA footer */}
              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-lg">Interested in this role?</h3>
                  <p className="text-sm text-muted-foreground">
                    Submit your application in 2 minutes with your resume &amp; portfolio.
                  </p>
                </div>
                <Link href={`/careers/${job.slug}/apply`}>
                  <Button size="lg" className="group whitespace-nowrap">
                    Apply for this Position
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sidebar (1 col) */}
            <div className="space-y-6">
              {/* Quick Action Card */}
              <Card className="sticky top-28 shadow-lg border-border/80">
                <CardHeader>
                  <CardTitle className="text-xl">Apply for this Role</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link href={`/careers/${job.slug}/apply`} className="w-full block">
                    <Button size="lg" className="w-full group">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>

                  <div className="space-y-3 pt-2 text-sm">
                    <div className="flex justify-between py-1 border-b">
                      <span className="text-muted-foreground">Department</span>
                      <span className="font-medium">{job.department}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b">
                      <span className="text-muted-foreground">Location</span>
                      <span className="font-medium">{job.location}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b">
                      <span className="text-muted-foreground">Employment</span>
                      <span className="font-medium">{job.type}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b">
                      <span className="text-muted-foreground">Experience</span>
                      <span className="font-medium">{job.experience}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b">
                      <span className="text-muted-foreground">Compensation</span>
                      <span className="font-medium">{job.salary}</span>
                    </div>
                  </div>

                  {/* Sidebar AdSense Placement */}
                  <AdBanner slot={adsConfig.slots.jobSidebar} className="my-4" />

                  <div className="pt-2 text-xs text-muted-foreground text-center">
                    Questions? Email us at{" "}
                    <a
                      href="mailto:careers@larstech.in"
                      className="text-primary hover:underline"
                    >
                      careers@larstech.in
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
