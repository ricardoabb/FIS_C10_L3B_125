'use client'
import React, { useEffect, useState } from "react";

export function Stars() {
  const [stars, setStars] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const starCount = 300; // Número de estrelas
    const starElements: JSX.Element[] = [];

    for (let i = 0; i < starCount; i++) {
      const size = Math.floor(Math.random() * 2) + 2; // Tamanho entre 10 e 18px
      const xPos = Math.random() * 100;
      const yPos = Math.random() * 100;

      starElements.push(
        <div
          key={i}
          className={`absolute bg-white rounded-full ${size > 2 ? 'opacity-50' : 'opacity-1' }`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${xPos}%`,
            top: `${yPos}%`,
          }}
        />
      );
    }

    setStars(starElements);
  }, []);

  return <div className="absolute top-0 left-0 w-full h-full overflow-hidden">{stars}</div>;
};

