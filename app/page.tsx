import ProjectsSection from "./components/ProjectsSection";
import Image from "next/image";
import EducationAccordion from "./components/EducationAccordion";
import ExperienceAccordion from "./components/ExperienceAccordion";
import CertificationsAccordion from "./components/CertificationsAccordion";

const projects = [
  {
    number: "01",
    category: "QUANTITATIVE FINANCE",
    title: "Volatility-Targeted Time Series Momentum",
    description:
      "Exploring systematic momentum strategies, volatility targeting, and risk-adjusted portfolio performance.",
    tags: ["Python", "Asset Pricing", "Risk Management"],
    link: "https://github.com/benrejebmeryem9-99/Volatility-Targeted-Time-Series-Momentum",
  },
  {
    number: "02",
    category: "FINANCIAL DATA SCIENCE",
    title: "FinSentiment",
    description:
      "Exploring financial sentiment analysis and the relationship between textual information and financial market signals.",
    tags: ["NLP", "Data Science", "Financial Markets"],
    link: "",
  },
  {
    number: "03",
    category: "ECONOMICS & ARTIFICIAL INTELLIGENCE",
    title: "LLM Economic Sentiment Index",
    description:
      "Investigating large language models for measuring economic sentiment from financial news and central bank communications.",
    tags: ["LLMs", "Macroeconomics", "Text Analysis"],
    link: "",
  },
];

const researchInterests = [
  "Macroeconomics",
  "Quantitative Finance",
  "Financial Markets",
  "Econometrics",
  "Time-Series Forecasting",
  "Machine Learning",
  "Predictive Analytics",
  "Financial Modeling",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#382E29]">

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-[#E8DED2] bg-[#F8F5F0]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5 md:px-12">
          <a href="#" className="text-2xl font-semibold tracking-tight">
            MBR<span className="text-[#A47C60]">.</span>
          </a>

          <nav className="flex flex-wrap items-center gap-5 text-xs font-medium tracking-wide md:gap-8 md:text-sm">
            <a href="#about" className="transition hover:text-[#A47C60]">
              About
            </a>
            <a href="#research" className="transition hover:text-[#A47C60]">
              Research
            </a>
            <a href="#projects" className="transition hover:text-[#A47C60]">
              Projects
            </a>
            <a href="#background" className="transition hover:text-[#A47C60]">
              Background
            </a>
            <a href="#contact" className="transition hover:text-[#A47C60]">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:px-12 md:py-28">

          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-9 bg-[#A47C60]" />
              <p className="text-xs font-semibold uppercase tracking-[0.23em] text-[#A47C60]">
                Quantitative Economics & Finance · Research Student
              </p>
            </div>

            <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[43px]">
              Hi, I&apos;m
              <span className="block text-[#9C765D]">
                Meryem BEN REJEB.
              </span>
            </h1>

            <h2 className="mt-6 max-w-xl text-xl font-medium leading-snug text-[#57483F] md:text-2xl">
              Where economics, finance, and data science meet.
            </h2>

            <p className="mt-7 max-w-xl text-[15px] leading-8 text-[#776A60]">
              Passionate about economics, quantitative finance, and
              data science, I explore the intersection of financial
              markets, econometrics, and machine learning to better
              understand economic and financial dynamics.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-[#382E29] px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-[#795B47]"
              >
                Explore My Work ↗
              </a>

              <a
                href="/Meryem_Ben_Rejeb_CV.pdf"
                download
                className="rounded-full border border-[#C9B8A7] px-7 py-3.5 text-sm font-medium transition duration-300 hover:bg-[#EDE3D6]"
              >
                Download CV ↓
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-5 border-t border-[#E4DAD0] pt-6 text-sm text-[#776A60]">
              <a
                href="https://github.com/benrejebmeryem9-99"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#382E29]"
              >
                GitHub ↗
              </a>
              <span className="h-1 w-1 rounded-full bg-[#B9A693]" />
              <span>Tunisia</span>
              <span className="h-1 w-1 rounded-full bg-[#B9A693]" />
              <span>Research</span>
            </div>
          </div>

          {/* PROFILE PHOTO */}
          <div className="relative mx-auto flex w-full max-w-[440px] items-end justify-center">
            <div className="absolute bottom-0 left-1/2 h-[85%] w-[88%] -translate-x-1/2 rounded-t-[220px] bg-[#E9DDCF]" />
            <div className="absolute left-1 top-16 h-20 w-20 rounded-full border border-[#D1BDA7]" />

            <Image
              src="/meryem'sphoto.png"
              alt="Portrait of Meryem Ben Rejeb"
              width={400}
              height={550}
              priority
              className="relative z-10 h-auto max-h-[560px] w-auto max-w-full object-contain object-bottom"
            />

            <div className="absolute bottom-5 right-0 z-20 rounded-xl border border-[#E3D8CC] bg-[#FFFCF8]/95 px-5 py-3 shadow-sm">
              <p className="text-sm font-medium">
                Research Master&apos;s Student
              </p>
              <p className="mt-1 text-xs text-[#776A60]">
                Tunisia Polytechnic School
              </p>
              <p className="text-xs text-[#776A60]">
                University of Carthage
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="bg-[#FFFCF8] px-6 py-24 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_2fr]">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A47C60]">
              01 / Introduction
            </p>

            <h2 className="mt-5 text-3xl font-semibold md:text-4xl">
              A little
              <span className="block font-serif italic text-[#A47C60]">
                about me.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-[#57483F]">
              I am a Research Master&apos;s student in Quantitative
              Economics and Finance at Tunisia Polytechnic School,
              within the Laboratory of Industrial Economics and
              Management (LEGI). My research interests span
              macroeconomics, financial markets, econometrics,
              quantitative finance, and machine learning, with a
              focus on economic and financial modeling, time-series
              forecasting, market dynamics, and data-driven analysis.
            </p>

            <div className="mt-10 grid gap-6 border-t border-[#E5D9CC] pt-8 sm:grid-cols-2">

              <div>
                <p className="mb-2 text-xs uppercase tracking-widest text-[#A47C60]">
                  Academic Focus
                </p>
                <p className="font-medium">
                  Quantitative Economics & Finance
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs uppercase tracking-widest text-[#A47C60]">
                  Research Laboratory
                </p>
                <p className="font-medium">
                  LEGI · Tunisia Polytechnic School,
                  University of Carthage
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH INTERESTS */}
      <section id="research" className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A47C60]">
            02 / Areas of Interest
          </p>

          <h2 className="mt-5 text-3xl font-semibold md:text-4xl">
            Research Interests
            <span className="text-[#A47C60]">.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-[#776A60]">
            My academic interests connect economic reasoning,
            quantitative models, and computational approaches
            to understanding complex financial systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {researchInterests.map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-[#DCD0C3] bg-[#FFFCF8] px-5 py-3 text-sm text-[#57483F] transition duration-300 hover:-translate-y-1 hover:border-[#A47C60] hover:bg-[#EDE3D6]"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <ProjectsSection />

      {/* EDUCATION, CERTIFICATIONS & EXPERIENCE */}
      <section id="background" className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A47C60]">
            04 / My Background
          </p>

          <h2 className="mt-5 text-3xl font-semibold md:text-4xl">
            Education & Experience
            <span className="text-[#A47C60]">.</span>
          </h2>

          <div className="mt-12 grid items-start gap-12 md:grid-cols-2">

            {/* LEFT COLUMN */}
            <div>
              <h3 className="mb-6 font-serif text-2xl italic text-[#9C765D]">
                Education
              </h3>

              <EducationAccordion />

              <div className="mt-12">
                <h3 className="mb-6 font-serif text-2xl italic text-[#9C765D]">
                  Certifications
                </h3>

                <CertificationsAccordion />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div>
              <h3 className="mb-6 font-serif text-2xl italic text-[#9C765D]">
                Experience
              </h3>

              <ExperienceAccordion />
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#382E29] px-6 py-24 text-[#FFF9F2] md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D3BEA7]">
            05 / Get in Touch
          </p>

          <h2 className="mt-7 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Let&apos;s explore
            <span className="block font-serif italic text-[#D3BEA7]">
              new ideas together.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#D7CBC0]">
            I am interested in research opportunities, academic
            collaborations, and projects at the intersection of
            economics, quantitative finance, and data science.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://github.com/benrejebmeryem9-99"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#F8F5F0] px-7 py-3.5 text-sm font-medium text-[#382E29] transition hover:bg-[#E0CBB6]"
            >
              Explore My GitHub ↗
            </a>

            <a
              href="/Meryem_Ben_Rejeb_CV.pdf"
              download
              className="rounded-full border border-[#A48C78] px-7 py-3.5 text-sm font-medium transition hover:bg-[#57483F]"
            >
              Download CV ↓
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#57483F] bg-[#382E29] px-6 py-7 text-[#D7CBC0] md:px-12">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 text-xs">
          <p>
            © {new Date().getFullYear()} Meryem Ben Rejeb
          </p>
          <p>
            Designed with curiosity, research & purpose.
          </p>
          <a href="#" className="hover:text-white">
            Back to top ↑
          </a>
        </div>
      </footer>

    </main>
  );
}
