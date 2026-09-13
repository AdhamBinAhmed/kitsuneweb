"use client";

import { useEffect, useRef } from "react";

export default function Embers({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h, raf;
    let isVisible = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const colors = ["#e14b3a", "#e3b658", "#f06148", "#ffd27a"];
    let particles = [];

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(70, Math.floor(w / 18));
      particles = Array.from({ length: count }, () => spawn(true));
    };

    const spawn = (initial) => ({
      x: Math.random() * w,
      y: initial ? Math.random() * h : h + 10,
      r: Math.random() * 2.2 + 0.6,
      vy: Math.random() * 0.6 + 0.25,
      vx: (Math.random() - 0.5) * 0.3,
      a: Math.random() * 0.6 + 0.2,
      tw: Math.random() * Math.PI * 2,
      color: colors[(Math.random() * colors.length) | 0],
    });

    const draw = () => {
      if (!isVisible) {
        raf = requestAnimationFrame(draw);
        return;
      }
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.y -= p.vy;
        p.x += p.vx + Math.sin(p.tw) * 0.2;
        p.tw += 0.02;
        if (p.y < -10) Object.assign(p, spawn(false));
        const flicker = p.a * (0.6 + 0.4 * Math.sin(p.tw * 2));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = flicker;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(draw);
    };

    // Pause animation when canvas is off-screen (save CPU/battery)
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    visibilityObserver.observe(canvas);

    // Also pause when tab is hidden
    const handleVisibility = () => {
      if (document.hidden) isVisible = false;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
      visibilityObserver.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
