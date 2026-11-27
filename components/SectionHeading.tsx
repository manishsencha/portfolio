"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, action }: { eyebrow: string; title: string; action?: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-8 flex items-end justify-between gap-4 px-1"
    >
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">{title}</h2>
      </div>
      {action}
    </motion.div>
  );
}
