import { useEffect, useRef } from 'react';

const DrawLineBetweenElements = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const elementA = document.getElementById('a');
    const elementB = document.getElementById('b');
    const canvas = canvasRef.current;

    if (elementA && elementB && canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const rectA = elementA.getBoundingClientRect();
        const rectB = elementB.getBoundingClientRect();
        const parentRect = canvas.parentElement?.getBoundingClientRect();

        // Calcule as coordenadas relativas ao elemento pai
        const startX = rectA.left + rectA.width / 2 - (parentRect?.left || 0);
        const startY = rectA.top + rectA.height / 2 - (parentRect?.top || 0);

        const endX = rectB.left + rectB.width / 2 - (parentRect?.left || 0);
        const endY = rectB.top + rectB.height / 2 - (parentRect?.top || 0);

        // Ajuste o tamanho do canvas para cobrir a área necessária
        canvas.width = parentRect?.width || window.innerWidth;
        canvas.height = parentRect?.height || window.innerHeight;

        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas

        // Desenhe a linha horizontal até o ponto de alinhamento vertical do ponto B
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, startY); // Linha horizontal
        ctx.strokeStyle = '#FF7F50'; // Cor da linha
        ctx.lineWidth = 2; // Espessura da linha
        ctx.stroke();

        // Desenhe a linha vertical do ponto de alinhamento até o ponto B
        ctx.beginPath();
        ctx.moveTo(endX, startY);
        ctx.lineTo(endX, endY); // Linha vertical
        ctx.stroke();
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
    ></canvas>
  );
};

export default DrawLineBetweenElements;