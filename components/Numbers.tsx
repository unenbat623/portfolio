"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { numbers } from "@/lib/content";
import { useLang } from "@/lib/lang";
import Reveal from "./ui/Reveal";
import { Eyebrow, SectionTitle } from "./ui/SectionHeading";

/** Counts up once the tile scrolls into view. */
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }

    const duration = 1400;
    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export default function Numbers() {
  const { t } = useLang();

  return (
    <section id="numbers" className="section-y container-x scroll-mt-28">
      <Eyebrow index="02" label={t(numbers.eyebrow)} />
      <div className="mt-6">
        <SectionTitle>{t(numbers.title)}</SectionTitle>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-12 overflow-hidden rounded-[14px] border border-[var(--color-line)]">
          <div className="grid grid-cols-2 gap-px bg-[var(--color-line)] md:grid-cols-4">
            {numbers.items.map((item, i) => (
              <div key={i} className="bg-black p-6 md:p-7">
                <div className="font-display text-[clamp(1.9rem,3.4vw,2.6rem)] font-semibold tracking-tight">
                  <Counter value={item.value} suffix={item.suffix} />
                </div>
                <div className="mt-3 flex items-start gap-2">
                  <span
                    aria-hidden
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                  />
                  <span className="text-[13.5px] leading-snug text-[var(--color-fg-muted)]">
                    {t(item.label)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.14}>
        <p className="mt-6 font-mono text-[11px] tracking-[0.1em] text-[var(--color-fg-faint)]">
          {t(numbers.footnote)}
        </p>
      </Reveal>
    </section>
  );
}
