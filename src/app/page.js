import React from "react";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";
import AboutSection from "./Components/AboutSection";
import ProjectsSection from "./Components/ProjectsSection";
import FooterSection from "./Components/FooterSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div class="container mx-auto pt-4 px-6 md:pt-24 lg:pt-32 mt-24">
        <HeroSection />
        <ProjectsSection />
      </div>
      <FooterSection />
    </main>
  );
}
