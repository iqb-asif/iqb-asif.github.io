"use client";

export function HeroScene() {
  return (
    <div id="scene-container" className="relative mx-auto w-full max-w-[240px] aspect-[3/4]">
      <div id="sky" className="absolute inset-0" />

      {/* faint drifting horizon lines, restrained motion */}
      <div id="cloud-a" className="cloud" />
      <div id="cloud-b" className="cloud" />

      {/* single signal pulse orbiting quietly */}
      <div id="signal" />

      {/* skyline: thin ascending bars, single accent */}
      <div id="skyline">
        {[34, 50, 42, 64, 55, 74].map((h, i) => (
          <span key={i} className="bar" style={{ height: `${h}%` }} />
        ))}
      </div>

      {/* signal tower — echoes the Mizan node marker */}
      <div id="tower">
        <div id="tower-pole" />
        <div id="tower-box" />
      </div>

      <style jsx>{`
        #scene-container {
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--border);
          background: var(--surface);
        }
        #sky {
          background: linear-gradient(180deg, var(--surface) 0%, var(--bg) 100%);
        }
        .cloud {
          position: absolute;
          width: 46%;
          height: 1px;
          background: var(--border);
          opacity: 0.7;
        }
        #cloud-a {
          top: 18%;
          left: -20%;
          animation: driftA 16s linear infinite;
        }
        #cloud-b {
          top: 30%;
          left: -40%;
          width: 30%;
          animation: driftB 20s linear infinite;
          animation-delay: -8s;
        }
        @keyframes driftA {
          0% { transform: translateX(0); }
          100% { transform: translateX(320%); }
        }
        @keyframes driftB {
          0% { transform: translateX(0); }
          100% { transform: translateX(420%); }
        }

        #signal {
          position: absolute;
          top: 22%;
          left: 50%;
          width: 5px;
          height: 5px;
          margin-left: -2.5px;
          border-radius: 50%;
          background: var(--accent-blue);
          animation: orbit 8s linear infinite;
          opacity: 0.9;
        }
        @keyframes orbit {
          0% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(28px, 10px); opacity: 0.9; }
          50% { transform: translate(0, 22px); opacity: 0.3; }
          75% { transform: translate(-28px, 10px); opacity: 0.9; }
          100% { transform: translate(0, 0); opacity: 0.3; }
        }

        #skyline {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 38%;
          display: flex;
          align-items: flex-end;
          gap: 6%;
          padding: 0 12%;
        }
        .bar {
          flex: 1;
          background: var(--accent-blue);
          opacity: 0.16;
          border-radius: 1px 1px 0 0;
        }

        #tower {
          position: absolute;
          bottom: 26%;
          left: 50%;
          transform: translateX(-50%);
        }
        #tower-pole {
          width: 1px;
          height: 38px;
          background: var(--text-tertiary);
          margin: 0 auto;
        }
        #tower-box {
          position: absolute;
          top: -6px;
          left: 50%;
          transform: translate(-50%, -100%);
          width: 10px;
          height: 7px;
          border: 1px solid var(--accent-blue);
          border-radius: 1px;
        }

        @media (prefers-reduced-motion: reduce) {
          #cloud-a, #cloud-b, #signal {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
