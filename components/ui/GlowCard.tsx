"use client";

import { cn } from "@/lib/cn";

type GlowColor = "purple" | "blue" | "green";

const glowMap: Record<GlowColor, string> = {
  purple: "hover:shadow-glow-purple-lg",
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
        "rounded-[14px] border border-[var(--border-default)] bg-[rgba(255,255,255,0.035)] p-6 backdrop-blur-[10px] transition-all duration-300",
        "hover:-translate-y-1 hover:border-[var(--border-hover)]",
        glowMap[glowColor],
        "focus-within:ring-2 focus-within:ring-[rgba(108,71,255,0.35)] focus-within:ring-offset-2 focus-within:ring-offset-[var(--bg-main)]",
        className
      )}
    >
      {children}
    </div>
  );
}
