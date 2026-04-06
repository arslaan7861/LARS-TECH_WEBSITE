import { cn } from "@/lib/utils";
import { motion, useInView, useAnimation } from "framer-motion";

// Animated Blobs Component
export const AnimatedBlobs = ({
  count = 6,
  color = "primary",
  baseDelay = 0,
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

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      suppressHydrationWarning
    >
      {[...Array(count)].map((_, i) => {
        const size = Math.random() * 400 + 200;
        const duration = Math.random() * 30 + 25;
        const delay = baseDelay + Math.random() * 10;
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const xMove = (Math.random() - 0.5) * 30;
        const yMove = (Math.random() - 0.5) * 30;

        return (
          <motion.div
            suppressHydrationWarning
            key={i}
            className={cn("absolute rounded-full blur-3xl", getColorClass())}
            style={{
              width: size,
              height: size,
              left: `${startX}%`,
              top: `${startY}%`,
            }}
            animate={{
              x: [0, xMove, -xMove * 0.5, xMove * 0.8, 0],
              y: [0, yMove, -yMove * 0.6, yMove * 0.7, 0],
              scale: [1, 1.08, 0.94, 1.06, 1],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

// Floating Blob Component
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

  return (
    <motion.div
      suppressHydrationWarning
      className={cn(
        "absolute rounded-full blur-3xl",
        getColorClass(),
        size,
        className,
      )}
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
