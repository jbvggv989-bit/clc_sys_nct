"use client";

import { useEffect, useState } from "react";
import { CLIENT } from "@/config/client";

export function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [unmounted, setUnmounted] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setHidden(true);
    }, 200);

    const unmountTimer = setTimeout(() => {
      setUnmounted(true);
    }, 700); // 200ms + 500ms for fade-out transition

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (unmounted) return null;

  return (
    <div className={`preloader${hidden ? " hidden" : ""}`}>
      <div className="preloader-inner" aria-hidden={hidden}>
        <svg className="arc arc1" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="200" cy="200" r="180" strokeWidth="3" strokeDasharray="560 800" transform="rotate(-20 200 200)" />
        </svg>
        <svg className="arc arc2" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="160" cy="160" r="140" strokeWidth="2" strokeDasharray="420 650" transform="rotate(10 160 160)" />
        </svg>
        <span className="relative z-10 text-4xl sm:text-5xl font-black tracking-widest text-[var(--cr-accent)] font-sans select-none animate-pulse">TEST</span>
      </div>
    </div>
  );
}
