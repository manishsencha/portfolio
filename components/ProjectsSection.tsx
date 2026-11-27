"use client";

import { motion } from "framer-motion";
import { FolderGit2, Terminal, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

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
    <section id="projects" className="py-20">
      <div className="section-container">
        <SectionHeading eyebrow="Side quests" title="Projects & Activities" />

        <div className="grid gap-6 lg:grid-cols-5">
          {projects.map((proj) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="clay-ink flex flex-col rounded-[2rem] p-6 sm:p-7 lg:col-span-3"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="clay-primary flex size-12 items-center justify-center rounded-2xl">
                  <FolderGit2 size={22} />
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-ink-foreground/80">
                  {proj.period}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-bold">{proj.name}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-ink-foreground/70">{proj.description}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {proj.tech.map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold text-[hsl(32_95%_65%)]">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          <div className="flex flex-col gap-6 lg:col-span-2">
            {activities.map((act, i) => (
              <motion.div
                key={act.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="clay flex flex-1 gap-4 rounded-[1.75rem] p-5 sm:p-6"
              >
                <span className="clay-sm flex size-12 shrink-0 items-center justify-center rounded-2xl text-primary">
                  {i === 0 ? <Users size={22} /> : <Terminal size={22} />}
                </span>
                <div>
                  <h4 className="font-bold">{act.title}</h4>
                  {act.period && <p className="mt-0.5 text-xs font-semibold text-primary">{act.period}</p>}
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{act.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
