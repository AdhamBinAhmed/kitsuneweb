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

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Detect mobile for lighter rendering
    const isMobile = window.innerWidth < 768 || "ontouchstart" in window;
    const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 2);

    const colors = ["#e14b3a", "#e3b658", "#f06148", "#ffd27a"];
    let particles = [];

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Fewer particles on mobile
      const maxCount = isMobile ? 20 : 70;
      const divisor = isMobile ? 30 : 18;
      const count = Math.min(maxCount, Math.floor(w / divisor));
      particles = Array.from({ length: count }, () => spawn(true));
    };

    const spawn = (initial) => ({
      x: Math.random() * w,
      y: initial ? Math.random() * h : h + 10,
      r: isMobile ? Math.random() * 1.6 + 0.4 : Math.random() * 2.2 + 0.6,
      vy: Math.random() * 0.6 + 0.25,
      vx: (Math.random() - 0.5) * 0.3,
      a: Math.random() * 0.6 + 0.2,
      tw: Math.random() * Math.PI * 2,
      color: colors[(Math.random() * colors.length) | 0],
    });

    // Throttle to ~30fps on mobile instead of 60fps
    let lastFrame = 0;
    const frameInterval = isMobile ? 33 : 0; // ~30fps on mobile

    const draw = (timestamp) => {
      raf = requestAnimationFrame(draw);

      if (!isVisible) return;

      if (isMobile && timestamp - lastFrame < frameInterval) return;
      lastFrame = timestamp;

      ctx.clearRect(0, 0, w, h);

      // Skip shadowBlur on mobile (huge GPU cost)
      if (!isMobile) {
        ctx.shadowBlur = 8;
      }

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
        if (!isMobile) ctx.shadowColor = p.color;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
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
    raf = requestAnimationFrame(draw);
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
