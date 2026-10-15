// src/data/services.ts
import {
  Code,
  LayoutDashboard,
  Cloud,
  Database,
  Briefcase,
  Shield,
  Clock,
  Heart,
  Target,
  Layers,
  GitBranch,
  Rocket,
  Terminal,
  Server,
  Users,
  ClipboardCheck,
  Zap,
  Lock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceStat {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface ServiceFeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceBenefitItem {
  title: string;
  description: string;
  impact: string;
}

export interface ServiceTechItem {
  name: string;
  level: number;
  icon: LucideIcon;
}

export interface ServiceTestimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  fullDescription: string;
  icon: LucideIcon;
  badge?: string;
  gradient: string;
  bgGradient: string;
  color: string;
  stat: string;
  stats: ServiceStat[];
  features: ServiceFeatureItem[];
  benefits: ServiceBenefitItem[];
  technologies: ServiceTechItem[];
  pricing: string;
  delivery: string;
  testimonials: ServiceTestimonial[];
}

export const servicesData: ServiceItem[] = [
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
    badge: "Most Popular",
    gradient: "from-blue-600 via-blue-500 to-cyan-600",
    bgGradient: "from-blue-50/50 to-cyan-50/50",
    color: "from-blue-500 to-cyan-500",
    stat: "150+ Projects",
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
    testimonials: [
      {
        name: "Rajesh Kumar",
        role: "CTO, TechCorp",
        content:
          "They delivered beyond our expectations. The custom software has transformed our operations.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      },
      {
        name: "Priya Sharma",
        role: "Director, Innovate Solutions",
        content:
          "Professional team with deep technical expertise. Highly recommended!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    id: "web-apps",
    title: "Web Application Development",
    slug: "web-application-development",
    tagline: "Modern, responsive, high-performance web applications",
    description:
      "Modern, responsive web applications that deliver exceptional user experiences across all devices.",
    fullDescription:
      "We build fast, responsive, and SEO-friendly web applications using modern web technologies. Our focus is on creating intuitive interfaces that engage users and drive conversions.",
    icon: LayoutDashboard,
    gradient: "from-purple-600 via-purple-500 to-pink-600",
    bgGradient: "from-purple-50/50 to-pink-50/50",
    color: "from-purple-500 to-pink-500",
    stat: "80+ Apps",
    stats: [
      { label: "Apps Launched", value: "80+", icon: LayoutDashboard },
      { label: "Avg. Lighthouse Score", value: "98/100", icon: Zap },
      { label: "Uptime Guaranteed", value: "99.9%", icon: Shield },
    ],
    features: [
      {
        title: "Responsive UX/UI",
        description: "Mobile-first, fluid experiences on every screen",
        icon: LayoutDashboard,
      },
      {
        title: "PWA & Offline Support",
        description: "Installable web apps with offline capabilities",
        icon: Zap,
      },
      {
        title: "API-driven Architecture",
        description: "Seamless REST/GraphQL integrations",
        icon: Layers,
      },
      {
        title: "SEO & Core Web Vitals",
        description: "Optimized for lightning-fast first contentful paint",
        icon: Rocket,
      },
      {
        title: "Enterprise Security",
        description: "Role-based access, CSRF, sanitization & data safety",
        icon: Shield,
      },
      {
        title: "CI/CD & Cloud Hosting",
        description: "Zero-downtime automated deployments",
        icon: GitBranch,
      },
    ],
    benefits: [
      {
        title: "Omnichannel Reach",
        description: "Runs seamlessly across all desktops, tablets & phones",
        impact: "100% device coverage",
      },
      {
        title: "Higher Conversion",
        description: "Faster load times translate directly to higher sales",
        impact: "Up to 3x engagement",
      },
      {
        title: "Easy Maintenance",
        description: "Modern modular codebases built with Next.js/React",
        impact: "Low tech debt",
      },
      {
        title: "Elastic Scalability",
        description: "Easily handle traffic spikes from 1K to 1M users",
        impact: "Zero downtime",
      },
    ],
    technologies: [
      { name: "Next.js / React", level: 98, icon: Terminal },
      { name: "TypeScript", level: 95, icon: Code },
      { name: "Tailwind CSS", level: 96, icon: Layers },
      { name: "Node.js", level: 90, icon: Server },
      { name: "PostgreSQL", level: 88, icon: Database },
    ],
    pricing: "Project-based",
    delivery: "6-16 weeks",
    testimonials: [
      {
        name: "Arun Verma",
        role: "Founder, SmartEdu",
        content:
          "The Lars Tech team turned our concept into a high-performance web platform in record time.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    id: "saas",
    title: "SaaS Product Development",
    slug: "saas-product-development",
    tagline: "Turn your software product vision into recurring revenue",
    description:
      "End-to-end SaaS platforms with multi-tenancy, subscription management, and scalability.",
    fullDescription:
      "Transform your idea into a successful, scalable SaaS business. We design and build robust multi-tenant architectures, payment systems, telemetry, and automated provisioning.",
    icon: Cloud,
    badge: "Trending",
    gradient: "from-green-600 via-emerald-500 to-teal-600",
    bgGradient: "from-green-50/50 to-emerald-50/50",
    color: "from-green-500 to-emerald-500",
    stat: "25+ Products",
    stats: [
      { label: "SaaS Products Built", value: "25+", icon: Cloud },
      { label: "Active End Users", value: "250K+", icon: Users },
      { label: "Avg. Launch Time", value: "10 weeks", icon: Clock },
    ],
    features: [
      {
        title: "Multi-Tenant Architecture",
        description: "Isolated data partitions and custom subdomains",
        icon: Layers,
      },
      {
        title: "Billing & Subscriptions",
        description: "Stripe, Razorpay, recurring tiers & invoice generation",
        icon: Rocket,
      },
      {
        title: "Auth & RBAC",
        description: "SSO, MFA, team invites and role-based permissions",
        icon: Lock,
      },
      {
        title: "Analytics & Telemetry",
        description: "User behavior tracking, churn prediction & MRR metrics",
        icon: Target,
      },
      {
        title: "Automated Onboarding",
        description: "Self-serve signups, guided tours and notifications",
        icon: GitBranch,
      },
      {
        title: "Auto-scaling Cloud",
        description: "Serverless and microservices setup for minimal idle cost",
        icon: Server,
      },
    ],
    benefits: [
      {
        title: "Predictable Revenue",
        description: "Designed from ground up for subscription models",
        impact: "Higher valuation",
      },
      {
        title: "Rapid Time-to-Market",
        description: "Pre-tested SaaS foundations for faster MVP launch",
        impact: "Weeks not years",
      },
      {
        title: "Global Compliance",
        description: "GDPR, secure data isolation and SOC2 practices",
        impact: "Enterprise ready",
      },
      {
        title: "Low OpEx",
        description: "Efficient cloud setups with optimized resource usage",
        impact: "-40% server cost",
      },
    ],
    technologies: [
      { name: "Node.js / Next.js", level: 95, icon: Terminal },
      { name: "PostgreSQL / Prisma", level: 92, icon: Database },
      { name: "AWS / Vercel", level: 90, icon: Cloud },
      { name: "Redis", level: 86, icon: Server },
      { name: "Stripe / Razorpay", level: 94, icon: Code },
    ],
    pricing: "Custom pricing",
    delivery: "8-20 weeks",
    testimonials: [
      {
        name: "Vikram Malhotra",
        role: "CEO, CloudScale",
        content:
          "Their understanding of SaaS multi-tenancy saved us months of costly trial and error.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    id: "automation",
    title: "Business Automation Systems",
    slug: "business-automation",
    tagline: "Eliminate repetitive tasks and streamline workflows",
    description:
      "Intelligent automation solutions that reduce manual work by up to 70% and eliminate human error.",
    fullDescription:
      "Automate repetitive manual tasks, synchronize data between legacy tools, and optimize your business processes with custom automated pipelines and rule engines.",
    icon: Database,
    gradient: "from-orange-600 via-amber-500 to-red-600",
    bgGradient: "from-orange-50/50 to-amber-50/50",
    color: "from-orange-500 to-red-500",
    stat: "500+ Processes",
    stats: [
      { label: "Automated Workflows", value: "500+", icon: Database },
      { label: "Manual Effort Cut", value: "70%", icon: Zap },
      { label: "Error Reduction", value: "99.4%", icon: Shield },
    ],
    features: [
      {
        title: "Workflow Automation",
        description: "Trigger-based multi-step business logic executions",
        icon: GitBranch,
      },
      {
        title: "Data Sync Pipelines",
        description: "Seamless synchronization between ERPs, CRMs & sheets",
        icon: Database,
      },
      {
        title: "Automated Reporting",
        description: "Scheduled executive PDF & email KPI summaries",
        icon: Target,
      },
      {
        title: "Custom Rules Engines",
        description: "Business logic configurable by non-developers",
        icon: Layers,
      },
      {
        title: "Queue & Job Processing",
        description: "High-throughput asynchronous job workers",
        icon: Server,
      },
      {
        title: "Audit & Exception Logging",
        description: "Complete trace logs and immediate failure alerts",
        icon: Shield,
      },
    ],
    benefits: [
      {
        title: "Tremendous Cost Savings",
        description: "Frees hundreds of employee hours each month",
        impact: "Up to 70% savings",
      },
      {
        title: "Zero Human Error",
        description: "Guaranteed consistency across all records and orders",
        impact: "100% accuracy",
      },
      {
        title: "Faster Processing",
        description: "Tasks that took hours now execute in seconds",
        impact: "Instant turnaround",
      },
      {
        title: "Operational Visibility",
        description: "Live dashboard tracking pipeline health & volume",
        impact: "Complete transparency",
      },
    ],
    technologies: [
      { name: "Python", level: 94, icon: Code },
      { name: "Node.js", level: 90, icon: Server },
      { name: "RabbitMQ / Redis", level: 88, icon: Terminal },
      { name: "Docker", level: 86, icon: Layers },
      { name: "PostgreSQL", level: 89, icon: Database },
    ],
    pricing: "Project-based",
    delivery: "6-14 weeks",
    testimonials: [
      {
        name: "Neha Joshi",
        role: "Operations Head, Logistics Hub",
        content:
          "The automation system reduced order processing times from 4 hours down to under 5 minutes.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    id: "erp",
    title: "ERP & Management Systems",
    slug: "erp-management-systems",
    tagline: "Unify every department and process in one cohesive system",
    description:
      "Complete business management solutions integrating finance, inventory, HR, and operations.",
    fullDescription:
      "Get a unified view of your entire business with tailor-made ERP systems. Connect inventory, finance, payroll, customer orders, and operations into a single source of truth.",
    icon: Briefcase,
    badge: "Enterprise",
    gradient: "from-indigo-600 via-violet-500 to-purple-600",
    bgGradient: "from-indigo-50/50 to-purple-50/50",
    color: "from-indigo-500 to-purple-500",
    stat: "15+ Modules",
    stats: [
      { label: "ERP Deployments", value: "35+", icon: Briefcase },
      { label: "Integrated Modules", value: "15+", icon: Layers },
      { label: "System Availability", value: "99.95%", icon: Shield },
    ],
    features: [
      {
        title: "Modular Architecture",
        description: "Adopt only the modules your business needs today",
        icon: Layers,
      },
      {
        title: "Centralized Data Store",
        description: "Single accurate truth across all company units",
        icon: Database,
      },
      {
        title: "Inventory & Supply Chain",
        description: "Real-time stock tracking, barcodes & supplier portals",
        icon: Target,
      },
      {
        title: "HR, Attendance & Payroll",
        description: "Biometric links, tax deductions, and salary slips",
        icon: Users,
      },
      {
        title: "Financial Accounting",
        description: "Invoicing, GST compliance, balance sheets & audits",
        icon: Rocket,
      },
      {
        title: "Role-Based Security",
        description: "Fine-grained permissions and detailed action audits",
        icon: Shield,
      },
    ],
    benefits: [
      {
        title: "Eliminate Data Silos",
        description: "All departments operate with synchronized data",
        impact: "Zero discrepancy",
      },
      {
        title: "Better Decisions",
        description: "Real-time executive analytics and business forecasts",
        impact: "Data-driven clarity",
      },
      {
        title: "Regulatory Compliance",
        description: "Automated tax receipts, GST, and audit reports",
        impact: "100% compliant",
      },
      {
        title: "Cost Reduction",
        description: "Consolidate 5+ disparate software subscriptions into one",
        impact: "-50% software costs",
      },
    ],
    technologies: [
      { name: "React / Next.js", level: 96, icon: Terminal },
      { name: "Node.js / Express", level: 92, icon: Server },
      { name: "PostgreSQL", level: 95, icon: Database },
      { name: "Redis", level: 88, icon: Code },
      { name: "Docker", level: 90, icon: Layers },
    ],
    pricing: "Enterprise pricing",
    delivery: "12-24 weeks",
    testimonials: [
      {
        name: "Sanjay Singhal",
        role: "Managing Director, Apex Industries",
        content:
          "Consolidating our manufacturing operations under Lars Tech's ERP was the best operational decision we made.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
      },
    ],
  },
  {
    id: "api",
    title: "API Development & Integration",
    slug: "api-development-integration",
    tagline: "Robust, secure APIs connecting systems seamlessly",
    description:
      "Secure, scalable APIs enabling seamless data exchange between third-party systems and apps.",
    fullDescription:
      "Build high-throughput, secure REST and GraphQL APIs that power your mobile applications, client portals, and third-party partner integrations with high standards of security and reliability.",
    icon: Shield,
    gradient: "from-cyan-600 via-sky-500 to-blue-600",
    bgGradient: "from-cyan-50/50 to-blue-50/50",
    color: "from-cyan-500 to-blue-500",
    stat: "100+ APIs",
    stats: [
      { label: "APIs Delivered", value: "100+", icon: Shield },
      { label: "Avg. Latency", value: "<50ms", icon: Zap },
      { label: "Daily Requests Handled", value: "10M+", icon: Server },
    ],
    features: [
      {
        title: "REST & GraphQL APIs",
        description: "Standards-compliant, fast API architectures",
        icon: Code,
      },
      {
        title: "Security & Encryption",
        description: "OAuth2, JWT, rate limiting, and SSL/TLS protection",
        icon: Shield,
      },
      {
        title: "Third-Party Integration",
        description: "Payment gateways, CRMs, WhatsApp, SMS & ERP bridges",
        icon: Layers,
      },
      {
        title: "Swagger / OpenAPI Docs",
        description: "Auto-generated interactive API documentation",
        icon: Terminal,
      },
      {
        title: "Webhook Infrastructure",
        description: "Reliable event publishing with retries and dead-letters",
        icon: GitBranch,
      },
      {
        title: "Monitoring & Analytics",
        description: "Latency tracking, error rates, and traffic quotas",
        icon: Target,
      },
    ],
    benefits: [
      {
        title: "System Interoperability",
        description: "Break isolated tools and exchange data instantaneously",
        impact: "Unified ecosystem",
      },
      {
        title: "Partner Ecosystem",
        description: "Easily open APIs to resellers, vendors, and clients",
        impact: "New revenue streams",
      },
      {
        title: "Bulletproof Security",
        description: "Strict rate limiting, validation, and encryption",
        impact: "Zero data leakage",
      },
      {
        title: "Developer Friendly",
        description: "Complete SDKs, Postman collections, and documentation",
        impact: "Rapid onboarding",
      },
    ],
    technologies: [
      { name: "Node.js / Express", level: 95, icon: Server },
      { name: "Python / FastAPI", level: 90, icon: Code },
      { name: "GraphQL", level: 86, icon: Layers },
      { name: "PostgreSQL", level: 92, icon: Database },
      { name: "Redis", level: 90, icon: Terminal },
    ],
    pricing: "Project-based",
    delivery: "4-8 weeks",
    testimonials: [
      {
        name: "Karan Mehra",
        role: "Tech Lead, FinFlow",
        content:
          "The APIs delivered by Lars Tech are rock solid with sub-50ms responses even during high traffic.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop",
      },
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Research",
    description: "We understand your requirements, goals, and challenges",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
  },
  {
    step: "02",
    title: "Planning & Architecture",
    description: "Create detailed project roadmap and scalable architecture",
    icon: ClipboardCheck,
    color: "from-purple-500 to-pink-500",
  },
  {
    step: "03",
    title: "UI/UX Design",
    description: "Design intuitive interfaces and seamless user flows",
    icon: LayoutDashboard,
    color: "from-pink-500 to-rose-500",
  },
  {
    step: "04",
    title: "Agile Development",
    description: "Iterative sprints with regular demos and feedback loops",
    icon: Code,
    color: "from-orange-500 to-amber-500",
  },
  {
    step: "05",
    title: "QA & Security Testing",
    description: "Rigorous quality checks, load testing, and security audits",
    icon: Shield,
    color: "from-green-500 to-emerald-500",
  },
  {
    step: "06",
    title: "Launch & Support",
    description: "Smooth deployment, training, and 24/7 ongoing maintenance",
    icon: Rocket,
    color: "from-blue-500 to-indigo-500",
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((service) => service.slug === slug);
}
