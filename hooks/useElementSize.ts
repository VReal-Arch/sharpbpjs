"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Measures an element's pixel size via ResizeObserver and always returns a
 * usable {width, height}, starting from `fallback` so charts render
 * immediately instead of staying blank while waiting for the first
 * ResizeObserver callback (a common issue with recharts' ResponsiveContainer
 * inside CSS Grid / React Strict Mode).
 */
export function useElementSize<T extends HTMLElement>(fallback: {
  width: number;
  height: number;
}) {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState(fallback);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measure = () => {
      const { width, height } = el.getBoundingClientRect();
      if (width > 0 && height > 0) {
        setSize((prev) =>
          prev.width === width && prev.height === height ? prev : { width, height }
        );
      }
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return { ref, width: size.width, height: size.height };
}
