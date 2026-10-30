
"use client";

import { useState } from "react";

const projects = [
  {
    id: "01",
    category: "QUANTITATIVE FINANCE",
    title: "Volatility-Targeted Time-Series Momentum",
    description:
      "Development and performance evaluation of a multi-asset systematic momentum strategy with dynamic volatility targeting.",
    technologies: ["Python", "Pandas", "NumPy"],
    details: [
      "Developed a Time-Series Momentum (TSMOM) strategy across multiple asset classes.",
      "Estimated rolling volatility and implemented volatility scaling to dynamically adjust portfolio positions.",
      "Evaluated strategy performance using CAGR, annualized volatility, Sharpe Ratio, and maximum drawdown.",
    ],
    github:
      "https://github.com/benrejebmeryem9-99/Volatility-Targeted-Time-Series-Momentum",
    report: "",
  },
  {
    id: "02",
    category: "DEEP LEARNING & FINANCIAL FORECASTING",
    title: "Financial Time-Series Forecasting with Deep Learning",
    description:
      "Development and comparison of neural network architectures for forecasting financial time series.",
    technologies: [
      "Python",
      "yfinance",
      "MLP",
      "LSTM",
      "Bi-LSTM",
    ],
    details: [
      "Developed and compared MLP, LSTM, and Bi-LSTM architectures for financial time-series forecasting.",
      "Collected and processed historical financial market data using Python and yfinance.",
      "Evaluated forecasting accuracy and model robustness across multiple financial assets to assess generalization.",
    ],
    github: "",
    report: "",
  },
  {
    id: "03",
    category: "NLP & FINANCIAL DATA SCIENCE",
    title: "Financial Sentiment Analysis Application",
    description:
      "Development of a web-based application for financial sentiment analysis using a domain-specific language model.",
    technologies: [
      "Python",
      "FinBERT",
      "Flask",
      "Streamlit",
      "SQLite",
    ],
    details: [
      "Developed a web application to analyze financial market sentiment using textual data.",
      "Implemented FinBERT to classify and analyze sentiment in financial information.",
      "Developed and deployed the application using Python, Flask, and Streamlit, integrating a SQLite database.",
    ],
    github:
      "https://github.com/benrejebmeryem9-99/Finnsentiment",
    report: "",
  },
  {
    id: "04",
    category: "FINAL-YEAR PROJECT · 2025",
    title: "Impact of Geopolitical Shocks on Financial Markets",
    description:
      "Technical analysis of US financial markets and asset-price dynamics in response to geopolitical and economic shocks.",
    technologies: [
      "Technical Analysis",
      "Forex",
      "Stock Indices",
      "Commodities",
      "Cryptocurrencies",
    ],
    details: [
      "Analyzed Forex, stock indices, commodities, and cryptocurrency markets.",
      "Identified market trends, support and resistance levels, and price movements.",
      "Applied technical indicators to study asset-price dynamics and volatility.",
      "Investigated financial market reactions to geopolitical and economic events.",
    ],
    github: "",
    report: "/reports/geopolitical-shocks-2025.pdf",
  },
];

export default function ProjectsSection() {
  const [openProject, setOpenProject] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="bg-[#FFFCF8] px-6 py-24 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADING */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A47C60]">
              03 / Selected Work
            </p>

            <h2 className="mt-5 text-3xl font-semibold md:text-4xl">
              Projects & Research
              <span className="text-[#A47C60]">.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#776A60]">
              Selected academic and personal projects combining
              quantitative finance, econometrics, machine learning,
              and financial data analysis.
            </p>
          </div>

          <a
            href="https://github.com/benrejebmeryem9-99"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-[#A47C60] pb-1 text-sm font-medium"
          >
            View GitHub ↗
          </a>
        </div>

        {/* PROJECT CARDS */}
        <div className="mt-12 grid items-start gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const isOpen = openProject === project.id;

            return (
              <article
                key={project.id}
                className="overflow-hidden rounded-2xl border border-[#E7DDD2] bg-[#F8F5F0] transition duration-300 hover:shadow-lg hover:shadow-[#CDB9A5]/20"
              >
                <div className="p-7">
                  <div className="mb-7 flex items-center justify-between">
                    <span className="font-serif text-4xl italic text-[#CBB8A4]">
                      {project.id}
                    </span>

                    <span className="text-xl text-[#A47C60]">
                      ↗
                    </span>
                  </div>

                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A47C60]">
                    {project.category}
                  </p>

                  <h3 className="mb-5 text-xl font-semibold leading-snug">
                    {project.title}
                  </h3>

                  <p className="mb-7 text-sm leading-7 text-[#776A60]">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="mb-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-[#EDE3D6] px-3 py-1.5 text-xs text-[#765D4B]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* EXPAND BUTTON */}
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`project-details-${project.id}`}
                    onClick={() =>
                      setOpenProject(isOpen ? null : project.id)
                    }
                    className="flex w-full items-center justify-between border-t border-[#E2D6C9] pt-5 text-left text-sm font-semibold text-[#765D4B] transition hover:text-[#382E29]"
                  >
                    <span>
                      {isOpen ? "Hide Details" : "View Details"}
                    </span>

                    <span className="text-xl">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </div>

                {/* EXPANDED DETAILS */}
                {isOpen && (
                  <div
                    id={`project-details-${project.id}`}
                    className="border-t border-[#E2D6C9] bg-[#FFFCF8] px-7 py-6"
                  >
                    <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-[#A47C60]">
                      Project Highlights
                    </p>

                    <ul className="list-disc space-y-3 pl-5 text-sm leading-7 text-[#776A60]">
                      {project.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>

                    <div className="mt-7 flex flex-wrap gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-[#382E29] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#795B47]"
                        >
                          View GitHub ↗
                        </a>
                      )}

                      {project.report && (
                        <a
                          href={project.report}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-[#C9B8A7] px-5 py-3 text-xs font-semibold text-[#382E29] transition hover:bg-[#EDE3D6]"
                        >
                          View Project Report ↗
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
