"use client";

import { useLang } from "../i18n/LangContext";

/**
 * Full-screen curtain overlay that sweeps left → right
 * showing the selected language name during transitions.
 */
export default function LangOverlay() {
  const { overlayActive, overlayLabel, overlayPhase } = useLang();

  if (!overlayActive) return null;

  return (
    <div className="lang-overlay-root" aria-hidden="true">
      {/* Main curtain panel */}
      <div className={`lang-curtain ${
        overlayPhase === "sweep-in" ? "lang-curtain-enter" :
        overlayPhase === "hold" ? "lang-curtain-hold" :
        overlayPhase === "sweep-out" ? "lang-curtain-exit" : ""
      }`}>
        {/* Decorative top gold line */}
        <div className="lang-curtain-line lang-curtain-line-top" />

        {/* Content */}
        <div className={`lang-curtain-content ${
          overlayPhase === "hold" || overlayPhase === "sweep-out" ? "lang-curtain-content-visible" : ""
        }`}>
          {/* Small kanji accent */}
          <span className="lang-curtain-kanji">言語</span>

          {/* Language name */}
          <h2 className="lang-curtain-title">{overlayLabel}</h2>

          {/* Decorative dots */}
          <div className="lang-curtain-dots">
            <span className="lang-curtain-dot" />
            <span className="lang-curtain-dot" />
            <span className="lang-curtain-dot" />
          </div>
        </div>

        {/* Decorative bottom gold line */}
        <div className="lang-curtain-line lang-curtain-line-bottom" />
      </div>

      {/* Leading edge glow */}
      <div className={`lang-edge-glow ${
        overlayPhase === "sweep-in" ? "lang-edge-enter" :
        overlayPhase === "sweep-out" ? "lang-edge-exit" : "lang-edge-hold"
      }`} />
    </div>
  );
}
