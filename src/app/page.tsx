"use client";
import Hero from "@/components/sections/hero-section";
import StatsStrip from "@/components/sections/stat-section";
import AboutSection from "@/components/sections/about-section";
import PillarsSection from "@/components/sections/pillar-section";
import ProgrammeSection from "@/components/sections/program-section";
import StoriesSection from "@/components/sections/stories-section";
import DonateBanner from "@/components/sections/donate-banner";
import NewsSection from "@/components/sections/news-section";
import PartnersSection from "@/components/sections/partner-section";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StatsStrip />
      <AboutSection />
      <PillarsSection />
      <ProgrammeSection />
      <StoriesSection />
      <DonateBanner />
      <NewsSection />
      <PartnersSection />
    </main>
  );
}
