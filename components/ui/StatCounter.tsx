"use client";

import { useEffect, useRef, useState } from "react";

export interface StatConfig {
  target: number;
  suffix: string;
  label: string;
}

function useCountUp(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

export function StatCounter({
  target,
  suffix,
  label,
  className,
  valueClassName,
  labelClassName,
}: StatConfig & {
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(target, 1800, active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Pad to the target's final digit count throughout the animation so the
  // rendered width never changes frame to frame (a mid-animation digit-count
  // increase, e.g. "9 999" -> "10 000", otherwise reflows the centered text
  // and triggers a browser scroll-anchoring adjustment during initial load).
  const formatted =
    target >= 1000
      ? `${String(Math.floor(count / 1000)).padStart(String(Math.floor(target / 1000)).length, "0")}\u00a0${String(count % 1000).padStart(3, "0")}${suffix}`
      : `${String(count).padStart(String(target).length, "0")}${suffix}`;

  return (
    <div ref={ref} className={className}>
      <div className={`tabular-nums ${valueClassName ?? ""}`}>{formatted}</div>
      <div className={labelClassName}>{label}</div>
    </div>
  );
}
