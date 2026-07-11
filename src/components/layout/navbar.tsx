// components/layout/navbar.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Code,
  Briefcase,
  Phone,
  Sparkles,
  LayoutDashboard,
  Database,
  Cloud,
  Shield,
  ArrowRight,
  Users,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { toast } from "sonner";
import { test } from "next/experimental/testmode/playwright";

// Service items data
const services = [
  {
    title: "Custom Software Development",
    href: "/services/custom-software-development",
    description: "Tailor-made solutions built for your unique business needs",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    badge: "Most Popular",
  },
  {
    title: "Web Application Development",
    href: "/services/web-application-development",
    description: "Modern, responsive web apps with exceptional UX",
    icon: LayoutDashboard,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "SaaS Product Development",
    href: "/services/saas-product-development",
    description: "Scalable SaaS platforms with subscription management",
    icon: Cloud,
    color: "from-green-500 to-emerald-500",
    badge: "Trending",
  },
  {
    title: "Business Automation Systems",
    href: "/services/business-automation",
    description: "Streamline operations with intelligent automation",
    icon: Database,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "ERP & Management Systems",
    href: "/services/erp-management-systems",
    description: "Complete business management in one platform",
    icon: Briefcase,
    color: "from-indigo-500 to-purple-500",
    badge: "Enterprise",
  },
  {
    title: "API Development & Integration",
    href: "/services/api-development-integration",
    description: "Secure, scalable APIs for seamless integration",
    icon: Shield,
    color: "from-cyan-500 to-blue-500",
  },
];

// School ERP dropdown items - removed non-existent pages
const schoolErpItems = [
  {
    title: "Overview",
    href: "/school-erp",
    description: "Complete school management solution",
  },
  {
    title: "Features",
    href: "/school-erp/features",
    description: "Explore all powerful features",
  },
  // Pricing page doesn't exist yet
  // Live Demo page doesn't exist yet
  // Success Stories page doesn't exist yet
];

// Navigation items - only include existing pages
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Careers", href: "/careers" }, // Added back since page exists
  { name: "School ERP", href: "/school-erp" }, // Added back since page exists
  // Careers page exists but we're keeping it in mobile menu only for now
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle scroll effect with enhanced glass effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    // testEvent(); // Track page view on route change
  }, [pathname]);
  const testEvent = () => {
    const tryTrack = (retries = 15) => {
      if (typeof window !== "undefined" && window.YourCRM) {
        window.YourCRM.track("page_view", {
          path: window.location.pathname,
          title: document.title,
          url: window.location.href,
        });
      } else if (retries > 0) {
        setTimeout(() => tryTrack(retries - 1), 100); // poll every 100ms
      }
    };
    tryTrack();
  };
  const isActive = useCallback(
    (href: string) => {
      if (href === "/") return pathname === href;
      if (href === "/services") {
        return pathname === "/services" || pathname.startsWith("/services/");
      }
      if (href === "/school-erp") {
        return (
          pathname === "/school-erp" || pathname.startsWith("/school-erp/")
        );
      }
      return pathname === href;
    },
    [pathname],
  );

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/70 backdrop-blur-xl shadow-lg border-b border-border/50"
            : "bg-background/50 backdrop-blur-md border-b border-transparent",
        )}
      >
        {/* Animated gradient border on scroll */}
        {isScrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        )}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="group relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="h-12 lg:h-14 aspect-[2.27941176471] relative transition-all duration-300"
              >
                <Image
                  src={"/logo-full.png"}
                  fill
                  alt="logo"
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 100px, 120px"
                ></Image>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {/* Home, About, Contact */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200",
                    isActive(item.href)
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
                  )}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("services")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200",
                    isActive("/services")
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
                    openDropdown === "services" && "bg-accent/50",
                  )}
                >
                  Services
                  <motion.div
                    animate={{ rotate: openDropdown === "services" ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openDropdown === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-[680px] bg-background/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-border/50 overflow-hidden z-50"
                    >
                      <div className="p-5">
                        <div className="mb-4 pb-3 border-b border-border/50">
                          <h3 className="text-sm font-semibold text-foreground">
                            Our Services
                          </h3>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Comprehensive software solutions tailored to your
                            needs
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {services.map((service, index) => (
                            <motion.div
                              key={service.title}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.03 }}
                            >
                              <Link
                                href={service.href}
                                className="group flex items-start gap-3 p-3 rounded-xl hover:bg-accent/50 transition-all duration-200"
                              >
                                <div
                                  className={cn(
                                    "w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110",
                                    service.color,
                                  )}
                                >
                                  <service.icon className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                      {service.title}
                                    </h4>
                                    {service.badge && (
                                      <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                                        {service.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                                    {service.description}
                                  </p>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                        <div className="mt-4 pt-3 border-t border-border/50">
                          <Link
                            href="/services"
                            className="flex items-center justify-between text-sm font-medium text-primary hover:gap-2 transition-all group"
                          >
                            <span>View All Services</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/school-erp/demo">
                <Button
                  variant="outline"
                  size="default"
                  className="rounded-xl border-2 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                >
                  Live Demo
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="default"
                  className="rounded-xl bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-md hover:shadow-lg transition-all duration-200 group"
                >
                  <Phone className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                  Get in Touch
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl hover:bg-accent/50 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-background/95 backdrop-blur-xl shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              {/* Mobile Menu Header */}
              <div className="sticky top-0 bg-background/95 backdrop-blur-xl border-b border-border/50 p-4 flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-lg">Menu</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-xl hover:bg-accent/50 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Menu Content */}
              <div className="p-4 space-y-1">
                {/* Home */}
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                    isActive("/")
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:bg-accent/50",
                  )}
                >
                  <HomeIcon className="w-5 h-5" />
                  Home
                </Link>

                {/* Services Accordion */}
                <div className="border-b border-border/50">
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === "mobile-services"
                          ? null
                          : "mobile-services",
                      )
                    }
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-accent/50 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <Code className="w-5 h-5" />
                      <span
                        className={cn(
                          "font-medium",
                          isActive("/services") && "text-primary",
                        )}
                      >
                        Services
                      </span>
                    </div>
                    <motion.div
                      animate={{
                        rotate: openDropdown === "mobile-services" ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openDropdown === "mobile-services" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-12 pr-4 pb-3 space-y-2">
                          <Link
                            href="/services"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-sm text-primary font-medium hover:underline"
                          >
                            All Services →
                          </Link>
                          {services.map((service) => (
                            <Link
                              key={service.title}
                              href={service.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* School ERP Accordion */}
                <div className="border-b border-border/50">
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === "mobile-erp" ? null : "mobile-erp",
                      )
                    }
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-accent/50 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <LayoutDashboard className="w-5 h-5" />
                      <span
                        className={cn(
                          "font-medium",
                          isActive("/school-erp") && "text-primary",
                        )}
                      >
                        School ERP
                      </span>
                    </div>
                    <motion.div
                      animate={{
                        rotate: openDropdown === "mobile-erp" ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openDropdown === "mobile-erp" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-12 pr-4 pb-3 space-y-2">
                          {schoolErpItems.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* About */}
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                    isActive("/about")
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:bg-accent/50",
                  )}
                >
                  <Users className="w-5 h-5" />
                  About
                </Link>

                {/* Contact */}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                    isActive("/contact")
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:bg-accent/50",
                  )}
                >
                  <Phone className="w-5 h-5" />
                  Contact
                </Link>

                {/* Careers - Added back since page exists */}
                <Link
                  href="/careers"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                    isActive("/careers")
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:bg-accent/50",
                  )}
                >
                  <Briefcase className="w-5 h-5" />
                  Careers
                </Link>
              </div>

              {/* Mobile Menu Footer */}
              <div className="sticky bottom-0 bg-background/95 backdrop-blur-xl border-t border-border/50 p-4 space-y-3">
                <Link
                  href="/school-erp/demo"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button variant="outline" className="w-full rounded-xl">
                    Live Demo
                  </Button>
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="w-full rounded-xl bg-gradient-to-r from-primary to-primary/90">
                    <Phone className="w-4 h-4 mr-2" />
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content hiding under fixed navbar */}
      <div className="h-16 lg:h-20" />
    </>
  );
}

// Home icon component
const HomeIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
