import Image from "next/image";

import Slider from '@/components/Slider';
import AddToCartButton from '@/components/AddToCartButton';

export default function ProductPage() {
  return (
    <>
      <div className="hidden w-full h-[3px] bg-light-grayish-blue mt-4 mb-10 rounded-full md:block" /> 
      <main className="w-full grid md:grid-cols-2 md:gap-x-10 md:py-8">
        {/* Image Slider */}
        <section className="w-full">
          <Slider />
        </section>

        {/* Article Section */}
        <article className="w-full p-6">
          <div className="flex flex-col space-y-4">
            <p className="font-semibold uppercase text-dark-grayish-blue tracking-widest">Sneaker company</p>
            <h1 className="text-3xl font-bold -mt-1">Fall Limited Edition Sneakers</h1>
            <p className="leading-7 text-dark-grayish-blue/90">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
          </div>

          <div className="flex items-center justify-between my-5">
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold">$125.00</span>
              <span className="px-2 py-[2px] bg-black text-white font-semibold rounded-md">50%</span>
            </div>
            <del className="font-bold text-dark-grayish-blue decoration-dark-grayish-blue decoration-2">$250.00</del>
          </div>
          <AddToCartButton />
        </article>
        
      
      </main>
    </>
  );
}
