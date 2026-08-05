import { ExperimentEntry } from "@/types/experiments";

export const experiments: ExperimentEntry[] = [
  {
    slug: "dynamic-risk-engine",

    title: "Dynamic Risk Engine",

    teaser:
      "Exploring institutional-style portfolio risk calculations using reusable Python modules.",

    overview:
      "A modular framework for analysing portfolio volatility, drawdown and risk-adjusted performance using scalable analytics pipelines.",

    problem:
      "Risk calculations are often tightly coupled to spreadsheets or reporting tools, making them difficult to maintain and extend.",

    idea:
      "Separate calculations into reusable Python services connected through a structured analytics workflow.",

    expectedOutcome:
      "A reusable risk engine that integrates directly into Mizan Analytics.",

    visual: "graph",

    technologies: [
      "Python",
      "NumPy",
      "PostgreSQL",
      "SQL"
    ],

    status: "Research",

    accent: "blue",
  },

  {
    slug: "portfolio-simulation",

    title: "Portfolio Simulation",

    teaser:
      "Testing scenario-based investment simulations for institutional portfolios.",

    overview:
      "Investigating how allocation changes affect long-term portfolio behaviour using simplified market assumptions.",

    problem:
      "Investment scenarios are usually evaluated manually across multiple spreadsheets.",

    idea:
      "Create an automated simulation framework capable of comparing allocations rapidly.",

    expectedOutcome:
      "Interactive allocation testing for future versions of Mizan Analytics.",

    visual: "nodes",

    technologies: [
      "Python",
      "Pandas",
      "Power BI"
    ],

    status: "Planning",

    accent: "amber",
  },

  {
    slug: "validation-framework",

    title: "Validation Framework",

    teaser:
      "Designing a reusable validation layer before analytics processing.",

    overview:
      "A configurable validation engine that checks imported investment data before entering the analytics pipeline.",

    problem:
      "Poor data quality propagates errors throughout downstream reporting.",

    idea:
      "Introduce modular validation rules before any calculations are executed.",

    expectedOutcome:
      "Cleaner analytical outputs and significantly reduced reporting issues.",

    visual: "database",

    technologies: [
      "Python",
      "SQL",
      "PostgreSQL"
    ],

    status: "Experimenting",

    accent: "red",
  },

  {
    slug: "workflow-orchestrator",

    title: "Workflow Orchestrator",

    teaser:
      "Exploring modular orchestration of analytical workflows.",

    overview:
      "A lightweight workflow manager coordinating imports, validation, analytics and reporting.",

    problem:
      "Growing analytical systems become increasingly difficult to coordinate manually.",

    idea:
      "Create reusable execution pipelines similar to enterprise ETL orchestration.",

    expectedOutcome:
      "Centralized execution for future analytics modules.",

    visual: "flow",

    technologies: [
      "Python",
      "PostgreSQL",
      "Automation"
    ],

    status: "Prototype",

    accent: "blue",
  },
];