"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { videoAds } from "@/lib/data";

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

export function VideoAds() {
  return (
    <div className="bg-bg-main py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          <span className="text-white">Promotional</span>{" "}
          <span className="text-[var(--cyan)]">Video Ads</span>
        </h2>
      </div>

      <motion.div
        className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {videoAds.map((v) => (
          <motion.a
            key={v.id}
            href={v.href}
            variants={item}
            className="video-card group block overflow-hidden rounded-[14px] border border-[var(--border-default)] bg-bg-card transition hover:border-[var(--border-hover)]"
          >
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={v.thumbnail}
                alt={v.title}
                fill
                className="video-thumb object-cover transition duration-300"
                sizes="(max-width:768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2 py-0.5 text-xs text-white backdrop-blur-sm">
                {v.duration}
              </span>
              <div className="play-btn absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition">
                <Play className="ml-0.5 h-6 w-6 fill-current" />
              </div>
            </div>
            <div className="space-y-2 p-4 text-left">
              <h3 className="text-lg font-semibold text-white">{v.title}</h3>
              <p className="text-xs text-purple-light">Watch now →</p>
            </div>
          </motion.a>
        ))}
      </motion.div>

      <div className="mt-12 flex justify-center px-6">
        <Link
          href="#contact"
          className="rounded-full border border-[var(--border-default)] px-8 py-3 text-sm font-medium text-white transition hover:border-[var(--border-hover)] hover:shadow-glow-purple"
        >
          START A VIDEO PROJECT →
        </Link>
      </div>
    </div>
  );
}
