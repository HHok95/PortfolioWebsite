import React from "react";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div class="container mx-auto px-12 py-4 mt-24">
        <HeroSection />
      </div>
    </main>
  );
}
