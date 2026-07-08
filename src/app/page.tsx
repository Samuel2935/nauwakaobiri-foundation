"use client";
import Hero from "@/components/sections/Hero";
import StatsStrip from "@/components/sections/StatsStrip";
import AboutSection from "@/components/sections/AboutSection";
import PillarsSection from "@/components/sections/PillarsSection";
import ProgrammeSection from "@/components/sections/ProgrammeSection";
import StoriesSection from "@/components/sections/StoriesSection";
import DonateBanner from "@/components/sections/DonateBanner";
import NewsSection from "@/components/sections/NewsSection";
import PartnersSection from "@/components/sections/PartnersSection";

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
