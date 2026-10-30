
"use client";

import { useState } from "react";

const experiences = [
  {
    company: "United Gulf Financial Services North Africa - UGFS NA",
    role: "Private Equity",
    details: [
      "Conducted market research and sector analysis to identify investment opportunities.",
      "Participated in the screening and preliminary evaluation of investment opportunities.",
      "Analyzed financial statements and business models.",
      "Monitored portfolio companies using financial and operational KPIs.",
    ],
     tools: [
      "Microsoft Excel",
      "Financial Analysis",
      "Investment Screening",
      "KPI Monitoring",
      "Investment Screening",
    ],
  },
  {
    company: "TeleTrade, Tunisie",
    role: "Financial Markets & Trading",
    details: [
      "Analyzed Forex, commodities, and stock market indices.",
      "Applied technical analysis to identify market trends and price movements.",
      "Studied the impact of macroeconomic indicators, monetary policy, and geopolitical events on financial markets.",
      "Explored trading strategies and market dynamics.",
    ],
    tools: [
      "Technical Analysis",
      "MetaTrader 4/5",
      "TradingView",
      "Yahoo Finance",
    ],
  },
  {
    company: "Université Privée de Sousse / Université Tunisienne Internationale (UTI-Niger)",
    role: "Financial Reporting & Accounting",
    details: [
      "Supported financial reporting and accounting operations.",
      "Worked with business data and financial information.",
      "Used Odoo in reporting and operational workflows.",
    ],
    tools: [
      "Odoo ERP",
      "Microsoft Excel",
      "Sage Accounting",
      "Financial Reporting",
      "Bank Reconciliation",
      "Tunisian Taxation (TVA)",
      "African Taxation (TVA)",
    ], 
  },
  {
    company: "BOUMIZA SQUARE GROUPE",
    role: "Marketing & Communication Agent",
    details: [
      "Conducted market research and competitive analysis.",
      "Supported the organization of marketing campaigns and events.",
      "Created digital content and managed social media communication.",
    ],
    tools: [
      "Social Media Management",
      "Adobe Illustrator",
      "Adobe Premiere Pro",
      "Content Creation",
      "Digital Marketing",
    ],
   }
];

export default function ExperienceAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {experiences.map((experience, index) => (
        <div
          key={experience.company}
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
              <h4 className="text-base font-semibold text-[#382E29]">
                {experience.role}
              </h4>
              <p className="mt-1 text-sm text-[#A47C60]">
                {experience.company}
              </p>
            </div>

            <span className="text-2xl text-[#A47C60]">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>

          {openIndex === index && (
            <div className="border-t border-[#E0D3C5] px-5 py-5">
              <ul className="list-disc space-y-3 pl-5 text-sm leading-7 text-[#776A60]">
                {experience.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              
<div className="mt-6 border-t border-[#E0D3C5] pt-5">
  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#A47C60]">
    Key Tools & Methods
  </p>

  <div className="flex flex-wrap gap-2">
    {experience.tools.map((tool) => (
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
