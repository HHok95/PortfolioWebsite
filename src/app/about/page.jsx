import React from "react";
import NavBar from "../Components/NavBar";
import AboutSection from "../Components/AboutSection";
import FooterSection from "../Components/FooterSection";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div class="container mx-auto pt-4 px-6 md:pt-12 lg:pt-24 mt-16">
        <AboutSection />
      </div>
      <FooterSection />
    </main>
  );
}
