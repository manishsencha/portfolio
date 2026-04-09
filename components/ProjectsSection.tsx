"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "Department Information System",
    period: "May 2022 – Apr 2023",
    description: "Built a microservices-based platform to automate previously manual departmental workflows. Refactored frontend architecture and designed reusable, configurable modules.",
    tech: ["Java", "Spring Boot", "Angular", "TypeScript", "MySQL"],
  },
];

const activities = [
  {
    title: "Coordinator — Computer Club",
    period: "Mar 2020 – Apr 2023",
    description: "Organized and managed multiple coding contests and technical workshops for students.",
  },
  {
    title: "C Programming Bootcamp Organizer",
    description: "Conducted a C programming bootcamp and taught core concepts to 100+ first-year students.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gradient mb-12">
            Projects & Activities
          </h2>
        </motion.div>

        <div className="grid gap-6 mb-12">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
                <h3 className="font-display text-foreground font-semibold">{proj.name}</h3>
                <span className="text-muted-foreground text-sm font-display">{proj.period}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{proj.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {proj.tech.map((t) => (
                  <span key={t} className="text-xs bg-secondary text-primary px-2 py-0.5 rounded font-display">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {activities.map((act, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-5"
            >
              <h4 className="font-display text-sm text-primary font-medium mb-1">{act.title}</h4>
              {act.period && <p className="text-muted-foreground text-xs font-display mb-2">{act.period}</p>}
              <p className="text-muted-foreground text-sm">{act.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
