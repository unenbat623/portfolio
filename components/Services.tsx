"use client";

import { hero, services } from "@/lib/content";
import { useLang } from "@/lib/lang";
import Reveal from "./ui/Reveal";
import { Eyebrow, SectionTitle } from "./ui/SectionHeading";
import { ArrowRight } from "./ui/Icons";

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="section-y container-x scroll-mt-28">
      <Eyebrow index="01" label={t(services.eyebrow)} />

      {/* Title left, pitch + chips + CTA right */}
      <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
        <SectionTitle className="self-end">{t(services.title)}</SectionTitle>

        <div className="md:pt-1">
          <Reveal delay={0.08}>
            <p className="max-w-[30rem] text-[15px] leading-relaxed text-[var(--color-fg-muted)] md:text-base">
              {t(services.intro)}
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {services.meta.map((m, i) => (
                <li
                  key={i}
                  className="rounded-full border border-[var(--color-line-strong)] px-3.5 py-1.5 font-mono text-[11px] text-[var(--color-accent-soft)]"
                >
                  {t(m)}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-fg)] px-6 py-3 text-[15px] font-medium text-black transition-opacity hover:opacity-85"
            >
              {t(hero.ctaPrimary)}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {services.items.map((item, i) => (
          <Reveal key={i} delay={i * 0.08} className="h-full">
            <article className="group flex h-full flex-col rounded-[14px] border border-[var(--color-line)] bg-[var(--color-surface)] p-7 transition-colors duration-500 hover:border-[var(--color-line-bright)]">
              <div className="flex items-start justify-between">
                <span className="text-[var(--color-accent)]" aria-hidden>
                  <ServiceGlyph index={i} />
                </span>
                <span className="font-mono text-[11px] text-[var(--color-fg-faint)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-8 font-display text-[22px] font-semibold leading-snug tracking-tight text-balance">
                {t(item.title)}
              </h3>

              <p className="mt-4 flex-1 text-[14.5px] leading-relaxed text-[var(--color-fg-muted)]">
                {t(item.body)}
              </p>

              <ul className="mt-7 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-[var(--color-line)] px-2.5 py-1 font-mono text-[10.5px] text-[var(--color-fg-dim)]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="tap mt-7 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-accent)] transition-opacity hover:opacity-75"
              >
                {t(services.cta)}
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/** Small mono glyph per card, in place of an icon set. */
function ServiceGlyph({ index }: { index: number }) {
  const glyphs = ["◱", "◨", "◈"];
  return <span className="text-[18px] leading-none">{glyphs[index % glyphs.length]}</span>;
}
