"use client"

import React from 'react';
import { AnimatedText } from "./AnimatedText";
import { useModalStore } from "@/app/store/useModalStore";

type textInfoProp = {
    title?: string;
    content?: string;
    hide?: boolean;
    bgColor?: string;
    
};

export function TextBox({ content = "", title = "", hide = false, bgColor = "black" }: textInfoProp) {
    const { isOpen } = useModalStore();
    
    return (
        <div id="container" className={`relative ${isOpen ? 'w-full mb-24'  : 'w-[90%] mb-16' }  lg:w-[750px] h-[450px] md:h-[400px] mx-auto py-8 pt-14 px-5 ${bgColor} rounded-2xl shadow-md`}>


            <div id="title" className={`flex items-center justify-center gap-2 border-sand-500  ${hide ? "hidden" : "block"} `}>
                <div id="text" className="w-full">
                    <h1 className={`font-bold ${isOpen ? 'text-[#03273E] border-[#03273E]' : "text-white border-white"}  text-[1.769rem] md:text-[2.1rem] mb-2 md:mb-5 leading-9 md:leading-10 pb-2 border-b`}>{title}</h1>
                </div>
            </div>

            <div id="box-container" className={`rounded-2xl  shadow-solid `}>
                <div className={`text-sand-500`}>
                    <AnimatedText text={content} limit={290} />
                </div>
            </div>

        </div>
    )
}