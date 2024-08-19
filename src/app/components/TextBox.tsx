"use client"

import React from 'react';
import { AnimatedText } from "./AnimatedText";
import { useModalStore } from "@/app/store/useModalStore";

type textInfoProp = {
    title: string;
    content: string;
    hide: boolean;
    bgColor: string;
    
};

export function TextBox({ content = "", title = "", hide = false, bgColor = "black" }: textInfoProp) {
    const { isOpen } = useModalStore();


    return (
        <div id="container" className={`relative ${isOpen ? 'w-full mb-24 h-[450px] md:h-[356px]'  : 'w-[90%] mb-16 h-auto' }  lg:w-[750px]   mx-auto    py-8 pt-14 px-5 ${bgColor} bg-opacity-75 rounded-2xl shadow-md`}>


            <div id="title" className={`flex items-center justify-center gap-2 border-sand-500  ${hide ? "hidden" : "block"} `}>
                <div id="text">
                    <h1 className={`font-handlee ${isOpen ? 'text-pink-950' : "text-teal-500"}  text-[1.769rem] md:text-[2.1rem] mb-2 md:mb-5 leading-9 md:leading-10`}>{title}</h1>
                </div>
            </div>

            <div id="box-container" className={`rounded-2xl  shadow-solid `}>
                <div className={`text-white text-sand-500`}>
                    <AnimatedText text={content} limit={290} />
                </div>
            </div>

        </div>
    )
}