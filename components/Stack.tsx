"use client";

import { stack } from "@/lib/content";
import { useLang } from "@/lib/lang";
import Reveal from "./ui/Reveal";
import { Eyebrow, SectionTitle } from "./ui/SectionHeading";

export default function Stack() {
  const { t } = useLang();

  return (
    <section id="stack" className="section-y container-x scroll-mt-28">
      <Eyebrow label={t(stack.eyebrow)} />
      <div className="mt-6 max-w-[32rem]">
        <SectionTitle>{t(stack.title)}</SectionTitle>
      </div>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-[34rem] text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
          {t(stack.intro)}
        </p>
      </Reveal>

      <div className="mt-12 flex flex-col gap-10">
        {stack.groups.map((group, gi) => (
          <Reveal key={gi} delay={gi * 0.06}>
            <div className="grid gap-5 border-t border-[var(--color-line)] pt-6 md:grid-cols-12 md:gap-8">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-dim)] md:col-span-3 md:pt-2">
                {t(group.label)}
              </h3>
              <ul className="flex flex-wrap gap-2.5 md:col-span-9">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)] px-3.5 py-2 text-[14px] text-[var(--color-fg-muted)] transition-colors duration-300 hover:border-[var(--color-accent-deep)] hover:text-[var(--color-fg)]"
                  >
                    {item.logo && (
                      // Logos come from the old portfolio; some are remote, so
                      // a broken one just hides itself and leaves the label.
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.logo}
                        alt=""
                        loading="lazy"
                        className="h-4 w-4 shrink-0 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    )}
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
