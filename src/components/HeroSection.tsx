"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-display text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Full-Stack Engineer
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight mb-6">
            <span className="text-foreground">Manish</span>
            <br />
            <span className="text-gradient">Sencha</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light mb-8">
            Building scalable web applications, GenAI systems, and cloud infrastructure.
            Passionate about clean architecture and shipping end-to-end products.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center justify-center gap-5 mb-12"
        >
          <a href="https://github.com/manishsencha" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300">
            <Github size={22} />
          </a>
          <a href="https://linkedin.com/in/manish-sencha" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300">
            <Linkedin size={22} />
          </a>
          <a href="mailto:manishsencha2001@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300">
            <Mail size={22} />
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown size={20} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
