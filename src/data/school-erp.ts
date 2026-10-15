// src/data/school-erp.ts
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
  LayoutDashboard,
  Database,
  Calculator,
  MapPin,
  ClipboardList,
  Heart,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface FeatureCategory {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface SchoolERPFeature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: "academic" | "administration" | "finance" | "communication" | "transport";
  benefits: string[];
}

export interface KeyBenefit {
  title: string;
  description: string;
  icon: LucideIcon;
  stat: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  popular: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SchoolERPTestimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface SchoolERPStat {
  label: string;
  value: number;
  suffix: string;
  icon: LucideIcon;
}

export const featureCategories: FeatureCategory[] = [
  { id: "all", label: "All Features", icon: LayoutDashboard },
  { id: "academic", label: "Academic", icon: BookOpen },
  { id: "administration", label: "Administration", icon: Users },
  { id: "finance", label: "Finance", icon: CreditCard },
  { id: "communication", label: "Communication", icon: MessageSquare },
  { id: "transport", label: "Transport", icon: Bus },
];

export const allFeatures: SchoolERPFeature[] = [
  // Academic
  {
    id: "attendance",
    title: "Attendance Management",
    description:
      "Automated attendance tracking with biometric integration, real-time updates, and instant notifications to parents.",
    icon: UserCheck,
    category: "academic",
    benefits: ["95% time savings", "Real-time tracking", "Auto-generated reports"],
  },
  {
    id: "exams",
    title: "Exams & Results",
    description:
      "Online examinations, automated grading, instant result generation, and detailed performance analytics.",
    icon: ClipboardList,
    category: "academic",
    benefits: ["Instant results", "Multiple exam types", "Performance analytics"],
  },
  {
    id: "timetable",
    title: "Timetable Management",
    description:
      "Dynamic timetable creation, teacher assignment, and automatic conflict detection.",
    icon: Calendar,
    category: "academic",
    benefits: ["Conflict-free scheduling", "Easy adjustments", "Teacher allocation"],
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
  // Administration
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
  // Finance
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
  // Communication
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
    benefits: ["24/7 access", "Child progress tracking", "Direct communication"],
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
  // Transport
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

export const keyBenefits: KeyBenefit[] = [
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

export const quickFeatures = [
  { title: "Attendance Management", icon: UserCheck, color: "from-blue-500 to-cyan-500" },
  { title: "Exams & Results", icon: FileText, color: "from-purple-500 to-pink-500" },
  { title: "Fee Management", icon: CreditCard, color: "from-green-500 to-emerald-500" },
  { title: "Student Management", icon: GraduationCap, color: "from-orange-500 to-red-500" },
  { title: "Teacher Management", icon: Users, color: "from-indigo-500 to-purple-500" },
  { title: "Bus Tracking", icon: Bus, color: "from-cyan-500 to-blue-500" },
  { title: "Timetable Management", icon: Calendar, color: "from-pink-500 to-rose-500" },
  { title: "Parent App", icon: Smartphone, color: "from-teal-500 to-green-500" },
];

export const pricingPlans: PricingPlan[] = [
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

export const stats: SchoolERPStat[] = [
  { label: "Schools Using ERP", value: 80, suffix: "+", icon: School },
  { label: "Students Managed", value: 25000, suffix: "+", icon: Users },
  { label: "Teachers Onboard", value: 2000, suffix: "+", icon: Users },
  { label: "Parent Downloads", value: 50000, suffix: "+", icon: Smartphone },
];

export const testimonials: SchoolERPTestimonial[] = [
  {
    name: "Dr. Suresh Kumar",
    role: "Principal, Delhi Public School",
    content:
      "Lars Tech School ERP transformed our entire administrative process. Attendance tracking and fee collection are now completely automated.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    name: "Mrs. Anita Sharma",
    role: "Parent",
    content:
      "The parent app is a game-changer! I can track my child's attendance, fees, and academic progress anytime, anywhere.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Mr. Rajesh Verma",
    role: "School Administrator",
    content:
      "Excellent support team and feature-rich platform. The bus tracking feature has been particularly valuable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

export const faqs: FAQItem[] = [
  {
    id: "item-1",
    question: "How long does implementation take?",
    answer:
      "Typical implementation takes 2-4 weeks depending on school size. We provide full training and support during the process.",
  },
  {
    id: "item-2",
    question: "Is there a mobile app for parents?",
    answer:
      "Yes! We provide dedicated mobile apps for both iOS and Android platforms for parents, teachers, and administrators.",
  },
  {
    id: "item-3",
    question: "What about data security?",
    answer:
      "We use bank-level 256-bit SSL encryption, regular backups, and comply with data protection regulations to keep your data safe.",
  },
  {
    id: "item-4",
    question: "Do you provide training?",
    answer:
      "Absolutely! We provide comprehensive training for all users including administrators, teachers, and parents.",
  },
  {
    id: "item-5",
    question: "What support do you offer?",
    answer:
      "We offer 24/7 technical support via phone, email, and live chat, along with dedicated account managers for enterprise plans.",
  },
  {
    id: "item-6",
    question: "Can we migrate data from our existing system?",
    answer:
      "Yes, our technical team provides end-to-end data migration assistance from legacy spreadsheets or old school software with zero downtime.",
  },
];
