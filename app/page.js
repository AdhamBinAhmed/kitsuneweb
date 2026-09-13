"use client";

import { useEffect, useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Features from "./components/Features";
import Download from "./components/Download";
import Footer from "./components/Footer";
import LangOverlay from "./components/LangOverlay";
import DownloadSplash from "./components/DownloadSplash";

export default function Home() {
  const [showSplash, setShowSplash] = useState(false);
  const [splashDone, setSplashDone] = useState(false);

  // Only show splash on first visit per session
  useEffect(() => {
    if (!sessionStorage.getItem("splash-shown")) {
      setShowSplash(true);
      sessionStorage.setItem("splash-shown", "1");
    } else {
      setSplashDone(true);
    }
  }, []);

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
    setShowSplash(false);
  }, []);

  return (
    <>
      {/* Splash overlay — site loads behind it */}
      {showSplash && <DownloadSplash onComplete={handleSplashComplete} />}

      {/* Main site (always rendered, loads in background) */}
      <div style={{ visibility: splashDone ? "visible" : "hidden" }}>
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
      </div>
    </>
  );
}
