"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { BrandMark } from "@/components/ui/BrandMark";
import { brandLogos } from "@/lib/data";

export function Brands() {
  const track = [...brandLogos, ...brandLogos];

  return (
    <section className="bg-bg-main py-16">
      <AnimatedSection>
        <p className="mb-6 text-center text-[11px] font-medium uppercase tracking-[0.12em] text-text-muted">
          WORKS WITH
        </p>
        <div className="overflow-hidden">
          <div className="marquee-track items-center gap-5 px-4 sm:gap-6">
            {track.map((brand, i) => (
              <div
                key={`${brand.id}-${i}`}
                className="flex shrink-0 items-center gap-3.5 rounded-xl border border-[var(--border-default)] bg-bg-card px-5 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:border-[var(--border-hover)] hover:shadow-[var(--glow-purple)]"
              >
                <BrandMark id={brand.id} />
                <span className="whitespace-nowrap text-sm font-semibold tracking-tight text-white/80">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
