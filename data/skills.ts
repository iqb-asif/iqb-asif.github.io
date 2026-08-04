export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  { category: "Programming", skills: ["Python", "VBA", "SQL", "Power Query"] },
  { category: "Databases", skills: ["PostgreSQL"] },
  { category: "Platforms & BI", skills: ["Power BI", "Advanced Excel", "Solovis", "Ace MF NXT"] },
  {
    category: "Automation & Data Eng.",
    skills: ["ETL", "Workflow Automation", "Data Validation", "Reporting Automation", "Process Optimisation"],
  },
  {
    category: "Investment Analytics",
    skills: [
      "Portfolio Performance",
      "Benchmark Analytics",
      "Performance Attribution",
      "Risk Analytics",
      "Asset Allocation",
      "Investment Reporting",
      "Economic Assumptions",
    ],
  },
];
