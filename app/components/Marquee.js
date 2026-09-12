"use client";

import { useLang } from "../i18n/LangContext";
import LangTransition from "./LangTransition";

export default function Marquee() {
  const { t } = useLang();
  const items = t.marquee;
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-line/60 bg-lacquer py-4">
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
        {loop.map((text, i) => (
          <span key={i} className="flex items-center gap-8 font-display text-lg text-washi-dim">
            <span className="text-gold">✦</span>
            {text}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}
