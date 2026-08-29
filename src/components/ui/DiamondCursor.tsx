"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  life: number;
  maxLife: number;
  rotation: number;
  rotationSpeed: number;
}

export function DiamondCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let resizeTimeout: NodeJS.Timeout;

    const resizeCanvas = () => {
      // Debounce resize
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }, 100);
    };
    
    // Initial size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    window.addEventListener("resize", resizeCanvas);

    // Track mouse
    const handleMouseMove = (e: MouseEvent) => {
      // Create 1 or 2 particles per mouse move based on speed/probability
      if (Math.random() > 0.4) {
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 4 + 2, // Size between 2 and 6
          speedX: (Math.random() - 0.5) * 1.0,
          speedY: (Math.random() - 0.5) * 1.5 - 0.5, // Drift slightly up
          life: 0,
          maxLife: Math.random() * 30 + 30, // 30-60 frames
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1,
        });
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Animation loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.current.length; i++) {
        const p = particles.current[i];
        
        // Update physics
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;
        p.life++;

        // Remove dead particles
        if (p.life >= p.maxLife) {
          particles.current.splice(i, 1);
          i--;
          continue;
        }

        // Calculate opacity and scaling
        const progress = p.life / p.maxLife;
        const opacity = (1 - progress); // Increased opacity for better visibility
        const currentSize = p.size * (1 - progress * 0.3); // shrink slightly

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        // Draw diamond shape
        ctx.beginPath();
        ctx.moveTo(0, -currentSize);
        ctx.lineTo(currentSize, 0);
        ctx.lineTo(0, currentSize);
        ctx.lineTo(-currentSize, 0);
        ctx.closePath();
        
        // Fill and stroke - Darker gold tone
        ctx.fillStyle = `rgba(184, 134, 11, ${opacity})`; // DarkGoldenRod
        ctx.fill();
        
        ctx.strokeStyle = `rgba(218, 165, 32, ${opacity * 0.8})`; // GoldenRod border
        ctx.lineWidth = 1;
        ctx.stroke();
        
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };
    
    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Hidden on screens where hamburger menu is visible (lg:hidden means menu shows < 1024px)
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block"
    />
  );
}
