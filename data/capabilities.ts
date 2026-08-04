import { CapabilityGroup } from "@/types/content";

export const capabilities: CapabilityGroup[] = [
  {
    title: "Investment Analytics",
    description:
      "Experience working with investment reporting, portfolio analysis, benchmarking, and institutional reporting workflows.",
    items: ["Performance Reporting", "Benchmark Analytics", "Attribution Analysis", "Risk Analytics"],
    businessImpact: "Reliable reporting for investment stakeholders.",
  },
  {
    title: "Business Intelligence",
    description:
      "Transforming complex financial datasets into structured dashboards and meaningful reporting for business users.",
    items: ["Power BI", "Dashboard Design", "Data Modeling", "KPI Reporting"],
    businessImpact: "Improves visibility and decision-making.",
  },
  {
    title: "Analytics Engineering",
    description:
      "Designing scalable analytical workflows that transform raw investment data into reliable outputs.",
    items: ["Python", "SQL", "PostgreSQL", "ETL"],
    businessImpact: "Reduces manual effort while improving consistency.",
  },
  {
    title: "Process Automation",
    description:
      "Automating repetitive reporting activities using maintainable solutions rather than manual work.",
    items: ["Python Automation", "VBA", "Power Query", "Workflow Automation"],
    businessImpact: "Improves efficiency and reduces operational risk.",
  },
];
