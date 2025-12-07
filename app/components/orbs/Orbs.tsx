"use client";

import { useEffect } from "react";

export default function Orbs() {
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const orbs = document.querySelectorAll<HTMLElement>(".orb");

      orbs.forEach((orb) => {
        const speed = orb.dataset.speed || "20";
        const x = (window.innerWidth - e.clientX * parseFloat(speed)) / 250;
        const y = (window.innerHeight - e.clientY * parseFloat(speed)) / 250;

        orb.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="bg-layer">
      <div className="orb orb-lg" data-speed="15" />
      <div className="orb orb-md" data-speed="25" />
      <div className="orb orb-sm" data-speed="35" />
    </div>
  );
}
