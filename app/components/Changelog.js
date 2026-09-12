"use client";

import Reveal from "./Reveal";
import { CheckIcon } from "./Icons";
import LangTransition from "./LangTransition";
import { useLang } from "../i18n/LangContext";

export default function Changelog() {
  const { t } = useLang();
  const changelog = t.changelog.entries;

  return (
    <div className="mt-24">
      <Reveal>
        <div className="flex items-center gap-4">
          <div className="kintsugi flex-1" />
          <span className="font-display whitespace-nowrap text-sm tracking-[0.3em] text-gold">
            {t.changelog.sectionTag}
          </span>
          <div className="kintsugi flex-1" />
        </div>
        <LangTransition>
          <h3 className="mt-6 text-center font-display text-3xl font-bold sm:text-4xl">
            {t.changelog.sectionTitle}
          </h3>
        </LangTransition>
      </Reveal>

      <div className="relative mt-14 pl-8 sm:pl-0">
        {/* central/left gold line */}
        <span className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-gold via-shu/60 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

        <div className="space-y-10">
          {changelog.map((rel, i) => (
            <Reveal key={rel.version} delay={i * 80}>
              <div
                className={`relative sm:flex sm:items-start sm:gap-8 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* node */}
                <span className="absolute -left-8 top-2 flex h-4 w-4 items-center justify-center sm:left-1/2 sm:-translate-x-1/2">
                  <span className="absolute h-4 w-4 animate-ember rounded-full bg-shu/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gold ring-4 ring-ink" />
                </span>

                {/* spacer for alternating side */}
                <div className="hidden sm:block sm:w-1/2" />

                {/* card */}
                <div className="sm:w-1/2">
                  <article className="rounded-2xl border border-line/70 bg-lacquer/70 p-6 transition-colors hover:border-gold/40">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="font-display text-2xl font-bold text-washi">{rel.version}</span>
                      {rel.tag && (
                        <span className="rounded-full border border-jade/40 bg-jade/10 px-2.5 py-0.5 text-xs font-semibold text-jade">
                          {rel.tag}
                        </span>
                      )}
                      <span className="ml-auto text-sm text-washi-dim">{rel.date}</span>
                    </div>

                    <LangTransition>
                      <ul className="space-y-2">
                        {rel.items.map((it) => (
                          <li key={it} className="flex gap-2.5 text-sm leading-relaxed text-washi-dim">
                            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-shu" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </LangTransition>

                    {rel.sub && (
                      <div className="mt-4 rounded-xl border border-line/60 bg-ink/50 p-4">
                        <LangTransition>
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gold">
                            {rel.sub.label}
                          </p>
                        </LangTransition>
                        <ul className="flex flex-wrap gap-2">
                          {rel.sub.items.map((s) => (
                            <li
                              key={s}
                              className="rounded-full border border-line/60 bg-lacquer px-3 py-1 text-xs text-washi-dim"
                            >
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </article>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
