"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { hero, profile } from "@/lib/content";
import { useLang } from "@/lib/lang";
import { ArrowUpRight } from "./ui/Icons";

const MatrixPortrait = dynamic(() => import("./webgl/MatrixPortrait"), {
  ssr: false,
});

export default function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % hero.builds.length),
      3200,
    );
    return () => window.clearInterval(id);
  }, []);

  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-[8.5rem] pb-16 sm:pt-[9.5rem] sm:pb-20 lg:pt-[11rem] lg:pb-32"
    >
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-70" />

      {/* Portrait bleeds off the right edge */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block">
        <MatrixPortrait src={profile.photo} />
      </div>

      <div className="container-x relative">
        <div className="max-w-[46rem]">
          <motion.p {...fade(0)} className="text-lg text-[var(--color-fg-muted)] md:text-xl">
            {t(hero.greeting)}{" "}
            <span className="text-[var(--color-accent)]">{t(profile.name)}</span>
          </motion.p>

          <motion.h1
            {...fade(0.07)}
            className="mt-5 font-display text-[clamp(2.4rem,6.2vw,4.6rem)] font-semibold leading-[1.02] tracking-[-0.025em] text-balance"
          >
            {t(hero.subtitle)}
          </motion.h1>

          {/* I BUILD ___ */}
          <motion.div
            {...fade(0.14)}
            className="mt-8 flex flex-wrap items-baseline gap-x-3 font-mono text-[13px] uppercase tracking-[0.18em]"
          >
            <span className="text-[var(--color-fg-dim)]">{t(hero.buildsPrefix)}</span>
            <span className="relative inline-flex h-5 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={reduce ? false : { y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="block text-[var(--color-accent)]"
                >
                  {t(hero.builds[index])}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.p
            {...fade(0.2)}
            className="mt-7 max-w-[34rem] text-[15px] leading-relaxed text-[var(--color-fg-muted)] md:text-base xl:max-w-[30rem]"
          >
            {t(hero.description)}
          </motion.p>

          <motion.div
          {...fade(0.27)}
          className="mt-10 flex flex-col items-stretch gap-3 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-center"
        >
            <a
              href="#contact"
              className="rounded-full bg-[var(--color-fg)] px-6 py-3.5 text-center text-[15px] font-medium text-black transition-opacity hover:opacity-85"
            >
              {t(hero.ctaPrimary)}
            </a>
            <a
              href="#work"
              className="rounded-full border border-[var(--color-line-strong)] px-6 py-3.5 text-center text-[15px] font-medium text-[var(--color-fg)] transition-colors hover:border-[var(--color-fg-dim)]"
            >
              {t(hero.ctaSecondary)}
            </a>
            <a
              href={profile.cv}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(0,255,65,0.32)] px-5 py-3.5 font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--color-accent)] transition-colors hover:bg-[rgba(0,255,65,0.07)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              {t(hero.ctaTertiary)}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating code snippet, tucked between the copy and the portrait */}
      <motion.pre
        {...fade(0.4)}
        aria-hidden
        className="pointer-events-none absolute bottom-[24%] left-[52%] hidden max-w-[22rem] font-mono text-[13px] leading-[1.9] text-[rgba(0,255,65,0.62)] xl:block"
      >
        {hero.snippet.map((line, i) => (
          <span key={i} className="block whitespace-pre">
            {line}
            {i === hero.snippet.length - 1 && (
              <span className="caret ml-1 inline-block h-[1em] w-[0.5em] translate-y-[0.12em] bg-[var(--color-accent)]" />
            )}
          </span>
        ))}
      </motion.pre>
    </section>
  );
}
