"use client";

import { DownloadIcon, TelegramIcon } from "./Icons";
import FoxMask from "./FoxMask";
import Embers from "./Embers";
import LangTransition from "./LangTransition";
import { useLang } from "../i18n/LangContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      {/* backgrounds */}
      <div className="bg-shrine pointer-events-none absolute inset-0 -z-30" />
      <div className="bg-seigaiha pointer-events-none absolute inset-0 -z-20 opacity-70" />
      <Embers className="pointer-events-none absolute inset-0 -z-10 h-full w-full" />

      {/* vertical kanji accents */}
      <div className="vertical-text font-display pointer-events-none absolute left-5 top-1/2 hidden -translate-y-1/2 text-4xl text-gold/25 lg:block">
        {t.hero.kanjiLeft}
      </div>
      <div className="vertical-text font-display pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 text-4xl text-shu/25 lg:block">
        {t.hero.kanjiRight}
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-5 pt-28 pb-16 text-center">
        {/* mask */}
        <div className="animate-rise mb-2">
          <FoxMask className="h-[240px] w-[240px] sm:h-[300px] sm:w-[300px]" />
        </div>

        <div className="animate-rise mb-6 flex items-center gap-3 text-sm text-washi-dim" style={{ animationDelay: "0.1s" }}>
          <span className="h-px w-8 bg-gold/50" />
          <span className="font-display tracking-[0.3em] text-gold">{t.hero.tagline}</span>
          <span className="h-px w-8 bg-gold/50" />
        </div>

        <LangTransition>
          <h1 className="animate-rise font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl" style={{ animationDelay: "0.15s" }}>
            {t.hero.titleLine1}
            <br />
            <span className="bg-gradient-to-r from-gold via-shu to-shu-deep bg-clip-text text-transparent">
              {t.hero.titleLine2}
            </span>
          </h1>

          <p className="animate-rise mx-auto mt-7 max-w-xl text-pretty text-lg text-washi-dim" style={{ animationDelay: "0.2s" }}>
            {t.hero.description}
          </p>
        </LangTransition>

        <div className="animate-rise mt-10 flex flex-col items-center gap-4 sm:flex-row" style={{ animationDelay: "0.25s" }}>
          <a
            href="https://t.me/KitsuneUfork/139"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-shu px-8 py-4 font-semibold text-washi shadow-[0_10px_40px_-8px_rgba(225,75,58,0.6)] transition-transform hover:scale-[1.03] sm:w-auto"
          >
            <DownloadIcon className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
            <LangTransition>{t.hero.downloadBtn}</LangTransition>
          </a>
          <a
            href="https://t.me/KitsuneUfork"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/40 bg-lacquer/60 px-8 py-4 font-semibold text-washi backdrop-blur transition-colors hover:border-gold hover:bg-lacquer-2 sm:w-auto"
          >
            <TelegramIcon className="h-5 w-5 text-gold" />
            <LangTransition>{t.hero.telegramBtn}</LangTransition>
          </a>
        </div>
      </div>

      {/* fade to next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink" />
    </section>
  );
}
