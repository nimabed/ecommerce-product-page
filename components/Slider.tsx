import Image from "next/image";


export default function Slider() {
  return (
    <div className="relative h-[300px]">
      <Image 
        className="object-cover"
        src='/image-product-1.jpg' 
        alt='shoes image' 
        fill
      />
      <div className="absolute w-10 h-10 flex justify-center items-center bg-white right-4 top-1/2 -translate-y-1/2 rounded-full p-3 cursor-pointer md:hidden">
        <Image 
          src="/icon-next.svg" 
          alt="next icon image" 
          width={12}
          height={12}
        />
      </div>
      <div className="absolute w-10 h-10 flex justify-center items-center bg-white left-4 top-1/2 -translate-y-1/2 rounded-full p-3 cursor-pointer md:hidden">
        <Image 
          className="mr-1"
          src="/icon-previous.svg" 
          alt="next icon image" 
          width={11}
          height={11}
        />
      </div>
    </div>
  )
}