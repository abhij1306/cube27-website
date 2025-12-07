"use client";

import { useEffect, useRef } from "react";
import useParticles from "./useParticles";

export default function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { initialize, animate } = useParticles(canvasRef);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    initialize();
    animate();

    const handleResize = () => {
      initialize();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initialize, animate]);

  return (
    <canvas
      ref={canvasRef}
      id="particle-canvas"
      className="absolute inset-0 pointer-events-none"
    />
  );
}
