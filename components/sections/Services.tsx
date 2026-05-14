"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GlowCard } from "@/components/ui/GlowCard";
import { GradientText } from "@/components/ui/GradientText";
import { PillChip } from "@/components/ui/PillChip";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/lib/data";
import { cn } from "@/lib/cn";
import type { ServiceItem } from "@/lib/types";
import { IconFor } from "@/lib/icons";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.02 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

function gridItemClass(index: number) {
  return cn(
    index < 3 && "lg:col-span-2",
    index === 3 && "lg:col-span-2 lg:col-start-2",
    index === 4 && "lg:col-span-2 lg:col-start-4"
  );
}

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <GlowCard className="relative flex h-full flex-col">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="rounded-md border border-[rgba(108,71,255,0.35)] bg-[rgba(108,71,255,0.12)] px-2 py-1 text-[10px] font-bold tabular-nums tracking-wide text-purple-light">
            {service.num}
          </span>
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white shadow-[0_0_20px_rgba(0,0,0,0.35)]"
            style={{ backgroundColor: service.iconBg }}
          >
            <IconFor name={service.icon} className="h-5 w-5" />
          </div>
        </div>
        {service.kicker ? (
          <span className="max-w-[46%] shrink-0 rounded-full border border-[var(--border-default)] bg-bg-card-alt px-2.5 py-1 text-[9px] font-semibold uppercase leading-tight tracking-wider text-text-muted">
            {service.kicker}
          </span>
        ) : null}
      </div>

      <h3
        className={cn(
          "mt-4 font-semibold leading-snug text-white",
          service.titleCompact ? "text-[15px] md:text-base" : "text-lg"
        )}
      >
        {service.title}
      </h3>
      {service.meta ? (
        <p className="mt-1 text-xs text-text-muted">{service.meta}</p>
      ) : null}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
        {service.desc}
      </p>
      <div className="mt-5 border-t border-[var(--border-default)] pt-4">
        <div className="flex flex-wrap gap-2">
          {service.chips.map((c) => (
            <PillChip key={c} label={c.toUpperCase()} />
          ))}
        </div>
      </div>
      {service.outcome ? (
        <p className="mt-3 border-t border-[var(--border-default)] pt-3 text-[11px] font-medium leading-snug text-purple-light/95">
          {service.outcome}
        </p>
      ) : null}
    </GlowCard>
  );
}

export function Services() {
  return (
    <section className="bg-bg-main py-24">
      <SectionLabel label="WHAT I OFFER" />
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Everything Your Brand Needs to{" "}
          <GradientText>Dominate</GradientText>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
          Full-spectrum digital services — from code to content — crafted to
          grow your business and leave your competitors behind.
        </p>
      </div>

      <motion.div
        className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:grid-cols-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.08 }}
      >
        {services.map((s, index) => (
          <motion.div
            key={s.num}
            variants={item}
            className={gridItemClass(index)}
          >
            <ServiceCard service={s} />
          </motion.div>
        ))}
      </motion.div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-center gap-3 px-6 sm:flex-row sm:gap-4">
        <Link
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-[var(--purple)] px-7 py-2.5 text-sm font-semibold text-white shadow-[var(--glow-purple)] transition hover:bg-[#7c5dff]"
        >
          Start your project →
        </Link>
        <Link
          href="#websites"
          className="inline-flex items-center justify-center rounded-full border border-[var(--border-default)] px-7 py-2.5 text-sm font-semibold text-white transition hover:border-[var(--border-hover)] hover:bg-[rgba(108,71,255,0.08)]"
        >
          View selected work →
        </Link>
      </div>
    </section>
  );
}
