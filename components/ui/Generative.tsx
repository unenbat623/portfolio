/**
 * Deterministic green line-art used as post thumbnails, so the section reads
 * like the rest of the site without shipping bitmap assets.
 */
export default function Generative({
  variant,
  className = "",
}: {
  variant: number;
  className?: string;
}) {
  const stroke = "rgba(0,255,65,0.65)";
  const faint = "rgba(0,255,65,0.25)";

  const shapes = [
    // Waveform rings
    <g key="a">
      {Array.from({ length: 7 }, (_, i) => (
        <ellipse
          key={i}
          cx={30 + i * 23}
          cy={60}
          rx={9 + (i % 3) * 4}
          ry={34 - Math.abs(3 - i) * 7}
          fill="none"
          stroke={i % 2 ? stroke : faint}
        />
      ))}
      <line x1="8" y1="60" x2="192" y2="60" stroke={faint} />
    </g>,
    // Circuit node
    <g key="b">
      <rect x="78" y="42" width="44" height="36" fill="none" stroke={stroke} />
      <rect x="88" y="52" width="24" height="16" fill="none" stroke={faint} />
      {Array.from({ length: 5 }, (_, i) => (
        <g key={i}>
          <line x1="78" y1={48 + i * 7} x2="34" y2={30 + i * 15} stroke={faint} />
          <line x1="122" y1={48 + i * 7} x2="166" y2={30 + i * 15} stroke={faint} />
          <circle cx="34" cy={30 + i * 15} r="2.5" fill={stroke} />
          <circle cx="166" cy={30 + i * 15} r="2.5" fill={stroke} />
        </g>
      ))}
    </g>,
    // Orbital ring
    <g key="c">
      <ellipse cx="100" cy="60" rx="66" ry="22" fill="none" stroke={stroke} />
      <ellipse cx="100" cy="60" rx="46" ry="14" fill="none" stroke={faint} />
      <ellipse cx="100" cy="60" rx="80" ry="30" fill="none" stroke={faint} />
      {Array.from({ length: 16 }, (_, i) => {
        const a = (i / 16) * Math.PI * 2;
        // Rounded so server and client serialise the same string
        return (
          <circle
            key={i}
            cx={(100 + Math.cos(a) * 66).toFixed(2)}
            cy={(60 + Math.sin(a) * 22).toFixed(2)}
            r={1.8}
            fill={stroke}
          />
        );
      })}
    </g>,
  ];

  return (
    <svg viewBox="0 0 200 120" className={className} aria-hidden>
      <rect width="200" height="120" fill="#000" />
      {shapes[variant % shapes.length]}
    </svg>
  );
}
