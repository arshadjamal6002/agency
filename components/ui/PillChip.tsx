import { cn } from "@/lib/cn";

export function PillChip({
  label,
  active,
  className,
}: {
  label: string;
  active?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium transition-colors",
        active
          ? "border-[rgba(108,71,255,0.5)] bg-[rgba(108,71,255,0.2)] text-purple-light"
          : "border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] text-text-secondary",
        className
      )}
    >
      {label}
    </span>
  );
}
