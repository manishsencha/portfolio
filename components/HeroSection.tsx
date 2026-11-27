"use client";

import { motion } from "framer-motion";
import EngineerPass from "@/components/hero/EngineerPass";
import StatusCard from "@/components/hero/StatusCard";
import MapCard from "@/components/hero/MapCard";
import FeaturedWork from "@/components/hero/FeaturedWork";
import Diorama from "@/components/hero/Diorama";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

function NowBuilding() {
  return (
    <div className="clay relative overflow-hidden rounded-[1.5rem] p-5 sm:max-w-[17rem]">
      <h3 className="font-bold">Now Building</h3>
      <p className="mt-1.5 text-sm font-semibold text-primary">Zenith AI · AEO</p>
      <p className="mt-1.5 pr-14 text-sm leading-relaxed text-muted-foreground">
        Agentic workflows that track how brands show up in LLM answers.
      </p>
      <svg viewBox="0 0 80 60" className="absolute bottom-0 right-0 w-20" aria-hidden>
        <circle cx="56" cy="16" r="8" fill="hsl(32 95% 70%)" />
        <path d="M0 60 Q20 36 44 46 T80 40 V60Z" fill="hsl(22 68% 62%)" />
        <path d="M20 60 Q50 44 80 52 V60Z" fill="hsl(16 58% 46%)" />
      </svg>
    </div>
  );
}

const HeroSection = () => {
  return (
    <section id="top" className="pt-8 sm:pt-12">
      <div className="section-container grid gap-6 lg:grid-cols-12 lg:gap-7">
        {/* Left column */}
        <div className="flex min-w-0 flex-col gap-6 lg:col-span-7 lg:gap-7">
          <motion.div {...rise(0)} className="px-1">
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              Hello, I&apos;m Manish <span className="inline-block origin-[70%_70%] animate-[wave_2.4s_ease-in-out_1]">👋</span>
            </h1>
            <p className="mt-3 max-w-xl text-lg text-muted-foreground">
              I build scalable web apps, GenAI systems and cloud infrastructure, and ship them end to end.
            </p>
          </motion.div>

          <motion.div {...rise(0.1)}>
            <EngineerPass />
          </motion.div>

          <motion.div {...rise(0.2)} className="relative">
            <div className="animate-float">
              <Diorama />
            </div>
            <div className="mt-4 sm:absolute sm:bottom-0 sm:right-0 sm:mt-0">
              <NowBuilding />
            </div>
          </motion.div>
        </div>

        {/* Right column */}
        <div className="flex min-w-0 flex-col gap-6 lg:col-span-5 lg:gap-7">
          <motion.div {...rise(0.15)}>
            <StatusCard />
          </motion.div>
          <motion.div {...rise(0.25)}>
            <MapCard />
          </motion.div>
          <motion.div {...rise(0.35)}>
            <FeaturedWork />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
