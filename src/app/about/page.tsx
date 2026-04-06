"use client";

// src/app/about/page.tsx
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Link from "next/link";
import {
  Code,
  Rocket,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Clock,
  MapPin,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Trophy,
  Zap,
  Shield,
  Sparkles,
  Globe2,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
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

// Company values
const values = [
  {
    title: "Innovation First",
    description:
      "We embrace cutting-edge technologies to deliver future-ready solutions.",
    icon: Sparkles,
  },
  {
    title: "Client Success",
    description:
      "Your growth is our success. We're committed to exceeding expectations.",
    icon: Heart,
  },
  {
    title: "Quality Excellence",
    description:
      "We never compromise on code quality, security, or performance.",
    icon: Award,
  },
  {
    title: "Transparency",
    description: "Open communication and honest partnerships built on trust.",
    icon: Eye,
  },
];

// Milestones
const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description:
      "Started with a vision to transform businesses through technology.",
    icon: Rocket,
  },
  {
    year: "2021",
    title: "First Major Client",
    description:
      "Onboarded our first enterprise client for custom ERP solution.",
    icon: Briefcase,
  },
  {
    year: "2022",
    title: "School ERP Launch",
    description: "Launched flagship School ERP system, serving 50+ schools.",
    icon: Target,
  },
  {
    year: "2023",
    title: "Team Expansion",
    description: "Grew to 25+ skilled developers and designers.",
    icon: Users,
  },
  {
    year: "2024",
    title: "100+ Projects",
    description: "Successfully delivered 100+ projects across India.",
    icon: Trophy,
  },
  {
    year: "2025",
    title: "Global Reach",
    description: "Expanded services to international clients.",
    icon: Globe2,
  },
];

// Team members
const team = [
  {
    name: "Amit Kumar",
    role: "Founder & CEO",
    bio: "15+ years in software development, ex-Microsoft",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Priya Sharma",
    role: "Technical Director",
    bio: "Full-stack expert with passion for scalable architecture",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Rajesh Verma",
    role: "Head of Operations",
    bio: "Ensuring smooth delivery and client satisfaction",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Neha Gupta",
    role: "Lead UI/UX Designer",
    bio: "Creating beautiful, intuitive user experiences",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
];

// Stats
const stats = [
  { label: "Projects Completed", value: 150, suffix: "+", icon: Code },
  { label: "Happy Clients", value: 120, suffix: "+", icon: Users },
  { label: "Team Members", value: 25, suffix: "+", icon: Users },
  { label: "Years Experience", value: 6, suffix: "+", icon: Clock },
  { label: "Client Retention", value: 95, suffix: "%", icon: Heart },
  { label: "Schools Served", value: 80, suffix: "+", icon: Target },
];

// Globe icon component
const Globe = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export default function AboutPage() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

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
                About Us
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Transforming Businesses Through Technology
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                We're a team of passionate developers, designers, and
                problem-solvers dedicated to building software that drives real
                business growth.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Rocket className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                  <CardDescription className="text-base mt-2">
                    To design and develop reliable, user-friendly, and efficient
                    software tailored to each client's unique needs, helping
                    them achieve greater productivity and success.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>Client-centric approach</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>Innovation-driven development</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>Long-term partnerships</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Eye className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                  <CardDescription className="text-base mt-2">
                    To empower businesses with intelligent, scalable, and
                    future-ready software solutions that simplify operations and
                    accelerate digital transformation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>Future-ready solutions</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>Digital transformation leaders</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>Global impact through technology</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground">
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
              Core Values
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Drives Us
            </h2>
            <p className="text-muted-foreground">
              Our values shape everything we do, from client relationships to
              code quality
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 group bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
              Our Journey
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Company Milestones
            </h2>
            <p className="text-muted-foreground">
              From humble beginnings to becoming a trusted software partner
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20 hidden lg:block" />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={cn(
                    "relative lg:grid lg:grid-cols-2 gap-8 items-center",
                    index % 2 === 0 ? "lg:text-right" : "lg:text-left",
                  )}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background hidden lg:block z-10" />

                  <div
                    className={cn(
                      "mb-6 lg:mb-0",
                      index % 2 === 0 ? "lg:pr-12" : "lg:col-start-2 lg:pl-12",
                    )}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                            <milestone.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-primary">
                              {milestone.year}
                            </div>
                            <h3 className="font-bold text-lg">
                              {milestone.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
              Leadership
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground">
              Passionate experts dedicated to your success
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {team.map((member, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center hover:shadow-xl transition-all duration-300 group bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <Avatar className="w-32 h-32 mx-auto mb-4 ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
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
                Our Location
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Based in Najibabad,
                <br />
                Serving Worldwide
              </h2>
              <p className="text-muted-foreground mb-6">
                From our headquarters in Uttar Pradesh, we deliver cutting-edge
                software solutions to clients across India and globally.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Najibabad, Bijnor, Uttar Pradesh</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span>Serving clients across India & International</span>
                </div>
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
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600&h=400&fit=crop"
                  alt="Office location"
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">Lars Tech Solutions</div>
                      <div className="text-sm text-muted-foreground">
                        Najibabad, Bijnor, UP
                      </div>
                    </div>
                    <Link href="/contact">
                      <Button variant="outline" className="group">
                        Visit Us
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Journey With Us?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business through
              technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="group">
                  Start a Conversation
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
