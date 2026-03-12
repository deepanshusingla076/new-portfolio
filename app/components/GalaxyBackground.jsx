'use client';
import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const WORDS = [
  'React', 'Node.js', 'TypeScript', 'Python', 'Java',
  'MongoDB', 'Docker', 'Next.js', 'Express', 'PostgreSQL',
  'Spring Boot', 'AWS', 'Redux', 'Microservices',
];

export default function GalaxyBackground() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const isLight = theme === 'light';

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    // Max 12 very slow, very dim particles
    const count = Math.min(12, Math.floor((W * H) / 100000));
    const particles = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.05,
      vy: (Math.random() - 0.5) * 0.05,
      label: WORDS[i % WORDS.length],
      size: 10 + Math.random() * 3,
      base: 0.04 + Math.random() * 0.05,
      phase: Math.random() * Math.PI * 2,
    }));

    const COLOR = isLight ? '30,40,80' : '180,200,255';

    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.phase += 0.002;
        if (p.x < -80) p.x = W + 80;
        if (p.x > W + 80) p.x = -80;
        if (p.y < -30)   p.y = H + 30;
        if (p.y > H + 30) p.y = -30;

        const alpha = Math.max(0.025, Math.min(0.09, p.base + Math.sin(p.phase) * 0.012));
        ctx.font = `${p.size}px JetBrains Mono, monospace`;
        ctx.fillStyle = `rgba(${COLOR},${alpha})`;
        ctx.fillText(p.label, p.x, p.y);
      }
    }

    let lastTime = 0;
    const interval = 1000 / 12; // 12 FPS cap

    function loop(ts) {
      animId = requestAnimationFrame(loop);
      if (ts - lastTime < interval) return;
      lastTime = ts;
      draw();
    }

    animId = requestAnimationFrame(loop);

    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
      for (const p of particles) {
        if (p.x > W) p.x = Math.random() * W;
        if (p.y > H) p.y = Math.random() * H;
      }
    };
    window.addEventListener('resize', onResize, { passive: true });

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(animId);
      else { lastTime = 0; animId = requestAnimationFrame(loop); }
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
}
