"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const stats = [
  { value: 500, suffix: "+", label: "Projects Deployed" },
  { value: 99.9, suffix: "%", label: "Uptime Guarantee", decimals: 1 },
  { value: 14, suffix: "", label: "Countries Served" },
  { value: 50, suffix: "M+", label: "Users Impacted" },
];

function useCountUp(end: number, duration: number, start: boolean, decimals = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let raf: number;

    function animate(ts: number) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * end).toFixed(decimals)));
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    }

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, start, decimals]);

  return count;
}

function StatItem({ value, suffix, label, decimals = 0, started }: {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
  started: boolean;
}) {
  const count = useCountUp(value, 2000, started, decimals);

  return (
    <div className="text-center">
      <div className="font-[var(--font-heading)] text-[40px] md:text-[64px] leading-[48px] md:leading-[72px] font-bold text-white tracking-tight">
        {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
        <span className="gradient-text">{suffix}</span>
      </div>
      <p className="mt-2 text-[var(--color-on-surface-variant)] font-[var(--font-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold uppercase">
        {label}
      </p>
    </div>
  );
}

export default function CounterSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 border-t border-b border-[var(--color-outline-variant)]">
      <div className="px-5 md:px-16 max-w-[1280px] mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatItem key={stat.label} {...stat} started={started} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
