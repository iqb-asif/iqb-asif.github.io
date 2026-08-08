import Image from "next/image";

import { PageHeader } from "@/components/ui/PageHeader";
import { trading } from "@/data/projects";

export const metadata = {
  title: "AI Trade Signal & Portfolio Analytics | Asif Iqbal",
};

export default function TradingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Flagship Project"
        title={trading.name}
        description={trading.tagline}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "AI Trading Platform" },
        ]}
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16">
          {/* ================= LEFT CONTENT ================= */}

          <div>
            {/* ------------------------------------------------ */}
            {/* Problem Statement */}
            {/* ------------------------------------------------ */}

            <h2 className="text-2xl font-semibold">
              Problem statement
            </h2>

            <p className="mt-4 text-text-secondary leading-relaxed">
              Investment professionals often rely on multiple websites,
              spreadsheets, market terminals and reporting tools before
              arriving at a single investment decision. Screening hundreds
              of securities, generating trade ideas, monitoring portfolio
              performance and measuring historical outcomes become
              increasingly time-consuming as the investment universe grows.
            </p>

            <p className="mt-4 text-text-secondary leading-relaxed">
              This project combines market data, AI-driven scoring,
              automated trade alerts and Power BI analytics into one
              integrated workflow that supports faster, data-driven
              investment decisions while eliminating repetitive manual
              processes.
            </p>

            {/* ------------------------------------------------ */}
            {/* Core Objectives */}
            {/* ------------------------------------------------ */}

            <h2 className="mt-12 text-2xl font-semibold">
              Core objectives
            </h2>

            <ul className="mt-4 space-y-3">
              {[
                "Scan more than 750 listed securities automatically.",
                "Generate structured Buy/Sell trade signals using technical analysis and AI scoring.",
                "Deliver actionable trade alerts through Telegram.",
                "Track portfolio performance and historical trade outcomes.",
                "Create interactive Power BI dashboards for portfolio and signal analytics.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-text-secondary leading-relaxed"
                >
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent-blue" />
                  {item}
                </li>
              ))}
            </ul>

            {/* ------------------------------------------------ */}
            {/* Architecture */}
            {/* ------------------------------------------------ */}

            <h2 className="mt-12 text-2xl font-semibold">
              Platform architecture
            </h2>

            <p className="mt-4 text-text-secondary leading-relaxed">
              The application follows a modular pipeline beginning with
              market data acquisition and progressing through AI analysis,
              signal generation, automated delivery, portfolio tracking and
              finally business intelligence reporting. Each layer performs
              an independent responsibility while remaining connected
              through structured data flow, making the platform scalable and
              easier to enhance over time.
            </p>

            <div className="mt-8 overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface">
              <Image
                src="/projects/trading-ai/architecture.png"
                alt="AI Trading Platform Architecture"
                width={1600}
                height={950}
                className="w-full h-auto"
              />
            </div>

            {/* ------------------------------------------------ */}
            {/* Signal Generation */}
            {/* ------------------------------------------------ */}

            <h2 className="mt-12 text-2xl font-semibold">
              AI signal generation engine
            </h2>

            <p className="mt-4 text-text-secondary leading-relaxed">
              The first objective was creating a repeatable framework for
              identifying trading opportunities instead of relying on manual
              screening. The engine evaluates more than 750 securities every
              day using technical indicators, trend analysis, momentum,
              volatility and proprietary scoring logic before ranking
              opportunities by quality.
            </p>

            <ul className="mt-5 space-y-3">
              {[
                "Technical indicator analysis",
                "Momentum detection",
                "Trend identification",
                "Risk assessment",
                "AI confidence scoring",
                "Expected return estimation",
                "Risk-based position sizing",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-text-secondary leading-relaxed"
                >
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent-blue" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-text-secondary leading-relaxed">
              Rather than attempting to predict markets with certainty, the
              objective is to build a consistent decision-support framework
              that prioritises opportunities using measurable data instead
              of emotion.
            </p>

            <div className="mt-8 overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface">
              <Image
                src="/projects/trading-ai/terminal.png"
                alt="Signal Generation Terminal"
                width={1400}
                height={850}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* ================= RIGHT SIDEBAR ================= */}

          <aside className="lg:sticky lg:top-24 h-fit">
            <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 md:p-8">
              <p className="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-6">
                Workflow
              </p>

              <div className="space-y-5">
                {[
                  {
                    title: "Market Data",
                    detail: "NSE + Yahoo Finance",
                  },
                  {
                    title: "AI Analysis",
                    detail: "Indicators & Scoring",
                  },
                  {
                    title: "Signal Generation",
                    detail: "Buy / Sell Engine",
                  },
                  {
                    title: "Trade Alerts",
                    detail: "Telegram Automation",
                  },
                  {
                    title: "Portfolio Tracking",
                    detail: "Trade Database",
                  },
                  {
                    title: "Power BI",
                    detail: "Analytics Dashboard",
                  },
                ].map((item, index, array) => (
                  <div key={item.title}>
                    <div className="flex items-center justify-between py-3 border-t border-border first:border-t-0">
                      <span className="text-sm font-medium">
                        {item.title}
                      </span>

                      <span className="text-xs text-text-tertiary">
                        {item.detail}
                      </span>
                    </div>

                    {index < array.length - 1 && (
                      <div className="flex justify-center">
                        <div className="h-4 w-px bg-border" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-[var(--radius-lg)] border border-border p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-text-tertiary mb-4">
                Technology Stack
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "Pandas",
                  "NumPy",
                  "TA-Lib",
                  "Yahoo Finance",
                  "NSE",
                  "Telegram Bot",
                  "Power BI",
                  "SQLite",
                  "Git",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-[var(--radius-sm)] bg-surface text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-5 font-mono text-xs text-text-tertiary">
                Status: Active Development
              </p>
            </div>
          </aside>
        </div>
     
                  {/* ------------------------------------------------ */}
            {/* Automated Signal Delivery */}
            {/* ------------------------------------------------ */}

            <h2 className="mt-12 text-2xl font-semibold">
              Automated signal delivery
            </h2>

            <p className="mt-4 text-text-secondary leading-relaxed">
              Once a trading opportunity has been identified, the system
              automatically delivers a structured notification through
              Telegram. Each alert contains all essential information
              required for decision making, removing the need to monitor
              hundreds of stocks manually throughout the trading session.
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {[
                "Buy / Sell recommendation",
                "AI Score",
                "Confidence level",
                "Entry price",
                "Target price",
                "Stop loss",
                "Position sizing",
              ].map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1.5 rounded-[var(--radius-sm)] border border-border text-text-secondary"
                >
                  {item}
                </span>
              ))}
            </ul>

            <center><div className="mt-8 overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface">
              <Image
                src="/projects/trading-ai/telegram.png"
                alt="Telegram Trade Alert"
                width={200}
                height={200}
                className="w-10% h-10%"
              />
            </div></center>

            {/* ------------------------------------------------ */}
            {/* Portfolio Monitoring */}
            {/* ------------------------------------------------ */}

            <h2 className="mt-12 text-2xl font-semibold">
              Portfolio monitoring
            </h2>

            <p className="mt-4 text-text-secondary leading-relaxed">
              Signal generation is only the beginning of the investment
              workflow. The platform continuously tracks open positions,
              portfolio value and trade outcomes while automatically
              updating an interactive Power BI dashboard that acts as a
              single source of truth for portfolio performance.
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {[
                "Portfolio Value",
                "Profit & Loss",
                "Risk Score",
                "Win Rate",
                "Sector Allocation",
                "Position Allocation",
                "Best & Worst Performers",
              ].map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1.5 rounded-[var(--radius-sm)] border border-border text-text-secondary"
                >
                  {item}
                </span>
              ))}
            </ul>

            <div className="mt-8 overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface">
              <Image
                src="/projects/trading-ai/portfolio-dashboard.png"
                alt="Portfolio Dashboard"
                width={1600}
                height={900}
                className="w-full h-auto"
              />
            </div>

            {/* ------------------------------------------------ */}
            {/* Analytics */}
            {/* ------------------------------------------------ */}

            <h2 className="mt-12 text-2xl font-semibold">
              Measuring signal performance
            </h2>

            <p className="mt-4 text-text-secondary leading-relaxed">
              One of the most valuable aspects of the platform is measuring
              whether generated signals consistently create value. Historical
              trade data is analysed to understand which scoring ranges,
              confidence levels and market sectors perform best over time,
              transforming the application from a signal generator into a
              decision-support analytics platform.
            </p>

            <div className="mt-8 overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface">
              <Image
                src="/projects/trading-ai/analytics-dashboard.png"
                alt="Signal Analytics Dashboard"
                width={1600}
                height={900}
                className="w-full h-auto"
              />
            </div>

            {/* ------------------------------------------------ */}
            {/* Technology Decisions */}
            {/* ------------------------------------------------ */}

            <h2 className="mt-12 text-2xl font-semibold">
              Technology decisions
            </h2>

            <div className="mt-4 space-y-4">
              {[
                {
                  tech: "Python",
                  reason:
                    "Core application logic, AI scoring, market screening and automation.",
                },
                {
                  tech: "Yahoo Finance / NSE",
                  reason:
                    "Historical and live market data acquisition.",
                },
                {
                  tech: "Telegram Bot",
                  reason:
                    "Real-time automated delivery of trading signals.",
                },
                {
                  tech: "Power BI",
                  reason:
                    "Interactive portfolio analytics and performance dashboards.",
                },
                {
                  tech: "SQLite",
                  reason:
                    "Persistent storage for historical signals and trade records.",
                },
              ].map((item) => (
                <div key={item.tech} className="flex gap-4">
                  <span className="font-mono text-sm text-accent-blue w-32 shrink-0">
                    {item.tech}
                  </span>

                  <span className="text-sm text-text-secondary leading-relaxed">
                    {item.reason}
                  </span>
                </div>
              ))}
            </div>

            {/* ------------------------------------------------ */}
            {/* Lessons */}
            {/* ------------------------------------------------ */}

            <h2 className="mt-12 text-2xl font-semibold">
              Lessons learned
            </h2>

            <p className="mt-4 text-text-secondary leading-relaxed">
              The biggest takeaway from this project was that the real value
              lies in connecting multiple technologies into a single
              automated workflow. Market screening, AI scoring, portfolio
              tracking and business intelligence become significantly more
              useful when they operate together rather than as isolated
              tools.
            </p>

            <p className="mt-4 text-text-secondary leading-relaxed">
              Building the complete pipeline also reinforced the importance
              of automation, modular architecture and measurable analytics,
              making the platform easier to maintain and continuously
              improve.
            </p>

            {/* ------------------------------------------------ */}
            {/* Roadmap */}
            {/* ------------------------------------------------ */}

            <h2 className="mt-12 text-2xl font-semibold">
              Future roadmap
            </h2>


            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "AI-generated trade summaries",
                "Trade explainability",
                "Forecasting models",
                "Enhanced portfolio analytics",
                "Optional trade automation",
                "Cloud deployment",
                "REST API",
              ].map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1.5 rounded-[var(--radius-sm)] border border-border text-text-secondary"
                >
                  {item}
                </span>
              ))}
            </div>
              
        </section>
    </>
    );
}