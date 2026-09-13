"use client";

import { DownloadIcon, CheckIcon } from "./Icons";
import Reveal from "./Reveal";
import LangTransition from "./LangTransition";
import { useLang } from "../i18n/LangContext";

function Torii({ className = "" }) {
  return (
    <svg viewBox="0 0 400 200" className={className} fill="none" aria-hidden="true" preserveAspectRatio="none">
      {/* top beam (kasagi) */}
      <path d="M20 34 Q200 12 380 34 L392 44 Q200 24 8 44 Z" fill="url(#toriiG)" />
      {/* second beam (nuki) */}
      <rect x="46" y="60" width="308" height="16" fill="url(#toriiG)" />
      {/* center plaque */}
      <rect x="184" y="40" width="32" height="24" fill="url(#toriiG)" />
      {/* pillars */}
      <path d="M70 58 L84 58 L92 200 L62 200 Z" fill="url(#toriiG)" />
      <path d="M330 58 L316 58 L308 200 L338 200 Z" fill="url(#toriiG)" />
      <defs>
        <linearGradient id="toriiG" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f06148" />
          <stop offset="1" stopColor="#8f1d13" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Download() {
  const { t } = useLang();
  const highlights = t.download.highlights;

  return (
    <section id="download" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div className="bg-shrine pointer-events-none absolute inset-0 -z-10 opacity-80" />

      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <div className="relative">
            {/* torii framing */}
            <Torii className="absolute -top-8 left-1/2 h-40 w-[110%] -translate-x-1/2 opacity-90 drop-shadow-[0_10px_30px_rgba(143,29,19,0.5)]" />

            <div className="relative mt-28 rounded-3xl border border-gold/25 bg-lacquer/80 p-8 text-center backdrop-blur-xl sm:p-12">
              <span className="font-display text-sm tracking-[0.3em] text-gold">{t.download.offering}</span>
              <LangTransition>
                <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">{t.download.title}</h2>
              </LangTransition>

              <div className="mt-7 inline-flex flex-col items-center">
                <LangTransition>
                  <span className="text-sm uppercase tracking-[0.25em] text-washi-dim">{t.download.releaseLabel}</span>
                </LangTransition>
                <span className="mt-1 bg-gradient-to-r from-gold via-shu to-shu-deep bg-clip-text font-display text-6xl font-bold text-transparent">
                  v30.7
                </span>
              </div>

              <ul className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
                {highlights.map((h) => (
                  <li
                    key={h.t}
                    className="flex items-center gap-2 rounded-full border border-line/70 bg-ink/60 px-4 py-2 text-sm text-washi"
                  >
                    <span className="font-display text-gold">{h.jp}</span>
                    <span className="h-3 w-px bg-line" />
                    <LangTransition>{h.t}</LangTransition>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex justify-center">
                <a
                  href="/Kitsune_30.7_140326.apk"
                  download
                  className="group inline-flex items-center gap-2.5 rounded-full bg-shu px-9 py-4 text-lg font-semibold text-washi shadow-[0_10px_40px_-8px_rgba(225,75,58,0.6)] transition-transform hover:scale-[1.03]"
                >
                  <DownloadIcon className="h-6 w-6 transition-transform group-hover:translate-y-0.5" />
                  <LangTransition>{t.download.downloadBtn}</LangTransition>
                </a>
              </div>

              <p className="mt-4 flex items-center justify-center gap-2 text-sm text-washi-dim">
                <CheckIcon className="h-4 w-4 text-jade" />
                <LangTransition>{t.download.requires}</LangTransition>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
