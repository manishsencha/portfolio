import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="lg:pl-28">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="pb-32 pt-4 text-center text-xs text-muted-foreground lg:pl-28">
        © {new Date().getFullYear()} Manish Sencha. All rights reserved.
      </footer>
    </div>
  );
}
