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

const ease = [0.25, 0, 0, 1] as const;

export function MobileApps() {
  const wa = siteConfig.whatsappNumber.replace(/\D/g, "");
  return (
    <div className="relative bg-bg-main py-24">
      <span className="absolute right-6 top-8 rounded-full border border-[var(--border-default)] bg-bg-card px-3 py-1 text-xs text-text-muted md:right-12">
        3 Apps Built
      </span>

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
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease }}
            viewport={{ once: true, amount: 0.15 }}
          >
            <p className="text-text-secondary">
              Mobile-first UX/UI experiences built with React Native, Expo &
              Node.js — performance, polish, and scalable backends out of the
              box.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {mobileFeatures.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.06, ease }}
                  viewport={{ once: true, amount: 0.1 }}
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
            </div>
            <div className="mt-8">
              <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-text-muted">
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
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            viewport={{ once: true, amount: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            <GlowCard className="w-full max-w-md p-0 overflow-hidden">
              <div className="grid gap-0 md:grid-cols-2">
                <div className="space-y-4 p-6">
                  <span className="inline-block rounded-full bg-[rgba(108,71,255,0.2)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-purple-light">
                    Food & Hospitality
                  </span>
                  <h3 className="text-2xl font-bold text-white">SmartDine</h3>
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
                    {["React Native", "Expo", "TypeScript", "Node.js"].map(
                      (t) => (
                        <PillChip key={t} label={t} />
                      )
                    )}
                  </div>
                </div>
                <div className="relative flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#0b1224] to-[#1a1030] p-6">
                  <span
                    className="pointer-events-none absolute text-[120px] font-bold text-white/[0.04]"
                    aria-hidden
                  >
                    01
                  </span>
                  <div className="phone-float relative z-10 w-[200px]">
                    <Image
                      src="/images/smartdine-phone.svg"
                      alt="SmartDine app mockup"
                      width={320}
                      height={640}
                      className="h-auto w-full"
                    />
                  </div>
                  <div className="relative z-10 rounded-lg border border-white/10 bg-white p-2 text-center text-[10px] text-black">
                    <p className="font-semibold">Scan to preview</p>
                    <p className="mt-1 text-text-muted">iOS · Android</p>
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
