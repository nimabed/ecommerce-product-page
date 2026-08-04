'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';

export default function LightBox({ sliderImages, activeId, closeModal }: {
  sliderImages: {src: string, alt: string, thumbnail: string}[],
  activeId: number,
  closeModal: () => void
}) {

  const [currentActiveIndex, setCurrentActiveIndex] = useState(activeId);

  const handleNextImage = () => {
    const isLast = currentActiveIndex === sliderImages.length - 1;
    const index = isLast ? 0 : currentActiveIndex + 1;
    setCurrentActiveIndex(index);
  }

  const handlePreviousImage = () => {
    const isFirst = currentActiveIndex === 0;
    const index = isFirst ? sliderImages.length - 1 : currentActiveIndex - 1;
    setCurrentActiveIndex(index);
    
  }

  return (
    <div className="absolute left-1/2 top-1/2 -translate-1/2 flex flex-col space-y-5 justify-center items-center">
      <button 
        className="self-end cursor-pointer"
        onClick={closeModal}
      >
        <X strokeWidth={3} className="size-8 text-white hover:text-primary" />
      </button>

      <div className="relative w-[580px] h-[560px]">
        <Image 
          className="object-cover rounded-xl"
          src={sliderImages[currentActiveIndex].src} 
          alt={sliderImages[currentActiveIndex].alt} 
          fill
        />
        <button 
          className="group absolute w-13 h-13 flex justify-center items-center bg-white -right-6 top-1/2 -translate-y-1/2 rounded-full pl-1 cursor-pointer"
          onClick={handleNextImage}
        >
          <ChevronRight strokeWidth={3} className="size-8 group-hover:text-primary" />
        </button>
        <button 
        className="group absolute w-13 h-13 flex justify-center items-center bg-white -left-6 top-1/2 -translate-y-1/2 rounded-full pr-1 cursor-pointer"
        onClick={handlePreviousImage}
        >
          <ChevronLeft strokeWidth={3} className="size-8 group-hover:text-primary" />
        </button>
      </div>

      <ul className="w-full max-w-[90%] flex flex-row mt-3">
        {
          sliderImages.map(
            (imageItem, imageIndex) => {

              const activeClass = "bg-white/75 opacity-100 ring-3 ring-primary/80";
              const notActiveClass = "bg-white/50 opacity-0 group-hover:opacity-100";

              return (
              <li className="w-full" key={imageIndex}>
                <button 
                  className="group relative w-full max-w-23 h-23 left-1/2 -translate-x-1/2 cursor-pointer"
                  onClick={() => setCurrentActiveIndex(imageIndex)}
                >
                  <Image 
                    className="object-cover rounded-lg"
                    src={imageItem.thumbnail} 
                    alt={imageItem.alt}
                    fill 
                    />
                  <div className={`absolute inset-0 rounded-lg ${imageIndex === currentActiveIndex ? activeClass : notActiveClass }`} />
                </button>
              </li>
              )
            }
          )
        }
      </ul>
    </div>
  )
}