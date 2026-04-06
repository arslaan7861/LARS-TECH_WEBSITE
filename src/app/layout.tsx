// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://larstech.in"),
  title: {
    default:
      "Lars Tech Solutions | Custom Software Development & School ERP System",
    template: "%s | Lars Tech Solutions",
  },
  description:
    "Modern software development company delivering scalable, high-quality digital solutions. Specialized in custom software, web applications, SaaS products, and School ERP systems.",
  keywords: [
    "software development",
    "custom software",
    "ERP system",
    "school management system",
    "web development",
    "SaaS solutions",
    "business automation",
    "Lars Tech",
    "Najibabad software company",
  ],
  authors: [{ name: "Lars Tech Solutions", url: "https://larstech.in" }],
  creator: "Lars Tech Solutions",
  publisher: "Lars Tech Solutions",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://larstech.in",
    siteName: "Lars Tech Solutions",
    title: "Lars Tech Solutions - Transform Your Business with Custom Software",
    description:
      "Tailor-made software solutions that solve real-world operational challenges and drive business growth.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lars Tech Solutions - Custom Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lars Tech Solutions - Custom Software Development",
    description: "Transform your business with tailor-made software solutions",
    images: ["/twitter-image.jpg"],
    creator: "@larstech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://larstech.in",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
