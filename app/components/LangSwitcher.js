"use client";

import { useState, useRef, useEffect } from "react";
import { useLang } from "../i18n/LangContext";

export default function LangSwitcher() {
  const { lang, setLang, languages } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on click outside
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = languages.find((l) => l.code === lang);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="group flex items-center gap-1.5 rounded-full border border-line/70 bg-lacquer/60 px-3 py-2 text-sm text-washi-dim backdrop-blur transition-all duration-300 hover:border-gold/50 hover:text-washi"
        aria-label="Switch language"
        aria-expanded={open}
      >
        <span className="text-base leading-none">{current?.flag}</span>
        <span className="hidden font-medium sm:inline">{current?.native}</span>
        <svg
          viewBox="0 0 12 12"
          className={`h-3 w-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
        >
          <path d="M3 4.5 L6 7.5 L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dropdown */}
      <div
        className={`lang-dropdown absolute right-0 top-[calc(100%+8px)] z-[60] min-w-[180px] max-h-[400px] overflow-y-auto overflow-x-hidden rounded-2xl border border-line/70 bg-ink/95 p-1.5 shadow-2xl shadow-black/40 backdrop-blur-xl ${
          open ? "lang-dropdown-open" : "lang-dropdown-closed"
        }`}
      >
        {languages.map((l) => (
          <button
            key={l.code}
            onClick={() => {
              setLang(l.code);
              setOpen(false);
            }}
            className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-left text-sm transition-all duration-200 ${
              lang === l.code
                ? "bg-shu/15 text-washi"
                : "text-washi-dim hover:bg-lacquer-2 hover:text-washi"
            }`}
          >
            <span className="text-lg leading-none">{l.flag}</span>
            <div className="flex flex-col">
              <span className="font-medium">{l.native}</span>
              <span className="text-xs text-washi-dim">{l.label}</span>
            </div>
            {lang === l.code && (
              <span className="ml-auto text-shu">
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                  <path d="M3 8.5 L6.5 12 L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
