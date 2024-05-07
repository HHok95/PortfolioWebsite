import React from "react";
import NavBar from "../Components/NavBar";
import AboutSection from "../Components/AboutSection";
import FooterSection from "../Components/FooterSection";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div class="container mx-auto px-12 py-4 md:py-24 lg:py-32 mt-10">
        <AboutSection />
      </div>
      <FooterSection />
    </main>
  );
}
