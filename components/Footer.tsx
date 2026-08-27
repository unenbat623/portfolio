"use client";

import { useState } from "react";
import { footer, footerExtra, nav, profile } from "@/lib/content";
import { useLang } from "@/lib/lang";
import {
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
  XIcon,
  ArrowUpRight,
} from "./ui/Icons";

const socials = [
  { key: "GitHub", href: profile.socials.github, Icon: GithubIcon },
  { key: "X", href: profile.socials.x, Icon: XIcon },
  { key: "LinkedIn", href: profile.socials.linkedin, Icon: LinkedinIcon },
  { key: "Facebook", href: profile.socials.facebook, Icon: FacebookIcon },
  { key: "Instagram", href: profile.socials.instagram, Icon: InstagramIcon },
].filter((s) => Boolean(s.href));

export default function Footer() {
  const { t } = useLang();
  const [subscribed, setSubscribed] = useState(false);
  const year = new Date().getFullYear();

  const half = Math.ceil(nav.length / 2);
  const navColumns = [nav.slice(0, half), nav.slice(half)];

  return (
    <footer className="border-t border-[var(--color-line)]">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Identity */}
          <div className="md:col-span-4">
            <div
              aria-hidden
              className="mb-6 grid w-fit grid-cols-4 gap-1"
            >
              {[1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1].map((on, i) => (
                <span
                  key={i}
                  className={`h-2.5 w-2.5 rounded-[2px] ${
                    on ? "bg-[var(--color-accent)]" : "bg-transparent"
                  }`}
                />
              ))}
            </div>
            <p className="font-display text-[26px] font-semibold tracking-tight">
              {t(profile.name)}
            </p>
            <p className="mt-1 text-[15px] text-[var(--color-fg-muted)]">
              {t(profile.role)}
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-fg-faint)]">
              {t(profile.location)}
            </p>
          </div>

          {/* Pages */}
          <div className="md:col-span-4">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-dim)]">
              {t(footer.pages)}
            </h3>
            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navColumns.map((column, ci) => (
                <ul key={ci} className="flex flex-col gap-2.5">
                  {column.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="tap text-[15px] text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-accent)]"
                      >
                        {t(item.label)}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="md:col-span-2">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-dim)]">
              {t(footerExtra.products)}
            </h3>
            <ul className="mt-5 flex flex-col gap-2.5">
              {footerExtra.productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer noopener"
                    className="tap inline-flex items-center gap-1 font-mono text-[12.5px] text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    {link.label}
                    {link.href.startsWith("http") && (
                      <ArrowUpRight className="h-3 w-3" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-2">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-dim)]">
              {t(footerExtra.socials)}
            </h3>
            <div className="mt-4 flex flex-wrap gap-1 sm:mt-5 sm:gap-4">
              {socials.map(({ key, href, Icon }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={key}
                  className="tap-icon text-[var(--color-fg-dim)] transition-colors hover:text-[var(--color-accent)]"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 border-t border-[var(--color-line)] pt-10">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-dim)]">
            {t(footerExtra.newsletter.label)}
          </h3>
          <p className="mt-4 max-w-[30rem] text-[15px] leading-relaxed text-[var(--color-fg-muted)]">
            {t(footerExtra.newsletter.body)}
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubscribed(true);
            }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <input
              type="email"
              required
              placeholder={footerExtra.newsletter.placeholder}
              className="w-full max-w-[22rem] rounded-full border border-[var(--color-line-strong)] bg-[var(--color-surface)] px-5 py-3 text-[15px] text-[var(--color-fg)] placeholder:text-[var(--color-fg-faint)] focus:border-[var(--color-accent)] focus:outline-none"
            />
            <button
              type="submit"
              className="tap rounded-full border border-[var(--color-line-strong)] px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-fg-dim)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              {subscribed
                ? t(footerExtra.newsletter.done)
                : t(footerExtra.newsletter.cta)}
            </button>
          </form>
          {/* Wire this form to your provider (Buttondown, ConvertKit, Resend…). */}
        </div>

        {/* Activity strip */}
        <div className="mt-14 border-t border-[var(--color-line)] pt-8">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-accent)]">
              <GithubIcon className="h-3.5 w-3.5" />
              {t(footerExtra.activity.label)}
            </span>
            <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" aria-hidden />
          </div>

          <dl className="mt-5 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-[var(--color-line)] bg-[var(--color-line)]">
            {(
              [
                [footerExtra.activity.total, footerExtra.activity.counts.total],
                [footerExtra.activity.month, footerExtra.activity.counts.month],
                [footerExtra.activity.today, footerExtra.activity.counts.today],
              ] as const
            ).map(([label, value], i) => (
              <div key={i} className="bg-black px-5 py-4">
                <dt className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-fg-faint)]">
                  {t(label)}
                </dt>
                <dd className="mt-1 font-display text-[26px] font-semibold tracking-tight">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Credits */}
        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--color-line)] pt-7 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-fg-faint)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {t(profile.name)} · {t(footer.rights)}
          </p>
          <p className="text-[var(--color-fg-dim)]">{t(footerExtra.credits)}</p>
        </div>
      </div>
    </footer>
  );
}
