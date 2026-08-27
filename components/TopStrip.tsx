"use client";

import { marquee } from "@/lib/content";
import { useLang } from "@/lib/lang";

/** Site-wide availability strip pinned above the header. */
export default function TopStrip() {
  const { t } = useLang();
  const items = marquee.map(t);

  return (
    <div className="fixed inset-x-0 top-0 z-[1001] h-[var(--strip-h)] overflow-hidden border-b border-[var(--color-line)] bg-black">
      <div className="marquee-track h-full items-center">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex h-full shrink-0 items-center" aria-hidden={copy === 1}>
            {items.map((text, i) => (
              <span key={`${copy}-${i}`} className="flex items-center">
                <span className="whitespace-nowrap px-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  {i === 0 && <span className="mr-2">●</span>}
                  {text}
                </span>
                <span className="text-[var(--color-accent-deep)]" aria-hidden>
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
