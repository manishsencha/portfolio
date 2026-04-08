import { motion } from "framer-motion";

const skillCategories = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "Perl"] },
  { label: "Frontend", items: ["React", "Next.js", "Angular", "Material UI"] },
  { label: "Backend", items: ["Express", "Flask", "Spring Boot", "REST APIs"] },
  { label: "Databases", items: ["PostgreSQL", "MongoDB", "Vector Databases"] },
  { label: "Cloud & Tools", items: ["AWS", "Linux", "Git", "Webpack", "Nginx"] },
  { label: "GenAI", items: ["LLMs", "RAG Pipelines", "Agentic Workflows", "MCP"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gradient mb-12">
            Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors duration-300"
            >
              <h3 className="font-display text-primary text-sm tracking-wider uppercase mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-md font-body"
                  >
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
