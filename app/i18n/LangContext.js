"use client";

import { createContext, useContext, useState, useCallback, useRef } from "react";
import { translations, languages } from "./translations";

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState("en");
  const [transitioning, setTransitioning] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);
  const [overlayLabel, setOverlayLabel] = useState("");
  const [overlayPhase, setOverlayPhase] = useState("idle"); // idle | sweep-in | hold | sweep-out
  const timeoutRef = useRef(null);

  const switchLang = useCallback((newLang) => {
    if (newLang === lang || overlayPhase !== "idle") return;

    const target = languages.find((l) => l.code === newLang);
    setOverlayLabel(target?.native || newLang);
    setOverlayActive(true);
    setOverlayPhase("sweep-in");

    // Phase 1: Sweep in (600ms)
    timeoutRef.current = setTimeout(() => {
      // Swap language while overlay covers everything
      setLang(newLang);
      setTransitioning(true);
      setOverlayPhase("hold");

      // Phase 2: Hold briefly (400ms)
      timeoutRef.current = setTimeout(() => {
        setOverlayPhase("sweep-out");

        // Phase 3: Sweep out (600ms)
        timeoutRef.current = setTimeout(() => {
          setOverlayActive(false);
          setOverlayPhase("idle");
          setTransitioning(false);
        }, 700);
      }, 400);
    }, 600);
  }, [lang, overlayPhase]);

  const t = translations[lang];

  return (
    <LangContext.Provider value={{
      lang,
      setLang: switchLang,
      t,
      transitioning,
      languages,
      overlayActive,
      overlayLabel,
      overlayPhase,
    }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
