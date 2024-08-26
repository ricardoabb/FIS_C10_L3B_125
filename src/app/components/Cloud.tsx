import { useEffect, useState } from 'react';
import { CloudElement } from './CloudElement';


type cloudProps = {
    x: number;
    y: number;
    color: string;
};

export function Cloud({ y=0, x=-100, color}: cloudProps) {
    const [xPos, setXPos] = useState(x); // Inicia fora da tela à esquerda
    const [yPos, setYPos] = useState(0);

    useEffect(() => {
        const moveCloud = () => {
            setXPos((prev) => (prev >= window.innerWidth ? -100 : prev + .1)); // Movimenta 1px por frame
            setYPos(y + Math.sin(xPos / 100) * 10); // Variação suave no eixo Y
        };

        const intervalId = setInterval(moveCloud, 16); // Aproximadamente 60 frames por segundo
        return () => clearInterval(intervalId);
    }, [xPos]);

    return (
        <div
            className="absolute "
            style={{ transform: `translate(${xPos}%, ${yPos}px)` }}
        >
            <CloudElement color={color} />
        </div>
    );
}
