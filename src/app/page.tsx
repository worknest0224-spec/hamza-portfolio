"use client";

import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Journey from "@/components/sections/Journey";
import Entrepreneurship from "@/components/sections/Entrepreneurship";
import Research from "@/components/sections/Research";
import AISection from "@/components/sections/AISection";
import Skills from "@/components/sections/Skills";
import Strengths from "@/components/sections/Strengths";
import Direction from "@/components/sections/Direction";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="overflow-x-clip">
        <Hero />
        <About />
        <Journey />
        <Entrepreneurship />
        <Research />
        <AISection />
        <Skills />
        <Strengths />
        <Direction />
      </main>
      <Footer />
    </>
  );
}
