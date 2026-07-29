import Image from 'next/image';

export default function CartButton() {
  return (
    <>
      <button>
        <Image className="cursor-pointer md:mt-1" src='/icon-cart.svg' alt='cart image' width={23} height={23} />
      </button>

      {/* Cart Modal */}
      <div className="absolute w-[356px] h-[258px] left-1/2 -translate-x-1/2 top-20 flex flex-col rounded-xl shadow-xl bg-white z-9 md:left-[80%] md:translate-x-0 md:shadow-2xl">
        <header className="font-semibold p-5 border-b border-b-dark-grayish-blue/10">Cart</header>
        <div className="size-full flex justify-center items-center">
          <span className="hidden font-semibold text-dark-grayish-blue">Your cart is empty.</span>

          <div className="size-full max-w-[90%] max-h-[85%] flex flex-col justify-center">
            <div className="flex space-x-5 items-center justify-center">
              <Image 
                className="rounded-lg"
                src='/image-product-1-thumbnail.jpg' 
                alt='shoes thumbnail' 
                width={60} 
                height={60} 
              />
              <div>
                <p className="text-dark-grayish-blue mb-1">Fall Limited Edition Sneakers</p>
                <p className="text-dark-grayish-blue">$125x<span className="mx-1">3</span><span className="text-black font-semibold">$375.00</span></p>
              </div>
              <button className="cursor-pointer">
                <Image src='/icon-delete.svg' alt='delete icon image' width={15} height={15} />
              </button>
            </div>

            <button
              className="w-full py-3 mt-6 rounded-lg font-semibold bg-primary cursor-pointer"
            >Checkout</button>
          </div>
        </div>
      </div>
    </>

  )
}