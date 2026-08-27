"use client";

import { experience } from "@/lib/content";
import { useLang } from "@/lib/lang";
import Reveal from "./ui/Reveal";
import { Eyebrow, SectionTitle } from "./ui/SectionHeading";

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="section-y container-x scroll-mt-28">
      <Eyebrow index="03" label={t(experience.eyebrow)} />
      <div className="mt-6 max-w-[32rem]">
        <SectionTitle>{t(experience.title)}</SectionTitle>
      </div>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-[34rem] text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
          {t(experience.intro)}
        </p>
      </Reveal>

      <ol className="mt-14 border-t border-[var(--color-line)]">
        {experience.items.map((item, i) => (
          <Reveal key={item.company} delay={i * 0.06}>
            <li className="grid gap-5 border-b border-[var(--color-line)] py-8 md:grid-cols-12 md:gap-8 md:py-10">
              <div className="flex items-center gap-4 md:col-span-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[var(--color-line)] bg-[var(--color-surface)] p-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.logo}
                    alt={item.company}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </span>
                <div>
                  <h3 className="font-display text-[20px] font-semibold tracking-tight">
                    {item.company}
                  </h3>
                  <p className="mt-0.5 text-[14px] text-[var(--color-accent-soft)]">
                    {t(item.role)}
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-fg-faint)]">
                    {t(item.period)}
                  </p>
                </div>
              </div>

              <div className="md:col-span-8">
                <p className="text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
                  {t(item.body)}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-[var(--color-line)] px-2.5 py-1 font-mono text-[10.5px] text-[var(--color-fg-dim)]"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
