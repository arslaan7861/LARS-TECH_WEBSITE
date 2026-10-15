"use client";

import { useEffect, useRef, useState } from "react";
import { adsConfig } from "@/config/ads";
import { cn } from "@/lib/utils";

interface AdBannerProps {
  slot?: string;
  format?: "auto" | "fluid" | "rectangle";
  className?: string;
  responsive?: boolean;
}

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

export function AdBanner({
  slot = adsConfig.slots.primaryBanner,
  format = "auto",
  className,
  responsive = true,
}: AdBannerProps) {
  const adRef = useRef<HTMLModElement | null>(null);
  const pushedRef = useRef(false);
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    if (!adsConfig.enabled) return;

    const timer = setTimeout(() => {
      if (adRef.current && !pushedRef.current) {
        try {
          if (typeof window !== "undefined") {
            window.adsbygoogle = window.adsbygoogle || [];
            window.adsbygoogle.push({});
            pushedRef.current = true;
            setAdLoaded(true);
          }
        } catch (err) {
          console.warn("AdSense push notification handled:", err);
        }
      }
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  if (!adsConfig.enabled) {
    return null;
  }

  return (
    <div
      className={cn(
        "my-6 mx-auto w-full max-w-5xl overflow-hidden rounded-xl border border-dashed border-border/80 bg-muted/20 p-2 text-center",
        className
      )}
    >
      <div className="mb-1 text-[10px] uppercase tracking-wider text-muted-foreground/60 font-mono">
        Advertisement
      </div>
      <div className="min-h-[100px] sm:min-h-[120px] flex items-center justify-center overflow-hidden w-full">
        <ins
          ref={adRef}
          className="adsbygoogle block w-full min-h-[90px]"
          style={{ display: "block" }}
          data-ad-client={adsConfig.client}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? "true" : "false"}
        />
      </div>
    </div>
  );
}

