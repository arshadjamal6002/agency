"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";
import { GradientText } from "@/components/ui/GradientText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatBlock } from "@/components/ui/StatBlock";
import { siteConfig } from "@/lib/data";
import { slideInLeft, slideInRight, viewportOnce } from "@/lib/motion";

export function About() {
  return (
    <section className="bg-bg-main py-24">
      <SectionLabel label="ABOUT ME" />
      <div className="mx-auto grid max-w-6xl gap-5 px-6 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={slideInLeft}
        >
          <GlowCard className="h-full">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <Image
                src="/images/avatar.svg"
                alt={siteConfig.ownerName}
                width={96}
                height={96}
                className="h-24 w-24 shrink-0 rounded-full object-cover ring-[3px] ring-[rgba(108,71,255,0.35)] ring-offset-2 ring-offset-[var(--bg-main)]"
              />
              <div className="min-w-0 flex-1 space-y-3">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {siteConfig.ownerName}
                  </h3>
                  <p className="mt-1 text-sm">
                    <GradientText variant="purple">
                      {siteConfig.tagline}
                    </GradientText>
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {siteConfig.aboutBio}
                </p>
                <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center">
                  <Link
                    href={siteConfig.fiverrUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--purple)] px-6 py-2.5 text-sm font-semibold text-white shadow-[var(--glow-purple)] transition hover:bg-[#7c5dff]"
                  >
                    <ExternalLink className="h-4 w-4 opacity-90" aria-hidden />
                    Fiverr Profile
                  </Link>
                  <Link
                    href={siteConfig.fiverrUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-[rgba(108,71,255,0.45)] bg-transparent px-6 py-2.5 text-sm font-semibold text-white transition hover:border-[var(--border-hover)] hover:bg-[rgba(108,71,255,0.08)]"
                  >
                    Hire Me →
                  </Link>
                </div>
              </div>
            </div>
          </GlowCard>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={slideInRight}
        >
          <GlowCard className="flex h-full flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-default)] pb-4">
              <span className="text-lg font-bold tracking-tight text-white">
                Fiverr
              </span>
              <span className="rounded-full border border-[rgba(29,191,115,0.45)] bg-[rgba(29,191,115,0.12)] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#1dbf73]">
                ✓ Level 2 Seller
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-2xl font-bold text-white">4.8</span>
              <span className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-current sm:h-5 sm:w-5"
                  />
                ))}
              </span>
              <span className="text-[12px] text-text-muted sm:ml-1">
                Based on 408+ reviews
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-2">
              {(
                [
                  { value: 650, suffix: "+", label: "ORDERS DONE" },
                  { value: 408, suffix: "+", label: "REVIEWS" },
                  { value: 6, suffix: "+", label: "YEARS EXPERIENCE" },
                  { value: 100, suffix: "%", label: "SATISFACTION" },
                ] as const
              ).map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-[var(--border-default)] bg-bg-card-alt/90 px-2 py-4 sm:px-3"
                >
                  <StatBlock
                    value={s.value}
                    suffix={s.suffix}
                    label={s.label}
                    className="text-center"
                    labelClassName="text-[10px] font-semibold uppercase tracking-wider text-text-muted"
                  />
                </div>
              ))}
            </div>

            <div className="mt-auto rounded-xl border border-[var(--border-default)] bg-[rgba(255,255,255,0.02)] p-4 sm:p-5">
              <div className="flex gap-4">
                <div
                  className="w-1 shrink-0 rounded-full bg-[var(--purple)]"
                  aria-hidden
                />
                <blockquote className="text-sm italic leading-relaxed text-text-secondary">
                  I don&apos;t just deliver files — I deliver{" "}
                  <span className="font-semibold not-italic text-[var(--purple-light)]">
                    results
                  </span>
                  . From your first idea to a live, converting product — one
                  partner, zero handoffs.
                </blockquote>
              </div>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
}
