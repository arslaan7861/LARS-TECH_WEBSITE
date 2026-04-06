// src/app/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code,
  Briefcase,
  LayoutDashboard,
  Database,
  Cloud,
  Shield,
  Users,
  Award,
  Clock,
  Heart,
  ChevronRight,
  Star,
  Play,
  Sparkles,
  TrendingUp,
  Zap,
  Rocket,
  Target,
  MessageCircle,
  Calendar,
  BookOpen,
  Bus,
  CreditCard,
  UserCheck,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { AnimatedBlobs, FloatingBlob } from "@/components/common/blobs";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Services data
const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailor-made solutions built specifically for your unique business needs.",
    icon: Code,
    href: "/services/custom-software-development",
    color: "from-blue-600 to-cyan-600",
    stat: "150+ Projects",
  },
  {
    title: "Web Application Development",
    description:
      "Modern, responsive web apps that deliver exceptional user experiences.",
    icon: LayoutDashboard,
    href: "/services/web-application-development",
    color: "from-purple-600 to-pink-600",
    stat: "80+ Apps",
  },
  {
    title: "SaaS Product Development",
    description:
      "End-to-end SaaS platforms with multi-tenancy and subscription management.",
    icon: Cloud,
    href: "/services/saas-product-development",
    color: "from-green-600 to-emerald-600",
    stat: "25+ Products",
  },
  {
    title: "Business Automation",
    description:
      "Intelligent automation solutions that reduce manual work by up to 70%.",
    icon: Database,
    href: "/services/business-automation",
    color: "from-orange-600 to-red-600",
    stat: "500+ Processes",
  },
  {
    title: "ERP Systems",
    description:
      "Complete business management solutions integrating all core processes.",
    icon: Briefcase,
    href: "/services/erp-management-systems",
    color: "from-indigo-600 to-purple-600",
    stat: "15+ Modules",
  },
  {
    title: "API Integration",
    description:
      "Secure, scalable APIs enabling seamless data exchange between systems.",
    icon: Shield,
    href: "/services/api-development-integration",
    color: "from-cyan-600 to-blue-600",
    stat: "100+ APIs",
  },
];

// School ERP features
const erpFeatures = [
  {
    title: "Attendance Management",
    icon: UserCheck,
    description: "Biometric integration & real-time tracking",
  },
  {
    title: "Exams & Results",
    icon: BookOpen,
    description: "Online exams & instant results",
  },
  {
    title: "Fee Management",
    icon: CreditCard,
    description: "Online collection & auto-receipts",
  },
  {
    title: "Student Management",
    icon: GraduationCap,
    description: "Complete academic profiles",
  },
  {
    title: "Teacher Management",
    icon: Users,
    description: "Staff records & payroll",
  },
  { title: "Bus Tracking", icon: Bus, description: "Real-time GPS tracking" },
];

// Stats
const stats = [
  { label: "Projects Completed", value: 150, suffix: "+", icon: Code },
  { label: "Happy Clients", value: 120, suffix: "+", icon: Users },
  { label: "Years Experience", value: 6, suffix: "+", icon: Clock },
  { label: "Client Satisfaction", value: 98, suffix: "%", icon: Heart },
];

// Testimonials
const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "School Director",
    content:
      "Lars Tech's School ERP transformed our administrative operations. Attendance tracking and fee collection are now completely automated.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    name: "Priya Sharma",
    role: "CTO, TechStart",
    content:
      "Their custom software solution helped us scale our operations efficiently. The team's expertise and dedication are unmatched.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Amit Verma",
    role: "Business Owner",
    content:
      "Professional team that delivered on time and within budget. Great experience working with them from start to finish.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

// Custom hook for scroll reveal
const useInView = (ref: React.RefObject<HTMLElement | null>) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref]);

  return isInView;
};

export default function HomePage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Consistent Background Layer - Applied to all sections */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-primary/5 -z-20" />
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.02] -z-20" />

      {/* Persistent Blobs - Same across all sections for consistency */}
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
        className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 z-0"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeInUp}>
                <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 px-4 py-1.5 text-sm backdrop-blur-sm">
                  <Sparkles className="w-3 h-3 mr-1 inline" />
                  India's Trusted Software Partner
                </Badge>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Build Scalable Software
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  That Drives Growth
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                Lars Tech Solutions delivers custom software, web applications,
                and ERP systems that help businesses automate, scale, and grow
                efficiently.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
              >
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="group rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start Your Project
                    <Rocket className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/school-erp/demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-xl group"
                  >
                    <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                    Watch Demo
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 group cursor-pointer backdrop-blur-sm"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <div className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent z-10" />
                <img
                  src="home-hero.png"
                  alt="Team working on software development"
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              <motion.div
                className="absolute -bottom-5 -left-5 bg-background/90 backdrop-blur-sm rounded-xl shadow-xl p-3 border z-20"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">4.9/5 Rating</div>
                    <div className="text-xs text-muted-foreground">
                      100+ reviews
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-5 -right-5 bg-background/90 backdrop-blur-sm rounded-xl shadow-xl p-2 border z-20"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                  </div>
                  <span className="text-xs font-medium">
                    Trusted by 120+ companies
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section - No background change */}
      <section className="py-12 border-y border-border relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-center text-sm text-muted-foreground mb-6">
            Trusted by innovative companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {[
              "TechCorp",
              "InnovateHub",
              "SmartEdu",
              "CloudScale",
              "DataFlow",
              "NextGen",
            ].map((company, i) => (
              <motion.span
                key={i}
                className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                {company}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
                What We Do
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Comprehensive Software Solutions
              </h2>
              <p className="text-muted-foreground text-lg">
                End-to-end development services tailored to your business needs
              </p>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
              >
                <Link href={service.href}>
                  <Card className="group h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden relative bg-background/80 backdrop-blur-sm">
                    <CardContent className="p-6 relative z-10">
                      <div
                        className={cn(
                          "w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300",
                          service.color,
                        )}
                      >
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                          {service.stat}
                        </Badge>
                        <span className="text-primary font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                          Learn More <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* School ERP Section */}
      <section className="py-24 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInLeft}>
                <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
                  Flagship Product
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Complete School <br />
                  <span className="text-primary">Management System</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Digitize and streamline your school operations with our
                  comprehensive School ERP System. From attendance to fee
                  management, we've got you covered.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInLeft}
                className="grid sm:grid-cols-2 gap-4 mb-10"
              >
                {erpFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/30 transition-all duration-300"
                  >
                    <div className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <feature.icon className="w-3 h-3 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{feature.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {feature.description}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeInLeft}
                className="flex flex-wrap gap-4"
              >
                <Link href="/school-erp">
                  <Button size="lg" className="rounded-xl group">
                    Explore ERP
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/school-erp/demo">
                  <Button size="lg" variant="outline" className="rounded-xl">
                    Request Demo
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-4">
                  <img
                    src="school-erp.png"
                    alt="School ERP Dashboard"
                    className="rounded-xl shadow-2xl w-full"
                  />
                </div>

                <motion.div
                  className="absolute -top-4 -left-4 bg-background/90 backdrop-blur-sm rounded-xl shadow-lg p-3 border"
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">80+</div>
                      <div className="text-xs text-muted-foreground">
                        Schools
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -right-4 bg-background/90 backdrop-blur-sm rounded-xl shadow-lg p-3 border"
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-blue-500" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">25K+</div>
                      <div className="text-xs text-muted-foreground">
                        Students
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                What Makes Us Different
              </h2>
              <p className="text-muted-foreground text-lg">
                We combine technical expertise with business understanding to
                deliver exceptional results
              </p>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Custom-First Approach",
                description: "Built for your needs, not generic templates",
                icon: Target,
                stat: "100% Tailored",
              },
              {
                title: "Scalable Architecture",
                description: "Grows seamlessly with your business",
                icon: TrendingUp,
                stat: "99.9% Uptime",
              },
              {
                title: "Modern Tech Stack",
                description: "Fast, secure, and maintainable systems",
                icon: Zap,
                stat: "Latest Tech",
              },
              {
                title: "End-to-End Delivery",
                description: "From idea → design → development → deployment",
                icon: Rocket,
                stat: "On Time",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full text-center group cursor-pointer overflow-hidden relative bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.description}
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      {item.stat}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
                Testimonials
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <p className="text-muted-foreground">
                Trusted by businesses across India
              </p>
            </motion.div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="text-center p-8 lg:p-12 shadow-xl bg-background/80 backdrop-blur-sm">
                  <CardContent>
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonials[activeTestimonial].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-primary text-primary"
                          />
                        ),
                      )}
                    </div>
                    <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
                      "{testimonials[activeTestimonial].content}"
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={testimonials[activeTestimonial].image}
                        alt={testimonials[activeTestimonial].name}
                        className="w-14 h-14 rounded-full object-cover ring-4 ring-primary/20"
                      />
                      <div className="text-left">
                        <div className="font-semibold text-lg">
                          {testimonials[activeTestimonial].name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonials[activeTestimonial].role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    activeTestimonial === index
                      ? "w-8 bg-primary"
                      : "bg-muted-foreground/30",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        {/* White blobs for dark background */}
        <AnimatedBlobs count={4} color="white" />
        <FloatingBlob
          color="white"
          size="w-96 h-96"
          className="top-10 left-10"
          delay={0}
        />
        <FloatingBlob
          color="white"
          size="w-80 h-80"
          className="bottom-20 right-20"
          delay={2}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
              Let's discuss how our custom software solutions can help you
              achieve your business goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="group shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                >
                  Contact Us Today
                  <MessageCircle className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                </Button>
              </Link>
              <Link href="/school-erp/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50 rounded-xl"
                >
                  Request a Demo
                  <Calendar className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
