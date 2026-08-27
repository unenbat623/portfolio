"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/lib/lang";
import { nav, profile, ui } from "@/lib/content";
import {
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
  XIcon,
} from "./ui/Icons";

const socialLinks = [
  { key: "github", href: profile.socials.github, Icon: GithubIcon, label: "GitHub" },
  { key: "x", href: profile.socials.x, Icon: XIcon, label: "X" },
  { key: "linkedin", href: profile.socials.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
  { key: "facebook", href: profile.socials.facebook, Icon: FacebookIcon, label: "Facebook" },
  { key: "instagram", href: profile.socials.instagram, Icon: InstagramIcon, label: "Instagram" },
].filter((s) => Boolean(s.href));

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-[var(--strip-h)] z-[1000] transition-colors duration-300 ${
          scrolled
            ? "border-b border-[var(--color-line)] bg-black/85 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="container-x flex h-[68px] items-center justify-between gap-6">
          <a
            href="#top"
            className="tap shrink-0 font-display text-[17px] font-semibold tracking-tight whitespace-nowrap text-[var(--color-fg)] sm:text-[19px]"
          >
            {profile.brand}
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-[15px] transition-colors ${
                  active === item.id
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
                }`}
              >
                {t(item.label)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.14em]">
              {(["en", "mn"] as const).map((code, i) => (
                <span key={code} className="flex items-center gap-1.5">
                  {i > 0 && <span className="text-[var(--color-fg-faint)]">/</span>}
                  <button
                    type="button"
                    onClick={() => setLang(code)}
                    aria-pressed={lang === code}
                    className={`tap-icon uppercase transition-colors ${
                      lang === code
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--color-fg-faint)] hover:text-[var(--color-fg)]"
                    }`}
                  >
                    {code}
                  </button>
                </span>
              ))}
            </div>

            <div className="hidden items-center gap-3.5 sm:flex">
              {socialLinks.map(({ key, href, Icon, label }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="tap-icon text-[var(--color-fg-dim)] transition-colors hover:text-[var(--color-accent)]"
                >
                  <Icon className="h-[17px] w-[17px]" />
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? t(ui.close) : t(ui.menu)}
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center rounded-md border border-[var(--color-line-strong)] text-[var(--color-fg)] lg:hidden"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 block h-px w-4 bg-current transition-all duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0.5"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-4 bg-current transition-all duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-2.5"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="container-x flex h-full flex-col justify-center gap-1 overflow-y-auto py-24">
              {nav.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.045, duration: 0.4 }}
                  className="flex items-baseline gap-4 border-b border-[var(--color-line)] py-4 font-display text-3xl font-medium tracking-tight"
                >
                  <span className="font-mono text-xs text-[var(--color-accent-deep)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {t(item.label)}
                </motion.a>
              ))}

              <div className="mt-8 flex items-center gap-2">
                {socialLinks.map(({ key, href, Icon, label }) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="rounded-lg border border-[var(--color-line-strong)] p-3 text-[var(--color-fg-dim)]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
