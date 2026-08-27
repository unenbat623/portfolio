"use client";

import { useMemo, useState } from "react";
import { work } from "@/lib/content";
import { useLang } from "@/lib/lang";
import Reveal from "./ui/Reveal";
import { Eyebrow, SectionTitle } from "./ui/SectionHeading";
import { ArrowUpRight, GithubIcon } from "./ui/Icons";

export default function Work() {
  const { t } = useLang();
  const [filter, setFilter] = useState("all");
  const [expanded, setExpanded] = useState(false);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? work.items
        : work.items.filter((p) => p.category === filter),
    [filter],
  );

  // Featured first while collapsed, everything once expanded.
  const visible = expanded
    ? filtered
    : filtered.filter((p) => p.featured).length
      ? filtered.filter((p) => p.featured)
      : filtered.slice(0, 6);

  const hiddenCount = filtered.length - visible.length;

  return (
    <section id="work" className="section-y container-x scroll-mt-28">
      <Eyebrow index="04" label={t(work.eyebrow)} />
      <div className="mt-6 max-w-[32rem]">
        <SectionTitle>{t(work.title)}</SectionTitle>
      </div>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-[34rem] text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
          {t(work.intro)}
        </p>
      </Reveal>

      <Reveal delay={0.14}>
        <div className="mt-9 flex flex-wrap gap-2">
          {work.filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => {
                setFilter(f.id);
                setExpanded(false);
              }}
              aria-pressed={filter === f.id}
              className={`tap rounded-full border px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                filter === f.id
                  ? "border-[var(--color-accent)] text-[var(--color-accent)]"
                  : "border-[var(--color-line-strong)] text-[var(--color-fg-dim)] hover:text-[var(--color-fg)]"
              }`}
            >
              {t(f.label)}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <Reveal key={project.name} delay={Math.min(i, 5) * 0.06} className="h-full">
            <article className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-[var(--color-line)] bg-[var(--color-surface)] transition-colors duration-500 hover:border-[var(--color-line-bright)]">
              <div className="relative aspect-16/10 overflow-hidden border-b border-[var(--color-line)] bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
                />
                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(0,0,0,0.55))]" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-fg-faint)]">
                  {t(project.year)}
                </span>

                <h3 className="mt-3 font-display text-[19px] font-semibold leading-snug tracking-tight">
                  {project.name}
                </h3>

                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[var(--color-fg-muted)]">
                  {t(project.description)}
                </p>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 5).map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-[var(--color-line)] px-2.5 py-1 font-mono text-[10px] text-[var(--color-fg-dim)]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="tap inline-flex items-center gap-1.5 rounded-full border border-[var(--color-line-strong)] px-4 py-2 text-[13px] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                    >
                      {t(work.cta)}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="rounded-full border border-[var(--color-line)] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-fg-faint)]">
                      {t(work.soon)}
                    </span>
                  )}

                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="tap inline-flex items-center gap-1.5 rounded-full border border-[var(--color-line-strong)] px-4 py-2 text-[13px] text-[var(--color-fg-dim)] transition-colors hover:border-[var(--color-fg-dim)] hover:text-[var(--color-fg)]"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      {t(work.repoCta)}
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {(hiddenCount > 0 || expanded) && (
        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="tap inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-fg-dim)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              {expanded ? t(work.showLess) : `${t(work.showAll)} (${hiddenCount})`}
              <span aria-hidden>{expanded ? "↑" : "↓"}</span>
            </button>
          </div>
        </Reveal>
      )}
    </section>
  );
}
