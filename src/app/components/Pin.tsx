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
        <div key={id!} className={`pin absolute ${position} flex justify-center items-center  w-[2.5em] h-[2.5em] p-[2px] rounded-full bg-transparent border-2 border-orange-500 z-20`} onClick={() => openModal({
            title: title,
            content: content,


        })}>
            <span className='flex justify-center items-center bg-orange-500 text-sm md:text-base rounded-full w-full h-full '>0{id! + 1}</span>
        </div>
    )
}