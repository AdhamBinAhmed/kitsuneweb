"use client";

import { useEffect, useState, useCallback } from "react";
import { FoxLogo, DownloadIcon } from "./Icons";
import LangSwitcher from "./LangSwitcher";
import LangTransition from "./LangTransition";
import { useLang } from "../i18n/LangContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const { t } = useLang();

  const links = [
    { label: t.nav.home, jp: t.nav.homeJp, href: "#home" },
    { label: t.nav.features, jp: t.nav.featuresJp, href: "#features" },
    { label: t.nav.download, jp: t.nav.downloadJp, href: "#download" },
  ];

  // Scroll detection for navbar background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: detect which section is currently in view
  useEffect(() => {
    const sectionIds = ["home", "features", "download"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu on Escape key
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape" && open) setOpen(false);
    },
    [open]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Close mobile menu when scrolling (user navigated)
  useEffect(() => {
    if (!open) return;
    const closeOnScroll = () => setOpen(false);
    window.addEventListener("scroll", closeOnScroll, { passive: true, once: true });
    return () => window.removeEventListener("scroll", closeOnScroll);
  }, [open]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      role="banner"
      className={`fixed inset-x-0 top-0 z-50 will-change-[background-color] transition-[background-color,border-color] duration-500 ${
        scrolled ? "border-b border-line/60 bg-ink/95 sm:bg-ink/80 sm:backdrop-blur-xl" : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5" role="navigation" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-2.5" aria-label="Kitsune Mask — Go to top">
          <FoxLogo className="h-9 w-9" />
          <span className="font-display text-[1.15rem] font-bold tracking-wide">Kitsune Mask</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          <LangTransition>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                aria-current={activeSection === l.href ? "page" : undefined}
                className={`group inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm transition-colors ${
                  activeSection === l.href
                    ? "text-washi"
                    : "text-washi-dim hover:text-washi"
                }`}
              >
                <span
                  className={`font-display text-gold-soft transition-opacity ${
                    activeSection === l.href ? "opacity-100" : "opacity-60 group-hover:opacity-100"
                  }`}
                >
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
              aria-label="Download Kitsune Mask v30.7"
            >
              <DownloadIcon className="h-4 w-4" />
              v30.7
            </a>
          </div>
        </div>

        <button
          className="rounded-full p-2 text-washi md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
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
        <div id="mobile-menu" role="menu" className="border-t border-line/60 bg-ink px-5 py-3 md:hidden">
          <LangTransition>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                aria-current={activeSection === l.href ? "page" : undefined}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-lacquer-2 ${
                  activeSection === l.href ? "text-washi" : "text-washi-dim hover:text-washi"
                }`}
              >
                <span className="font-display text-gold-soft">{l.jp}</span>
                {l.label}
              </a>
            ))}
          </LangTransition>
          <a
            href="#download"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-shu px-4 py-3 text-center font-semibold text-washi"
            aria-label="Download Kitsune Mask"
          >
            <LangTransition>{t.nav.downloadMobile}</LangTransition>
          </a>
        </div>
      )}
    </header>
  );
}
