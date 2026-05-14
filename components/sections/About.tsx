"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StatBlock } from "@/components/ui/StatBlock";
import { siteConfig } from "@/lib/data";

const ease = [0.25, 0, 0, 1] as const;

export function About() {
  return (
    <section className="bg-bg-main py-24">
      <SectionLabel label="ABOUT ME" />
      <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <GlowCard>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <Image
                src="/images/avatar.svg"
                alt="Fazil Yousafzai"
                width={72}
                height={72}
                className="h-[72px] w-[72px] shrink-0 rounded-full object-cover"
              />
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-bold text-white">
                  {siteConfig.ownerName}
                </h3>
                <p className="text-[13px] text-text-muted">
                  Full-Stack Dev & Digital Creator
                </p>
                <span className="inline-flex w-fit items-center gap-1 rounded-full bg-[rgba(29,191,115,0.15)] px-2 py-0.5 text-xs font-medium text-[#1dbf73] ring-1 ring-[rgba(29,191,115,0.35)]">
                  ✓ Level 2 Seller
                </span>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="text-lg font-bold text-white">4.8</span>
                  <span className="flex text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </span>
                  <span className="text-[12px] text-text-muted">
                    Based on 408+ reviews
                  </span>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href={siteConfig.fiverrUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[var(--purple)] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#7c5dff]"
                  >
                    Fiverr Profile
                  </Link>
                  <Link
                    href={siteConfig.fiverrUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white underline-offset-4 hover:underline"
                  >
                    Hire Me →
                  </Link>
                </div>
              </div>
            </div>
          </GlowCard>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-2 gap-5">
            <StatBlock value={650} suffix="+" label="Orders Done" />
            <StatBlock value={408} suffix="+" label="Reviews" />
            <StatBlock value={6} suffix="+" label="Years Experience" />
            <StatBlock value={100} suffix="%" label="Satisfaction" />
          </div>
          <blockquote className="border-l-[3px] border-[var(--purple)] pl-4 text-sm italic leading-relaxed text-text-secondary">
            I don&apos;t just deliver files — I deliver results. From your first
            idea to a live, converting product — one partner, zero headache.
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
