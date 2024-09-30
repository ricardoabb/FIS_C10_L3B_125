"use client"
import Image from 'next/legacy/image';
import React from 'react';

import eElement from '@/app/assets/element-e.png';
import titleElement from '@/app/assets/element-title.png';
import cloudElement from '@/app/assets/element-cloud.svg';
import { TextBox } from './TextBox';

import { info } from '../utils/info';
import { Cloud } from './Cloud';
import { useModalStore } from '../store/useModalStore';


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

export function Intro({ title = "title test" }: textInfoProp) {
    const { textEndState, changetextEndState } = useModalStore();

    const handleClick = (anchor: string) => {
        const introElement = document.getElementById(anchor);
        if (introElement) {
            introElement.scrollIntoView({ behavior: 'smooth' });
        }
        changetextEndState(false);
    };

    return (
        <div className='relative w-full pb-24 bg-gradient-to-b from-amber-500 to-yellow-400 pt-20 '>
            <div className='flex justify-center items-center gap-2 w-full -rotate-1 bg-orange-500 py-7 '>
                <h1 className='font-bold text-4xl text-center text-[#fff] '>CAMPO <br /> ELÉTRICO</h1>
                <div className='relative w-[52px] h-[62px]'>
                    <Image
                        src={eElement}
                        alt={title}
                        layout="fill" // Faz a imagem preencher o contêiner
                        objectFit="contain" // Ajusta a imagem para cobrir o contêiner  
                        priority={true}
                    />
                </div>
            </div>
            < Cloud x={0} y={500} color='fill-orange-500' />
            < Cloud x={200} y={310} color='fill-orange-500' />
            < Cloud x={90} y={90} color='fill-orange-500' />
            < Cloud x={0} y={600} color='fill-orange-500' />
            < Cloud x={-50} y={700} color='fill-orange-500' />
            < Cloud x={100} y={580} color='fill-orange-500' />
            < Cloud x={200} y={500} color='fill-orange-500' />
            < Cloud x={700} y={310} color='fill-orange-500' />
            < Cloud x={500} y={90} color='fill-orange-500' />


            < Cloud x={0} y={800} color='fill-orange-500' />
            < Cloud x={-50} y={900} color='fill-orange-500' />
            < Cloud x={100} y={980} color='fill-orange-500' />
            < Cloud x={200} y={1100} color='fill-orange-500' />
            < Cloud x={700} y={1100} color='fill-orange-500' />
            < Cloud x={500} y={900} color='fill-orange-500' />
            <div>
                <div className='relative w-80 h-[121px] mx-auto my-[60px]'>
                    <Image
                        src={titleElement}
                        alt={title}
                        layout="fill" // Faz a imagem preencher o contêiner
                        objectFit="contain" // Ajusta a imagem para cobrir o contêiner  
                        priority={true}
                    />
                </div>
                <div className='relative w-[auto] h-[460px] mb-12  mx-auto animate-float cursor-pointer' onClick={() => handleClick('intro')}>
                    <Image
                        src={cloudElement}
                        alt={title}
                        layout="fill" // Faz a imagem preencher o contêiner
                        objectFit="contain" // Ajusta a imagem para cobrir o contêiner  
                        priority={true}
                    />
                </div>
                <div id='intro' className=' relative py-[200px]'>
                    <TextBox title='' content={info.intro} bgColor='bg-orange-500 bg-opacity-75 text-white ' hide={true} />
                    
                        <div className={`absolute bottom-[-60px] left-[10%] md:left-[30%] ${textEndState ? 'h-[460px] opacity-100 cursor-pointer' : 'h-[0] opacity-0' } transition-all ease-in-out w-[200px]  mb-12  mx-auto animate-float'`} onClick={() => handleClick('principal')}>
                            <Image
                                src={cloudElement}
                                alt={title}
                                layout="fill" 
                                objectFit="contain" 
                                priority={true}
                            />
                        </div>                   
                </div>
            </div>
        </div>
    )
}