import React, { useEffect, useRef } from 'react';

export default function LightningBolt() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    // Função para desenhar um raio simples
    function drawSimpleLightning(x: number, y: number, length: number, angle: number, branchWidth: number) {
      if (!ctx) return; // Verificação redundante para ctx
      ctx.lineWidth = branchWidth;
      ctx.strokeStyle = `hsl(60, 100%, 80%)`;
      ctx.beginPath();
      ctx.moveTo(x, y);

      const endX = x + length * Math.cos(angle);
      const endY = y + length * Math.sin(angle);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    }

    // Animação com um único raio
    function animateLightning() {
      if (!ctx) return; // Verificação redundante para ctx
      ctx.clearRect(0, 0, width, height);
      drawSimpleLightning(width / 2, 0, height / 2, Math.PI / 2, 4);
    }

    // Usando requestAnimationFrame para animação contínua
    function startAnimation() {
      animateLightning();
      requestAnimationFrame(startAnimation);
    }

    startAnimation();

    return () => {
      if (ctx) {
        ctx.clearRect(0, 0, width, height); // Limpeza do canvas
      }
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
  );
}

