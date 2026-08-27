import Reveal from "./Reveal";

export function Eyebrow({ index, label }: { index?: string; label: string }) {
  return (
    <Reveal>
      <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em]">
        {index && <span className="text-[var(--color-fg-dim)]">{index}</span>}
        {index && <span className="text-[var(--color-fg-faint)]">/</span>}
        <span className="text-[var(--color-fg-dim)]">{label}</span>
      </div>
    </Reveal>
  );
}

export function SectionTitle({
  children,
  className = "",
  delay = 0.05,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <h2
        className={`font-display text-[clamp(2.2rem,5.2vw,3.9rem)] font-semibold leading-[1.03] tracking-[-0.025em] text-balance ${className}`}
      >
        {children}
      </h2>
    </Reveal>
  );
}
