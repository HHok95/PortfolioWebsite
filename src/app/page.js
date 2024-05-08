import React from "react";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";
import FooterSection from "./Components/FooterSection";
import AboutSection from "./Components/AboutSection";
import ProjectsSection from "./Components/ProjectsSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mx-auto px-12 py-4 mt-0">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
      <FooterSection />
    </main>
  );
}
