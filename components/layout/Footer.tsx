"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/data";

const col1 = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Websites", href: "#websites" },
];

const col2 = [
  { label: "Apps", href: "#apps" },
  { label: "Content", href: "#content" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[rgba(255,255,255,0.06)] bg-bg-main py-24">
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center text-[220px] font-bold leading-none text-[var(--purple)] opacity-[0.08]"
        aria-hidden
      >
        {siteConfig.ownerMonogram}
      </div>
      <AnimatedSection className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--purple)] text-sm font-bold text-white">
              {siteConfig.ownerMonogram}
            </div>
            <h3 className="text-lg font-bold text-white">
              Let&apos;s Keep The Future Flowing
            </h3>
            <p className="text-sm text-text-secondary">
              {siteConfig.ownerName} — {siteConfig.tagline}. Available
              Worldwide.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-purple-light hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
              MENU
            </p>
            <ul className="space-y-2">
              {col1.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
              LINKS
            </p>
            <ul className="space-y-2">
              {col2.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-muted">
              SOCIALS
            </p>
            <ul className="space-y-2">
              {socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-secondary transition hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-12 text-center text-xs text-text-muted">
          © {new Date().getFullYear()} {siteConfig.ownerName}. All rights reserved.
        </p>
      </AnimatedSection>
    </footer>
  );
}
