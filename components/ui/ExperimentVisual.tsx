"use client";

import { motion } from "framer-motion";

export function ExperimentVisual({
  type,
  accent,
}: {
  type: string;
  accent: string;
}) {
  switch (type) {
    case "database":
      return <Database accent={accent} />;

    case "graph":
      return <Graph accent={accent} />;

    case "flow":
      return <Flow accent={accent} />;

    case "nodes":
      return <Nodes accent={accent} />;

    default:
      return <Network accent={accent} />;
  }
}

function Network({ accent }: { accent: string }) {
  return (
    <div className="relative h-full w-full">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-8, 8, -8],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-2 w-2 rounded-full"
          style={{
            background: accent,
            left: `${12 + i * 8}%`,
            top: `${15 + (i % 5) * 15}%`,
          }}
        />
      ))}

      <svg className="absolute inset-0 h-full w-full">
        {[...Array(9)].map((_, i) => (
          <line
            key={i}
            x1={`${15 + i * 8}%`}
            y1={`${20 + (i % 5) * 15}%`}
            x2={`${23 + i * 8}%`}
            y2={`${35 + ((i + 1) % 5) * 15}%`}
            stroke={accent}
            opacity={0.18}
          />
        ))}
      </svg>
    </div>
  );
}

function Graph({ accent }: { accent: string }) {
  return (
    <div className="flex h-full items-end gap-5 px-12 pb-12">
      {[32, 55, 40, 78, 62, 95].map((h, i) => (
        <motion.div
          key={i}
          animate={{
            height: [`${h - 8}%`, `${h}%`, `${h - 8}%`],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            delay: i * 0.15,
          }}
          className="flex-1 rounded-t-md"
          style={{
            background: accent,
          }}
        />
      ))}
    </div>
  );
}

function Flow({ accent }: { accent: string }) {
  return (
    <div className="flex h-full items-center justify-center gap-6">
      {["Import", "Validate", "Analyse", "Report"].map((step, i) => (
        <div key={step} className="flex items-center gap-6">
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="rounded-md border border-border bg-bg px-5 py-3 text-sm"
          >
            {step}
          </motion.div>

          {i !== 3 && (
            <motion.div
              animate={{
                x: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              style={{
                color: accent,
              }}
            >
              →
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}

function Database({ accent }: { accent: string }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      {[1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          animate={{
            y: [-3, 3, -3],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            delay: i * 0.2,
          }}
          className="h-14 w-60 rounded-full border"
          style={{
            borderColor: accent,
          }}
        />
      ))}
    </div>
  );
}

function Nodes({ accent }: { accent: string }) {
  return (
    <div className="relative h-full w-full">
      {[...Array(7)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.25, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            delay: i * 0.2,
          }}
          className="absolute h-4 w-4 rounded-full"
          style={{
            background: accent,
            left: `${20 + i * 10}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
        />
      ))}
    </div>
  );
}