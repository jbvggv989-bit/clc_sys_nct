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
        <svg className="arc arc1" viewBox="0 0 380 380" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="190" cy="190" r="170" strokeWidth="3" strokeDasharray="520 700" transform="rotate(-20 190 190)" />
        </svg>
        <svg className="arc arc2" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="150" cy="150" r="130" strokeWidth="2" strokeDasharray="380 600" transform="rotate(10 150 150)" />
        </svg>
        <span className="relative z-10 text-4xl sm:text-5xl font-black tracking-widest text-[var(--cr-accent)] font-sans select-none animate-pulse">TEST</span>
      </div>
    </div>
  );
}
