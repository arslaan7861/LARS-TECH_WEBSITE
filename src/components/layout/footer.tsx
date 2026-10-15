// components/layout/footer.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import { servicesData } from "@/data/services";

// Social links
const socialLinks = [
  {
    name: "Facebook",
    href: siteConfig.socials.facebook,
    icon: Mail,
    color: "hover:bg-[#1877f2]",
  },
  {
    name: "Twitter",
    href: siteConfig.socials.twitter,
    icon: Mail,
    color: "hover:bg-[#1da1f2]",
  },
  {
    name: "LinkedIn",
    href: siteConfig.socials.linkedin,
    icon: Mail,
    color: "hover:bg-[#0a66c2]",
  },
  {
    name: "GitHub",
    href: siteConfig.socials.github,
    icon: Mail,
    color: "hover:bg-[#333]",
  },
];

// Footer links organized by category
const footerLinks = {
  company: {
    title: "Company",
    links: siteConfig.footerLinks.company,
  },
  services: {
    title: "Services",
    links: servicesData.slice(0, 4).map((s) => ({
      name: s.title.replace(" Development", "").replace(" Systems", ""),
      href: `/services/${s.slug}`,
    })),
  },
  resources: {
    title: "Resources",
    links: siteConfig.footerLinks.resources,
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
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="group relative">
                <div className="h-20 aspect-[2.27941176471] relative transition-all duration-300">
                  <Image
                    src={"/logo-full.png"}
                    fill
                    alt="logo"
                    sizes="(max-width: 640px) 80px, (max-width: 1024px) 100px, 120px"
                  />
                </div>
              </Link>

              <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                Building custom software that helps businesses automate, scale,
                and grow efficiently. Your trusted technology partner since
                2020.
              </p>

              <div className="flex space-x-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "p-2.5 bg-background rounded-xl text-muted-foreground transition-all duration-300 hover:-translate-y-1",
                      "border border-border hover:text-white",
                      social.color,
                    )}
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
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
              </div>
            ))}
          </div>
        </div>

        {/* Contact Bar */}
        <div className="py-6 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-muted-foreground group">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Visit Us</div>
                <span className="text-sm font-medium">
                  {siteConfig.address.display}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-muted-foreground group">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Customer Support</div>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-muted-foreground group">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Sales &amp; Partnerships</div>
                <a
                  href={`mailto:${siteConfig.contact.salesEmail}`}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {siteConfig.contact.salesEmail}
                </a>
              </div>
            </div>
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

