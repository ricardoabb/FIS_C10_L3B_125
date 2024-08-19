import { create } from 'zustand';

interface ModalState {
  isOpen: boolean;
  title: string;
  content: string;  
  image1?: string;
  image2?: string;
  video?: string;
  tapeColor?: string;
  bgColor?: string;

  openModal: (params: {
      title: string;
      content: string;      
      image1?: string;
      image2?: string;
      video?: string;
      tapeColor?: string;
      bgColor?: string;
  }) => void;
  closeModal: () => void;
  
}



export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  title: '',
  content: '',
  imageThumb: '',
  image1: undefined,
  image2: undefined,
  video: undefined,
  tapeColor: undefined,
  bgColor: '',
  openModal: ({
      title,
      content,      
      image1,
      image2,
      video,
      tapeColor,
      bgColor
  }) => set({
      isOpen: true,
      title,
      content,      
      image1,
      image2,
      video,
      tapeColor,
      bgColor
  }),
  closeModal: () => set({
      isOpen: false,
      title: '',
      content: '',      
      image1: undefined,
      image2: undefined,
      video: undefined,
      tapeColor: undefined,
      bgColor: ''
  }),
}));