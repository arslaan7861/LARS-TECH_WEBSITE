// app/layout.tsx
import type { Metadata, Viewport } from "next";
import Script from "next/script";
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

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Custom Software Development & School ERP System`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - Transform Your Business with Custom Software`,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Custom Software Development`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Custom Software Development`,
    description: siteConfig.description,
    images: ["/twitter-image.jpg"],
    creator: siteConfig.socials.twitterHandle,
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
    canonical: siteConfig.url,
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo-full.png`,
    description: siteConfig.description,
    foundingDate: siteConfig.foundingYear,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.countryCode,
    },
    sameAs: [
      siteConfig.socials.linkedin,
      siteConfig.socials.twitter,
      siteConfig.socials.instagram,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: siteConfig.contact.email,
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: `${siteConfig.url}/logo-full.png`,
    description: `${siteConfig.name} in ${siteConfig.address.city} providing custom software solutions and ERP systems`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.countryCode,
    },
    url: siteConfig.url,
  };

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
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7964008538861413"
          crossOrigin="anonymous"
        />

        {/* <script
          src="https://api.dolfin360.com/public/sdk/tracking.js"
          data-tracking-key="trk_o7LImy1NSPaHDpnMPOvMHZfm"
          data-api-base-url="https://api.dolfin360.com"
          type="module"
          async
        /> */}
        {/* <script
          type="module"
          src="http://localhost:4000/public/sdk/tracking.js"
          data-tracking-key="trk_twk2wqMtA2FmEeTAiA7cCviw"
          data-api-base-url="http://localhost:4000"
          async
        ></script> */}
        {/* <script
          type="module"
          src="https://api.dolfin360.com/public/sdk/tracking.js"
          data-tracking-key="trk__wL-AB3Vt0OCceEcQogG6eRm"
          data-api-base-url="https://api.dolfin360.com"
          async
        ></script> */}
        {/* <script
          type="module"
          src="http://localhost:3000/public/sdk/tracking.js"
          data-tracking-key="trk__wL-AB3Vt0OCceEcQogG6eRm"
          data-api-base-url="http://localhost:3000"
          async
        ></script> */}
        <Script
          src="https://api.dolfin360.com/public/sdk/tracking.js"
          data-tracking-key="trk_o7LImy1NSPaHDpnMPOvMHZfm"
          data-api-base-url="https://api.dolfin360.com"
          strategy="afterInteractive"
          type="module"
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
