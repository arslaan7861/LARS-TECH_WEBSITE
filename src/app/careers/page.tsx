// src/app/careers/page.tsx
import Link from "next/link";
import {
  Briefcase,
  Users,
  Award,
  Heart,
  Laptop,
  Calendar,
  TrendingUp,
  MapPin,
  Clock,
  DollarSign,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  Building,
  BookOpen,
  Code,
  Smartphone,
  Target,
  Shield,
  Gift,
  Coffee as CoffeeIcon,
  Home,
  Plane,
  HeartHandshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedBlobs, FloatingBlob } from "@/components/common/blobs";
import { AdBanner } from "@/components/common/ad-banner";
import { getJobs } from "@/lib/data-service";
import { adsConfig } from "@/config/ads";

// Benefits
const benefits = [
  {
    title: "Competitive Salary",
    description: "Industry-leading compensation packages",
    icon: DollarSign,
  },
  {
    title: "Health Insurance",
    description: "Comprehensive medical coverage for you and family",
    icon: Shield,
  },
  {
    title: "Flexible Hours",
    description: "Work-life balance with flexible timing",
    icon: Clock,
  },
  {
    title: "Latest Tech Stack",
    description: "Work with modern technologies and tools",
    icon: Laptop,
  },
  {
    title: "Paid Time Off",
    description: "Generous vacation policy and holidays",
    icon: Calendar,
  },
  {
    title: "Career Growth",
    description: "Clear pathways for professional advancement",
    icon: TrendingUp,
  },
  {
    title: "Learning Budget",
    description: "Annual stipend for courses and conferences",
    icon: Award,
  },
  {
    title: "Team Events",
    description: "Regular outings, hackathons, and celebrations",
    icon: Heart,
  },
];

// Values
const values = [
  {
    title: "Innovation First",
    description: "We encourage creative problem-solving and new ideas",
    icon: Sparkles,
  },
  {
    title: "Collaboration",
    description: "Great things happen when we work together as one team",
    icon: Users,
  },
  {
    title: "Continuous Learning",
    description: "We invest in your growth and skill development",
    icon: BookOpen,
  },
  {
    title: "Quality Excellence",
    description: "We take pride in writing clean, scalable code",
    icon: Award,
  },
];

// Culture Points
const culturePoints = [
  {
    title: "Work-Life Harmony",
    description: "We believe in sustainable pace and respecting personal time",
    icon: CoffeeIcon,
  },
  {
    title: "Modern Workspace",
    description: "Ergonomic setup with the latest hardware and software",
    icon: Home,
  },
  {
    title: "Annual Retreats",
    description: "Team bonding trips and offsite strategy sessions",
    icon: Plane,
  },
  {
    title: "Inclusive Culture",
    description: "A welcoming environment where every voice is heard",
    icon: HeartHandshake,
  },
];

export const metadata = {
  title: "Careers at Lars Tech Solutions | Join Our Team",
  description:
    "Explore open career opportunities at Lars Tech Solutions. We are hiring Senior Full Stack Developers, ERP Engineers, and Designers in Najibabad, UP.",
};

export default async function CareersPage() {
  const jobOpenings = await getJobs();

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Consistent Background Layer */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-primary/5 -z-20" />
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.02] -z-20" />

      {/* Persistent Blobs */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <AnimatedBlobs count={4} color="primary" baseDelay={0} />
        <AnimatedBlobs count={3} color="blue" baseDelay={5} />
        <AnimatedBlobs count={3} color="cyan" baseDelay={10} />
        <AnimatedBlobs count={2} color="purple" baseDelay={15} />

        <FloatingBlob
          color="primary"
          size="w-[500px] h-[500px]"
          className="top-20 left-10"
          delay={0}
          speed={25}
        />
        <FloatingBlob
          color="cyan"
          size="w-[600px] h-[600px]"
          className="bottom-40 right-20"
          delay={3}
          speed={30}
        />
        <FloatingBlob
          color="blue"
          size="w-[450px] h-[450px]"
          className="top-1/3 right-1/4"
          delay={6}
          speed={22}
        />
        <FloatingBlob
          color="purple"
          size="w-[550px] h-[550px]"
          className="bottom-1/3 left-1/4"
          delay={9}
          speed={28}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
                Join Our Team
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Build the Future With Us
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                We're looking for passionate individuals who want to make a
                difference through technology. Join a team that values
                innovation, growth, and collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#openings">
                  <Button size="lg" className="group">
                    View Open Positions
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="#culture">
                  <Button size="lg" variant="outline">
                    Learn About Our Culture
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section id="openings" className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
              Join Us
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Current Openings
            </h2>
            <p className="text-muted-foreground">
              Find your perfect role and help us build amazing software solutions
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {jobOpenings.map((job) => (
              <Card
                key={job.slug}
                className="hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm hover:border-primary/40"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="font-bold text-xl">{job.title}</h3>
                        <Badge variant="secondary">{job.department}</Badge>
                        <Badge variant="outline">{job.type}</Badge>
                      </div>

                      <div className="grid sm:grid-cols-3 gap-3 mt-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 text-primary" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary" />
                          Experience: {job.experience}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <DollarSign className="w-4 h-4 text-primary" />
                          {job.salary}
                        </div>
                      </div>

                      <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                        {job.description}
                      </p>

                      {job.requirements && job.requirements.length > 0 && (
                        <div className="mt-4">
                          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                            Key Requirements:
                          </div>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {job.requirements.slice(0, 3).map((req, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 text-xs"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                                <span className="text-muted-foreground">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row lg:flex-col gap-2 pt-2 lg:pt-0">
                      <Link href={`/careers/${job.slug}`}>
                        <Button variant="outline" className="w-full whitespace-nowrap">
                          View Details
                        </Button>
                      </Link>
                      <Link href={`/careers/${job.slug}/apply`}>
                        <Button className="w-full whitespace-nowrap group">
                          Apply Now
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Primary AdSense Placement on Careers Page */}
          <AdBanner slot={adsConfig.slots.careersFeed} className="my-12 max-w-4xl" />

          {/* General Application CTA */}
          <div className="mt-8 text-center max-w-md mx-auto p-6 rounded-2xl border bg-card/60 backdrop-blur-sm">
            <h3 className="font-semibold text-base mb-1">Don't see your specific role?</h3>
            <p className="text-xs text-muted-foreground mb-4">
              We're always looking for brilliant developers, designers, and innovators.
            </p>
            <Link href="/careers/apply">
              <Button variant="secondary" size="sm">
                Submit General Application
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
              Our Culture
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Life at Lars Tech
            </h2>
            <p className="text-muted-foreground">
              We've built an environment where creativity thrives and ideas become reality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {culturePoints.map((point, index) => (
              <div key={index}>
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <point.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
                Our Values
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                What We Stand For
              </h2>
              <p className="text-muted-foreground mb-6">
                Our core values guide everything we do - from how we treat our
                clients to how we collaborate as a team.
              </p>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <value.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{value.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {value.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Card className="overflow-hidden bg-background/80 backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">Team Collaboration</div>
                      <div className="text-sm text-muted-foreground">
                        Working together to achieve greatness
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
              Perks & Benefits
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              We Take Care of Our Team
            </h2>
            <p className="text-muted-foreground">
              Competitive benefits designed to support your professional and
              personal growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 group bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <benefit.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
