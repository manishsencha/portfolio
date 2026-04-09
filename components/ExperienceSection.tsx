"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Tellect Networks Pvt. Ltd.",
    role: "Software Development Engineer",
    period: "Oct 2023 – Present",
    projects: [
      {
        name: "Zenith AI — AEO Platform",
        bullets: [
          "Developing an AEO platform to help technical brands win citations and visibility in LLMs like ChatGPT, Claude, Gemini.",
          "Architecting agentic workflows for Conversation-Driven Discovery; achieved 18.9% lift in citations and Share-of-Voice.",
          "Building systems for LLM-Aware Writing and SOV tracking, driving a 40% increase in AI-driven traffic.",
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
    <section id="experience" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gradient mb-12">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-primary font-display text-sm">{exp.company}</p>
                </div>
                <span className="text-muted-foreground text-sm font-display mt-1 md:mt-0">
                  {exp.period}
                </span>
              </div>

              <div className="space-y-6 ml-0 md:ml-4 border-l border-border pl-6">
                {exp.projects.map((proj, j) => (
                  <div key={j}>
                    <h4 className="font-display text-sm text-foreground font-medium mb-2">
                      {proj.name}
                    </h4>
                    <ul className="space-y-1.5 mb-3">
                      {proj.bullets.map((b, k) => (
                        <li key={k} className="text-muted-foreground text-sm leading-relaxed">
                          <span className="text-primary mr-2">▸</span>{b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tech.map((t) => (
                        <span key={t} className="text-xs bg-secondary text-primary px-2 py-0.5 rounded font-display">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
