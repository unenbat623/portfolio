"use client";

import { useState } from "react";
import { brief } from "@/lib/content";
import { useLang } from "@/lib/lang";
import Reveal from "./ui/Reveal";

export default function Brief() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(brief.content);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — the text is on screen and selectable anyway.
    }
  };

  return (
    <section id="brief" className="section-y container-x scroll-mt-28">
      <div className="grid gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-dim)]">
              {t(brief.eyebrow)}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,2.9rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-balance">
              {t(brief.title)}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[26rem] text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
              {t(brief.body)}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="min-w-0">
          <div className="overflow-hidden rounded-[14px] border border-[var(--color-line)] bg-[var(--color-surface)]">
            <div className="flex items-center justify-between border-b border-[var(--color-line)] px-5 py-3">
              <span className="font-mono text-[12px] text-[var(--color-fg-dim)]">
                {brief.filename}
              </span>
              <button
                type="button"
                onClick={copy}
                className="tap rounded-full border border-[var(--color-line-strong)] px-4 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-fg-dim)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                {copied ? t(brief.copied) : t(brief.copy)}
              </button>
            </div>
            <pre className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-[1.75] text-[var(--color-accent-soft)]">
              {brief.content}
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
