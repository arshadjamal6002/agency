"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/GlowCard";
import { StatBlock } from "@/components/ui/StatBlock";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/cn";
import { Star } from "lucide-react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export function Testimonials() {
  return (
    <section className="bg-bg-main py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="grid grid-cols-2 gap-6 border-b border-[var(--border-default)] pb-10 md:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div variants={staggerItem} className="text-center">
            <p className="text-2xl font-bold text-white">4.8 ★</p>
            <p className="mt-1 text-[13px] text-text-muted">Avg Rating</p>
          </motion.div>
          <motion.div variants={staggerItem}>
            <StatBlock value={408} suffix="+" label="Portfolio" />
          </motion.div>
          <motion.div variants={staggerItem}>
            <StatBlock value={880} suffix="+" label="Orders" />
          </motion.div>
          <motion.div variants={staggerItem}>
            <StatBlock value={100} suffix="%" label="Satisfaction" />
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {testimonials.map((t) => (
            <motion.div key={t.id} variants={staggerItem}>
              <GlowCard className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                      t.platform === "FIVERR" ? "badge-fiverr" : "badge-upwork"
                    )}
                  >
                    {t.platform}
                  </span>
                  <span className="flex text-amber-400">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </span>
                </div>
                <p className="mt-4 flex-1 text-sm text-text-secondary">
                  {t.text}
                </p>
                <div className="mt-6 flex items-center justify-between gap-3 border-t border-[var(--border-default)] pt-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white",
                        t.avatarColor
                      )}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {t.name}
                      </p>
                      <p className="text-xs text-text-muted">@{t.handle}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-purple-light">
                    {t.service}
                  </span>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
