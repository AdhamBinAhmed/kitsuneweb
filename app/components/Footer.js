"use client";

import { FoxLogo, TelegramIcon, GlobeIcon, CubeIcon } from "./Icons";
import LangTransition from "./LangTransition";
import { useLang } from "../i18n/LangContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative overflow-hidden border-t border-line/60 pt-16 pb-10">
      <div className="bg-seigaiha pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <FoxLogo className="h-9 w-9" />
              <span className="font-display text-lg font-bold tracking-wide">Kitsune Mask</span>
            </a>
            <LangTransition>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-washi-dim">
                {t.footer.tagline}
              </p>
            </LangTransition>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: TelegramIcon, href: "https://t.me/KitsuneUfork" },
                { Icon: GlobeIcon, href: "#" },
                { Icon: CubeIcon, href: "#" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line/70 bg-lacquer text-washi-dim transition-colors hover:border-shu/50 hover:text-shu"
                >
                  <s.Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {t.footer.columns.map((c) => (
            <div key={c.title}>
              <LangTransition>
                <h4 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-washi">
                  <span className="text-gold">{c.jp}</span>
                  {c.title}
                </h4>
              </LangTransition>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.text}>
                    <a href={l.href} className="link-underline text-sm text-washi-dim transition-colors hover:text-washi">
                      <LangTransition>{l.text}</LangTransition>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="kintsugi mt-12 w-full" />
        <LangTransition>
          <div className="mt-6 text-center text-sm text-washi-dim">
            {t.footer.copyright}
          </div>
        </LangTransition>
      </div>
    </footer>
  );
}
