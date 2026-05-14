"use client";

import { useCallback, useEffect, useRef, useState } from "react";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useCountUp(target: number, duration = 1200) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  const runInstant = useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    setCount(target);
  }, [target]);

  const start = useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    if (prefersReducedMotion()) {
      setCount(target);
      return;
    }
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      setCount(Math.round(target * eased));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [target, duration]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (prefersReducedMotion()) {
            runInstant();
            return;
          }
          start();
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -12% 0px",
        threshold: [0, 0.05, 0.1, 0.15],
      }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [start, runInstant]);

  return { count, ref };
}
