// src/app/services/[slug]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Code,
  LayoutDashboard,
  Cloud,
  Database,
  Briefcase,
  Shield,
  ArrowRight,
  CheckCircle2,
  Star,
  Clock,
  Users,
  Award,
  Zap,
  TrendingUp,
  Smartphone,
  Rocket,
  Calendar,
  DollarSign,
  Heart,
  Play,
  Sparkles,
  Gem,
  Target,
  Layers,
  GitBranch,
  Palette,
  Lock,
  Server,
  Terminal,
  Wifi,
  Coffee,
  Gift,
  Globe,
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
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

import { AnimatedBlobs, FloatingBlob } from "@/components/common/blobs";

// Custom icon components (keep as is)
const BarChart3 = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>
);

const CreditCard = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const Cpu = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);

const FileText = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const Package = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 6h16v12H4z" />
    <path d="M12 6v12" />
    <path d="M8 10h8" />
  </svg>
);

// Services data (keep as is from your original)
const servicesData = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    slug: "custom-software-development",
    tagline: "Build exactly what you need, nothing less",
    description:
      "Tailor-made software solutions built specifically for your unique business needs and challenges.",
    fullDescription:
      "We design and develop custom software that addresses your specific operational challenges. Our team works closely with you to understand your requirements and deliver a solution that perfectly fits your workflow.",
    icon: Code,
    gradient: "from-blue-600 via-blue-500 to-cyan-600",
    bgGradient: "from-blue-50/50 to-cyan-50/50",
    stats: [
      { label: "Projects Delivered", value: "150+", icon: Code },
      { label: "Client Satisfaction", value: "98%", icon: Heart },
      { label: "Avg. Time Savings", value: "60%", icon: Clock },
    ],
    features: [
      {
        title: "Requirement Analysis",
        description: "Deep understanding of your business needs",
        icon: Target,
      },
      {
        title: "Custom Architecture",
        description: "Scalable solution design",
        icon: Layers,
      },
      {
        title: "Agile Development",
        description: "Iterative delivery with feedback loops",
        icon: GitBranch,
      },
      {
        title: "Quality Assurance",
        description: "Rigorous testing at every stage",
        icon: Shield,
      },
      {
        title: "Deployment Support",
        description: "Smooth go-live process",
        icon: Rocket,
      },
      {
        title: "24/7 Maintenance",
        description: "Ongoing support and updates",
        icon: Clock,
      },
    ],
    benefits: [
      {
        title: "Perfect Fit",
        description: "Tailored to your exact processes",
        impact: "40% efficiency gain",
      },
      {
        title: "Competitive Edge",
        description: "Unique features vs off-the-shelf",
        impact: "Unique advantage",
      },
      {
        title: "Full Ownership",
        description: "Complete IP rights to your software",
        impact: "100% control",
      },
      {
        title: "Scalable",
        description: "Grows with your business",
        impact: "Future-proof",
      },
    ],
    technologies: [
      { name: "React", level: 95, icon: Terminal },
      { name: "Node.js", level: 90, icon: Server },
      { name: "Python", level: 85, icon: Code },
      { name: "PostgreSQL", level: 88, icon: Database },
      { name: "AWS", level: 82, icon: Cloud },
    ],
    pricing: "Project-based",
    delivery: "4-12 weeks",
    color: "from-blue-500 to-cyan-500",
    testimonials: [
      {
        name: "Rajesh Kumar",
        role: "CTO, TechCorp",
        content:
          "They delivered beyond our expectations. The custom software has transformed our operations.",
        rating: 5,
        image: "https://i.pravatar.cc/150?img=1",
      },
      {
        name: "Priya Sharma",
        role: "Director, Innovate Solutions",
        content:
          "Professional team with deep technical expertise. Highly recommended!",
        rating: 5,
        image: "https://i.pravatar.cc/150?img=2",
      },
    ],
  },
  // ... rest of your services data (keep as is)
];

// Helper function
function getServiceBySlug(slug: string) {
  return servicesData.find((service) => service.slug === slug);
}

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = getServiceBySlug(slug);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-12 h-12 text-primary" />
            </div>
          </motion.div>
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The service you're looking for doesn't exist.
          </p>
          <Link href="/services">
            <Button className="group">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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
      <section
        ref={heroRef}
        className="relative overflow-hidden pt-20 lg:pt-32 pb-16 z-0"
      >
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className={cn(
            "absolute inset-0 bg-gradient-to-br",
            service.bgGradient,
          )}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm mb-6 backdrop-blur-sm">
                <Sparkles className="w-3 h-3" />
                <span>Premium Service</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {service.title}
                </span>
              </h1>
              <p className="text-xl text-primary font-semibold mb-4">
                {service.tagline}
              </p>
              <p className="text-muted-foreground text-lg mb-8">
                {service.fullDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className={cn(
                      "bg-gradient-to-r shadow-lg hover:shadow-xl transition-all",
                      service.gradient,
                    )}
                  >
                    Start Your Project
                    <Rocket className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="#process">
                  <Button size="lg" variant="outline">
                    How It Works
                    <Play className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div
                className={cn(
                  "relative w-full aspect-square rounded-3xl bg-gradient-to-br flex items-center justify-center shadow-2xl",
                  service.gradient,
                )}
              >
                <motion.div
                  animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <service.icon className="w-32 h-32 text-white opacity-90" />
                </motion.div>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -left-8 top-8 bg-background/90 backdrop-blur-sm rounded-xl shadow-lg p-3"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">
                        Happy Clients
                      </div>
                      <div className="font-bold">120+</div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute -right-8 bottom-8 bg-background/90 backdrop-blur-sm rounded-xl shadow-lg p-3"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Star className="w-4 h-4 text-primary fill-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">
                        Rating
                      </div>
                      <div className="font-bold">4.9/5</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
              Key Benefits
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose Our {service.title.split(" ")[0]} Service
            </h2>
            <p className="text-muted-foreground">
              Transform your business with these powerful advantages
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full text-center hover:shadow-xl transition-all bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Gem className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {benefit.description}
                    </p>
                    <Badge variant="secondary" className="mt-2">
                      {benefit.impact}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
              Core Features
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Everything You Need
            </h2>
            <p className="text-muted-foreground">
              Comprehensive features designed to meet your requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-lg transition-all cursor-pointer bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery & Pricing */}
      <section className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="bg-gradient-to-r from-primary/5 to-transparent text-center bg-background/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-sm text-muted-foreground mb-2">
                  Delivery Timeline
                </div>
                <div className="text-2xl font-bold">{service.delivery}</div>
                <p className="text-sm text-muted-foreground mt-2">
                  From project kickoff to launch
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-primary/5 to-transparent text-center bg-background/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-sm text-muted-foreground mb-2">
                  Pricing Model
                </div>
                <div className="text-2xl font-bold">{service.pricing}</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Transparent, no hidden costs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
              Technology Stack
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Modern Technologies We Use
            </h2>
            <p className="text-muted-foreground">
              Built with cutting-edge tools for performance and reliability
            </p>
          </div>
          <Card className="max-w-2xl mx-auto bg-background/80 backdrop-blur-sm">
            <CardContent className="p-8 space-y-6">
              {service.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <tech.icon className="w-4 h-4 text-primary" />
                      <span className="font-medium">{tech.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {tech.level}%
                    </span>
                  </div>
                  <Progress value={tech.level} className="h-2" />
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
              Client Testimonials
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground">
              Real feedback from businesses we've helped
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={testimonial.image} />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {testimonial.role}
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

      {/* Process Section */}
      <section id="process" className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
              Our Process
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              How We Bring Ideas to Life
            </h2>
            <p className="text-muted-foreground">
              A transparent, agile process that ensures quality delivery
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Discovery & Research",
                description:
                  "We dive deep into your requirements, goals, and challenges",
                icon: Target,
                color: "from-blue-500 to-cyan-500",
              },
              {
                step: "02",
                title: "Planning & Architecture",
                description:
                  "We create a detailed roadmap, system architecture, and tech stack",
                icon: Layers,
                color: "from-purple-500 to-pink-500",
              },
              {
                step: "03",
                title: "Design & Prototype",
                description:
                  "We design intuitive interfaces and create interactive prototypes",
                icon: Palette,
                color: "from-green-500 to-emerald-500",
              },
              {
                step: "04",
                title: "Development & Testing",
                description:
                  "Agile development with regular updates and rigorous testing",
                icon: Code,
                color: "from-orange-500 to-red-500",
              },
              {
                step: "05",
                title: "Deployment & Launch",
                description:
                  "Smooth deployment, data migration, and launch support",
                icon: Rocket,
                color: "from-indigo-500 to-purple-500",
              },
              {
                step: "06",
                title: "Support & Growth",
                description:
                  "Ongoing maintenance, updates, and continuous improvement",
                icon: Heart,
                color: "from-cyan-500 to-blue-500",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary/20 mb-4">
                      {step.step}
                    </div>
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4",
                        step.color,
                      )}
                    >
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden z-0">
        <div
          className={cn("absolute inset-0 bg-gradient-to-r", service.gradient)}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl">
              <CardContent className="p-8 lg:p-12 text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6"
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Let's discuss how our {service.title.toLowerCase()} can help
                  you achieve your goals
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="group shadow-lg"
                    >
                      Start Your Journey
                      <Rocket className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/school-erp/demo">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-transparent text-white border-white hover:bg-white/10"
                    >
                      Schedule Consultation
                      <Calendar className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap justify-center gap-8 text-white/80 text-sm">
                  <div className="flex items-center gap-2">
                    <Coffee className="w-4 h-4" />
                    <span>Free Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gift className="w-4 h-4" />
                    <span>No Obligation Quote</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>24hr Response</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
