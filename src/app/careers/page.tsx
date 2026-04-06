"use client";

// src/app/careers/page.tsx
import { useState } from "react";
import { motion } from "framer-motion";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

import { AnimatedBlobs, FloatingBlob } from "@/components/common/blobs";

// Current openings
const jobOpenings = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Najibabad, UP (On-site)",
    type: "Full-time",
    experience: "5+ years",
    salary: "Competitive",
    description:
      "Looking for an experienced full-stack developer proficient in React, Node.js, and TypeScript.",
    requirements: [
      "5+ years of experience in full-stack development",
      "Expert in React, Next.js, Node.js, TypeScript",
      "Experience with PostgreSQL, MongoDB",
      "Knowledge of cloud platforms (AWS/GCP)",
      "Strong problem-solving skills",
    ],
    posted: "2 days ago",
    icon: Code,
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "Najibabad, UP (On-site)",
    type: "Full-time",
    experience: "3+ years",
    salary: "Competitive",
    description:
      "Seeking a creative UI/UX designer to create beautiful, intuitive interfaces for web and mobile apps.",
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficient in Figma, Adobe XD, Sketch",
      "Strong portfolio demonstrating design skills",
      "Experience with user research and testing",
      "Knowledge of HTML/CSS is a plus",
    ],
    posted: "3 days ago",
    icon: Smartphone,
  },
  {
    id: 3,
    title: "Software Engineer - School ERP",
    department: "Product Development",
    location: "Najibabad, UP (On-site)",
    type: "Full-time",
    experience: "2-4 years",
    salary: "Competitive",
    description:
      "Join our core product team to build and enhance our flagship School ERP system.",
    requirements: [
      "2-4 years of software development experience",
      "Proficiency in React, Node.js, MongoDB",
      "Experience with ERP systems is a plus",
      "Good understanding of database design",
      "Excellent communication skills",
    ],
    posted: "5 days ago",
    icon: Building,
  },
  {
    id: 4,
    title: "Business Development Executive",
    department: "Sales & Marketing",
    location: "Najibabad, UP (On-site)",
    type: "Full-time",
    experience: "2-5 years",
    salary: "Competitive + Incentives",
    description:
      "Drive business growth by acquiring new clients and building relationships with schools and businesses.",
    requirements: [
      "2-5 years in B2B sales, preferably in SaaS",
      "Excellent communication and negotiation skills",
      "Experience in education sector is a plus",
      "Ability to meet and exceed targets",
      "Self-motivated and goal-oriented",
    ],
    posted: "1 week ago",
    icon: Target,
  },
];

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
    title: "Learning Budget",
    description: "₹50,000/year for courses & conferences",
    icon: BookOpen,
  },
  {
    title: "Home Office Setup",
    description: "One-time budget for home office equipment",
    icon: Home,
  },
  {
    title: "Free Meals",
    description: "Daily lunch and unlimited coffee/tea",
    icon: CoffeeIcon,
  },
  {
    title: "Annual Retreat",
    description: "Yearly company offsite and team building",
    icon: Plane,
  },
  {
    title: "Wellness Program",
    description: "Gym membership & mental health support",
    icon: HeartHandshake,
  },
];

// Company culture points
const culturePoints = [
  {
    title: "Innovation First",
    description: "We encourage experimentation and new ideas",
    icon: Sparkles,
  },
  {
    title: "Continuous Learning",
    description: "Weekly tech talks and learning sessions",
    icon: BookOpen,
  },
  {
    title: "Collaborative Environment",
    description: "Open-door policy and team-driven culture",
    icon: Users,
  },
  {
    title: "Growth Mindset",
    description: "Clear career progression paths",
    icon: TrendingUp,
  },
];

// Values
const values = [
  {
    title: "Customer First",
    description: "We're obsessed with client success",
    icon: Heart,
  },
  {
    title: "Excellence",
    description: "We deliver high-quality solutions",
    icon: Award,
  },
  {
    title: "Integrity",
    description: "Honest and transparent in all dealings",
    icon: Shield,
  },
  {
    title: "Teamwork",
    description: "Collaboration over competition",
    icon: Users,
  },
];

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
    resume: null as File | null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  const handleApply = (jobTitle: string) => {
    setFormData({ ...formData, position: jobTitle });
    document
      .getElementById("application-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
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
            </motion.div>
          </motion.div>
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
              We've built an environment where creativity thrives and ideas
              become reality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {culturePoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
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
            </motion.div>
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
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
              Find your perfect role and help us build amazing software
              solutions
            </p>
          </div>

          <div className="space-y-4">
            {jobOpenings.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <job.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-xl">{job.title}</h3>
                            <Badge variant="secondary" className="mt-1">
                              {job.department}
                            </Badge>
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Briefcase className="w-4 h-4" />
                            {job.type}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {job.experience}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <DollarSign className="w-4 h-4" />
                            {job.salary}
                          </div>
                        </div>
                        <p className="text-muted-foreground mt-4">
                          {job.description}
                        </p>
                        <div className="mt-4">
                          <div className="text-sm font-semibold mb-2">
                            Key Requirements:
                          </div>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {job.requirements.slice(0, 3).map((req, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 text-sm"
                              >
                                <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />
                                <span className="text-muted-foreground">
                                  {req}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button
                          onClick={() => handleApply(job.title)}
                          className="whitespace-nowrap"
                        >
                          Apply Now
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <div className="text-xs text-muted-foreground text-center">
                          {job.posted}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
                Apply Now
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Join?
              </h2>
              <p className="text-muted-foreground mb-6">
                Fill out the application form and attach your resume. Our
                recruitment team will review your application and get back to
                you within 5-7 business days.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Your Resume</div>
                    <div className="text-sm text-muted-foreground">
                      careers@larstech.in
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-sm text-muted-foreground">
                      +91 8273553959 (HR Department)
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Application Form</CardTitle>
                  <CardDescription>
                    Fill in your details and attach your resume
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="+91 82735 53959"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">Years of Experience</Label>
                        <Input
                          id="experience"
                          name="experience"
                          placeholder="3-5 years"
                          value={formData.experience}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Position Applying For *</Label>
                      <Input
                        id="position"
                        name="position"
                        placeholder="Select a position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Cover Letter / Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us why you'd be a great fit..."
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="resume">Upload Resume *</Label>
                      <Input
                        id="resume"
                        name="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required
                      />
                      <p className="text-xs text-muted-foreground">
                        PDF, DOC, DOCX (Max 5MB)
                      </p>
                    </div>
                    <Button type="submit" className="w-full group">
                      Submit Application
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section - CTA */}
      <section className="py-20 bg-primary relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Start Your Journey With Us
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Be part of a growing company where your ideas matter and your
              growth is our priority
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#openings">
                <Button size="lg" variant="secondary" className="group">
                  View Open Positions
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact HR
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
