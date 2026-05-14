"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GradientText } from "@/components/ui/GradientText";
import { StatBlock } from "@/components/ui/StatBlock";
import { contentTabs } from "@/lib/data";
import { cn } from "@/lib/cn";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import { GalleryTileArt } from "@/components/ui/GalleryTileArt";

export function ContentCreation() {
  const [activeId, setActiveId] = useState(contentTabs[0].id);
  const active = useMemo(
    () => contentTabs.find((t) => t.id === activeId) ?? contentTabs[0],
    [activeId]
  );

  return (
    <div className="bg-bg-main py-24">
      <SectionLabel label="CONTENT STUDIO" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              Branding &<br />
              <GradientText variant="pink">Content Creation</GradientText>
            </h2>
            <p className="mt-4 text-text-secondary">
              We craft scroll-stopping content that converts. From viral reels to
              high-converting ad creatives — every pixel is intentional, every
              post is a brand moment.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-text-secondary">
              {[
                { label: "Instagram", abbr: "IG" },
                { label: "Facebook", abbr: "FB" },
                { label: "TikTok", abbr: "TT" },
                { label: "LinkedIn", abbr: "in" },
                { label: "YouTube", abbr: "YT" },
              ].map((p) => (
                <span
                  key={p.label}
                  aria-label={p.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-default)] text-[10px] font-bold text-text-secondary transition hover:border-[var(--border-hover)] hover:text-white"
                >
                  {p.abbr}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="grid w-full max-w-md grid-cols-2 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.div variants={staggerItem}>
              <StatBlock value={50} suffix="+" label="Brands Elevated" />
            </motion.div>
            <motion.div variants={staggerItem}>
              <StatBlock value={500} suffix="+" label="Posts Created" />
            </motion.div>
            <motion.div variants={staggerItem} className="text-center md:text-left">
              <div className="text-[28px] font-bold leading-none text-text-primary">
                3M+
              </div>
              <div className="mt-1 text-[13px] text-text-muted">
                Views Generated
              </div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <StatBlock value={98} suffix="%" label="Client Retention" />
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2 overflow-x-auto border-b border-[var(--border-default)] pb-4">
          {contentTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveId(tab.id)}
              className={cn(
                "whitespace-nowrap rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-wide transition",
                activeId === tab.id
                  ? "bg-[var(--purple)] text-white"
                  : "border border-[var(--border-default)] text-text-secondary hover:border-[var(--border-hover)]"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            <motion.div
              className="grid grid-cols-2 gap-4 md:grid-cols-4"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              {active.items.map((item) => (
                <motion.div
                  key={item.id}
                  variants={staggerItem}
                  className="gallery-item group relative aspect-square cursor-pointer overflow-hidden rounded-xl border border-[var(--border-default)]"
                >
                  <div className="gallery-inner absolute inset-0 overflow-hidden rounded-xl">
                    <GalleryTileArt theme={item.theme} />
                  </div>
                  <div className="gallery-overlay absolute inset-0 z-10 flex items-end bg-black/50 p-3 opacity-0 transition-opacity duration-300">
                    <p className="text-xs font-medium text-white">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="rounded-full bg-[var(--purple)] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#7c5dff]"
          >
            GET A CONTENT STRATEGY
          </a>
        </div>
      </div>
    </div>
  );
}
