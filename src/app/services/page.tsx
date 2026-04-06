"use client";

// src/app/services/page.tsx
import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
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
  Sparkles,
  ClipboardCheck,
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

// Services data
const services = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    slug: "custom-software-development",
    description:
      "Tailor-made software solutions built specifically for your unique business needs and challenges.",
    fullDescription:
      "We design and develop custom software that addresses your specific operational challenges. Our team works closely with you to understand your requirements and deliver a solution that perfectly fits your workflow.",
    icon: Code,
    features: [
      "Requirement analysis & planning",
      "Custom architecture design",
      "Agile development methodology",
      "Quality assurance & testing",
      "Deployment & maintenance",
      "Scalable & secure solutions",
    ],
    benefits: [
      "Perfect fit for your business processes",
      "Competitive advantage with unique features",
      "Full ownership of source code",
      "Scalable as your business grows",
      "Dedicated support team",
    ],
    technologies: [
      "React",
      "Node.js",
      "Python",
      "Java",
      "PostgreSQL",
      "MongoDB",
    ],
    pricing: "Project-based",
    delivery: "4-12 weeks",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "web-apps",
    title: "Web Application Development",
    slug: "web-application-development",
    description:
      "Modern, responsive web applications that deliver exceptional user experiences across all devices.",
    fullDescription:
      "We build fast, responsive, and SEO-friendly web applications using the latest technologies. Our focus is on creating intuitive interfaces that engage users and drive conversions.",
    icon: LayoutDashboard,
    features: [
      "Responsive design",
      "Progressive Web Apps (PWA)",
      "Single Page Applications (SPA)",
      "API integration",
      "Performance optimization",
      "Cross-browser compatibility",
    ],
    benefits: [
      "Reach customers on any device",
      "Improved user engagement",
      "Better search engine rankings",
      "Reduced development costs",
      "Faster time to market",
    ],
    technologies: [
      "React",
      "Next.js",
      "Vue.js",
      "Angular",
      "Tailwind CSS",
      "TypeScript",
    ],
    pricing: "Project-based",
    delivery: "6-16 weeks",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "saas",
    title: "SaaS Product Development",
    slug: "saas-product-development",
    description:
      "End-to-end SaaS platform development with multi-tenancy, subscription management, and scalability.",
    fullDescription:
      "Transform your idea into a successful SaaS product. We handle everything from architecture design to deployment, including payment integration and subscription management.",
    icon: Cloud,
    features: [
      "Multi-tenant architecture",
      "Subscription management",
      "Payment gateway integration",
      "User authentication & authorization",
      "Analytics dashboard",
      "Automated scaling",
    ],
    benefits: [
      "Recurring revenue model",
      "Lower customer acquisition cost",
      "Automatic updates for all users",
      "Global scalability",
      "Reduced infrastructure costs",
    ],
    technologies: ["AWS", "Azure", "Stripe", "React", "Node.js", "PostgreSQL"],
    pricing: "Custom pricing",
    delivery: "8-20 weeks",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "automation",
    title: "Business Automation Systems",
    slug: "business-automation",
    description:
      "Streamline your operations with intelligent automation solutions that reduce manual work and errors.",
    fullDescription:
      "Automate repetitive tasks and optimize your business processes with our custom automation solutions. Increase efficiency and reduce operational costs.",
    icon: Database,
    features: [
      "Workflow automation",
      "Process optimization",
      "Data integration",
      "Real-time monitoring",
      "Custom rules engine",
      "Reporting & analytics",
    ],
    benefits: [
      "Reduce operational costs by up to 40%",
      "Eliminate human errors",
      "Faster processing times",
      "Better resource utilization",
      "Improved compliance",
    ],
    technologies: [
      "Python",
      "Node.js",
      "RabbitMQ",
      "Redis",
      "Docker",
      "Kubernetes",
    ],
    pricing: "Project-based",
    delivery: "6-14 weeks",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "erp",
    title: "ERP & Management Systems",
    slug: "erp-management-systems",
    description:
      "Complete business management solutions that integrate all your core processes into one system.",
    fullDescription:
      "Get a unified view of your business with our custom ERP solutions. Integrate finance, HR, inventory, and more into a single platform.",
    icon: Briefcase,
    features: [
      "Centralized database",
      "Module-based architecture",
      "Real-time reporting",
      "Inventory management",
      "HR & payroll",
      "Financial management",
    ],
    benefits: [
      "Single source of truth for all data",
      "Eliminate data silos",
      "Better decision making",
      "Improved productivity",
      "Reduced IT costs",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
    pricing: "Enterprise pricing",
    delivery: "12-24 weeks",
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: "api",
    title: "API Development & Integration",
    slug: "api-development-integration",
    description:
      "Secure, scalable APIs that connect your systems and enable seamless data exchange.",
    fullDescription:
      "Build robust APIs that power your applications and enable seamless integration with third-party services. We follow industry best practices for security and performance.",
    icon: Shield,
    features: [
      "RESTful APIs",
      "GraphQL support",
      "API security",
      "Rate limiting",
      "Comprehensive documentation",
      "Monitoring & analytics",
    ],
    benefits: [
      "Connect disparate systems",
      "Enable third-party integrations",
      "Improve system interoperability",
      "Future-proof your architecture",
      "Better developer experience",
    ],
    technologies: [
      "Node.js",
      "Python",
      "GraphQL",
      "Express",
      "FastAPI",
      "PostgreSQL",
    ],
    pricing: "Project-based",
    delivery: "4-8 weeks",
    color: "from-cyan-500 to-blue-500",
  },
];

// Process steps
const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We understand your requirements, goals, and challenges",
    icon: Users,
  },
  {
    step: "02",
    title: "Planning",
    description: "Create detailed project roadmap and architecture",
    icon: ClipboardCheck,
  },
  {
    step: "03",
    title: "Design",
    description: "Design intuitive interfaces and user experiences",
    icon: LayoutDashboard,
  },
  {
    step: "04",
    title: "Development",
    description: "Agile development with regular updates",
    icon: Code,
  },
  {
    step: "05",
    title: "Testing",
    description: "Rigorous QA and security testing",
    icon: Shield,
  },
  {
    step: "06",
    title: "Deployment",
    description: "Smooth deployment and ongoing support",
    icon: Rocket,
  },
];

// Why choose us
const whyChooseUs = [
  {
    title: "Custom-First Approach",
    description:
      "Every solution is built based on client requirements, not generic templates",
    icon: Sparkles,
  },
  {
    title: "Scalable Architecture",
    description: "Software designed to grow with your business",
    icon: TrendingUp,
  },
  {
    title: "Modern Tech Stack",
    description: "Fast, secure, and maintainable systems",
    icon: Zap,
  },
  {
    title: "User-Focused Design",
    description: "Simple, clean, and easy-to-use interfaces",
    icon: Smartphone,
  },
  {
    title: "End-to-End Delivery",
    description: "From idea → design → development → deployment",
    icon: Rocket,
  },
  {
    title: "Dedicated Support",
    description: "24/7 technical assistance and maintenance",
    icon: Clock,
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState("custom-software");
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
                What We Do
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Comprehensive Software Solutions
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                We deliver end-to-end software development services tailored to
                your business needs, helping you automate, scale, and grow
                efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="group">
                    Start Your Project
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="#process">
                  <Button size="lg" variant="outline">
                    How We Work
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
              Our Expertise
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Services We Offer
            </h2>
            <p className="text-muted-foreground">
              Choose from our range of specialized software development services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/services/${service.slug}`}>
                  <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-background/80 backdrop-blur-sm">
                    <CardHeader>
                      <div
                        className={cn(
                          "w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",
                          service.color,
                        )}
                      >
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-primary font-medium">
                        Learn More
                        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Section (Tabs) */}
      <section className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
              Deep Dive
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Explore Our Services
            </h2>
            <p className="text-muted-foreground">
              Get detailed insights into each service we offer
            </p>
          </div>

          <Tabs
            value={activeService}
            onValueChange={setActiveService}
            className="w-full"
          >
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList className="inline-flex flex-wrap">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="flex items-center gap-2"
                  >
                    <service.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">
                      {service.title.split(" ")[0]}
                    </span>
                    <span className="sm:hidden">
                      {service.title.split(" ")[0]}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid lg:grid-cols-2 gap-8"
                >
                  <div>
                    <div
                      className={cn(
                        "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mb-6",
                        service.color,
                      )}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">
                      {service.fullDescription}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-sm"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">
                        Technologies We Use:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Link href={`/services/${service.slug}`}>
                        <Button className="group">
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button variant="outline">Get Quote</Button>
                      </Link>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Card className="bg-background/80 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-lg">Benefits</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <div className="grid grid-cols-2 gap-4">
                      <Card className="bg-background/80 backdrop-blur-sm">
                        <CardContent className="p-4 text-center">
                          <div className="text-2xl font-bold text-primary">
                            {service.pricing}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Pricing Model
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-background/80 backdrop-blur-sm">
                        <CardContent className="p-4 text-center">
                          <div className="text-2xl font-bold text-primary">
                            {service.delivery}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Delivery Timeline
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
              Our Process
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-muted-foreground">
              A transparent, agile process that ensures timely delivery and
              quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="relative h-full hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary/20 mb-4">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <step.icon className="w-6 h-6 text-primary" />
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

      {/* Why Choose Us Section */}
      <section className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Makes Us Different
            </h2>
            <p className="text-muted-foreground">
              We combine technical expertise with business understanding to
              deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 group bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Ready to Build Your Next Project?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create a solution that drives
              your business forward
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="group">
                  Start a Conversation
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/school-erp/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                >
                  Request a Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
