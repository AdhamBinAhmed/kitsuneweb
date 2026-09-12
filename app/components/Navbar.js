"use client";

import { useEffect, useState } from "react";
import { FoxLogo, DownloadIcon } from "./Icons";
import LangSwitcher from "./LangSwitcher";
import LangTransition from "./LangTransition";
import { useLang } from "../i18n/LangContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  const links = [
    { label: t.nav.home, jp: t.nav.homeJp, href: "#home" },
    { label: t.nav.features, jp: t.nav.featuresJp, href: "#features" },
    { label: t.nav.download, jp: t.nav.downloadJp, href: "#download" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-line/60 bg-ink/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#home" className="flex items-center gap-2.5">
          <FoxLogo className="h-9 w-9" />
          <span className="font-display text-[1.15rem] font-bold tracking-wide">Kitsune Mask</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          <LangTransition>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm text-washi-dim transition-colors hover:text-washi"
              >
                <span className="font-display text-gold-soft opacity-60 transition-opacity group-hover:opacity-100">
                  {l.jp}
                </span>
                {l.label}
              </a>
            ))}
          </LangTransition>
        </div>

        <div className="flex items-center gap-3">
          <LangSwitcher />
          <div className="hidden md:block">
            <a
              href="#download"
              className="group inline-flex items-center gap-2 rounded-full border border-shu/50 bg-shu/10 px-5 py-2.5 text-sm font-semibold text-washi transition-colors hover:bg-shu"
            >
              <DownloadIcon className="h-4 w-4" />
              v30.6
            </a>
          </div>
        </div>

        <button
          className="rounded-full p-2 text-washi md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line/60 bg-ink/95 px-5 py-3 backdrop-blur-xl md:hidden">
          <LangTransition>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-washi-dim hover:bg-lacquer-2 hover:text-washi"
              >
                <span className="font-display text-gold-soft">{l.jp}</span>
                {l.label}
              </a>
            ))}
          </LangTransition>
          <a
            href="#download"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-shu px-4 py-3 text-center font-semibold text-washi"
          >
            <LangTransition>{t.nav.downloadMobile}</LangTransition>
          </a>
        </div>
      )}
    </header>
  );
}
