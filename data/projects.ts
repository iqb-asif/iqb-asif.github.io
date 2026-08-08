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

export const faceAI = {
  name: "AI Face Recognition & Facial Intelligence",
  tagline:
    "A real-time Python-based facial intelligence application combining computer vision, deep face embeddings, similarity matching and automated multi-frame enrollment.",
description:
    "A real-time facial intelligence application that uses computer vision, deep face embeddings, similarity matching, and automated multi-frame enrollment to recognize and analyze faces in live video streams.",
  technologies: ["Python", "OpenCV", "FaceNet", "NumPy", "SQLite"],
  pipelines: [
    { label: "Video Capture", detail: "Real-time video stream" },
    { label: "Face Detection", detail: "OpenCV Haar cascades" },
    { label: "Face Embeddings", detail: "Deep learning with FaceNet" },
    { label: "Similarity Matching", detail: "Cosine similarity for recognition" },
    { label: "Multi-frame Enrollment", detail: "Automated face registration" },
  ],
  highlights: [
    "Real-time face detection and recognition from live video streams.",
    "Deep learning-based face embeddings for accurate identification.",
    "Automated multi-frame enrollment for robust face registration.",
    "SQLite database for storing face embeddings and metadata.",
  ],
  techRationale: [
    { tech: "Python", reason: "Core language for computer vision and deep learning." },
    { tech: "OpenCV", reason: "Computer vision library for real-time image processing." },
    { tech: "FaceNet", reason: "Deep learning model for generating face embeddings." },
    { tech: "NumPy", reason: "Numerical computations and array manipulations." },
    { tech: "SQLite", reason: "Lightweight database for storing face data." },
  ],
  status: "Active Development",
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
  slug: "FaceAI",
  title: "AI Face Recognition",
  summary:
    "Real-time facial recognition application using computer vision, deep face embeddings, similarity matching, and automated multi-frame enrollment.",
  technologies: [
    "Python",
    "OpenCV",
    "Deep Learning",
    "Face Embeddings",
    "CUDA",
  ],
  status: "In active development",
  progress: 65,
  featured: false,
  hasCaseStudy: true,
},
  {
    slug: "Trading",
    title: "AI-Powered Trade Signal & Portfolio Analytics Platform",
    summary:
      "Analyses 750+ NSE-listed securities using technical indicators and rule-based trading signals, with automated data pipelines and Power BI dashboards.",
    technologies: ["Python", "Pandas", "NumPy", "Power BI"],
    status: "Complete",
    progress: 100,  
        featured: true,
    hasCaseStudy: true,
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

export const trading = {
  name: "AI Trade Signal & Portfolio Analytics Platform",

  tagline:
    "An end-to-end investment analytics platform that scans 750+ stocks daily, generates AI-powered trade signals, automates Telegram alerts, and delivers portfolio analytics through interactive Power BI dashboards.",

  status: "Active Development",

  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "TA-Lib",
    "Yahoo Finance",
    "NSE",
    "Telegram Bot API",
    "SQLite",
    "Power BI",
    "Git",
  ],

  pipeline: [
    {
      label: "Market Data",
      detail: "NSE & Yahoo Finance",
    },
    {
      label: "AI Analysis",
      detail: "Indicators & Scoring",
    },
    {
      label: "Signal Engine",
      detail: "Buy / Sell Signals",
    },
    {
      label: "Alerts",
      detail: "Telegram Automation",
    },
    {
      label: "Portfolio",
      detail: "Trade Tracking",
    },
    {
      label: "Analytics",
      detail: "Power BI Dashboards",
    },
  ],

  highlights: [
    "Scans more than 750 stocks every trading day.",
    "Generates AI-powered Buy and Sell trade signals.",
    "Ranks opportunities using AI Score, Confidence Level and Risk Assessment.",
    "Automatically delivers trade alerts through Telegram.",
    "Tracks portfolio performance and historical trade outcomes.",
    "Interactive Power BI dashboards for portfolio monitoring and signal analytics.",
    "Measures signal performance to continuously improve decision quality.",
  ],

  techRationale: [
    {
      tech: "Python",
      reason:
        "Core language used for data collection, AI scoring, automation and signal generation.",
    },
    {
      tech: "Yahoo Finance",
      reason:
        "Provides historical market data used for technical analysis and backtesting.",
    },
    {
      tech: "NSE",
      reason:
        "Supplies live Indian market data and security universe.",
    },
    {
      tech: "Telegram Bot",
      reason:
        "Enables automated delivery of real-time trading signals.",
    },
    {
      tech: "SQLite",
      reason:
        "Stores historical signals, trades and portfolio information.",
    },
    {
      tech: "Power BI",
      reason:
        "Creates interactive dashboards for portfolio performance, trade analytics and reporting.",
    },
  ],
};