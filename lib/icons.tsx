import * as LucideIcons from "lucide-react";
import type { IconName } from "./types";

type IconProps = {
  name: IconName;
  className?: string;
  style?: React.CSSProperties;
};

export function IconFor({ name, className, style }: IconProps) {
  const Cmp = LucideIcons[name] as React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
    strokeWidth?: number;
  }>;
  if (!Cmp) return null;
  return <Cmp className={className} style={style} strokeWidth={1.5} />;
}
