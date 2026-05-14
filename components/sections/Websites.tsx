"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PillChip } from "@/components/ui/PillChip";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GradientText } from "@/components/ui/GradientText";
import { websiteFeatures, websiteTechChips } from "@/lib/data";
import { IconFor } from "@/lib/icons";
import { ArrowRight } from "lucide-react";

const ease = [0.25, 0, 0, 1] as const;

export function Websites() {
  return (
    <div className="bg-bg-main py-24">
      <SectionLabel label="WEBSITE DEVELOPMENT" />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
            Websites That Work{" "}
            <span className="block md:inline">
              <GradientText>As Hard As You Do</GradientText>
            </span>
          </h2>
          <p className="mt-4 text-text-secondary">
            I don&apos;t build websites — I build revenue machines. Every project
            is engineered from the ground up for speed, conversion, and long-term
            scale. No templates. No shortcuts. No excuses.
          </p>
          <Link
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--purple)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#7c5dff]"
          >
            Start a Project <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-3"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          viewport={{ once: true, amount: 0.15 }}
        >
          {websiteFeatures.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease }}
              viewport={{ once: true, amount: 0.1 }}
              className="rounded-[14px] border border-[var(--border-default)] bg-bg-card p-4"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[rgba(108,71,255,0.2)] text-purple-light">
                  <IconFor name={f.icon} className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{f.title}</p>
                  <p className="mt-1 text-xs text-text-muted">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-6">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-text-muted">
          Tech stack
        </p>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {websiteTechChips.map((t) => (
            <PillChip key={t} label={t} />
          ))}
        </div>
      </div>
    </div>
  );
}
