"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Loader2, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/BrandIcons";
import { toast } from "sonner";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      toast.success("Message sent successfully!", {
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      toast.error("Failed to send message", {
        description: error.message || "Please try again later or contact me directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="section-container relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-gradient mb-6">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Interested in working together or just want to chat about tech? Fill out the form below or reach out through my socials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold font-display mb-4">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
            
            <div className="flex flex-col space-y-6">
              <a
                href="mailto:manishsencha2001@gmail.com"
                className="group flex items-center gap-4 text-muted-foreground hover:text-primary transition-all duration-300 w-fit"
              >
                <div className="p-3 rounded-xl bg-secondary/50 group-hover:bg-primary/10 transition-colors">
                  <Mail size={20} className="group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-medium text-foreground">manishsencha2001@gmail.com</span>
              </a>
              <a
                href="https://gh.manishsencha.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-muted-foreground hover:text-primary transition-all duration-300 w-fit"
              >
                <div className="p-3 rounded-xl bg-secondary/50 group-hover:bg-primary/10 transition-colors">
                  <GitHubIcon size={20} className="group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-medium text-foreground">gh.manishsencha.dev</span>
              </a>
              <a
                href="https://li.manishsencha.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-muted-foreground hover:text-primary transition-all duration-300 w-fit"
              >
                <div className="p-3 rounded-xl bg-secondary/50 group-hover:bg-primary/10 transition-colors">
                  <LinkedInIcon size={20} className="group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-medium text-foreground">li.manishsencha.dev</span>
              </a>
              <a
                href="https://ig.manishsencha.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-muted-foreground hover:text-primary transition-all duration-300 w-fit"
              >
                <div className="p-3 rounded-xl bg-secondary/50 group-hover:bg-primary/10 transition-colors">
                  <InstagramIcon size={20} className="group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-medium text-foreground">ig.manishsencha.dev</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6 bg-secondary/30 p-8 rounded-3xl backdrop-blur-sm border border-secondary/50 shadow-xl">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground font-medium py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-all active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none mt-2 shadow-lg shadow-primary/20"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
