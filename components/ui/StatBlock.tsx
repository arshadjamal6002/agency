"use client";

import { cn } from "@/lib/cn";
import { useCountUp } from "@/hooks/useCountUp";

export function StatBlock({
  value,
  suffix = "",
  label,
  className,
  labelClassName,
}: {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
  labelClassName?: string;
}) {
  const { count, ref } = useCountUp(value, 1200);

  return (
    <div ref={ref} className={cn("text-center md:text-left", className)}>
      <div className="text-[28px] font-bold leading-none text-text-primary">
        {count}
        {suffix}
      </div>
      <div
        className={cn("mt-1 text-[13px] text-text-muted", labelClassName)}
      >
        {label}
      </div>
    </div>
  );
}
