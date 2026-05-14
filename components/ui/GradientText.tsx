import { cn } from "@/lib/cn";

export function GradientText({
  children,
  variant = "purple",
  className,
}: {
  children: React.ReactNode;
  variant?: "purple" | "pink" | "cyan";
  className?: string;
}) {
  const cls =
    variant === "pink"
      ? "gradient-pink"
      : variant === "cyan"
        ? "gradient-cyan"
        : "gradient-purple";
  return <span className={cn(cls, className)}>{children}</span>;
}
