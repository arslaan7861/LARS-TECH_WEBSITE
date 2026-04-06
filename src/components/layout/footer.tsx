// components/layout/footer.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  Sparkles,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Social links with proper icons
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

// Footer links organized by category
const footerLinks = {
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/about#team" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
    ],
  },
  services: {
    title: "Services",
    links: [
      {
        name: "Custom Software",
        href: "/services/custom-software-development",
      },
      {
        name: "Web Development",
        href: "/services/web-application-development",
      },
      { name: "SaaS Products", href: "/services/saas-product-development" },
      { name: "ERP Systems", href: "/services/erp-management-systems" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Documentation", href: "/docs" },
      { name: "Support", href: "/support" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Subscribed successfully! 🎉");
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/30 border-t mt-auto">
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-12 lg:py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-4">
              <Link href="/" className="group relative">
                <div className="h-20 aspect-[2.27941176471] relative  transition-all duration-300">
                  <Image
                    src={"/logo-full.png"}
                    fill
                    alt="logo"
                    sizes="(max-width: 640px) 80px, (max-width: 1024px) 100px, 120px"
                  ></Image>
                </div>
              </Link>

              <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                Building custom software that helps businesses automate, scale,
                and grow efficiently. Your trusted technology partner since
                2020.
              </p>

              <div className="flex space-x-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className={cn(
                      "p-2.5 bg-background rounded-xl text-muted-foreground transition-all duration-300",
                      "border border-border hover:text-white",
                      social.color,
                    )}
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            {Object.values(footerLinks).map((section) => (
              <motion.div key={section.title} variants={fadeInUp}>
                <h3 className="text-foreground font-semibold text-lg mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Bar */}
        <div className="py-6 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 text-muted-foreground group"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Visit Us</div>
                <span className="text-sm font-medium">
                  Najibabad, Bijnor, Uttar Pradesh
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 text-muted-foreground group"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Call Us</div>
                <a
                  href="tel:+918273553959"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  +91 8273553959
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 text-muted-foreground group"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Email Us</div>
                <a
                  href="mailto:support@larstech.in"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  support@larstech.in
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Lars Tech Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Crafted with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500/20" />
              <span>in Najibabad, India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
