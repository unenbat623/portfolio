"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { contact, profile, ui } from "@/lib/content";
import { useLang } from "@/lib/lang";
import Reveal from "./ui/Reveal";
import CharRain from "./ui/CharRain";
import { ArrowUpRight } from "./ui/Icons";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type Status = "idle" | "sending" | "sent" | "error";

/** Builds a mailto: link carrying whatever the visitor already typed. */
function mailtoFrom(form: HTMLFormElement, to: string) {
  const data = new FormData(form);
  const subject = encodeURIComponent(String(data.get("subject") ?? ""));
  const body = encodeURIComponent(
    `${data.get("message") ?? ""}\n\n— ${data.get("from_name") ?? ""} (${data.get("from_email") ?? ""})`,
  );
  return `mailto:${to}?subject=${subject}&body=${body}`;
}

export default function Contact() {
  const { t } = useLang();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [fallbackHref, setFallbackHref] = useState("");
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked — the mailto button still works.
    }
  };

  const send = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) return;

    // Without keys the form falls back to opening the visitor's mail client.
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      window.location.href = mailtoFrom(formRef.current, profile.email);
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus("sent");
      formRef.current.reset();
    } catch {
      // The provider can fail on its own (a disconnected mailbox, a quota).
      // Never dead-end the visitor — hand them the same message as a mailto.
      setFallbackHref(mailtoFrom(formRef.current, profile.email));
      setStatus("error");
    }
  };

  const field =
    "w-full rounded-lg border border-[var(--color-line-strong)] bg-black/50 px-4 py-3 text-[15px] text-[var(--color-fg)] placeholder:text-[var(--color-fg-faint)] focus:border-[var(--color-accent)] focus:outline-none";

  return (
    <section id="contact" className="container-x scroll-mt-28 pb-[clamp(5rem,10vw,8rem)]">
      <Reveal>
        <div className="relative overflow-hidden rounded-[16px] border border-[rgba(0,255,65,0.22)] bg-[linear-gradient(180deg,rgba(0,255,65,0.06),transparent_55%)] px-6 py-16 md:px-12 md:py-20">
          <CharRain />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-dim)]">
                <span>07</span>{" "}
                <span className="text-[var(--color-fg-faint)]">/</span>{" "}
                {t(contact.eyebrow)}
              </p>

              <h2 className="mt-6 font-display text-[clamp(2rem,4.4vw,3.2rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-balance">
                {t(contact.title)}
              </h2>

              <p className="mt-6 max-w-[30rem] text-[15px] leading-relaxed text-[var(--color-fg-muted)] md:text-base">
                {t(contact.body)}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="rounded-full bg-[var(--color-fg)] px-5 py-3 text-[15px] font-medium text-black transition-opacity hover:opacity-85"
                >
                  {t(contact.cta)}
                </a>

                {profile.calendly && (
                  <a
                    href={profile.calendly}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] px-5 py-3 text-[15px] font-medium transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    {t(contact.ctaCall)}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}

                <button
                  type="button"
                  onClick={copyEmail}
                  className="rounded-full border border-[var(--color-line-strong)] px-5 py-3 font-mono text-[13px] text-[var(--color-fg-dim)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  {copied ? t(ui.copied) : profile.email}
                </button>
              </div>
            </div>

            <form ref={formRef} onSubmit={send} className="flex flex-col gap-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  name="from_name"
                  required
                  autoComplete="name"
                  placeholder={t(contact.form.name)}
                  className={field}
                />
                <input
                  name="from_email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={t(contact.form.email)}
                  className={field}
                />
              </div>
              <input
                name="subject"
                required
                placeholder={t(contact.form.subject)}
                className={field}
              />
              <textarea
                name="message"
                required
                rows={6}
                placeholder={t(contact.form.message)}
                className={`${field} resize-y`}
              />

              <div className="mt-2 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-[15px] font-medium text-black transition-opacity hover:opacity-85 disabled:opacity-60"
                >
                  {status === "sending"
                    ? t(contact.form.sending)
                    : t(contact.form.send)}
                </button>

                {status === "sent" && (
                  <span className="font-mono text-[12px] text-[var(--color-accent)]">
                    {t(contact.form.sent)}
                  </span>
                )}
                {status === "error" && (
                  <span className="font-mono text-[12px] text-[#ff6b6b]">
                    {t(contact.form.error)}{" "}
                    <a
                      href={fallbackHref}
                      className="underline underline-offset-2 hover:text-[var(--color-accent)]"
                    >
                      {t(contact.form.fallback)}
                    </a>
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
