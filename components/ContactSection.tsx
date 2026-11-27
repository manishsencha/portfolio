"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import { socials } from "@/lib/site";
import SectionHeading from "@/components/SectionHeading";
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

  const inputClass =
    "clay-inset w-full rounded-2xl px-4 py-3 outline-none transition-shadow placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/40";

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <SectionHeading eyebrow="Contact" title="Let's connect" />

        <div className="grid items-stretch gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="clay-ink flex min-w-0 flex-col rounded-[2rem] p-6 sm:p-8 lg:col-span-2"
          >
            <h3 className="text-2xl font-bold">Get in touch</h3>
            <p className="mt-2 leading-relaxed text-ink-foreground/70">
              I&apos;m open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll get back to you.
            </p>
            <ul className="mt-6 space-y-3">
              {socials.map(({ label, href, display, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl p-1.5 transition-colors hover:bg-white/5"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[hsl(32_95%_62%)] transition-transform group-hover:scale-105">
                      <Icon size={20} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-ink-foreground/60">{label}</span>
                      <span className="block truncate font-medium">{display}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="clay flex min-w-0 flex-col gap-5 rounded-[2rem] p-6 sm:p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="px-1 text-sm font-semibold text-foreground/80">Name</label>
                <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="John Doe" className={inputClass} />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="px-1 text-sm font-semibold text-foreground/80">Email</label>
                <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" className={inputClass} />
              </div>
            </div>

            <div className="flex flex-1 flex-col space-y-2">
              <label htmlFor="message" className="px-1 text-sm font-semibold text-foreground/80">Message</label>
              <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} placeholder="Your message here..." className={`${inputClass} flex-1 resize-none`} />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="clay-primary clay-press flex items-center justify-center gap-2 rounded-2xl px-4 py-3.5 font-semibold disabled:pointer-events-none disabled:opacity-70"
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
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
