"use client"
import Image from 'next/legacy/image';
import React from 'react';

import eElement from '@/app/assets/element-e.png';
import titleElement from '@/app/assets/element-title.png';
import cloudElement from '@/app/assets/element-cloud.svg';
import { TextBox } from './TextBox';

import { info } from '../utils/info';
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

export function Intro({ title = "title test", content, imageThumb = "", image1 = "", image2 = "", video = "", tapeColor = "fill-red-300", bgColor, }: textInfoProp) {


    return (
        <div className='relative w-full pb-24 bg-gradient-to-b from-amber-500 to-yellow-400 pt-40 '>
            <div className='flex justify-center items-center gap-2 w-full -rotate-1 bg-orange-500 py-7 '>
                <h1 className='font-bold text-4xl text-center '>CAMPO <br /> ELÉTRICO</h1>
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
            < Cloud x={0} y={800} />
            < Cloud x={-50} y={900} />
            < Cloud x={100} y={980} />
            < Cloud x={200} y={1100} />
            <div>
                <div className='relative w-80 h-[121px] mx-auto my-[80px]'>
                    <Image
                        src={titleElement}
                        alt={title}
                        layout="fill" // Faz a imagem preencher o contêiner
                        objectFit="contain" // Ajusta a imagem para cobrir o contêiner  
                        priority={true}
                    />
                </div>
                <div className='relative w-[auto] h-[500px] mb-12 hover:-translate-y-2 mx-auto transition-all ease-in-out '>
                    <Image
                        src={cloudElement}
                        alt={title}
                        layout="fill" // Faz a imagem preencher o contêiner
                        objectFit="contain" // Ajusta a imagem para cobrir o contêiner  
                        priority={true}
                    />
                </div>
                <TextBox title='' content={info.intro} bgColor='bg-orange-500' hide={true} />
            </div>
        </div>
    )
}