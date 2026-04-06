// src/app/school-erp/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Link from "next/link";
import {
  School,
  Users,
  BookOpen,
  CreditCard,
  Bus,
  Calendar,
  BarChart3,
  Bell,
  MessageSquare,
  FileText,
  UserCheck,
  GraduationCap,
  Clock,
  Smartphone,
  Shield,
  Cloud,
  ArrowRight,
  CheckCircle2,
  Star,
  Award,
  Heart,
  Play,
  Sparkles,
  LayoutDashboard,
  TrendingUp,
  Zap,
  Database,
  Settings,
  Calculator,
  MapPin,
  ClipboardList,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

// Feature categories
const featureCategories = [
  { id: "all", label: "All Features", icon: LayoutDashboard },
  { id: "academic", label: "Academic", icon: BookOpen },
  { id: "administration", label: "Administration", icon: Users },
  { id: "finance", label: "Finance", icon: CreditCard },
  { id: "communication", label: "Communication", icon: MessageSquare },
  { id: "transport", label: "Transport", icon: Bus },
];

// All features data
const allFeatures = [
  // Academic Features
  {
    id: "attendance",
    title: "Attendance Management",
    description:
      "Automated attendance tracking with biometric integration, real-time updates, and instant notifications to parents.",
    icon: UserCheck,
    category: "academic",
    benefits: [
      "95% time savings",
      "Real-time tracking",
      "Auto-generated reports",
    ],
  },
  {
    id: "exams",
    title: "Exams & Results",
    description:
      "Online examinations, automated grading, instant result generation, and detailed performance analytics.",
    icon: ClipboardList,
    category: "academic",
    benefits: [
      "Instant results",
      "Multiple exam types",
      "Performance analytics",
    ],
  },
  {
    id: "timetable",
    title: "Timetable Management",
    description:
      "Dynamic timetable creation, teacher assignment, and automatic conflict detection.",
    icon: Calendar,
    category: "academic",
    benefits: [
      "Conflict-free scheduling",
      "Easy adjustments",
      "Teacher allocation",
    ],
  },
  {
    id: "assignments",
    title: "Assignments & Homework",
    description:
      "Digital assignment submission, plagiarism check, and automated grading system.",
    icon: FileText,
    category: "academic",
    benefits: ["Paperless submissions", "Auto-grading", "Plagiarism check"],
  },
  // Administration Features
  {
    id: "student-mgmt",
    title: "Student Management",
    description:
      "Complete student profiles, enrollment management, document storage, and academic history.",
    icon: GraduationCap,
    category: "administration",
    benefits: ["Centralized records", "Easy enrollment", "Document management"],
  },
  {
    id: "teacher-mgmt",
    title: "Teacher Management",
    description:
      "Staff records, attendance, leave management, payroll integration, and performance tracking.",
    icon: Users,
    category: "administration",
    benefits: ["HR automation", "Payroll ready", "Performance metrics"],
  },
  {
    id: "library",
    title: "Library Management",
    description:
      "Book catalog, issue/return tracking, digital library, and overdue notifications.",
    icon: BookOpen,
    category: "administration",
    benefits: ["Digital catalog", "Automated reminders", "Inventory tracking"],
  },
  // Finance Features
  {
    id: "fee-mgmt",
    title: "Fee Management",
    description:
      "Online fee collection, multiple payment gateways, automated receipts, and payment reminders.",
    icon: CreditCard,
    category: "finance",
    benefits: ["Online payments", "Auto-receipts", "Payment tracking"],
  },
  {
    id: "payroll",
    title: "Payroll Management",
    description:
      "Salary calculation, tax deduction, payslip generation, and bank integration.",
    icon: Calculator,
    category: "finance",
    benefits: ["Automated payroll", "Tax compliance", "Bank integration"],
  },
  {
    id: "expenses",
    title: "Expense Tracking",
    description:
      "School expense management, budget tracking, and financial reporting.",
    icon: BarChart3,
    category: "finance",
    benefits: ["Budget control", "Expense analytics", "Audit trail"],
  },
  // Communication Features
  {
    id: "notifications",
    title: "Real-time Notifications",
    description:
      "Instant alerts via SMS, email, and push notifications for events, announcements, and emergencies.",
    icon: Bell,
    category: "communication",
    benefits: ["Instant alerts", "Multiple channels", "Emergency broadcast"],
  },
  {
    id: "parent-app",
    title: "Parent Mobile App",
    description:
      "Dedicated mobile app for parents to track child progress, fees, attendance, and receive updates.",
    icon: Smartphone,
    category: "communication",
    benefits: [
      "24/7 access",
      "Child progress tracking",
      "Direct communication",
    ],
  },
  {
    id: "messaging",
    title: "Internal Messaging",
    description:
      "Secure messaging system between teachers, parents, and administration.",
    icon: MessageSquare,
    category: "communication",
    benefits: ["Secure chat", "Group messaging", "File sharing"],
  },
  // Transport Features
  {
    id: "bus-tracking",
    title: "Live Bus Tracking",
    description:
      "Real-time GPS tracking of school buses with arrival time predictions and route optimization.",
    icon: Bus,
    category: "transport",
    benefits: ["Live location", "ETAs", "Route optimization"],
  },
  {
    id: "transport-mgmt",
    title: "Transport Management",
    description:
      "Route planning, vehicle maintenance tracking, driver management, and fuel monitoring.",
    icon: MapPin,
    category: "transport",
    benefits: ["Fleet management", "Maintenance alerts", "Fuel tracking"],
  },
];

// Key benefits
const keyBenefits = [
  {
    title: "Time Savings",
    description: "Reduce administrative workload by up to 70%",
    icon: Clock,
    stat: "70%",
  },
  {
    title: "Cost Reduction",
    description: "Lower operational costs with automation",
    icon: CreditCard,
    stat: "40%",
  },
  {
    title: "Parent Satisfaction",
    description: "Improved communication and transparency",
    icon: Heart,
    stat: "95%",
  },
  {
    title: "Data Accuracy",
    description: "Eliminate manual errors completely",
    icon: Database,
    stat: "100%",
  },
];

// Quick features for hero section
const quickFeatures = [
  {
    title: "Attendance Management",
    icon: UserCheck,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Exams & Results",
    icon: FileText,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Fee Management",
    icon: CreditCard,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Student Management",
    icon: GraduationCap,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Teacher Management",
    icon: Users,
    color: "from-indigo-500 to-purple-500",
  },
  { title: "Bus Tracking", icon: Bus, color: "from-cyan-500 to-blue-500" },
  {
    title: "Timetable Management",
    icon: Calendar,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Parent App",
    icon: Smartphone,
    color: "from-teal-500 to-green-500",
  },
];

// Pricing plans
const pricingPlans = [
  {
    name: "Starter",
    price: "₹24,999",
    period: "/month",
    description: "Perfect for small schools",
    features: [
      "Up to 1000 students",
      "Basic attendance tracking",
      "Fee management",
      "Student profiles",
      "Email support",
      "Mobile app access",
    ],
    buttonText: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "₹49,999",
    period: "/month",
    description: "Best for growing schools",
    features: [
      "Up to 1,500 students",
      "Advanced attendance with biometric",
      "Complete fee management",
      "Exam & results module",
      "Bus tracking system",
      "Parent mobile app",
      "Priority support",
      "API access",
    ],
    buttonText: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large institutions",
    features: [
      "Unlimited students",
      "All features included",
      "Custom modules",
      "Dedicated account manager",
      "24/7 phone support",
      "On-site training",
      "Data migration",
      "Custom integrations",
    ],
    buttonText: "Contact Sales",
    popular: false,
  },
];

// Stats
const stats = [
  { label: "Schools Using ERP", value: 80, suffix: "+", icon: School },
  { label: "Students Managed", value: 25000, suffix: "+", icon: Users },
  { label: "Teachers Onboard", value: 2000, suffix: "+", icon: Users },
  { label: "Parent Downloads", value: 50000, suffix: "+", icon: Smartphone },
];

// Testimonials
const testimonials = [
  {
    name: "Dr. Suresh Kumar",
    role: "Principal, Delhi Public School",
    content:
      "Lars Tech School ERP transformed our entire administrative process. Attendance tracking and fee collection are now completely automated.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    name: "Mrs. Anita Sharma",
    role: "Parent",
    content:
      "The parent app is a game-changer! I can track my child's attendance, fees, and academic progress anytime, anywhere.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Mr. Rajesh Verma",
    role: "School Administrator",
    content:
      "Excellent support team and feature-rich platform. The bus tracking feature has been particularly valuable.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

export default function SchoolERPMergedPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const filteredFeatures =
    activeCategory === "all"
      ? allFeatures
      : allFeatures.filter((f) => f.category === activeCategory);

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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
                  Flagship Product
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Complete School <br />
                  Management System
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Digitize and streamline your school operations with our
                  comprehensive ERP system. From attendance to fee management,
                  we've got you covered.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/school-erp/demo">
                    <Button size="lg" className="group">
                      Request Free Demo
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline">
                      Contact Sales
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <stat.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xl font-bold">
                          {stat.value}
                          {stat.suffix}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="school-erp.png"
                  alt="School ERP Dashboard"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background/90 backdrop-blur-sm rounded-xl shadow-xl p-4 border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-primary fill-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">4.9/5 Rating</div>
                    <div className="text-xs text-muted-foreground">
                      Based on 100+ reviews
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Stats Section */}
      <section className="py-16 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {keyBenefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1">
                      {benefit.stat}
                    </div>
                    <div className="font-semibold text-sm">{benefit.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {benefit.description}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Features Grid */}
      <section className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
              Powerful Features
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Everything You Need to Run Your School
            </h2>
            <p className="text-muted-foreground">
              Comprehensive modules designed to handle every aspect of school
              management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background/80 backdrop-blur-sm">
                  <CardHeader>
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",
                        feature.color,
                      )}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features Tabs Section */}
      <section className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
              Explore Features
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Deep Dive Into Our Features
            </h2>
            <p className="text-muted-foreground">
              Browse through our comprehensive feature set by category
            </p>
          </div>

          <Tabs
            defaultValue="all"
            className="w-full"
            onValueChange={setActiveCategory}
          >
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList className="inline-flex">
                {featureCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex items-center gap-2"
                  >
                    <category.icon className="w-4 h-4" />
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={activeCategory} className="mt-6">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background/80 backdrop-blur-sm">
                      <CardHeader>
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <feature.icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {feature.title}
                        </CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {feature.benefits.map((benefit, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-sm"
                            >
                              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-muted-foreground">
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Platform Features */}
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
                Modern Platform
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Cloud-Based & Mobile Ready
              </h2>
              <p className="text-muted-foreground mb-6">
                Access your school data from anywhere, anytime. Our platform is
                built with cutting-edge technology to ensure reliability,
                security, and performance.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Cloud className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold">100% Cloud-Based</div>
                    <div className="text-sm text-muted-foreground">
                      No hardware required, automatic updates
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold">
                      Mobile Apps for All Users
                    </div>
                    <div className="text-sm text-muted-foreground">
                      iOS & Android apps for parents, teachers, and admins
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold">Bank-Level Security</div>
                    <div className="text-sm text-muted-foreground">
                      256-bit SSL encryption, regular backups
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
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=400&fit=crop"
                  alt="Mobile app"
                  className="rounded-xl shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=400&fit=crop"
                  alt="Dashboard"
                  className="rounded-xl shadow-lg mt-8"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
              Pricing
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-muted-foreground">
              Choose the plan that best fits your school's needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={cn("relative", plan.popular && "lg:-mt-4")}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <Card
                  className={cn(
                    "h-full hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm",
                    plan.popular && "border-primary shadow-lg",
                  )}
                >
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">
                        {plan.period}
                      </span>
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="grow flex flex-col">
                    <ul className="space-y-3 ">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="grow"></div>
                    <Button
                      className={cn(
                        "w-full mt-6 ",
                        plan.popular ? "bg-primary" : "variant-outline",
                      )}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
              Trusted by Schools
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Educators Say
            </h2>
            <p className="text-muted-foreground">
              Join 80+ schools that have transformed their operations with our
              ERP system
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
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
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
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

      {/* FAQ Section */}
      <section className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
              FAQs
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know about our School ERP system
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How long does implementation take?
                </AccordionTrigger>
                <AccordionContent>
                  Typical implementation takes 2-4 weeks depending on school
                  size. We provide full training and support during the process.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Is there a mobile app for parents?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! We provide dedicated mobile apps for both iOS and Android
                  platforms for parents, teachers, and administrators.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What about data security?</AccordionTrigger>
                <AccordionContent>
                  We use bank-level 256-bit SSL encryption, regular backups, and
                  comply with data protection regulations to keep your data
                  safe.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Do you provide training?</AccordionTrigger>
                <AccordionContent>
                  Absolutely! We provide comprehensive training for all users
                  including administrators, teachers, and parents.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What support do you offer?</AccordionTrigger>
                <AccordionContent>
                  We offer 24/7 technical support via phone, email, and
                  WhatsApp. Dedicated account manager for every school.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
              Ready to Digitize Your School?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join 80+ schools already using Lars Tech School ERP to streamline
              their operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/school-erp/demo">
                <Button size="lg" variant="secondary" className="group">
                  Schedule a Demo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
