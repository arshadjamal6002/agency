"use client";

import { cn } from "@/lib/cn";

type GlowColor = "purple" | "blue" | "green";

const glowMap: Record<GlowColor, string> = {
  purple: "hover:shadow-glow-purple",
  blue: "hover:shadow-glow-blue",
  green: "hover:shadow-glow-green",
};

export function GlowCard({
  children,
  className,
  glowColor = "purple",
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: GlowColor;
}) {
  return (
    <div
      className={cn(
        "rounded-[14px] border border-[var(--border-default)] bg-[var(--bg-card)] p-6 transition-all duration-300",
        "hover:-translate-y-1 hover:border-[var(--border-hover)]",
        glowMap[glowColor],
        className
      )}
    >
      {children}
    </div>
  );
}
