import Image from 'next/image';

export default function AddToCartButton() {
  return (
    <div className="flex flex-col space-y-3 md:flex-row md:items-center md:space-x-3">
      <div 
        className="relative text-center font-bold py-3 px-3 bg-light-grayish-blue rounded-lg md:flex-2 md:mt-3"
      >
        <button className="absolute left-4 top-1/2 -translate-y-1/2 p-1 cursor-pointer hover:brightness-150">
          <Image 
            src='/icon-minus.svg' 
            alt='icon minus image'
            width={12}
            height={12}
          />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 p-1 cursor-pointer hover:brightness-150">
          <Image 
            src='/icon-plus.svg' 
            alt='icon plus image'
            width={12}
            height={12}
          />
        </button>
        
        0
      </div>
      <button
        className="flex justify-center items-center font-semibold bg-primary py-4 px-3 rounded-lg shadow-xl shadow-primary/40 cursor-pointer hover:bg-primary/70 md:shadow-none md:flex-3"
      >
        <Image 
          className="mr-3 brightness-50"
          src='/icon-cart.svg' 
          alt='icon cart image' 
          width={17}
          height={17}
        />
          Add to cart
      </button>
    </div>
  )
}