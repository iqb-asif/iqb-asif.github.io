"use client";

import { useTheme } from "@/lib/useTheme";

export function ThemeSwitch() {
  const { isDark, toggle } = useTheme();

  return (
    <label id="theme-switch" aria-label="Toggle theme">
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggle}
        aria-label="Toggle dark mode"
      />
      <style jsx>{`
        #theme-switch {
          display: inline-flex;
          cursor: pointer;
        }
        input[type="checkbox"] {
          --off: var(--border);
          --mid: var(--accent-blue);
          --on: #26272b;
          appearance: none;
          -webkit-appearance: none;
          margin: 0;
          width: 2.25em;
          height: 1.3em;
          font-size: 16px;
          background-color: var(--off);
          border-radius: 0.67em / 0.5em;
          position: relative;
          cursor: pointer;
          transition: background-color 0.45s cubic-bezier(0.6, 0, 0.4, 1);
          box-shadow: 0 0.05em 0.1em rgba(0, 0, 0, 0.06) inset;
        }
        input[type="checkbox"]:before {
          content: "";
          position: absolute;
          top: 0.125em;
          left: 0.125em;
          width: 1em;
          height: 0.75em;
          border-radius: 0.5em / 0.375em;
          background: #fff;
          box-shadow: 0 0.1em 0.15em rgba(0, 0, 0, 0.25);
          transition: left 0.45s cubic-bezier(0.6, 0, 0.4, 1), background-color 0.45s cubic-bezier(0.6, 0, 0.4, 1);
        }
        input[type="checkbox"]:checked {
          background-color: var(--on);
        }
        input[type="checkbox"]:checked:before {
          left: 1.125em;
        }
        input[type="checkbox"]:focus-visible {
          outline: 2px solid var(--accent-blue);
          outline-offset: 2px;
        }
      `}</style>
    </label>
  );
}
