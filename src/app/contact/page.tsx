// src/app/contact/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Lars Tech Solutions",
  description:
    "Get in touch with Lars Tech Solutions. We're here to discuss your software development needs and provide expert solutions for your business challenges.",
  keywords: [
    "contact Laravel Tech",
    "get in touch",
    "software consultation",
    "contact form",
    "business inquiry",
  ],
  openGraph: {
    title: "Contact Us | Lars Tech Solutions",
    description:
      "Reach out to us for your software development project or consultation.",
    url: "https://larstech.in/contact",
  },
};

("use client");

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  User,
  Building,
  FileText,
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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

// Contact methods
const contactMethods = [
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

// Business hours
const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

// Service options for dropdown
const serviceOptions = [
  "Custom Software Development",
  "Web Application Development",
  "SaaS Product Development",
  "Business Automation",
  "ERP & Management Systems",
  "API Development & Integration",
  "School ERP System",
  "Other",
];

// Social links
const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/larstech",
    icon: Mail,
    color: "hover:bg-[#1877f2]",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/larstech",
    icon: Mail,
    color: "hover:bg-[#1da1f2]",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/larstech",
    icon: Mail,
    color: "hover:bg-[#0a66c2]",
  },
  {
    name: "GitHub",
    href: "https://github.com/larstech",
    icon: Mail,
    color: "hover:bg-[#333]",
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, service: value });
  };

  const handleBudgetChange = (value: string) => {
    setFormData({ ...formData, budget: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    }, 3000);
  };

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
                Get in Touch
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Let's Start a Conversation
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Have a project in mind? We'd love to hear about it. Our team is
                ready to help you transform your ideas into reality.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-12 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactMethods.map((method, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <a
                  href={method.href}
                  target={method.title === "Office" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  <Card className="text-center hover:shadow-lg transition-all duration-300 group cursor-pointer bg-background/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div
                        className={cn(
                          "w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform",
                          method.color,
                        )}
                      >
                        <method.icon className="w-7 h-7" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">
                        {method.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {method.details}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 space-y-6">
                <Card className="bg-background/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Business Hours</CardTitle>
                    <CardDescription>
                      We're here to help during business hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {businessHours.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {item.day}
                        </span>
                        <span className="font-medium">{item.hours}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-background/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Follow Us</CardTitle>
                    <CardDescription>
                      Connect with us on social media
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:text-white transition-all duration-300",
                            social.color,
                          )}
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-background/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Quick Response</CardTitle>
                    <CardDescription>
                      Average response time: 2-4 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>We typically respond within 24 hours</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as
                    possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. We'll get back to you
                        shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="name"
                              name="name"
                              placeholder="John Doe"
                              className="pl-9"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="john@example.com"
                              className="pl-9"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="phone"
                              name="phone"
                              placeholder="+91 82735 53959"
                              className="pl-9"
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company/Organization</Label>
                          <div className="relative">
                            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              id="company"
                              name="company"
                              placeholder="Your Company"
                              className="pl-9"
                              value={formData.company}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In *</Label>
                        <Select
                          value={formData.service}
                          onValueChange={handleSelectChange}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Project Budget Range</Label>
                        <RadioGroup
                          value={formData.budget}
                          onValueChange={handleBudgetChange}
                        >
                          <div className="grid grid-cols-2 gap-3">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="< ₹50,000" id="budget1" />
                              <Label
                                htmlFor="budget1"
                                className="cursor-pointer"
                              >
                                &lt; ₹50,000
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value="₹50,000 - ₹2,00,000"
                                id="budget2"
                              />
                              <Label
                                htmlFor="budget2"
                                className="cursor-pointer"
                              >
                                ₹50,000 - ₹2,00,000
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value="₹2,00,000 - ₹5,00,000"
                                id="budget3"
                              />
                              <Label
                                htmlFor="budget3"
                                className="cursor-pointer"
                              >
                                ₹2,00,000 - ₹5,00,000
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value="> ₹5,00,000"
                                id="budget4"
                              />
                              <Label
                                htmlFor="budget4"
                                className="cursor-pointer"
                              >
                                &gt; ₹5,00,000
                              </Label>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">
                          Project Details / Message *
                        </Label>
                        <div className="relative">
                          <FileText className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your project requirements..."
                            className="pl-9 min-h-[120px]"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full group"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        By submitting this form, you agree to our privacy policy
                        and consent to be contacted.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary backdrop-blur-sm">
              Find Us
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Visit Our Office
            </h2>
            <p className="text-muted-foreground">
              We'd love to meet you in person. Drop by our office for a cup of
              coffee.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-background/80 backdrop-blur-sm">
                <div className="aspect-video bg-muted relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13900.000000000002!2d78.1667!3d29.6333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390b3c5a3c5a3c5a%3A0x3c5a3c5a3c5a3c5a!2sNajibabad%2C%20Uttar%20Pradesh%20246763!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                    title="Office Location"
                  />
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Our Headquarters</h3>
                  <p className="text-muted-foreground text-sm">
                    Lars Tech Solutions
                    <br />
                    Najibabad, Bijnor
                    <br />
                    Uttar Pradesh - 246763
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Office Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Get Directions</h3>
                  <p className="text-muted-foreground text-sm">
                    Located in the heart of Najibabad, easily accessible by
                    road.
                    <br />
                    Ample parking space available.
                  </p>
                  <Link href="https://maps.google.com" target="_blank">
                    <Button variant="link" className="px-0 mt-2">
                      Open in Google Maps
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ CTA Section */}
      <section className="py-20 bg-primary relative z-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Frequently Asked Questions?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Find quick answers to common questions about our services and
              process
            </p>
            <Link href="/faq">
              <Button size="lg" variant="secondary" className="group">
                Read Our FAQ
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
