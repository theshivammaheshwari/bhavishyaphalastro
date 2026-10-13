"use client";

import { useEffect, useRef } from "react";

export function CelestialBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Generate stars
    const starCount = Math.min(120, Math.floor((width * height) / 12000));
    const stars: {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      speed: number;
      color: string;
      flickerSpeed: number;
    }[] = [];

    const starColors = ["#f4c866", "#ffffff", "#ffe9d5", "#f59e0b", "#d4af37"];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.3,
        alpha: Math.random() * 0.8 + 0.2,
        speed: (Math.random() - 0.5) * 0.15,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        flickerSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Draw faint constellation lines between nearby stars
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            const lineAlpha = (1 - dist / 110) * 0.08;
            ctx.strokeStyle = `rgba(244, 200, 102, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.y += star.speed;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        const flicker = Math.sin(frame * star.flickerSpeed) * 0.3;
        const currentAlpha = Math.max(0.1, Math.min(1, star.alpha + flicker));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = currentAlpha;
        ctx.fill();

        // Glow on larger stars
        if (star.radius > 1.2) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.globalAlpha = currentAlpha * 0.15;
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
      aria-hidden="true"
    />
  );
}
