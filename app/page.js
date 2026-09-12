"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Features from "./components/Features";
import Download from "./components/Download";
import Footer from "./components/Footer";
import LangOverlay from "./components/LangOverlay";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Download />
      </main>
      <Footer />
      <LangOverlay />
    </>
  );
}
