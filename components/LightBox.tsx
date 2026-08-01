import Image from 'next/image';

export default function LightBox() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-1/2 flex flex-col space-y-5 justify-center items-center">
      <button className="self-end cursor-pointer">
        <Image src='/icon-close.svg' alt='close icon image' width={22} height={22} />
      </button>

      <div className="relative w-[580px] h-[560px]">
        <Image 
          className="object-cover rounded-xl"
          src='/image-product-1.jpg' 
          alt='shoes image' 
          fill
        />
        <button className="absolute w-13 h-13 flex justify-center items-center bg-white -right-6 top-1/2 -translate-y-1/2 rounded-full p-3 cursor-pointer">
          <Image 
            src="/icon-next.svg" 
            alt="next icon image" 
            width={12}
            height={12}
          />
        </button>
        <button className="absolute w-13 h-13 flex justify-center items-center bg-white -left-6 top-1/2 -translate-y-1/2 rounded-full p-3 cursor-pointer">
          <Image 
            className="mr-1"
            src="/icon-previous.svg" 
            alt="next icon image" 
            width={11}
            height={11}
          />
        </button>
      </div>
      
      <div className="flex flex-row justify-between space-x-8 mt-3">
        <div 
          className="relative w-20 h-20 bg-[url(/image-product-1-thumbnail.jpg)] bg-cover rounded-lg cursor-pointer group overflow-hidden ring-3 ring-primary/80"
        >
          <div className="absolute inset-0 bg-white/75 opacity-100 group-hover:opacity-100" />
        </div>
        <div className="relative w-20 h-20 bg-[url(/image-product-2-thumbnail.jpg)] bg-cover rounded-lg cursor-pointer group">
          <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100" />
        </div>
        <div className="relative w-20 h-20 bg-[url(/image-product-3-thumbnail.jpg)] bg-cover rounded-lg cursor-pointer group">
          <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100" />
        </div>
        <div className="relative w-20 h-20 bg-[url(/image-product-4-thumbnail.jpg)] bg-cover rounded-lg cursor-pointer group">
          <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100" />
        </div>
      </div>
    </div>
  )
}