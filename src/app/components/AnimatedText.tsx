"use client"
import Image from "next/image";
import React, { useState, useEffect } from 'react';

import iconNext from '@/app/assets/icon-next.svg';

type TextBoxProps = {
    text: string;
    limit?: number;
    delay?: number;
};

export function AnimatedText({ text, limit = 140, delay = 5 }: TextBoxProps) {
    const [displayedText, setDisplayedText] = useState<string>('');
    const [remainingText, setRemainingText] = useState<string>(text);
    const [baseText, setBaseText] = useState<string>(text);
    const [textEnd, setTextEnd] = useState<boolean>(false);

    const [displayBtn, setDisplayBtn] = useState<string>('hidden');
    const [animationNextBtn, setAnimationNextBtn] = useState<string>('animate-fade-in-out');

    useEffect(() => {
        let currentText = '';
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            if (currentIndex < baseText.length) {
                currentText += baseText[currentIndex];
                if (currentText.length <= limit || (currentText.length > limit && baseText[currentIndex] !== ' ')) {

                    setDisplayedText(currentText);
                    baseText.length <= limit ? setDisplayBtn('') : setDisplayBtn('hidden')
                    baseText.length <= limit ? setAnimationNextBtn('') : setAnimationNextBtn('animate-fade-in-out')

                } else {
                    setRemainingText(baseText.slice(currentIndex));
                    setDisplayedText(currentText + '...');
                    clearInterval(intervalId);
                }
                currentIndex++;
            } else {
                clearInterval(intervalId);
                setTextEnd(!textEnd);

            }
        }, delay);


        return () => clearInterval(intervalId);
    }, [baseText, limit, delay]);

    function handlerLoadText() {
        setBaseText(remainingText);

    }

    function handlerBack() {
        setBaseText(text);

    }

    return (
        <div className="relative h-full flex flex-col justify-between z-40">
            <p className="text-base md:text-2xl whitespace-pre-wrap ">{displayedText}</p>
            {remainingText && <p style={{ display: 'none' }}>{remainingText}</p>}
            <div className={`${text.length <= limit ? "hidden" : "flex"} items-center ml-auto gap-3 `}>
                <a onClick={handlerBack} className={`${displayBtn} cursor-pointer animate-fade-in-out`}>voltar</a>
                <div className={`w-[41px] py-3 none cursor-pointer ${animationNextBtn}  `}>
                    <a onClick={handlerLoadText}  ><Image width={100} height={100} src={iconNext} alt="carregar restante do texto..." /></a>
                </div>
            </div>
        </div>
    );
};


