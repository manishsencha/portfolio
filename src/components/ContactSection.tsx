"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gradient mb-6">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            Interested in working together or just want to chat about tech? Feel free to reach out.
          </p>

          <div className="flex items-center justify-center gap-8">
            <a
              href="mailto:manishsencha2001@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-display text-sm"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
            <a
              href="https://github.com/manishsencha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-display text-sm"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/manish-sencha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-display text-sm"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
