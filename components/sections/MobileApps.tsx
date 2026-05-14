"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PillChip } from "@/components/ui/PillChip";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GradientText } from "@/components/ui/GradientText";
import { GlowCard } from "@/components/ui/GlowCard";
import { mobileFeatures, mobileStack, siteConfig } from "@/lib/data";
import { IconFor } from "@/lib/icons";
import {
  slideInLeft,
  slideInRight,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";

const smartDineTech = [
  "React Native",
  "Expo",
  "TypeScript",
  "Node.js",
  "Express",
  "Backend",
] as const;

export function MobileApps() {
  const wa = siteConfig.whatsappNumber.replace(/\D/g, "");
  return (
    <div className="relative bg-bg-main py-24">
      <SectionLabel label="MOBILE APP DEVELOPMENT" />
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-text-muted">
          Native Apps
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold text-white md:text-4xl">
          In <GradientText>Your Pocket</GradientText>
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <p className="text-text-secondary">
              Mobile-first UX/UI experiences built with React Native, Expo &
              Node.js — performance, polish, and scalable backends out of the
              box.
            </p>
            <motion.div
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              {mobileFeatures.map((f) => (
                <motion.div
                  key={f.title}
                  variants={staggerItem}
                  className="flex gap-3 rounded-[14px] border border-[var(--border-default)] bg-bg-card p-4"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white"
                    style={{ backgroundColor: f.color }}
                  >
                    <IconFor name={f.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{f.title}</p>
                    <p className="mt-1 text-xs text-text-muted">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="mt-8">
              <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-purple-light/90">
                Mobile stack
              </p>
              <div className="flex flex-wrap gap-2">
                {mobileStack.map((t) => (
                  <PillChip key={t} label={t} />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted">
                  Portfolio
                </p>
                <h3 className="mt-1 text-2xl font-bold tracking-tight text-white md:text-[26px]">
                  Featured Mobile Projects
                </h3>
              </div>
              <span className="inline-flex w-fit shrink-0 rounded-full border border-[var(--border-default)] bg-bg-card px-3 py-1 text-xs font-medium text-text-muted">
                3 Apps Built
              </span>
            </div>

            <GlowCard className="w-full max-w-none overflow-hidden p-0">
              <div className="grid gap-0 md:grid-cols-2">
                <div className="relative min-h-[260px] w-full bg-bg-card-alt md:min-h-[320px]">
                  <Image
                    src="/images/smartdine-app-mockup.svg"
                    alt="SmartDine admin dashboard preview"
                    fill
                    className="object-cover object-left"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                </div>

                <div className="relative space-y-4 p-6">
                  <span className="inline-block rounded-full bg-[rgba(108,71,255,0.2)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-purple-light">
                    Food & Hospitality
                  </span>
                  <h4 className="text-2xl font-bold text-white">SmartDine</h4>
                  <p className="text-sm text-text-muted">
                    Restaurant Ordering & Reservation Platform
                  </p>
                  <p className="text-sm text-text-secondary">
                    A full-stack mobile restaurant ordering platform built from
                    the ground up — menus, ordering, seat maps, loyalty, and an
                    admin panel your team will actually use.
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Table Reservation Wizard",
                      "Live Order Tracking",
                      "Admin Dashboard",
                      "Loyalty & Rewards",
                    ].map((label) => (
                      <div
                        key={label}
                        className="rounded-lg border border-[var(--border-default)] bg-bg-card-alt px-2 py-2 text-center text-[11px] font-medium text-text-secondary"
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-[11px] text-text-muted">
                    <div>
                      <p className="font-bold text-white">27</p>
                      <p>API Endpoints</p>
                    </div>
                    <div>
                      <p className="font-bold text-white">25</p>
                      <p>App Screens</p>
                    </div>
                    <div>
                      <p className="font-bold text-white">2</p>
                      <p>Platforms</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {smartDineTech.map((t) => (
                      <PillChip key={t} label={t} />
                    ))}
                  </div>

                  <div className="relative flex flex-col items-center gap-4 border-t border-[var(--border-default)] bg-gradient-to-br from-[#0b1224]/80 to-[#1a1030]/80 pt-6 sm:flex-row sm:justify-between">
                    <span
                      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(100px,22vw,160px)] font-bold leading-none text-white/[0.03]"
                      aria-hidden
                    >
                      01
                    </span>
                    <div className="phone-float relative z-10 w-[min(200px,48vw)] shrink-0">
                      <Image
                        src="/images/smartdine-phone.svg"
                        alt="SmartDine app mockup"
                        width={320}
                        height={640}
                        className="h-auto w-full"
                      />
                    </div>
                    <div className="relative z-10 rounded-lg border border-white/10 bg-white p-3 text-center text-[10px] text-black">
                      <p className="font-semibold">Scan to preview</p>
                      <p className="mt-1 text-neutral-500">
                        Scan To View SmartDine App Online
                      </p>
                      <p className="mt-2 text-[10px] font-medium text-neutral-600">
                        iOS · Android
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href={`https://wa.me/${wa}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary hover:text-white"
          >
            Discuss your app idea →
          </Link>
        </div>
      </div>
    </div>
  );
}
