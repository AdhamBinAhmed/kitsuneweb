"use client";

import { useLang } from "../i18n/LangContext";

/**
 * Wraps content that should animate (fade + slide) when language changes.
 * Apply to sections/blocks of translatable text.
 */
export default function LangTransition({ children, className = "" }) {
  const { transitioning } = useLang();

  return (
    <div
      className={`lang-content ${transitioning ? "lang-exit" : "lang-enter"} ${className}`}
    >
      {children}
    </div>
  );
}
