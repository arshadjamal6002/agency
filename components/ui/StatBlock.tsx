"use client";

import { useCountUp } from "@/hooks/useCountUp";

export function StatBlock({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const { count, ref } = useCountUp(value, 1200);

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="text-[28px] font-bold leading-none text-text-primary">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-[13px] text-text-muted">{label}</div>
    </div>
  );
}
