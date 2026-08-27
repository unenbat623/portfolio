"use client";

import { education } from "@/lib/content";
import { useLang } from "@/lib/lang";
import Reveal from "./ui/Reveal";
import { Eyebrow, SectionTitle } from "./ui/SectionHeading";

export default function Education() {
  const { t } = useLang();

  return (
    <section id="education" className="section-y container-x scroll-mt-28">
      <Eyebrow index="05" label={t(education.eyebrow)} />
      <div className="mt-6 max-w-[30rem]">
        <SectionTitle>{t(education.title)}</SectionTitle>
      </div>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-[34rem] text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
          {t(education.intro)}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {education.items.map((item, i) => (
          <Reveal key={i} delay={i * 0.08} className="h-full">
            <article className="flex h-full flex-col rounded-[14px] border border-[var(--color-line)] bg-[var(--color-surface)] p-7">
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-fg-faint)]">
                  {t(item.period)}
                </span>
                <span className="rounded-full border border-[rgba(0,255,65,0.28)] px-3 py-1 font-mono text-[10.5px] text-[var(--color-accent)]">
                  {t(education.gradeLabel)} · {t(item.grade)}
                </span>
              </div>

              <h3 className="mt-6 font-display text-[21px] font-semibold leading-snug tracking-tight text-balance">
                {t(item.school)}
              </h3>
              <p className="mt-1.5 text-[14px] text-[var(--color-accent-soft)]">
                {t(item.degree)}
              </p>
              <p className="mt-4 text-[14.5px] leading-relaxed text-[var(--color-fg-muted)]">
                {t(item.body)}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
