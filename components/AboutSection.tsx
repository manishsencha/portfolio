"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const facts = [
  { Icon: MapPin, label: "Based in", value: "Barwaha, Khargone, MP, India" },
  { Icon: GraduationCap, label: "Education", value: "B.Tech, SGSITS Indore" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <SectionHeading eyebrow="About" title="A little about me" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="clay grid gap-8 rounded-[2rem] p-6 sm:p-9 md:grid-cols-5"
        >
          <p className="text-lg leading-relaxed text-foreground/80 md:col-span-3">
            Full-stack Software Engineer with 3+ years of experience building scalable web applications,
            GenAI systems, and cloud infrastructure. Built a RAG-based financial analyst from scratch and
            led an AWS cost optimization that cut infrastructure spend by 80%. Currently designing agentic
            AI workflows for content automation.
          </p>
          <div className="flex flex-col gap-4 md:col-span-2">
            {facts.map(({ Icon, label, value }) => (
              <div key={label} className="clay-inset flex items-center gap-4 rounded-2xl p-4">
                <span className="clay-primary flex size-11 shrink-0 items-center justify-center rounded-xl">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
                  <p className="font-semibold">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
