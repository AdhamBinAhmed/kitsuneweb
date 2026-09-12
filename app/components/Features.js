"use client";

import {
  PaletteIcon,
  ShieldIcon,
  ListIcon,
  LifebuoyIcon,
  CubeIcon,
  GlobeIcon,
} from "./Icons";
import Reveal from "./Reveal";
import Changelog from "./Changelog";
import LangTransition from "./LangTransition";
import { useLang } from "../i18n/LangContext";

const iconMap = [PaletteIcon, ShieldIcon, ListIcon, LifebuoyIcon, CubeIcon, GlobeIcon];

export default function Features() {
  const { t } = useLang();
  const features = t.features.items.map((item, i) => ({
    ...item,
    icon: iconMap[i],
  }));

  return (
    <section id="features" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.6fr]">
          {/* sticky heading */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <span className="font-display text-sm tracking-[0.3em] text-gold">{t.features.sectionTag}</span>
              <LangTransition>
                <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
                  {t.features.sectionTitle}
                </h2>
                <p className="mt-5 max-w-sm text-washi-dim">
                  {t.features.sectionDesc}
                </p>
              </LangTransition>
              <div className="kintsugi mt-8 w-40" />
            </div>
          </Reveal>

          {/* list */}
          <div>
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.n} delay={i * 60}>
                  <article className="group relative border-t border-line/60 py-7 transition-colors first:border-t-0">
                    <div className="flex items-start gap-5 sm:gap-8">
                      <div className="flex flex-col items-center">
                        <span className="font-display text-2xl font-bold text-gold/70 transition-colors group-hover:text-gold sm:text-3xl">
                          {f.n}
                        </span>
                        <span className="vertical-text font-display mt-2 text-sm text-shu/70">
                          {f.jp}
                        </span>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span className="inline-flex rounded-xl border border-line/70 bg-lacquer p-2.5 text-shu transition-all duration-300 group-hover:border-shu/50 group-hover:text-gold">
                            <Icon className="h-5 w-5" />
                          </span>
                          <LangTransition>
                            <h3 className="font-display text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                              {f.title}
                            </h3>
                          </LangTransition>
                        </div>
                        <LangTransition>
                          <p className="mt-3 max-w-xl leading-relaxed text-washi-dim">{f.body}</p>
                        </LangTransition>
                      </div>
                    </div>
                    {/* hover glow bar */}
                    <span className="absolute inset-y-0 left-0 w-px scale-y-0 bg-gradient-to-b from-gold via-shu to-transparent transition-transform duration-500 group-hover:scale-y-100" />
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Changelog />
      </div>
    </section>
  );
}
