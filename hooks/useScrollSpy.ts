"use client";

import { useEffect, useState } from "react";

/**
 * Scroll-spy: whichever section's top is at or above (scrollY + offset) wins.
 * Single scroll listener — stable and easy to reason about vs mixed IO + scroll.
 */
export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "home");

  useEffect(() => {
    const tick = () => {
      const y = window.scrollY + offset;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= y + 1) current = id;
      }
      setActiveId(current);
    };

    tick();
    window.addEventListener("scroll", tick, { passive: true });
    window.addEventListener("resize", tick, { passive: true });
    return () => {
      window.removeEventListener("scroll", tick);
      window.removeEventListener("resize", tick);
    };
  }, [sectionIds, offset]);

  return activeId;
}
