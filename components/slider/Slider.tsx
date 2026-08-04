'use client';

import { useState } from 'react';
import Image from "next/image";

import LightBoxButton from './LightBoxButton';
import LightBox from './LightBox';


type images = {src: string, alt: string, thumbnail: string}[];


export default function Slider({ sliderImages }:{
  sliderImages: images
}
) {

  const [currentActiveIndex, setCurrentActiveIndex] = useState(1);
  const [isModalActive, setIsModalActive] = useState(false);

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
    <section className="w-full md:max-w-[70%]">
      <div className="relative h-[300px] md:h-[500px]">
        <Image 
          className="object-cover md:rounded-xl"
          src={sliderImages[currentActiveIndex].src}
          alt={sliderImages[currentActiveIndex].alt}
          fill
        />
        
        <LightBoxButton
          key={currentActiveIndex} 
          isOpen={isModalActive} 
          openModal={() => setIsModalActive(true)}
          closeModal={() => setIsModalActive(false)}
        >
          <LightBox sliderImages={sliderImages} activeId={currentActiveIndex} closeModal={() => setIsModalActive(false)} />
        </LightBoxButton>

        <button 
          className="absolute w-10 h-10 flex justify-center items-center bg-white right-4 top-1/2 -translate-y-1/2 rounded-full p-3 cursor-pointer md:hidden"
          onClick={handleNextImage}
        >
          <Image 
            src="/icon-next.svg" 
            alt="next icon image" 
            width={12}
            height={12}
          />
        </button>
        <button 
          className="absolute w-10 h-10 flex justify-center items-center bg-white left-4 top-1/2 -translate-y-1/2 rounded-full p-3 cursor-pointer md:hidden"
          onClick={handlePreviousImage}
        >
          <Image 
            className="mr-1"
            src="/icon-previous.svg" 
            alt="next icon image" 
            width={11}
            height={11}
          />
        </button>
      </div>
      <ul className="hidden flex-row space-x-7 mt-7  md:flex">
        {
          sliderImages.map(
            (imageItem, imageIndex) => {

              const activeClass = "bg-white/75 opacity-100 ring-3 ring-primary/80";
              const notActiveClass = "bg-white/50 opacity-0 group-hover:opacity-100";

              return (
                <li className="w-full" key={imageIndex}>
                  <button 
                    className="group relative w-full h-22 cursor-pointer"
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
    </section>
  )
}