"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faq } from "@/lib/content";
import { useLang } from "@/lib/lang";
import Reveal from "./ui/Reveal";
import { Eyebrow, SectionTitle } from "./ui/SectionHeading";

export default function Faq() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-y container-x scroll-mt-28">
      <Eyebrow index="06" label={t(faq.eyebrow)} />
      <div className="mt-6 max-w-[32rem]">
        <SectionTitle>{t(faq.title)}</SectionTitle>
      </div>

      <div className="mt-12 border-t border-[var(--color-line)]">
        {faq.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={i} delay={i * 0.05}>
              <div className="border-b border-[var(--color-line)]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-[18px] font-medium leading-snug tracking-tight md:text-[21px]">
                    {t(item.q)}
                  </span>
                  <span
                    aria-hidden
                    className={`shrink-0 text-[18px] leading-none text-[var(--color-accent)] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[46rem] pb-7 pr-10 text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
                        {t(item.a)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
