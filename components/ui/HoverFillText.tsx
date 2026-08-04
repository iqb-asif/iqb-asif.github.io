"use client";

export function HoverFillText({
  text,
  className = "",
  colors = ["var(--accent-blue)", "var(--accent-red)", "var(--accent-amber)"],
}: {
  text: string;
  className?: string;
  colors?: string[];
}) {
  return (
    <span className={className}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className="hover-fill-letter"
          style={{ "--hf-color": colors[i % colors.length] } as React.CSSProperties}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
      <style jsx global>{`
        .hover-fill-letter {
          display: inline-block;
          color: inherit;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.25s ease;
        }
        .hover-fill-letter:hover {
          color: var(--hf-color);
          transform: translateY(-0.05em);
        }
      `}</style>
    </span>
  );
}
