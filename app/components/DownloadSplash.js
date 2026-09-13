"use client";

import { useEffect, useState } from "react";

export default function DownloadSplash({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  // Animate progress bar (simulates site loading)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = prev < 30 ? 4 : prev < 70 ? 2 : prev < 90 ? 3 : 5;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  // After progress completes, fade out
  useEffect(() => {
    if (progress < 100) return;
    const timer = setTimeout(() => setFadeOut(true), 600);
    return () => clearTimeout(timer);
  }, [progress]);

  // After fade out, notify parent
  useEffect(() => {
    if (!fadeOut) return;
    const timer = setTimeout(() => onComplete(), 700);
    return () => clearTimeout(timer);
  }, [fadeOut, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9998] flex flex-col items-center justify-center transition-all duration-700 ${
        fadeOut ? "pointer-events-none opacity-0 scale-105" : "opacity-100"
      }`}
      style={{
        background: "linear-gradient(135deg, #0b0809 0%, #17100f 40%, #1f1614 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-seigaiha absolute inset-0 opacity-30" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(50rem 40rem at 50% 40%, rgba(225,75,58,0.15), transparent 60%)",
          }}
        />
      </div>

      {/* Top kintsugi line */}
      <div
        className="absolute top-[30%] left-[10%] right-[10%] h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(227,182,88,0) 8%, rgba(227,182,88,0.4) 50%, rgba(227,182,88,0) 92%, transparent)",
        }}
      />

      {/* Bottom kintsugi line */}
      <div
        className="absolute bottom-[30%] left-[10%] right-[10%] h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(227,182,88,0) 8%, rgba(227,182,88,0.4) 50%, rgba(227,182,88,0) 92%, transparent)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        {/* Logo */}
        <div className="relative h-28 w-28 sm:h-36 sm:w-36">
          <div className="pointer-events-none absolute inset-0 -z-10 scale-125 rounded-full bg-shu/25 blur-3xl" />
          <img
            src="/logo.png"
            alt="Kitsune Mask"
            className="h-full w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            style={{
              animation: "float-mask 4s ease-in-out infinite",
            }}
          />
        </div>

        {/* Title */}
        <div className="flex flex-col items-center gap-2">
          <span
            className="font-display text-sm tracking-[0.3em]"
            style={{ color: "#e3b658" }}
          >
            狐面 · v30.7
          </span>
          <h1
            className="font-display text-4xl font-bold sm:text-5xl"
            style={{
              background: "linear-gradient(135deg, #f4ece0 0%, #e3b658 50%, #e14b3a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Kitsune Mask
          </h1>
        </div>

        {/* Loading dots */}
        <div className="flex gap-2 mt-1">
          <span className="lang-curtain-dot" />
          <span className="lang-curtain-dot" />
          <span className="lang-curtain-dot" />
        </div>

        {/* Progress bar */}
        <div className="w-64 sm:w-80">
          <div
            className="h-1 overflow-hidden rounded-full"
            style={{ background: "rgba(58,42,37,0.7)" }}
          >
            <div
              className="h-full rounded-full transition-all duration-150 ease-out"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #e3b658, #e14b3a)",
                boxShadow: "0 0 12px rgba(225,75,58,0.5)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
