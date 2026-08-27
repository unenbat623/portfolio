const GLYPHS = "01{}[]()<>/\\|+-*=%#$&?;:.,abcdefzXYZ";

/** Deterministic field of faint mono glyphs — decorative panel texture. */
export default function CharRain({ rows = 14, cols = 60 }: { rows?: number; cols?: number }) {
  // Seeded so server and client render the same characters.
  let seed = 20260827;
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };

  const lines = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () =>
      rand() > 0.45 ? GLYPHS[Math.floor(rand() * GLYPHS.length)] : " ",
    ).join(" "),
  );

  return (
    <div
      aria-hidden
      style={{
        maskImage:
          "radial-gradient(ellipse 55% 60% at 50% 50%, transparent 10%, #000 85%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 55% 60% at 50% 50%, transparent 10%, #000 85%)",
      }}
      className="pointer-events-none absolute inset-0 overflow-hidden select-none font-mono text-[13px] leading-[2.1] whitespace-pre text-[rgba(0,255,65,0.16)]"
    >
      {lines.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
    </div>
  );
}
