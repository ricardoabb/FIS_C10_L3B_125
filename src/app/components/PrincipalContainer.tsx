"use client"
import Image from 'next/legacy/image';
import React from 'react';

import eElement from '@/app/assets/element-e.png';
import city from '@/app/assets/city.webp';
import cloudPrincipal from '@/app/assets/cloud-large.png';

import { TextBox } from './TextBox';

import { info } from '../utils/info';
import InteractiveImage from './InteractiveImage';
import { Starts } from './Start';



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


    return (
        <div className='relative w-full bg-gradient-to-b from-sky-950 to-sky-600 '>
            <Starts />
            <div id='image-bg' className='relative w-full overflow-hidden'>
                <div className='pin flex justify-center items-center absolute top-[50%] left-[20%] w-[2.5em] h-[2.5em] p-[2px] rounded-full bg-transparent border-2 border-orange-500 z-20'>
                    <span className='flex justify-center items-center bg-orange-500 text-sm md:text-base rounded-full w-full h-full '>01</span>
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