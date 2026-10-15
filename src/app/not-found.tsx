"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20 overflow-hidden relative">
      {/* 404 Large Background Number */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <div className="text-[30vw] font-bold text-foreground select-none">
          404
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-screen flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto">
          {/* 404 Badge */}
          <div className="text-center mb-8">
            <Badge
              variant="secondary"
              className="px-4 py-2 text-base bg-primary/10 text-primary border-primary/20"
            >
              <AlertCircle className="w-4 h-4 mr-2" />
              Error 404
            </Badge>
          </div>

          {/* Main Content */}
          <div className="text-center mb-12">
            {/* 404 Text */}
            <div className="relative inline-block mb-6">
              <h1 className="text-8xl lg:text-9xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                404
              </h1>
              <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6">
                <Sparkles className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
              </div>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              The page you're looking for seems to have wandered off. Let's help
              you find your way back.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12">
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
          </div>

          {/* Quick Navigation Cards */}
          <div className="mb-12">
            <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {popularPages.map((page) => (
                <div key={page.title}>
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
                </div>
              ))}
            </div>
          </div>

          {/* Suggested Services */}
          <div className="mb-12">
            <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Popular Services
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {suggestedServices.map((service) => (
                <div key={service}>
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
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>

          {/* Fun Fact / Easter Egg */}
          <div className="mt-12 text-center">
            <p className="text-xs text-muted-foreground">
              💡 Did you know? Our team builds custom solutions that always find
              their way. Let us help you build something amazing!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

