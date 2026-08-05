"use client";

import React, { useEffect, useState } from "react";

export function FlipWords({
  words = ["automated", "reliable", "scalable"],
  durationSec = 4,
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
  // 1. Clone the first word and place it at the end to create a structural loop anchor
  const loopWords = [...words, words[0]];
  const N = words.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const wordDisplayTimeMs = (durationSec * 1000) / N;

  useEffect(() => {
    if (N <= 1) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, wordDisplayTimeMs);

    return () => clearInterval(timer);
  }, [N, wordDisplayTimeMs]);

  // 2. Intercept when it lands on the cloned item, snap back to index 0 instantly
  useEffect(() => {
    if (currentIndex === N) {
      const resetTimer = setTimeout(() => {
        setIsTransitioning(false); // Kill transition effect completely
        setCurrentIndex(0); // Snap back to the real first word
      }, 500); // Matches the duration-500 transition window below

      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex, N]);

  if (!words || N === 0) return null;

  return (
    <span 
      className={`inline-block align-middle overflow-hidden relative ${className}`}
      style={{ height: `${lineEm}em` }}
    >
      <span 
        className="block"
        style={{ 
          transform: `translateY(-${currentIndex * lineEm}em)`,
          // Turns transition completely off during the snap-back frame
          transition: isTransitioning ? "transform 500ms ease-in-out" : "none" 
        }}
      >
        {loopWords.map((w, i) => (
          <span 
            key={`${w}-${i}`} 
            className="block"
            style={{ height: `${lineEm}em` }}
          >
            <span 
              className="inline-block font-semibold"
              style={{ 
                lineHeight: `${lineEm}em`,
                color: colors[i % colors.length],
                borderBottom: underline ? "1.5px solid currentColor" : "none"
              }}
            >
              {w}
            </span>
          </span>
        ))}
      </span>
    </span>
  );
}
