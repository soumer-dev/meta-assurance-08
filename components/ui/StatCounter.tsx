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

  const formatted =
    target >= 1000
      ? `${Math.floor(count / 1000)}\u00a0${String(count % 1000).padStart(3, "0")}${suffix}`
      : `${count}${suffix}`;

  return (
    <div ref={ref} className={className}>
      <div className={valueClassName}>{formatted}</div>
      <div className={labelClassName}>{label}</div>
    </div>
  );
}
