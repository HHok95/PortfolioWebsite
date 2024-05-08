import React from "react";
import NavBar from "../Components/NavBar";
import ProjectsSection from "../Components/ProjectsSection";
import FooterSection from "../Components/FooterSection";

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div class="container mx-auto pt-4 px-6 md:pt-24 lg:pt-32 mt-24">
        <ProjectsSection />
      </div>
      <FooterSection />
    </main>
  );
}
