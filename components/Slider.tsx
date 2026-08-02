'use client';

import { useState } from 'react';
import Image from "next/image";

import LightBoxButton from './LightBoxButton';
import LightBox from './LightBox';


const sliderImages = [
  {
    src: "/image-product-1.jpg", 
    alt: "shoes image one",
    thumbnail: "/image-product-1-thumbnail.jpg"
  },
  {
    src: "/image-product-2.jpg", 
    alt: "shoes image two",
    thumbnail: "/image-product-2-thumbnail.jpg"
  },
  {
    src: "/image-product-3.jpg", 
    alt: "shoes image three",
    thumbnail: "/image-product-3-thumbnail.jpg"
  },
  {
    src: "/image-product-4.jpg", 
    alt: "shoes image four",
    thumbnail: "/image-product-4-thumbnail.jpg"
  }
]


export default function Slider() {

  const [currentActiveIndex, setCurrentActiveIndex] = useState(1);
  const [isModalActive, setIsModalActive] = useState(false);

  const handleNextImage = () => {
    if(currentActiveIndex < sliderImages.length - 1) {
      setCurrentActiveIndex(pervState => pervState + 1);
    }
  }

  const handlePreviousImage = () => {
    if(currentActiveIndex > 0) {
      setCurrentActiveIndex(pervState => pervState - 1);
    }
  }

  return (
    <>
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
      <ul className="hidden flex-row justify-between mt-7 md:flex">
          {
            sliderImages.map(
              (imageItem, imageIndex) => {

                const activeClass = "bg-white/75 opacity-100 ring-3 ring-primary/80";
                const notActiveClass = "bg-white/50 opacity-0 group-hover:opacity-100";

                return (
                <li key={imageIndex}>
                  <button 
                    className="group relative w-25 h-22 cursor-pointer"
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
    </>
  )
}