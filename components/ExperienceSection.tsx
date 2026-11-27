"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const experiences = [
  {
    company: "Tellect Networks Pvt. Ltd.",
    role: "Software Development Engineer",
    period: "Oct 2023 – Present",
    projects: [
      {
        name: "Zenith AI — AEO Platform",
        bullets: [
        ],
        tech: ["Python", "Next.js", "LLMs", "Agentic Workflows"],
      },
      {
        name: "Promethean Energy — AWS Cost Optimization",
        bullets: [
          "Consolidated 85% of 200+ redundant microservices, achieving 80% AWS cost reduction ($1,200+/mo to under $250/mo).",
          "Improved system stability by 3× (70% fewer incidents, 80% faster MTTR) and 5–10× performance gains.",
        ],
        tech: ["Python", "Flask", "AWS", "PostgreSQL"],
      },
      {
        name: "Fulkrum AI — RAG Financial Analyst",
        bullets: [
          "Single-handedly architected and built a RAG system for financial analysis with verifiable source citations.",
          "Designed document processing pipelines supporting PDFs, Excel; optimized accuracy through hallucination checks.",
        ],
        tech: ["Express", "React", "PostgreSQL", "Vector DB", "LLMs"],
      },
      {
        name: "Tellect.in — Core Platform",
        bullets: [
          "Migrated large production codebase from JavaScript to TypeScript; replaced legacy builds with Webpack.",
          "Delivered end-to-end features from pitch to production; applied OOP principles for improved robustness.",
        ],
        tech: ["TypeScript", "Perl", "PostgreSQL", "Linux"],
      },
    ],
  },
  {
    company: "ZignEx India Pvt. Ltd.",
    role: "Software Development Engineer (Intern → Full-time)",
    period: "Nov 2022 – Sept 2023",
    projects: [
      {
        name: "Angular Platform Development",
        bullets: [
          "Developed and refactored complex Angular interfaces to adapt to changing client requirements.",
          "Implemented Excel/CSV import-export pipelines and optimized large table rendering.",
          "Built reusable Angular components and shared modules, reducing duplication.",
        ],
        tech: ["Angular", "TypeScript", "REST APIs", "Git"],
      },
    ],
  },
  {
    company: "Coulomb.ai",
    role: "Frontend Developer Intern",
    period: "May 2022 – July 2022",
    projects: [
      {
        name: "Battery Observability Platform",
        bullets: [
          "Designed and implemented user-friendly dashboards using a data-centric AI approach.",
          "Created reusable, modular UI components for consistency and faster feature development.",
        ],
        tech: ["React", "JavaScript", "D3.js", "ApexCharts"],
      },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <SectionHeading eyebrow="Journey" title="Experience" />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="clay rounded-[2rem] p-5 sm:p-7"
            >
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <span
                    className={`${i === 0 ? "clay-primary" : "clay-ink"} flex size-14 shrink-0 items-center justify-center rounded-2xl text-xl font-extrabold`}
                  >
                    {exp.company[0]}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold leading-tight sm:text-xl">{exp.role}</h3>
                    <p className="text-sm font-semibold text-primary">{exp.company}</p>
                  </div>
                </div>
                <span className="clay-inset w-fit rounded-full px-3.5 py-1.5 text-xs font-semibold text-muted-foreground">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3">
                {exp.projects.map((proj) => (
                  <li key={proj.name} className="clay-inset rounded-[1.25rem] p-4 sm:p-5">
                    <h4 className="font-semibold">{proj.name}</h4>
                    {proj.bullets.length > 0 && (
                      <ul className="mt-2 space-y-1.5">
                        {proj.bullets.map((b) => (
                          <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {proj.tech.map((t) => (
                        <span key={t} className="clay-sm rounded-full px-2.5 py-1 text-xs font-semibold text-primary">
                          {t}
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
