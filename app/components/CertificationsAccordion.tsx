
"use client";

import { useState } from "react";

const certifications = [
  {
    title: "Foreign Exchange Trading – Level 1",
    organization: "TeleTrade Academy of Financial Trading",
    date: "March 2025",

    description:
      "Completed the Level 1 Foreign Exchange Trading Training Program, strengthening my understanding of financial market analysis, risk management, and Forex trading strategies.",

    skills: [
      "Forex Trading",
      "Financial Market Analysis",
      "Risk Management",
      "Trading Strategies",
    ],

    certificate: "/certificate/trading.pdf",
  },

  // Add new certifications here.
];

export default function CertificationsAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {certifications.map((cert, index) => (
        <div
          key={`${cert.title}-${index}`}
          className="overflow-hidden rounded-xl border border-[#E0D3C5] bg-[#FFFCF8]"
        >
          {/* CERTIFICATION HEADER */}
          <button
            type="button"
            aria-expanded={openIndex === index}
            aria-controls={`certification-panel-${index}`}
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            className="flex w-full items-center justify-between gap-4 p-5 text-left transition hover:bg-[#F1E8DE]"
          >
            <div>
              <p className="mb-2 text-xs font-medium text-[#A47C60]">
                {cert.date}
              </p>

              <h4 className="text-base font-semibold text-[#382E29]">
                {cert.title}
              </h4>

              <p className="mt-2 text-sm text-[#776A60]">
                {cert.organization}
              </p>
            </div>

            <span
              aria-hidden="true"
              className="shrink-0 text-2xl text-[#A47C60]"
            >
              {openIndex === index ? "−" : "+"}
            </span>
          </button>

          {/* CERTIFICATION DETAILS */}
          {openIndex === index && (
            <div
              id={`certification-panel-${index}`}
              className="border-t border-[#E0D3C5] px-5 py-6"
            >
              {/* DESCRIPTION */}
              <p className="mb-5 text-sm leading-7 text-[#776A60]">
                {cert.description}
              </p>

              {/* SKILLS */}
              <div className="border-t border-[#E0D3C5] pt-5">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#A47C60]">
                  Skills Acquired
                </p>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#E0D3C5] bg-[#F1E8DE] px-3 py-1.5 text-xs font-medium text-[#765D4B]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* PDF CERTIFICATE PREVIEW */}
              <div className="mt-6 border-t border-[#E0D3C5] pt-5">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#A47C60]">
                  Certificate
                </p>

                <div className="overflow-hidden rounded-lg border border-[#E0D3C5] bg-white">
                  <iframe
                    src={cert.certificate}
                    title={`${cert.title} Certificate`}
                    className="h-[450px] w-full md:h-[550px]"
                  />
                </div>

                {/* VIEW PDF BUTTON */}
                <a
                  href={cert.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#382E29] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-[#795B47]"
                >
                  View Full Certificate ↗
                </a>

                {/* DOWNLOAD PDF BUTTON */}
                <a
                  href={cert.certificate}
                  download
                  className="ml-0 mt-3 inline-flex items-center gap-2 rounded-full border border-[#C9B8A7] px-6 py-3 text-sm font-medium text-[#382E29] transition duration-300 hover:bg-[#EDE3D6] sm:ml-3"
                >
                  Download PDF ↓
                </a>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
