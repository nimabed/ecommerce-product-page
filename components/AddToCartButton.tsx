import Image from 'next/image';

export default function AddToCartButton() {
  return (
    <div className="flex flex-col space-y-3 md:flex-row md:items-center md:space-x-3">
      <div 
        className="relative text-center font-bold py-4 px-3 bg-light-grayish-blue rounded-lg md:flex-2 md:py-3 md:mt-3"
      >
        <Image 
          className="absolute left-5 top-1/2 -translate-y-1/2 cursor-pointer"
          src='/icon-minus.svg' 
          alt='icon minus image'
          width={12}
          height={12}
        />
        <Image 
          className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
          src='/icon-plus.svg' 
          alt='icon plus image'
          width={12}
          height={12}
        />
        
        0
      </div>
      <button
        className="flex justify-center items-center font-semibold bg-primary py-4 px-3 rounded-lg shadow-xl shadow-primary/40 cursor-pointer md:shadow-none md:flex-3 md:py-3"
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