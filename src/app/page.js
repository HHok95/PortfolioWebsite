import React from "react";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";
import FooterSection from "./Components/FooterSection";
import AboutSection from "./Components/AboutSection";
import ProjectsSection from "./Components/ProjectsSection";
import ExperienceSection from "./Components/ExperienceSection";
import ContactSection from "./Components/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#202020]">
      <NavBar />
      <div className="container mx-auto px-12 py-4 mt-0">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <FooterSection />
    </main>
  );
}
