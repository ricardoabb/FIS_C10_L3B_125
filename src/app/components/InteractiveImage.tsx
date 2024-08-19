import { useState, useEffect, useRef } from 'react';
import Image from 'next/legacy/image';
import citY from '@/app/assets/city.webp';

type Point = {
    id: number;
    top: number;
    left: number;
    content: string;
};

const points: Point[] = [
    { id: 1, top: 20, left: 30, content: 'Ponto 1' },
    { id: 2, top: 50, left: 70, content: 'Ponto 2' },
    { id: 3, top: 80, left: 50, content: 'Ponto 3' },
];

const InteractiveImage: React.FC = () => {
    const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
    const [positions, setPositions] = useState<Point[]>(points);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const updatePositions = () => {
            if (imageRef.current) {
                const rect = imageRef.current.getBoundingClientRect();

                const newPositions = points.map((point) => ({
                    ...point,
                    top: (point.top / 100) * rect.height,
                    left: (point.left / 100) * rect.width,
                }));

                setPositions(newPositions);
            }
        };

        updatePositions();
        window.addEventListener('resize', updatePositions);

        return () => {
            window.removeEventListener('resize', updatePositions);
        };
    }, []);

    return (
        <div className="relative w-full  max-w-4xl mx-auto" >
            <div className='absolute bottom-0 w-full h-auto '>
                <Image
                    src={citY}
                    alt={''}
                    width={0}
                    height={0}
                    sizes='100vh'
                    priority={true}
                />
            </div>

            {positions.map((point) => (
                <div
                    key={point.id}
                    className="absolute w-4 h-4 bg-red-500 rounded-full cursor-pointer"
                    style={{ top: `${point.top}px`, left: `${point.left}px` }}
                    onMouseEnter={() => setHoveredPoint(point.id)}
                    onMouseLeave={() => setHoveredPoint(null)}
                >
                    {hoveredPoint === point.id && (
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded shadow-lg">
                            {point.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default InteractiveImage;