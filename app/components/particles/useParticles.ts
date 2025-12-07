"use client";

import { useCallback, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export default function useParticles(
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>
) {
  const particles = useRef<Particle[]>([]);
  const ctx = useRef<CanvasRenderingContext2D | null>(null);

  const initialize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    ctx.current = context;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create particles
    particles.current = Array.from({ length: 70 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.6 + 0.2,
    }));
  }, [canvasRef]);

  const drawParticles = () => {
    const canvas = canvasRef.current;
    if (!canvas || !ctx.current) return;

    ctx.current.clearRect(0, 0, canvas.width, canvas.height);

    const glow = ctx.current;

    particles.current.forEach((p) => {
      glow!.beginPath();
      glow!.fillStyle = `rgba(118, 156, 255, ${p.opacity})`;
      glow!.shadowColor = "rgba(118, 156, 255, 0.8)";
      glow!.shadowBlur = 12;
      glow!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      glow!.fill();

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
    });
  };

  const animate = useCallback(() => {
    drawParticles();
    requestAnimationFrame(animate);
  }, []);

  return { initialize, animate };
}
