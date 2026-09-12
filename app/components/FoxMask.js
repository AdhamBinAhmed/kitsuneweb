"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function FoxMask({ className = "" }) {
  const wrapRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;

    const onMove = (e) => {
      const r = wrap.getBoundingClientRect();
      const px = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const py = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      tx = Math.max(-1, Math.min(1, px));
      ty = Math.max(-1, Math.min(1, py));
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onLeave = () => {
      tx = 0; ty = 0;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      const ry = cx * 18;
      const rx = -cy * 14;
      if (innerRef.current)
        innerRef.current.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      if (Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    window.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrapRef} className={className} style={{ perspective: "900px" }}>
      <div
        ref={innerRef}
        className="animate-mask-float relative h-full w-full"
        style={{ transformStyle: "preserve-3d", transition: "transform 0.1s linear", willChange: "transform" }}
      >
        {/* halo glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-full bg-shu/30 blur-3xl" />
        <Image
          src="/logo.png"
          alt="Kitsune Mask logo"
          fill
          priority
          sizes="(max-width: 640px) 240px, 320px"
          className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
        />
      </div>
    </div>
  );
}
