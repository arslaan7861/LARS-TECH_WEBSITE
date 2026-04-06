// components/ui/blobs.tsx
"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Animated Blobs Component - Animates on desktop, static on mobile
export const AnimatedBlobs = ({
  count = 6,
  color = "primary",
  baseDelay = 0,
}: {
  count?: number;
  color?: "primary" | "white" | "blue" | "cyan" | "purple";
  baseDelay?: number;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const getColorClass = () => {
    switch (color) {
      case "primary":
        return "bg-primary/8";
      case "white":
        return "bg-white/8";
      case "blue":
        return "bg-blue-500/6";
      case "cyan":
        return "bg-cyan-500/6";
      case "purple":
        return "bg-purple-500/6";
      default:
        return "bg-primary/8";
    }
  };

  // Generate blob configurations
  const blobs = Array.from({ length: count }, (_, i) => {
    const size = Math.random() * 400 + 200;
    const duration = Math.random() * 30 + 25;
    const delay = baseDelay + Math.random() * 10;
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const xMove = (Math.random() - 0.5) * 30;
    const yMove = (Math.random() - 0.5) * 30;

    return {
      id: i,
      size,
      startX,
      startY,
      duration,
      delay,
      xMove,
      yMove,
      colorClass: getColorClass(),
    };
  });

  // On mobile: render static divs
  if (isMobile) {
    return (
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        suppressHydrationWarning
      >
        {blobs.map((blob) => (
          <div
            key={blob.id}
            className={cn("absolute rounded-full blur-3xl", blob.colorClass)}
            style={{
              width: blob.size,
              height: blob.size,
              left: `${blob.startX}%`,
              top: `${blob.startY}%`,
            }}
          />
        ))}
      </div>
    );
  }

  // On desktop: render animated motion divs
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      suppressHydrationWarning
    >
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className={cn("absolute rounded-full blur-3xl", blob.colorClass)}
          style={{
            width: blob.size,
            height: blob.size,
            left: `${blob.startX}%`,
            top: `${blob.startY}%`,
          }}
          animate={{
            x: [0, blob.xMove, -blob.xMove * 0.5, blob.xMove * 0.8, 0],
            y: [0, blob.yMove, -blob.yMove * 0.6, blob.yMove * 0.7, 0],
            scale: [1, 1.08, 0.94, 1.06, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            delay: blob.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Floating Blob Component - Animates on desktop, static on mobile
export const FloatingBlob = ({
  className,
  color = "primary",
  size = "w-96 h-96",
  delay = 0,
  speed = 20,
}: {
  className?: string;
  color?: string;
  size?: string;
  delay?: number;
  speed?: number;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const getColorClass = () => {
    switch (color) {
      case "primary":
        return "bg-primary/10";
      case "blue":
        return "bg-blue-500/6";
      case "cyan":
        return "bg-cyan-500/6";
      case "purple":
        return "bg-purple-500/6";
      case "white":
        return "bg-white/6";
      default:
        return "bg-primary/10";
    }
  };

  const blobClasses = cn(
    "absolute rounded-full blur-3xl",
    getColorClass(),
    size,
    className,
  );

  // On mobile: render static div
  if (isMobile) {
    return <div className={blobClasses} />;
  }

  // On desktop: render animated motion div
  return (
    <motion.div
      className={blobClasses}
      animate={{
        x: [0, 25, -15, 20, 0],
        y: [0, -15, 20, -10, 0],
        scale: [1, 1.05, 0.97, 1.03, 1],
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
};
