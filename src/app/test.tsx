"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    YourCRM?: {
      track: (eventName: string, properties?: Record<string, any>) => void;
      identify: (user: any) => void;
      renderForm?: (formKey: string, containerId?: string) => void;
    };
  }
}

export default function PageTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip the first render if the SDK handles initial page view automatically
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (typeof window !== "undefined" && window.YourCRM) {
      // Use setTimeout to ensure document.title is updated by Next.js router
      setTimeout(() => {
        window.YourCRM?.track("page_view", {
          path: window.location.pathname,
          title: document.title,
          url: window.location.href,
        });
      }, 50);
    }
  }, [pathname, searchParams]);

  return null;
}
