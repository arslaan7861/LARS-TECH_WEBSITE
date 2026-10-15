// components/common/blobs.tsx
"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

// Stationary Blobs Component - Fixed positions, zero continuous animation loop
export const AnimatedBlobs = ({
  count = 6,
  color = "primary",
}: {
  count?: number;
  color?: "primary" | "white" | "blue" | "cyan" | "purple";
  baseDelay?: number;
}) => {
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

  // Generate deterministic stationary blob positions
  const blobs = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      // Deterministic layout based on index so it doesn't shift on re-renders
      const size = 250 + ((i * 73) % 250);
      const startX = (i * 37 + 10) % 90;
      const startY = (i * 47 + 15) % 85;

      return {
        id: i,
        size,
        startX,
        startY,
        colorClass: getColorClass(),
      };
    });
  }, [count, color]);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      suppressHydrationWarning
    >
      {blobs.map((blob) => (
        <div
          key={blob.id}
          className={cn("absolute rounded-full blur-3xl opacity-75", blob.colorClass)}
          style={{
            width: blob.size,
            height: blob.size,
            left: `${blob.startX}%`,
            top: `${blob.startY}%`,
            transform: "translateZ(0)",
          }}
        />
      ))}
    </div>
  );
};

// Stationary Floating Blob Component - Static, hardware-accelerated positioning
export const FloatingBlob = ({
  className,
  color = "primary",
  size = "w-96 h-96",
}: {
  className?: string;
  color?: string;
  size?: string;
  delay?: number;
  speed?: number;
}) => {
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
    "absolute rounded-full blur-3xl opacity-80 pointer-events-none",
    getColorClass(),
    size,
    className,
  );

  return (
    <div
      className={blobClasses}
      style={{
        transform: "translateZ(0)",
      }}
    />
  );
};

