
"use client";

import { useState } from "react";

const educations = [
  {
    degree: "Research Master's in Quantitative Economics & Finance",
    institution: "Tunisia Polytechnic School (EPT)",
    laboratory: "LEGI",
    period: "Current",
    details: [
      "Research-oriented Master's program in quantitative economics and finance.",
      "Academic interests in macroeconomics, financial markets, econometrics, and quantitative modeling.",
      "Focus on time-series forecasting, machine learning, and data-driven economic analysis.",
    ],
    courses: [
      "Econometrics",
      "Quantitative Finance",
      "Macroeconomics",
      "Financial Markets",
      "Time-Series Analysis",
      "Machine Learning",
    ],
    tools: [
      "Python",
      "R, GAMS, STATA",
      "Data Analysis",
      "Machine Learning ",
      "VS Code, Git Bash",
      "Financial Modeling",
    ],
  },
  {degree: "Bachelor's Degree in Management Sciences: Finance",
    institution: "Higher Institute of Business Studies of Sousse - University ofSousse",
    period: "2022-2025",
    details: [
        "Built a strong foundation in corporate finance, accounting, and financial management.",
        "Developed skills in financial analysis, budgeting, and investment evaluation.",
    ],
    courses: [
      "Corporate Finance",
      "Financial Accounting",
      "Financial Analysis",
      "Management Control",
      "Investment Analysis",
      "Statistics",
    ],
    tools: [
        "Valuation Methods (DCF, Multiples)",
        "Securities Analysis - Tunis Stock Exchange (BVMT)",
        "Portfolio Management",
        "Investment Analysis",
        "Budgeting and Forecasting",
    ],
},// Add another degree here when ready.
];

export default function EducationAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {educations.map((education, index) => (
        <div
          key={`${education.institution}-${education.degree}`}
          className="overflow-hidden rounded-xl border border-[#E0D3C5] bg-[#FFFCF8]"
        >
          <button
            type="button"
            aria-expanded={openIndex === index}
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            className="flex w-full items-center justify-between gap-4 p-5 text-left transition hover:bg-[#F1E8DE]"
          >
            <div>
              <p className="mb-2 text-xs font-medium text-[#A47C60]">
                {education.period}
              </p>

              <h4 className="text-base font-semibold text-[#382E29]">
                {education.degree}
              </h4>

              <p className="mt-2 text-sm text-[#776A60]">
                {education.institution}
                {education.laboratory
                  ? ` · ${education.laboratory}`
                  : ""}
              </p>
            </div>

            <span className="shrink-0 text-2xl text-[#A47C60]">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>

          {openIndex === index && (
            <div className="border-t border-[#E0D3C5] px-5 py-5">
              <ul className="list-disc space-y-3 pl-5 text-sm leading-7 text-[#776A60]">
                {education.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>

              <div className="mt-6 border-t border-[#E0D3C5] pt-5">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#A47C60]">
                  Key Subjects & Methods
                </p>

                <div className="flex flex-wrap gap-2">
                  {education.courses.map((course) => (
                    <span
                      key={course}
                      className="rounded-full border border-[#E0D3C5] bg-[#F1E8DE] px-3 py-1.5 text-xs font-medium text-[#765D4B]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-[#E0D3C5] pt-5">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#A47C60]">
                  Technical Tools & Skills
                </p>

                <div className="flex flex-wrap gap-2">
                  {education.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-[#E0D3C5] bg-[#F1E8DE] px-3 py-1.5 text-xs font-medium text-[#765D4B]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
