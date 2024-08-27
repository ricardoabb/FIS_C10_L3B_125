"use client"

import React, { useState, useEffect } from 'react';

import { useModalStore } from "../store/useModalStore";

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

    const { textEndState, changetextEndState, isOpen } = useModalStore();

    

    useEffect(() => {
        let currentText = '';
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            if (currentIndex < baseText.length) {
                currentText += baseText[currentIndex];
                if (currentText.length <= limit || (currentText.length > limit && baseText[currentIndex] !== ' ')) {

                    setDisplayedText(currentText);
                    baseText.length <= limit ? handlerTextEnd(true) : setDisplayBtn('hidden')
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
        handlerTextEnd(false);
    }

    function handlerTextEnd(state: boolean | undefined) {
        changetextEndState(state!);
        setDisplayBtn('');
    }



    return (
        <div className="relative h-full flex flex-col justify-between z-40">
            <p className="text-base md:text-2xl whitespace-pre-wrap ">{displayedText}</p>
            {remainingText && <p style={{ display: 'none' }}>{remainingText}</p>}
            <div className={`${text.length <= limit ? "hidden" : "flex"} items-center ml-auto gap-3 `}>
                <a onClick={handlerBack} className={`${displayBtn} cursor-pointer animate-fade-in-out`}>voltar</a>
                <div className={`w-[41px] py-3 none cursor-pointer ${animationNextBtn}  `}>
                    <a onClick={handlerLoadText}  >
                        <svg className={`${isOpen ? "fill-[#03273E]" : "fill-white"}`} width="41" height="20" viewBox="0 0 41 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path  d="M0.699756 0.728087C1.63276 -0.242696 3.14547 -0.242696 4.07848 0.728087L11.3002 8.24224C12.2333 9.21303 12.2333 10.787 11.3002 11.7578L4.07848 19.2719C3.14547 20.2427 1.63276 20.2427 0.699756 19.2719C-0.233252 18.3011 -0.233252 16.7272 0.699756 15.7564L6.23216 10L0.699756 4.2436C-0.233252 3.27282 -0.233252 1.69887 0.699756 0.728087Z"  />
                            <path  d="M14.7581 0.728087C15.7688 -0.242696 17.4076 -0.242696 18.4183 0.728087L26.2419 8.24224C27.2527 9.21303 27.2527 10.787 26.2419 11.7578L18.4183 19.2719C17.4076 20.2427 15.7688 20.2427 14.7581 19.2719C13.7473 18.3011 13.7473 16.7272 14.7581 15.7564L20.7515 10L14.7581 4.2436C13.7473 3.27282 13.7473 1.69887 14.7581 0.728087Z"  />
                            <path  d="M29.6998 0.728087C30.6328 -0.242696 32.1455 -0.242696 33.0785 0.728087L40.3002 8.24224C41.2333 9.21303 41.2333 10.787 40.3002 11.7578L33.0785 19.2719C32.1455 20.2427 30.6328 20.2427 29.6998 19.2719C28.7667 18.3011 28.7667 16.7272 29.6998 15.7564L35.2322 10L29.6998 4.2436C28.7667 3.27282 28.7667 1.69887 29.6998 0.728087Z"  />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};


