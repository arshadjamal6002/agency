"use client";

import type { ReactNode } from "react";
import type { BrandLogoItem } from "@/lib/types";

const size = 36;

function Mark({ children }: { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function BrandMark({ id }: { id: BrandLogoItem["id"] }) {
  switch (id) {
    case "remit":
    case "remit2":
      return (
        <Mark>
          <rect width="36" height="36" rx="8" fill="rgba(108,71,255,0.12)" />
          <path
            d="M10 24 L18 10 L26 24 Z"
            stroke="#a78bfa"
            strokeWidth="1.8"
            fill="none"
            strokeLinejoin="round"
          />
          <circle cx="18" cy="22" r="3" fill="#6c47ff" />
        </Mark>
      );
    case "smrt":
    case "smrt2":
      return (
        <Mark>
          <rect width="36" height="36" rx="8" fill="rgba(59,130,246,0.12)" />
          <path
            d="M18 8 L28 14 L28 22 L18 28 L8 22 L8 14 Z"
            stroke="#60a5fa"
            strokeWidth="1.6"
            fill="rgba(59,130,246,0.15)"
          />
        </Mark>
      );
    case "duka":
      return (
        <Mark>
          <rect width="36" height="36" rx="8" fill="rgba(34,211,238,0.1)" />
          <rect x="10" y="12" width="16" height="14" rx="2" stroke="#22d3ee" strokeWidth="1.5" fill="none" />
          <path d="M14 18 h8 M14 22 h6" stroke="#22d3ee" strokeWidth="1.2" strokeLinecap="round" />
        </Mark>
      );
    case "ndu":
      return (
        <Mark>
          <rect width="36" height="36" rx="8" fill="rgba(236,72,153,0.1)" />
          <circle cx="18" cy="18" r="10" stroke="#ec4899" strokeWidth="1.5" fill="none" />
          <circle cx="18" cy="18" r="4" fill="#ec4899" opacity="0.5" />
        </Mark>
      );
    case "braalia":
      return (
        <Mark>
          <rect width="36" height="36" rx="8" fill="rgba(251,191,36,0.12)" />
          <path
            d="M10 26 L18 10 L26 26 Z"
            stroke="#fbbf24"
            strokeWidth="1.6"
            fill="rgba(251,191,36,0.08)"
            strokeLinejoin="round"
          />
        </Mark>
      );
    case "clarity":
      return (
        <Mark>
          <rect width="36" height="36" rx="8" fill="rgba(148,163,184,0.12)" />
          <rect x="11" y="11" width="14" height="14" rx="3" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
          <path d="M15 18 L17 20 L22 15" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
        </Mark>
      );
    default:
      return (
        <Mark>
          <rect width="36" height="36" rx="8" fill="rgba(255,255,255,0.06)" />
          <circle cx="18" cy="18" r="6" fill="#6b7280" />
        </Mark>
      );
  }
}
