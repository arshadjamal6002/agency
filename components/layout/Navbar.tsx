"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { navItems, sectionIds, siteConfig } from "@/lib/data";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy([...sectionIds], 100);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-[100] border-b border-transparent transition-[background,backdrop-filter,border-color,box-shadow] duration-300",
        scrolled
          ? "border-[rgba(255,255,255,0.06)] bg-[rgba(9,9,15,0.85)] shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-[14px] [backdrop-filter:blur(14px)] [-webkit-backdrop-filter:blur(14px)] [will-change:backdrop-filter]"
          : "bg-transparent [will-change:auto]"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#home"
          className="text-[20px] font-bold text-text-primary"
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "relative text-[13px] font-medium transition-colors after:absolute after:bottom-[-6px] after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-purple-light after:transition-all after:duration-300 hover:text-white hover:after:w-full",
                activeId === item.id
                  ? "text-purple-light after:w-full"
                  : "text-text-secondary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="#contact"
            className="rounded-full bg-[var(--purple)] px-5 py-2 text-[13px] font-medium text-white transition hover:-translate-y-px hover:bg-[#7c5dff]"
          >
            Book a Free Consultation Call →
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg border border-[var(--border-default)] p-2 text-text-primary lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--border-default)] bg-bg-main px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-medium text-text-secondary hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-2 rounded-full bg-[var(--purple)] px-4 py-2 text-center text-sm font-medium text-white"
              onClick={() => setOpen(false)}
            >
              Book a Free Consultation Call →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
