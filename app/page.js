"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Features from "./components/Features";
import Download from "./components/Download";
import Footer from "./components/Footer";
import LangOverlay from "./components/LangOverlay";

export default function Home() {
  // Auto-download APK on first visit
  useEffect(() => {
    if (sessionStorage.getItem("apk-downloaded")) return;
    sessionStorage.setItem("apk-downloaded", "1");

    const timer = setTimeout(() => {
      const a = document.createElement("a");
      a.href = "/Kitsune_30.7_140326.apk";
      a.download = "Kitsune_30.7_140326.apk";
      document.body.appendChild(a);
      a.click();
      a.remove();
    }, 800);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
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
