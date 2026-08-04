import { ExperienceEntry } from "@/types/content";

export const experience: ExperienceEntry[] = [
  {
    company: "Mercer Consulting Pvt Ltd",
    role: "Senior Specialist",
    period: "Sep 2025 – Present",
    location: "Gurugram",
    summary:
      "Leading automation of investment reporting workflows and the Economic Assumptions reporting framework for UK pension and institutional clients.",
    responsibilities: [
      "Engineered automation workflows for investment reporting using Python, VBA, and Power Query, reducing manual effort and improving turnaround time.",
      "Led the Economic Assumptions reporting framework, covering inflation, interest rates, macroeconomic indicators, and long-term asset-class assumptions.",
      "Developed reusable reporting templates and standardised modules to improve consistency and scalability.",
      "Automated data validation and quality assurance workflows, strengthening reporting accuracy and reliability.",
      "Delivered portfolio performance reporting, benchmark analytics, and investment insights for UK pension and institutional clients.",
      "Collaborated with cross-functional teams to align reporting outputs with evolving client and regulatory requirements.",
      "Mentored junior team members on Python and Power Query automation practices.",
    ],
    technologies: ["Python", "VBA", "Power Query", "Power BI", "Excel", "SQL"],
    lessonLearned: "Designing reusable reporting frameworks that scale across an entire investment process.",
  },
  {
    company: "Mercer Consulting Pvt Ltd",
    role: "Investments Specialist",
    period: "Jan 2024 – Sep 2025",
    location: "Gurugram",
    summary:
      "Produced institutional investment performance reports and automated recurring reporting processes for UK institutional clients.",
    responsibilities: [
      "Produced institutional investment performance reports by consolidating large datasets into standardized client deliverables.",
      "Automated recurring reporting processes using Python and VBA, improving reporting consistency and operational efficiency.",
      "Performed portfolio performance analysis, benchmark validation, and data quality assurance using Solovis and internal investment systems.",
      "Conducted internal data audits across reporting systems, improving accuracy and downstream analytics.",
      "Partnered with investment consultants to strengthen data governance and optimize analytical reporting workflows.",
      "Built Power BI dashboards to give stakeholders self-serve visibility into portfolio performance metrics.",
      "Documented reporting processes and control checks to support audit and knowledge-transfer requirements.",
    ],
    technologies: ["Python", "VBA", "Solovis", "SQL", "Excel"],
    lessonLearned: "Working with institutional-scale datasets and the discipline of data governance.",
  },
  {
    company: "InCred Wealth",
    role: "Assistant Manager – Portfolio Analytics",
    period: "May 2023 – Dec 2023",
    location: "Delhi",
    summary:
      "Conducted portfolio reviews and performance analysis for HNI and UHNI clients across mutual funds, equities, PMS, and alternative investments.",
    responsibilities: [
      "Conducted portfolio reviews for HNI and UHNI clients, delivering insights aligned with investment objectives and risk profiles.",
      "Analysed performance across mutual funds, equities, PMS and alternative investments to support portfolio recommendations.",
      "Leveraged Ace MF NXT to analyse fund performance, validate portfolio exposures, and develop investment dashboards.",
      "Translated complex portfolio analytics into actionable investment recommendations, enhancing client decision-making.",
      "Coordinated with relationship managers to align portfolio insights with client risk profiles and financial goals.",
      "Maintained data accuracy across client holdings through regular reconciliation and exposure checks.",
    ],
    technologies: ["Ace MF NXT", "Excel", "Portfolio Analytics"],
    lessonLearned: "Translating complex analytics into recommendations that clients can act on.",
  },
  {
    company: "Anand Rathi Wealth",
    role: "Account Manager",
    period: "Apr 2021 – May 2023",
    location: "Delhi",
    summary:
      "Managed client assets exceeding ₹100 Cr AUM, producing portfolio analytics reports and investment presentations.",
    responsibilities: [
      "Managed client assets exceeding ₹100 Cr AUM, ensuring operational accuracy and high service standards.",
      "Developed portfolio analytical reports, capital gain statements, and monthly investment reports.",
      "Performed portfolio reviews to analyse performance drivers, concentration risks, and allocation opportunities.",
      "Prepared investment presentations and portfolio insights to support long-term financial planning.",
      "Reconciled capital gain statements and monthly reports against custodian records to ensure accuracy.",
      "Supported client review meetings with data-backed performance and allocation summaries.",
    ],
    technologies: ["Excel", "VBA", "Power Query"],
    lessonLearned: "Managing investment operations at scale while maintaining reporting accuracy.",
  },
  {
    company: "ClovekWealth Pvt Ltd",
    role: "Analyst",
    period: "May 2019 – Apr 2021",
    location: "Delhi",
    summary:
      "Conducted market and fund research to support portfolio recommendations and monitored retail client portfolios.",
    responsibilities: [
      "Conducted research on financial markets, economic trends, and investment opportunities.",
      "Prepared investment reports covering asset allocation, risk analysis, and performance evaluation.",
      "Monitored retail client portfolios, identifying performance trends and recommending adjustments.",
      "Evaluated investment products and delivered mutual fund analysis using quantitative techniques.",
      "Tracked macroeconomic indicators and market trends to inform portfolio recommendations.",
      "Built early Excel and Python tools to speed up recurring research and reporting tasks.",
    ],
    technologies: ["Excel", "Python", "SQL"],
    lessonLearned: "The fundamentals of investment research and quantitative fund evaluation.",
  },
  {
    company: "Anand Rathi Wealth",
    role: "Investment Analyst Intern",
    period: "Jan 2019 – Jul 2019",
    location: "India",
    summary:
      "Supported portfolio analysis through market research, fund evaluation, and client-facing investment presentations.",
    responsibilities: [
      "Supported portfolio analysis by researching market trends, fund evaluation, and investment product analysis.",
      "Assisted in preparing investment presentations aligned with client objectives and risk profiles.",
      "Gained foundational exposure to portfolio construction, mutual fund evaluation, and client reporting workflows.",
    ],
    technologies: ["Excel"],
    lessonLearned: "How investment products, clients, and reporting requirements connect.",
  },
];

export const careerProgression = [
  "Investment Operations",
  "Client Reporting",
  "Performance Analytics",
  "Business Intelligence",
  "Analytics Engineering",
];

export const careerChapters = [
  {
    title: "Chapter One — Learning the Investment Industry",
    period: "2019 – 2021",
    body: "Early roles at ClovekWealth and Anand Rathi Wealth built the domain foundation: mutual funds, equities, PMS, fixed income, client reporting, and portfolio operations. This stage was about understanding investment products, clients, and reporting requirements — not yet about technology.",
  },
  {
    title: "Chapter Two — Moving Toward Analytics",
    period: "2021 – 2024",
    body: "At Anand Rathi Wealth and InCred Wealth, the work shifted toward performance reporting, portfolio analytics, and benchmark comparison for HNI and UHNI clients exceeding ₹100 Cr AUM. Automation entered naturally — as a way to handle recurring reports and validation, not as a career pivot.",
  },
  {
    title: "Chapter Three — Building Analytical Systems",
    period: "2024 – Present",
    body: "At Mercer, the focus moved to Python, SQL, and Power BI automation for UK pension and institutional reporting, and to the Economic Assumptions reporting framework. Mizan Analytics grew out of this — years of practical reporting experience formalized into a modular analytics platform.",
  },
];

export const workingPrinciples = [
  "Understand the business context before writing code.",
  "Prioritize reliable outputs over clever solutions.",
  "Validate data before building dashboards.",
  "Document systems for maintainability.",
  "Automate repetitive work responsibly.",
  "Continuously improve existing processes.",
];

export const strengths = {
  "Investment Domain": [
    "Portfolio Analytics",
    "Performance Measurement",
    "Investment Reporting",
    "Benchmark Analysis",
    "Asset Allocation",
    "Institutional Reporting",
  ],
  Technical: ["Python", "SQL", "PostgreSQL", "Power BI", "VBA", "Power Query"],
  Analytical: [
    "Problem Solving",
    "Data Validation",
    "Workflow Optimization",
    "Business Analysis",
    "Reporting Quality",
  ],
  Professional: [
    "Communication",
    "Documentation",
    "Stakeholder Collaboration",
    "Continuous Learning",
    "Attention to Detail",
  ],
};
