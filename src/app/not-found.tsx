"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  ArrowLeft,
  Search,
  HelpCircle,
  Compass,
  Sparkles,
  ArrowRight,
  Mail,
  Phone,
  FileSearch,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// Popular pages for quick navigation
const popularPages = [
  { title: "Home", href: "/", icon: Home },
  { title: "Services", href: "/services", icon: Compass },
  { title: "School ERP", href: "/school-erp", icon: Sparkles },
  { title: "About Us", href: "/about", icon: HelpCircle },
  { title: "Contact", href: "/contact", icon: Mail },
  { title: "Careers", href: "/careers", icon: FileSearch },
];

// Suggested services
const suggestedServices = [
  "Custom Software Development",
  "Web Application Development",
  "SaaS Product Development",
  "School ERP System",
];

export default function NotFoundPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 overflow-hidden relative">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            initial={{
              x: 0,
              y: 0,
              opacity: 0,
            }}
            animate={{
              x: typeof window !== "undefined" ? Math.random() * window.innerWidth : 500,
              y: typeof window !== "undefined" ? Math.random() * window.innerHeight : 500,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      {/* Parallax 404 Number */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      >
        <div className="text-[30vw] font-bold text-foreground select-none">
          404
        </div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto">
          {/* Animated 404 Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <Badge
              variant="secondary"
              className="px-4 py-2 text-base bg-primary/10 text-primary border-primary/20"
            >
              <AlertCircle className="w-4 h-4 mr-2" />
              Error 404
            </Badge>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-12"
          >
            {/* Animated 404 Text */}
            <div className="relative inline-block mb-6">
              <motion.h1
                className="text-8xl lg:text-9xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                404
              </motion.h1>
              <motion.div
                className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6"
                animate={{
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Sparkles className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
              </motion.div>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              The page you're looking for seems to have wandered off. Let's help
              you find your way back.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md mx-auto mb-12"
          >
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for services, pages, or solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-24 py-6 rounded-2xl text-base bg-background border-2 focus:border-primary/50 transition-all duration-200"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl"
              >
                Search
              </Button>
            </form>
          </motion.div>

          {/* Quick Navigation Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {popularPages.map((page, index) => (
                <motion.div
                  key={page.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  <Link href={page.href}>
                    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1">
                      <CardContent className="p-4 text-center">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 transition-colors">
                          <page.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {page.title}
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Suggested Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Popular Services
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {suggestedServices.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                >
                  <Link
                    href={`/services/${service.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                  >
                    <Badge
                      variant="outline"
                      className="px-4 py-2 text-sm hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-200 cursor-pointer"
                    >
                      {service}
                    </Badge>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/">
              <Button size="lg" className="group rounded-xl">
                <Home className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                Back to Home
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="group rounded-xl">
                <Phone className="mr-2 w-4 h-4" />
                Contact Support
              </Button>
            </Link>
          </motion.div>

          {/* Fun Fact / Easter Egg */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-xs text-muted-foreground">
              💡 Did you know? Our team builds custom solutions that always find
              their way. Let us help you build something amazing!
            </p>
          </motion.div>
        </div>
      </div>

      {/* Floating Cursor Follower (Optional) */}
      {typeof window !== "undefined" && (
        <motion.div
          className="fixed w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none z-0"
          animate={{
            x: mousePosition.x - 64,
            y: mousePosition.y - 64,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 200,
            mass: 0.5,
          }}
        />
      )}
    </div>
  );
}
