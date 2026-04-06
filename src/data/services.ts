import { 
  Code, 
  LayoutDashboard, 
  Cloud, 
  Database, 
  Briefcase, 
  Shield,
  Zap,
  Users,
  BarChart3,
  Lock,
  Smartphone,
  Globe
} from "lucide-react";

export interface ServiceData {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: any;
  features: string[];
  benefits: string[];
  keywords: string[];
}

export const servicesData: ServiceData[] = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    slug: "custom-software-development",
    description: "Tailor-made software solutions built specifically for your unique business needs and challenges.",
    icon: Code,
    features: [
      "Custom Development",
      "Scalable Architecture",
      "Modern Tech Stack",
      "API Integration",
      "Cloud Deployment",
      "24/7 Support"
    ],
    benefits: [
      "Perfect fit for your business processes",
      "Competitive advantage with unique features",
      "Full ownership of source code",
      "Scalable as your business grows"
    ],
    keywords: ["custom software", "tailored solutions", "bespoke development", "enterprise software"]
  },
  {
    id: "web-apps",
    title: "Web Application Development",
    slug: "web-application-development",
    description: "Modern, responsive web applications that deliver exceptional user experiences across all devices.",
    icon: LayoutDashboard,
    features: [
      "Responsive Design",
      "PWA Development",
      "Fast Loading",
      "SEO Optimized",
      "Cross-browser Compatible",
      "User-Friendly Interface"
    ],
    benefits: [
      "Reach customers on any device",
      "Improved user engagement",
      "Better search engine rankings",
      "Reduced development costs"
    ],
    keywords: ["web apps", "responsive design", "PWA", "frontend development", "react apps"]
  },
  {
    id: "saas",
    title: "SaaS Product Development",
    slug: "saas-product-development",
    description: "End-to-end SaaS platform development with multi-tenancy, subscription management, and scalability.",
    icon: Cloud,
    features: [
      "Multi-tenant Architecture",
      "Subscription Management",
      "Payment Integration",
      "Analytics Dashboard",
      "Automated Scaling",
      "Security Compliance"
    ],
    benefits: [
      "Recurring revenue model",
      "Lower customer acquisition cost",
      "Automatic updates for all users",
      "Global scalability"
    ],
    keywords: ["SaaS", "subscription platform", "multi-tenant", "cloud software", "product development"]
  },
  {
    id: "automation",
    title: "Business Automation Systems",
    slug: "business-automation",
    description: "Streamline your operations with intelligent automation solutions that reduce manual work and errors.",
    icon: Database,
    features: [
      "Workflow Automation",
      "Process Optimization",
      "Data Integration",
      "Real-time Monitoring",
      "Custom Rules Engine",
      "Reporting & Analytics"
    ],
    benefits: [
      "Reduce operational costs by 40%",
      "Eliminate human errors",
      "Faster processing times",
      "Better resource utilization"
    ],
    keywords: ["automation", "workflow", "process optimization", "RPA", "business efficiency"]
  },
  {
    id: "erp",
    title: "ERP & Management Systems",
    slug: "erp-management-systems",
    description: "Complete business management solutions that integrate all your core processes into one system.",
    icon: Briefcase,
    features: [
      "Centralized Database",
      "Module-based Architecture",
      "Real-time Reporting",
      "Inventory Management",
      "HR & Payroll",
      "Financial Management"
    ],
    benefits: [
      "Single source of truth for all data",
      "Eliminate data silos",
      "Better decision making",
      "Improved productivity"
    ],
    keywords: ["ERP", "enterprise resource planning", "management system", "business software"]
  },
  {
    id: "api",
    title: "API Development & Integration",
    slug: "api-development-integration",
    description: "Secure, scalable APIs that connect your systems and enable seamless data exchange.",
    icon: Shield,
    features: [
      "RESTful APIs",
      "GraphQL Support",
      "API Security",
      "Rate Limiting",
      "Documentation",
      "Monitoring & Analytics"
    ],
    benefits: [
      "Connect disparate systems",
      "Enable third-party integrations",
      "Improve system interoperability",
      "Future-proof your architecture"
    ],
    keywords: ["API", "integration", "REST API", "GraphQL", "microservices", "system integration"]
  }
];

// Helper function to get service by slug
export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find(service => service.slug === slug);
}

// Helper function to get all service slugs
export function getAllServiceSlugs(): string[] {
  return servicesData.map(service => service.slug);
}
