"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
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
          <div className="marquee-track gap-12 px-6">
            {track.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="whitespace-nowrap text-lg font-semibold text-white/45 transition-opacity hover:text-white/100"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
