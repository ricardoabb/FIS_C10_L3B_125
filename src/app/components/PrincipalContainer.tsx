"use client"
import Image from 'next/legacy/image';
import React, { useEffect, useState } from 'react';

import city from '@/app/assets/city.webp';
import cloudMedium from '@/app/assets/cloud-medium.webp';
import cloudPrincipal from '@/app/assets/cloud-large.webp';
import thunder from '@/app/assets/thunder.webp';
import iconWaves from '@/app/assets/icon-waves.png';

import { card } from '../utils/info';
import { Stars } from './Stars';
import { Pin } from './Pin';
import DrawLineBetweenElements from './DrawLineBetweenElements';
import { Cloud } from './Cloud';

type textInfoProp = {
    title?: string;
    content?: string;
    imageThumb?: string;
    image1?: string;
    image2?: string;
    video?: string;
    tapeColor?: string;
    bgColor?: string;

};

export function PrincipalContainer({ title = "title test", content, imageThumb = "", image1 = "", image2 = "", video = "", tapeColor = "fill-red-300", bgColor, }: textInfoProp) {

    const [lineAttributes, setLineAttributes] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });

    useEffect(() => {
        const elementA = document.getElementById('a');
        const elementB = document.getElementById('b');

        if (elementA && elementB) {
            const rectA = elementA.getBoundingClientRect();
            const rectB = elementB.getBoundingClientRect();

            setLineAttributes({
                x1: rectA.left + rectA.width / 2,
                y1: rectA.top + rectA.height / 2,
                x2: rectB.left + rectB.width / 2,
                y2: rectB.top + rectB.height / 2,
            });
        }
    }, []);


    return (
        <div className='relative w-full bg-gradient-to-b from-sky-950 to-sky-600 '>
            < Cloud x={0} y={80} color='fill-slate-900' />
            < Cloud x={-50} y={90} color='fill-slate-900' />
            < Cloud x={100} y={98} color='fill-slate-900' />
            < Cloud x={200} y={110} color='fill-slate-900' />
            < Cloud x={700} y={110} color='fill-slate-900' />
            < Cloud x={500} y={90} color='fill-slate-900' />

            < Cloud x={0} y={300} color='fill-slate-900' />
            < Cloud x={-50} y={500} color='fill-slate-900' />
            < Cloud x={100} y={250} color='fill-slate-900' />
            < Cloud x={200} y={600} color='fill-slate-900' />
            < Cloud x={700} y={550} color='fill-slate-900' />
            < Cloud x={500} y={350} color='fill-slate-900' />
            <Stars />
            <div id='image-bg' className='relative w-full '>
                {card?.map((item, index) => {
                    return <Pin key={index} id={index} title={item.title} content={item.content} position={item.position} />
                })}


                {/* <div id='a' className='pin absolute top-[62%] right-[23%]  flex justify-center items-center  w-[2.5em] h-[2.5em] p-[2px] rounded-full bg-transparent border-2 border-orange-500 z-20'>
                    <span className='flex justify-center items-center bg-orange-500 text-sm md:text-base rounded-full w-full h-full '>01</span>
                </div> */}

                <div id='b' className='absolute top-[93%] right-[10%] w-11 h-[30px] z-20'>
                    <Image
                        src={iconWaves}
                        alt='ícone de ondas'
                        width={0}
                        height={0}
                        sizes='100vh'
                        quality={100}
                        priority={true}
                        unoptimized={true}
                    />
                </div>

                <DrawLineBetweenElements />

                <div id='principal' className='absolute top-0 -left-9 w-[50%] md:w-[40%] h-full mb-[3em] mx-auto transition-all ease-in-out'>
                    <Image
                        src={thunder}
                        alt={title}
                        width={0}
                        height={0}
                        sizes='100vh'
                        quality={100}
                        priority={true}
                        unoptimized={true}
                    />
                </div>
                <div className='absolute top-[20rem] -right-60 -scale-x-100 -rotate-12 w-[50%] md:w-[30%] h-full mb-[3em] mx-auto transition-all ease-in-out'>
                    <Image
                        src={thunder}
                        alt={title}
                        width={0}
                        height={0}
                        sizes='100vh'
                        quality={100}
                        priority={true}
                        unoptimized={true}
                    />
                </div>

                <div className='absolute top-[14rem] sm:top-[18rem] md:top-[30rem] -scale-x-100 left-1/2 sm:left-1/3 -translate-x-1/2 -rotate-12   w-[70%] md:w-[800px] h-full mb-[3em] mx-auto transition-all ease-in-out'>
                    <Image
                        src={thunder}
                        alt={title}
                        width={0}
                        height={0}
                        sizes='100vh'
                        quality={100}
                        priority={true}
                        unoptimized={true}
                    />
                </div>
                <div className='absolute -left-28 sm:-left-48 -top-11 w-[50%] md:w-[32%] h-full mb-[3em] mx-auto transition-all ease-in-out'>
                    <Image
                        src={cloudMedium}
                        alt={title}
                        width={0}
                        height={0}
                        sizes='100vh'
                        quality={100}
                        priority={true}
                        unoptimized={true}
                    />
                </div>
                <div className=' w-[50%] md:w-[500px] h-full mb-[3em] mx-auto transition-all ease-in-out'>
                    <Image
                        src={cloudMedium}
                        alt={title}
                        width={0}
                        height={0}
                        sizes='100vh'
                        quality={100}
                        priority={true}
                        unoptimized={true}
                    />
                </div>
                <div className='w-full md:w-4/5 h-full mb-[10em] mx-auto transition-all ease-in-out'>
                    <Image
                        src={cloudPrincipal}
                        alt={title}
                        width={0}
                        height={0}
                        sizes='100vh'
                        quality={100}
                        priority={true}
                        unoptimized={true}
                    />
                </div>
                <div className='w-[140%] translate-x-[-15%] sm:translate-x-0 sm:w-full h-full mx-auto '>
                    <Image
                        src={city}
                        alt={title}
                        width={0}
                        height={0}
                        sizes='100vh'
                        quality={100}
                        priority={true}
                        unoptimized={true}
                    />
                </div>
            </div>

        </div>
    )
}