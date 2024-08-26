"use client"

import React from 'react';
import { AnimatedText } from "./AnimatedText";
import { useModalStore } from "@/app/store/useModalStore";

type textInfoProp = {
    id?: number;
    title?: string;
    content?: string;
    position?: string;


};

export function Pin({ id, title = "", content = "", position }: textInfoProp) {
    const openModal = useModalStore((state) => state.openModal);
    const { isOpen } = useModalStore();



    return (
        <div key={id!} id={id! +1  == 7 ? 'a' : `${id! +1}`} className={` pin absolute ${position} flex justify-center items-center  w-[3.5em] h-[3.5em] p-[2px] rounded-full bg-transparent border-2 border-orange-500 z-20 animate-pulse cursor-pointer `} onClick={() => openModal({
            title: title,
            content: content,
        })}>
            <span className='flex justify-center items-center bg-orange-500 text-sm md:text-base rounded-full w-full h-full '>0{id! + 1}</span>
        </div>
    )
}