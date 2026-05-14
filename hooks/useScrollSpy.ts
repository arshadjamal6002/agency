"use client";

import { useEffect, useState } from "react";

/**
 * Highlights the nav section whose element is closest to the top offset while scrolling.
 * Uses IntersectionObserver per section with a narrow "activation band" at the top.
 */
export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "home");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const ratios = new Map<string, number>();

    const pickActive = () => {
      let bestId = sectionIds[0];
      let best = -1;
      ratios.forEach((ratio, id) => {
        if (ratio > best) {
          best = ratio;
          bestId = id;
        }
      });
      if (best > 0) setActiveId(bestId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).id;
          if (entry.isIntersecting) {
            ratios.set(id, entry.intersectionRatio);
          } else {
            ratios.set(id, 0);
          }
        });
        pickActive();
      },
      {
        root: null,
        rootMargin: `-${offset}px 0px -55% 0px`,
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));

    const onScroll = () => {
      let current = sectionIds[0];
      const y = window.scrollY + offset + 1;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
}
