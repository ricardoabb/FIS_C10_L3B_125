"use client";
import React from 'react';
import { useModalStore } from "../store/useModalStore";
import { motion, AnimatePresence } from 'framer-motion';
import { TextBox } from "./TextBox";




export function CardModal() {
  const { isOpen, title, content, closeModal } = useModalStore();
  if (!isOpen) return null;


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-slate-900 bg-opacity-50 backdrop-blur-md transition-all ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-modal bg-no-repeat bg-cover bg-opacity-50 p-6 rounded shadow-lg w-full h-full flex items-center justify-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <div className="relative w-full md:w-auto">
              <button onClick={closeModal} className="absolute  top-[20px] md:top-[20px] right-6 md:right-[30px] z-50">
                <svg className='w-4 h-4 md:w-8 md:h-8' width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.536986 7.87028C-0.178973 8.58624 -0.178973 9.74703 0.536986 10.463C1.25295 11.179 2.41374 11.179 3.1297 10.463L5.49999 8.09271L7.87028 10.463C8.58623 11.179 9.74703 11.179 10.463 10.463C11.179 9.74704 11.179 8.58624 10.463 7.87028L8.0927 5.49999L10.463 3.12969C11.179 2.41373 11.179 1.25293 10.463 0.53697C9.74705 -0.17899 8.58625 -0.17899 7.87029 0.536969L5.49999 2.90727L3.12969 0.536975C2.41373 -0.178984 1.25293 -0.178984 0.53697 0.536975C-0.17899 1.25293 -0.17899 2.41373 0.536969 3.12969L2.90727 5.49999L0.536986 7.87028Z" fill="#03273E" />
                </svg>

              </button>
              <div className="relative ">

                <TextBox title={title} content={content} bgColor={" bg-[#AEC1CA] text-[#03273E]"} hide={false} />

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};    
