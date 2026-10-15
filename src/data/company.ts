// src/data/company.ts
import {
  Sparkles,
  Heart,
  Award,
  Eye,
  Rocket,
  Briefcase,
  Target,
  Users,
  Trophy,
  Globe2,
  Code,
  DollarSign,
  HeartHandshake,
  Clock,
  Laptop,
  GraduationCap,
  Building,
  Smartphone,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ValueItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface JobOpening {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  requirements: string[];
  posted: string;
  icon: LucideIcon;
}

export interface CareerBenefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ContactMethod {
  title: string;
  details: string;
  icon: LucideIcon;
  href: string;
  color: string;
}

export interface BusinessHour {
  day: string;
  hours: string;
}

export const companyValues: ValueItem[] = [
  {
    title: "Innovation First",
    description: "We embrace cutting-edge technologies to deliver future-ready solutions.",
    icon: Sparkles,
  },
  {
    title: "Client Success",
    description: "Your growth is our success. We're committed to exceeding expectations.",
    icon: Heart,
  },
  {
    title: "Quality Excellence",
    description: "We never compromise on code quality, security, or performance.",
    icon: Award,
  },
  {
    title: "Transparency",
    description: "Open communication and honest partnerships built on trust.",
    icon: Eye,
  },
];

export const milestones: MilestoneItem[] = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Started with a vision to transform businesses through technology.",
    icon: Rocket,
  },
  {
    year: "2021",
    title: "First Major Client",
    description: "Onboarded our first enterprise client for custom ERP solution.",
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

export const teamMembers: TeamMember[] = [
  {
    name: "Amit Kumar",
    role: "Founder & CEO",
    bio: "15+ years in software development, ex-Microsoft",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Priya Sharma",
    role: "Technical Director",
    bio: "Full-stack expert with passion for scalable architecture",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Rajesh Verma",
    role: "Head of Operations",
    bio: "Ensuring smooth delivery and client satisfaction",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Neha Gupta",
    role: "Lead UI/UX Designer",
    bio: "Creating beautiful, intuitive user experiences",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
];

export const companyStats = [
  { label: "Projects Completed", value: 150, suffix: "+", icon: Code },
  { label: "Happy Clients", value: 120, suffix: "+", icon: Users },
  { label: "Team Members", value: 35, suffix: "+", icon: Trophy },
  { label: "Years Experience", value: 6, suffix: "+", icon: Clock },
];

export const jobOpenings: JobOpening[] = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Najibabad, UP (On-site)",
    type: "Full-time",
    experience: "5+ years",
    salary: "Competitive",
    description: "Looking for an experienced full-stack developer proficient in React, Node.js, and TypeScript.",
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
    description: "Seeking a creative UI/UX designer to create beautiful, intuitive interfaces for web and mobile apps.",
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
    description: "Join our core product team to build and enhance our flagship School ERP system.",
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
    description: "Drive business growth by acquiring new clients and building relationships with schools and businesses.",
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

export const careerBenefits: CareerBenefit[] = [
  {
    title: "Competitive Salary",
    description: "Industry-leading compensation packages",
    icon: DollarSign,
  },
  {
    title: "Health Insurance",
    description: "Comprehensive medical coverage for you and family",
    icon: HeartHandshake,
  },
  {
    title: "Flexible Hours",
    description: "Work-life balance with flexible timings",
    icon: Clock,
  },
  {
    title: "Latest Tech Stack",
    description: "Work with modern technologies and tools",
    icon: Laptop,
  },
  {
    title: "Learning Budget",
    description: "Annual budget for courses, books, and conferences",
    icon: GraduationCap,
  },
  {
    title: "Growth Opportunities",
    description: "Fast-track career growth in a scaling company",
    icon: Trophy,
  },
];

export const contactMethods: ContactMethod[] = [
  {
    title: "Phone",
    details: "+91 8273553959",
    icon: Phone,
    href: "tel:+918273553959",
    color: "bg-green-500/10 text-green-600",
  },
  {
    title: "Email",
    details: "support@larstech.in",
    icon: Mail,
    href: "mailto:support@larstech.in",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "WhatsApp",
    details: "+91 8273553959",
    icon: MessageCircle,
    href: "https://wa.me/918273553959",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    title: "Office",
    details: "Najibabad, Bijnor, UP",
    icon: MapPin,
    href: "https://maps.google.com",
    color: "bg-red-500/10 text-red-600",
  },
];

export const businessHours: BusinessHour[] = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export const serviceInquiryOptions = [
  "Custom Software Development",
  "Web Application Development",
  "SaaS Product Development",
  "Business Automation",
  "ERP & Management Systems",
  "API Development & Integration",
  "School ERP System",
  "Other",
];
