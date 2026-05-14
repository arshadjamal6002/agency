"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects, projectsTechChips } from "@/lib/data";
import type { ProjectItem } from "@/lib/types";
import { PillChip } from "@/components/ui/PillChip";

export function Projects() {
  const [selected, setSelected] = useState<ProjectItem | null>(null);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="bg-bg-main pb-24 pt-8">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-text-muted">
          Tech stack
        </p>
        <div className="flex gap-2 overflow-x-auto pb-6">
          {projectsTechChips.map((t) => (
            <PillChip key={t} label={t} />
          ))}
        </div>

        <h2 className="text-3xl font-bold text-white md:text-[32px]">
          Featured Projects
        </h2>

        <div className="relative mt-10">
          <button
            type="button"
            className="absolute left-0 top-1/2 z-10 hidden -translate-x-2 -translate-y-1/2 rounded-full border border-[var(--border-default)] bg-bg-card p-3 text-white transition hover:border-[var(--border-hover)] lg:flex"
            aria-label="Previous slide"
            onClick={() => swiper?.slidePrev()}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-2 rounded-full border border-[var(--border-default)] bg-bg-card p-3 text-white transition hover:border-[var(--border-hover)] lg:flex"
            aria-label="Next slide"
            onClick={() => swiper?.slideNext()}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <Swiper
            modules={[Pagination]}
            centeredSlides
            slidesPerView={1.15}
            spaceBetween={16}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 20 },
              1280: { slidesPerView: 3, spaceBetween: 24 },
            }}
            onSwiper={setSwiper}
            className="!pb-12"
          >
            {projects.map((p) => (
              <SwiperSlide key={p.id}>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelected(p)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelected(p);
                    }
                  }}
                  className="project-card group relative w-full cursor-pointer overflow-hidden rounded-[14px] border border-[var(--border-default)] bg-bg-card text-left transition hover:border-[var(--border-hover)]"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-white/90 backdrop-blur-sm">
                      {p.category}
                    </span>
                    <div className="overlay">
                      <span className="rounded-full bg-[var(--purple)] px-5 py-2 text-sm font-medium text-white">
                        VIEW PROJECT →
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3 p-5">
                    <h3 className="text-lg font-bold uppercase tracking-wide text-white">
                      {p.title}
                    </h3>
                    <p className="text-sm text-text-secondary">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.chips.map((c) => (
                        <PillChip key={c} label={c} />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <AnimatePresence initial={false}>
          {selected && (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0, 0, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-10 space-y-8 rounded-[14px] border border-[var(--border-default)] bg-bg-card p-6">
                <div className="grid gap-4 md:grid-cols-3">
                  <DetailCard
                    title="PROBLEM"
                    tone="bg-rose-950/40 border-rose-500/20"
                    items={selected.problem}
                  />
                  <DetailCard
                    title="SOLUTION"
                    tone="bg-slate-950/50 border-blue-500/20"
                    items={selected.solution}
                  />
                  <DetailCard
                    title="OUTCOME"
                    tone="bg-emerald-950/30 border-emerald-500/20"
                    items={selected.outcome}
                  />
                </div>

                {selected.techStack && selected.techStack.length > 0 && (
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white">
                      Tech stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selected.techStack.map((t) => (
                        <PillChip key={t} label={t} />
                      ))}
                    </div>
                  </div>
                )}

                {selected.visualOverviewImage && (
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white">
                      Visual overview
                    </p>
                    <div className="overflow-hidden rounded-xl border border-[var(--border-default)] bg-black/40 p-3">
                      <div className="group/prev relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-white/10">
                        <Image
                          src={selected.visualOverviewImage}
                          alt={`${selected.title} preview`}
                          fill
                          className="object-cover transition duration-300 group-hover/prev:scale-[1.03]"
                          sizes="(max-width:768px) 100vw, 1200px"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#contact"
                    className="inline-flex rounded-full bg-[var(--purple)] px-6 py-3 text-sm font-medium text-white hover:bg-[#7c5dff]"
                  >
                    Start a Project →
                  </Link>
                  <a
                    href={selected.liveUrl ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border-default)] px-6 py-3 text-sm font-medium text-white hover:border-white/30"
                  >
                    Live Site →
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-12 flex justify-center">
          <Link
            href="#contact"
            className="rounded-full bg-[var(--purple)] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#7c5dff]"
          >
            Book a Free Consultation →
          </Link>
        </div>
      </div>
    </div>
  );
}

function DetailCard({
  title,
  items,
  tone,
}: {
  title: string;
  items?: string[];
  tone: string;
}) {
  if (!items?.length) return null;
  return (
    <div className={`rounded-xl border p-4 ${tone}`}>
      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-white/90">
        {title}
      </p>
      <ul className="list-disc space-y-2 pl-4 text-sm text-text-secondary">
        {items.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </div>
  );
}
