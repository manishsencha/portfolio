"use client";

import { motion } from "framer-motion";
import { Braces, Cloud, Database, LayoutTemplate, Server, Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const skillCategories = [
  { label: "Languages", Icon: Braces, items: ["TypeScript", "JavaScript", "Python", "Java", "Perl"] },
  { label: "Frontend", Icon: LayoutTemplate, items: ["React", "Next.js", "Angular", "Material UI"] },
  { label: "Backend", Icon: Server, items: ["Express", "Flask", "Spring Boot", "REST APIs"] },
  { label: "Databases", Icon: Database, items: ["PostgreSQL", "MongoDB", "Vector Databases"] },
  { label: "Cloud & Tools", Icon: Cloud, items: ["AWS", "Linux", "Git", "Webpack", "Nginx"] },
  { label: "GenAI", Icon: Sparkles, items: ["LLMs", "RAG Pipelines", "Agentic Workflows", "MCP"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <SectionHeading eyebrow="Toolkit" title="Skills" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map(({ label, Icon, items }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="clay rounded-[1.75rem] p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="clay-sm flex size-12 items-center justify-center rounded-2xl text-primary">
                  <Icon size={22} />
                </span>
                <h3 className="text-lg font-bold">{label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="clay-inset rounded-full px-3.5 py-1.5 text-sm font-medium text-foreground/80">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
