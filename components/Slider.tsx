import Image from "next/image";

import LightBoxButton from './LightBoxButton';
import LightBox from './LightBox';



export default function Slider() {
  return (
    <>
      <div className="relative h-[300px] md:h-[500px] md:cursor-pointer">

        <Image 
          className="object-cover md:rounded-xl"
          src='/image-product-1.jpg' 
          alt='shoes image' 
          fill
        />

        <LightBoxButton>
          <LightBox />
        </LightBoxButton>

        <button className="absolute w-10 h-10 flex justify-center items-center bg-white right-4 top-1/2 -translate-y-1/2 rounded-full p-3 cursor-pointer md:hidden">
          <Image 
            src="/icon-next.svg" 
            alt="next icon image" 
            width={12}
            height={12}
          />
        </button>
        <button className="absolute w-10 h-10 flex justify-center items-center bg-white left-4 top-1/2 -translate-y-1/2 rounded-full p-3 cursor-pointer md:hidden">
          <Image 
            className="mr-1"
            src="/icon-previous.svg" 
            alt="next icon image" 
            width={11}
            height={11}
          />
        </button>
      </div>

      <div className="hidden flex-row justify-between mt-7 md:flex">
        <div 
          className="relative w-25 h-22 bg-[url(/image-product-1-thumbnail.jpg)] bg-cover rounded-lg cursor-pointer group overflow-hidden ring-3 ring-primary/80"
        >
          <div className="absolute inset-0 bg-white/75 opacity-100 group-hover:opacity-100" />
        </div>
        <div className="relative w-25 h-22 bg-[url(/image-product-2-thumbnail.jpg)] bg-cover rounded-lg cursor-pointer group">
          <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100" />
        </div>
        <div className="relative w-25 h-22 bg-[url(/image-product-3-thumbnail.jpg)] bg-cover rounded-lg cursor-pointer group">
          <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100" />
        </div>
        <div className="relative w-25 h-22 bg-[url(/image-product-4-thumbnail.jpg)] bg-cover rounded-lg cursor-pointer group">
          <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100" />
        </div>
      </div>
    </>


  )
}