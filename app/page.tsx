import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ToolsSection } from "@/components/tools-section";
import { ExperienceSection } from "@/components/experience-section";
import { IndustriesSection } from "@/components/industries-section";
import { AchievementsSection } from "@/components/achievements-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ToolsSection />
      <ExperienceSection />
      <IndustriesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
