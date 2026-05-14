"use client";

import { motion } from "framer-motion";
import { GlowCard } from "@/components/ui/GlowCard";
import { GradientText } from "@/components/ui/GradientText";
import { PillChip } from "@/components/ui/PillChip";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/lib/data";
import { IconFor } from "@/lib/icons";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

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
        className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 px-6 md:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {services.slice(0, 3).map((s) => (
          <motion.div key={s.num} variants={item}>
            <GlowCard className="relative flex h-full flex-col">
              <div className="flex items-start justify-between">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-lg text-white"
                  style={{ backgroundColor: s.iconBg }}
                >
                  <IconFor name={s.icon} className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-medium text-white/30">
                  {s.num}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-text-secondary">{s.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.chips.map((c) => (
                  <PillChip key={c} label={c} />
                ))}
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mx-auto mt-5 grid max-w-6xl grid-cols-1 gap-5 px-6 md:grid-cols-2 lg:mx-auto lg:max-w-4xl"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {services.slice(3).map((s) => (
          <motion.div key={s.num} variants={item}>
            <GlowCard className="relative flex h-full flex-col">
              <div className="flex items-start justify-between">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-lg text-white"
                  style={{ backgroundColor: s.iconBg }}
                >
                  <IconFor name={s.icon} className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-medium text-white/30">
                  {s.num}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-text-secondary">{s.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.chips.map((c) => (
                  <PillChip key={c} label={c} />
                ))}
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
