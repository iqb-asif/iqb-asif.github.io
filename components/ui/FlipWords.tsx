"use client";

export function FlipWords({
  words = ["automated", "reliable", "scalable"],
  durationSec = 5.4,
  colors = ["var(--accent-blue)", "var(--accent-red)", "var(--accent-amber)"],
  lineEm = 1.3,
  underline = true,
  className = "",
}: {
  words?: string[];
  durationSec?: number;
  colors?: string[];
  lineEm?: number;
  underline?: boolean;
  className?: string;
}) {
  const N = words.length;
  const transW = 5;

  const keyframeRules = words
    .map((_, i) => {
      const prevIndex = (i - 1 + N) % N;
      const prevMargin = -(prevIndex * lineEm);
      const newMargin = -(i * lineEm);
      const segStart = (i / N) * 100;
      const transEnd = segStart + transW;
      const segEnd = ((i + 1) / N) * 100;
      return `
        ${segStart}% { margin-top: ${prevMargin}em; }
        ${transEnd}% { margin-top: ${newMargin}em; }
        ${segEnd}% { margin-top: ${newMargin}em; }
      `;
    })
    .join("\n");

  return (
    <span id="flip-root" className={`inline-block align-middle ${className}`}>
      <span id="flip">
        {words.map((w, i) => (
          <span key={w}>
            <span style={{ color: colors[i % colors.length] }}>{w}</span>
          </span>
        ))}
      </span>
      <style jsx>{`
        #flip-root {
          height: ${lineEm}em;
          overflow: hidden;
        }
        #flip > span {
          display: block;
        }
        #flip > span > span {
          display: inline-block;
          font-weight: 600;
          line-height: ${lineEm}em;
          border-bottom: ${underline ? "1.5px solid currentColor" : "none"};
        }
        #flip {
          animation: flipShow ${durationSec}s linear infinite;
        }
        @keyframes flipShow {
          ${keyframeRules}
        }
      `}</style>
    </span>
  );
}
