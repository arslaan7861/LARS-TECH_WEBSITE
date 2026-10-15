// src/config/site.ts

export const siteConfig = {
  name: "Lars Tech Solutions",
  shortName: "Lars Tech",
  description:
    "Modern software development company delivering scalable, high-quality digital solutions. Specialized in custom software, web applications, SaaS products, and School ERP systems.",
  tagline: "Build Scalable Software That Drives Growth",
  url: "https://larstech.in",
  ogImage: "https://larstech.in/opengraph-image.png",
  foundingYear: "2020",
  address: {
    street: "Najibabad",
    city: "Najibabad",
    district: "Bijnor",
    region: "Uttar Pradesh",
    postalCode: "246301",
    country: "India",
    countryCode: "IN",
    display: "Najibabad, Bijnor, Uttar Pradesh",
  },
  contact: {
    email: "support@larstech.in",
    salesEmail: "contact@larstech.in",
    phone: "+91 8273553959",
    phoneRaw: "+918273553959",
    supportHours: "Monday - Saturday: 9:00 AM - 7:00 PM IST",
  },
  socials: {
    facebook: "https://facebook.com/larstech",
    twitter: "https://twitter.com/larstech",
    twitterHandle: "@larstech",
    linkedin: "https://linkedin.com/company/larstech",
    instagram: "https://instagram.com/larstech",
    github: "https://github.com/larstech",
  },
  keywords: [
    "software development",
    "custom software",
    "ERP system",
    "school management system",
    "web development",
    "SaaS solutions",
    "business automation",
    "Agentic AI",
    "Artificial Intelligence",
    "Lars Tech",
    "Najibabad software company",
  ],
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "School ERP", href: "/school-erp" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  footerLinks: {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    resources: [
      { name: "Documentation", href: "/docs" },
      { name: "Support", href: "/support" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
