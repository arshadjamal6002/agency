"use client";

import type { ContentGalleryTheme } from "@/lib/types";

/** Inline SVG compositions for content gallery parity (no external assets). */
export function GalleryTileArt({ theme }: { theme: ContentGalleryTheme }) {
  switch (theme) {
    case "money":
      return (
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 200 200"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <defs>
            <linearGradient id="m" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0d9488" />
              <stop offset="100%" stopColor="#115e59" />
            </linearGradient>
          </defs>
          <rect width="200" height="200" fill="url(#m)" />
          <rect x="24" y="40" width="100" height="120" rx="12" fill="#fff" opacity="0.95" />
          <rect x="130" y="56" width="46" height="88" rx="8" fill="#0f766e" />
          <text x="34" y="78" fill="#134e4a" fontSize="11" fontWeight="700">
            Skip the lines
          </text>
          <text x="34" y="96" fill="#0f766e" fontSize="8">
            Send money home
          </text>
          <circle cx="60" cy="130" r="18" fill="#14b8a6" />
        </svg>
      );
    case "lifestyle":
      return (
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 200 200"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <rect width="200" height="200" fill="#fef3c7" />
          <ellipse cx="70" cy="100" rx="35" ry="45" fill="#fde68a" />
          <rect x="110" y="50" width="70" height="110" rx="10" fill="#fff" stroke="#e5e7eb" />
          <rect x="120" y="65" width="50" height="8" rx="2" fill="#e5e7eb" />
          <rect x="120" y="85" width="40" height="6" rx="2" fill="#d1d5db" />
        </svg>
      );
    case "tips":
      return (
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 200 200"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <rect width="200" height="200" fill="#fff" />
          <rect x="16" y="16" width="168" height="168" rx="8" fill="none" stroke="#22c55e" strokeWidth="4" />
          <text x="100" y="70" textAnchor="middle" fill="#166534" fontSize="14" fontWeight="800">
            5 Tips
          </text>
          <text x="100" y="92" textAnchor="middle" fill="#15803d" fontSize="9">
            TO MANAGE STRESS
          </text>
          <line x1="40" y1="110" x2="160" y2="110" stroke="#bbf7d0" strokeWidth="2" />
          <line x1="40" y1="125" x2="140" y2="125" stroke="#d1fae5" strokeWidth="2" />
          <line x1="40" y1="140" x2="150" y2="140" stroke="#d1fae5" strokeWidth="2" />
        </svg>
      );
    case "promoPortrait":
      return (
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 200 200"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <defs>
            <linearGradient id="p" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#581c87" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </linearGradient>
          </defs>
          <rect width="200" height="200" fill="url(#p)" />
          <circle cx="100" cy="88" r="42" fill="#4c1d95" stroke="#a78bfa" strokeWidth="3" />
          <text x="100" y="155" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="800">
            JESSE
          </text>
          <text x="100" y="172" textAnchor="middle" fill="#c4b5fd" fontSize="8">
            MARION
          </text>
        </svg>
      );
    case "moneyBlue":
      return (
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 200 200"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <rect width="200" height="200" fill="#1e3a8a" />
          <text x="100" y="56" textAnchor="middle" fill="#e0e7ff" fontSize="10" fontWeight="700">
            A SMARTER WAY
          </text>
          <text x="100" y="72" textAnchor="middle" fill="#bfdbfe" fontSize="8">
            TO SEND MONEY ONLINE
          </text>
          <rect x="60" y="95" width="80" height="90" rx="10" fill="#1d4ed8" />
          <rect x="72" y="108" width="56" height="64" rx="4" fill="#172554" />
        </svg>
      );
    case "dualPhone":
      return (
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 200 200"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <rect width="200" height="200" fill="#e0f2fe" />
          <rect x="28" y="40" width="52" height="110" rx="8" fill="#0c4a6e" />
          <rect x="120" y="50" width="52" height="110" rx="8" fill="#0369a1" />
          <rect x="36" y="55" width="36" height="50" rx="2" fill="#38bdf8" opacity="0.4" />
          <rect x="128" y="62" width="36" height="50" rx="2" fill="#7dd3fc" opacity="0.5" />
        </svg>
      );
    case "darkLaunch":
      return (
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 200 200"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <rect width="200" height="200" fill="#0a0a0f" />
          <text x="100" y="95" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="800">
            Introducing
          </text>
          <text x="100" y="118" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800">
            Sub2Cars
          </text>
          <rect x="40" y="135" width="120" height="6" rx="2" fill="#334155" />
          <rect x="50" y="148" width="100" height="4" rx="1" fill="#1e293b" />
        </svg>
      );
    case "gradientBrand":
      return (
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 200 200"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="50%" stopColor="#6c47ff" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          <rect width="200" height="200" fill="url(#g)" />
          <text x="100" y="105" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="800" opacity="0.95">
            BRAND DROP
          </text>
        </svg>
      );
    default:
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/40 to-blue-900/50" />
      );
  }
}
