import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gradient mb-8">
            About
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-8">
            Full-stack Software Engineer with 2.5+ years of experience building scalable web applications,
            GenAI systems, and cloud infrastructure. Built a RAG-based financial analyst from scratch and
            led an AWS cost optimization that cut infrastructure spend by 80%. Currently designing agentic
            AI workflows for content automation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin size={18} className="text-primary" />
              <span className="text-sm">Barwaha, Khargone, MP, India</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <GraduationCap size={18} className="text-primary" />
              <span className="text-sm">B.Tech — SGSITS, Indore (7.97 CGPA)</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
