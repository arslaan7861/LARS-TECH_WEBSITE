"use client";

// src/app/school-erp/page.tsx

import { useState } from "react";
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

import { AnimatedBlobs, FloatingBlob } from "@/components/common/blobs";

import {
  featureCategories,
  allFeatures,
  keyBenefits,
  quickFeatures,
  pricingPlans,
  stats,
  testimonials,
  faqs,
} from "@/data/school-erp";

export default function SchoolERPMergedPage() {
  const [activeCategory, setActiveCategory] = useState("all");

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
            <div>
              <div>
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
              </div>
            </div>

            <div className="relative">
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
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Stats Section */}
      <section className="py-16 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {keyBenefits.map((benefit, index) => (
              <div key={index}>
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
              </div>
            ))}
          </div>
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
              <div key={index}>
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
              </div>
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFeatures.map((feature) => (
                  <div key={feature.id}>
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
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
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
            </div>

            <div className="relative">
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
            </div>
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
              <div
                key={index}
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
              </div>
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
              <div key={index}>
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
              </div>
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
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div>
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
          </div>
        </div>
      </section>
    </main>
  );
}

