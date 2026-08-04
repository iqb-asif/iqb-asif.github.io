import { ProjectEntry } from "@/types/content";

export const mizan = {
  name: "Mizan Analytics",
  tagline:
    "An institutional-grade investment analytics and reporting platform designed to demonstrate scalable architecture, financial domain expertise, and modern analytics engineering practices.",
  description:
    "A modular, database-driven investment analytics platform for portfolio performance, benchmark analytics, risk measurement, and executive reporting — built with an enterprise-style architecture rather than a single script.",
  status: "In active development",
  technologies: ["Python", "PostgreSQL", "SQL", "Power BI", "Excel", "VBA", "Git"],
  pipeline: [
    { label: "CSV Import", detail: "Client data ingestion" },
    { label: "Validation Engine", detail: "Data quality rules" },
    { label: "PostgreSQL Database", detail: "Structured storage" },
    { label: "Analytics Engine", detail: "Returns, attribution, volatility" },
    { label: "Risk Engine", detail: "Sharpe ratio, drawdown" },
    { label: "Reporting Engine", detail: "Institutional report generation" },
    { label: "Power BI Dashboard", detail: "Executive visualization" },
  ],
  highlights: [
    "Modular architecture spanning validation, ETL, database, analytics, risk, and reporting layers.",
    "Analytics modules for portfolio returns, benchmark comparison, excess returns, security contribution, volatility, Sharpe ratio, and maximum drawdown.",
    "Automated report generation for institutional-style investment reporting.",
    "Centralized reporting framework integrating Power BI dashboards with reusable analytics components.",
  ],
  techRationale: [
    { tech: "Python", reason: "Automation, modular architecture, and financial analytics." },
    { tech: "PostgreSQL", reason: "Structured storage and scalable data relationships." },
    { tech: "SQL", reason: "Efficient querying and analytical workflows." },
    { tech: "Power BI", reason: "Executive dashboards and reporting." },
  ],
};

export const projects: ProjectEntry[] = [
  {
    slug: "mizan-analytics",
    title: "Mizan Analytics",
    summary:
      "Institutional-grade investment analytics platform for portfolio performance, benchmark analytics, and risk measurement.",
    technologies: ["Python", "PostgreSQL", "SQL", "Power BI"],
    status: "In active development",
    progress: 70,
    featured: true,
    hasCaseStudy: true,
  },
  {
    slug: "quantitative-market-analytics",
    title: "Quantitative Market Analytics Platform",
    summary:
      "Analyses 750+ NSE-listed securities using technical indicators and rule-based trading signals, with automated data pipelines and Power BI dashboards.",
    technologies: ["Python", "SQL", "Pandas", "NumPy", "Power BI"],
    status: "Complete",
    progress: 100,
  },
  {
    slug: "institutional-reporting-automation",
    title: "Institutional Reporting Automation Platform",
    summary:
      "Reusable, configurable automation modules for institutional investment reporting, with automated validation and reconciliation.",
    technologies: ["Python", "VBA", "Power Query", "Excel"],
    status: "Complete",
    progress: 100,
  },
  {
    slug: "economic-assumptions-framework",
    title: "Economic Assumptions Reporting Framework",
    summary:
      "Automated framework consolidating macroeconomic indicators, inflation, and interest-rate assumptions into standardized investment reports.",
    technologies: ["VBA", "Excel", "Power Query"],
    status: "Complete",
    progress: 100,
  },
  {
    slug: "business-workflow-automation",
    title: "Business Workflow Automation Platform",
    summary:
      "Rule-based scheduling engine for business-day-aware recurring workflows with automated task lifecycle management.",
    technologies: ["Python", "VBA", "Excel", "SharePoint"],
    status: "Complete",
    progress: 100,
  },
];
