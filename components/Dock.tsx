"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { ui } from "@/lib/content";

/**
 * Floating controls: back-to-top on the right, motion toggle on the left.
 * The motion toggle writes a class the WebGL layers watch, so viewers can
 * silence the animation without digging into OS settings.
 */
export default function Dock() {
  const { t } = useLang();
  const [shown, setShown] = useState(false);
  const [still, setStill] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("no-webgl", still);
  }, [still]);

  const button =
    "flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-black/70 text-[var(--color-fg-dim)] backdrop-blur transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]";

  return (
    <>
      <button
        type="button"
        onClick={() => setStill((v) => !v)}
        aria-pressed={still}
        aria-label={still ? "Resume background animation" : "Pause background animation"}
        className={`fixed bottom-6 left-6 z-50 ${button} ${
          still ? "text-[var(--color-accent)]" : ""
        }`}
      >
        <span className="text-[13px] leading-none">{still ? "▶" : "❚❚"}</span>
      </button>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label={t(ui.backToTop)}
        className={`fixed bottom-6 right-6 z-50 ${button} ${
          shown ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <span className="text-[15px] leading-none">↑</span>
      </button>
    </>
  );
}
