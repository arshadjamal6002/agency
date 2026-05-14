"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

const ease = [0.25, 0, 0, 1] as const;

export function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden py-24"
      style={{
        backgroundColor: "var(--bg-main)",
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col justify-center">
          <motion.h1
            className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-[52px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            Engineering
          </motion.h1>
          <motion.span
            className="gradient-purple mt-2 block text-4xl font-bold leading-tight md:text-5xl lg:text-[52px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease }}
          >
            Digital Excellence
          </motion.span>
          <motion.span
            className="mt-2 block text-4xl font-bold leading-tight text-white md:text-5xl lg:text-[52px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
          >
            Through Code & Design.
          </motion.span>

          <motion.p
            className="mt-6 max-w-xl text-base text-text-secondary md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.55, ease }}
          >
            Your partner in navigating the full lifecycle of product design,
            development, and digital growth.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.7, ease }}
          >
            <Link
              href="#websites"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--purple)] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-px hover:bg-[#7c5dff]"
            >
              View My Work <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.2)] px-6 py-3 text-sm font-medium text-white transition hover:border-white/40"
            >
              Let&apos;s Talk <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="relative flex min-h-[420px] items-end justify-end lg:min-h-[560px]"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
        >
          <div
            className="pointer-events-none absolute inset-[-30%] z-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(108,71,255,0.45) 0%, transparent 65%)",
              animation: "glowPulse 3s ease-in-out infinite",
            }}
            aria-hidden
          />
          <div className="relative z-10 w-full max-w-md lg:max-w-none">
            <Image
              src="/images/hero-portrait.svg"
              alt="Fazil Yousafzai — portrait placeholder"
              width={600}
              height={800}
              priority
              className="h-auto w-full rounded-none object-contain object-bottom"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mx-auto mt-12 flex max-w-6xl items-end justify-between px-6 pb-8 text-text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9, ease }}
      >
        <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider">
          <ArrowDown className="h-3 w-3" />
          Scroll to explore
        </p>
        <p className="text-[12px]">
          Building Ideas into Digital Realities{" "}
          <ArrowRight className="mb-0.5 ml-1 inline h-3 w-3" />
        </p>
      </motion.div>
    </section>
  );
}
