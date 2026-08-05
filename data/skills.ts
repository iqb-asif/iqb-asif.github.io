export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  { category: "Programming", skills: ["Python", "VBA", "SQL", "Power Query", "Git", "Github"] },
  { category: "Databases", skills: ["PostgreSQL"] },
  { category: "Platforms & BI", skills: ["Power BI", "Advanced Excel", "Solovis", "Ace MF NXT"] },
  {
    category: "Automation & Data Eng.",
    skills: ["ETL", "Data Validation","Workflow Automation", "Workflow Design", "Data Validation", "Reporting Automation", "Process Optimisation"],
  },
  {
    category: "Investment Analytics",
    skills: [
      "Portfolio Performance",
      "Performance Measurement",
      "Benchmark Analytics",
      "Performance Attribution",
      "Risk Analytics",
      "Asset Allocation",
      "Investment Reporting",
      "Economic Assumptions",
    ],
  },
{
    category: "Domain",
    skills: [
      "UK/Ireland Pension Schemes",
      "DB/DC Pension Schemes",
      "Private Markets",
"Wealth Management",
    "Investment Consulting",
    ],
  },
];
