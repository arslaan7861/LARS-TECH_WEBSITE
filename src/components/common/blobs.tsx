// components/ui/blobs.tsx
import { cn } from "@/lib/utils";

// Animated Blobs Component - Static version for better mobile performance
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

  // Generate static positions - no animations
  const blobs = Array.from({ length: count }, (_, i) => {
    const size = Math.random() * 400 + 200;
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;

    return {
      id: i,
      size,
      startX,
      startY,
      colorClass: getColorClass(),
    };
  });

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      suppressHydrationWarning
    >
      {blobs.map((blob) => (
        <div
          suppressHydrationWarning
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
};

// Floating Blob Component - Static version for better mobile performance
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

  // Static blob - no animations
  return (
    <div
      suppressHydrationWarning
      className={cn(
        "absolute rounded-full blur-3xl",
        getColorClass(),
        size,
        className,
      )}
    />
  );
};
