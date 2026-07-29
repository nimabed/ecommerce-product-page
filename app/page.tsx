
import Slider from '@/components/Slider';
import AddToCartButton from '@/components/AddToCartButton';

export default function ProductPage() {
  return (
    <>
      <div className="hidden w-full h-[2px] bg-dark-grayish-blue/10 mt-4 rounded-full md:block" /> 
      <main className="w-full h-screen grid grid-rows-[300px_minmax(0,1fr)] md:grid-rows-none md:grid-cols-2 md:justify-items-center md:items-center">
        {/* Image Slider */}
        <section className="w-full md:max-w-[70%]">
          <Slider />
        </section>

        {/* Article Section */}
        <article className="w-full p-6 md:p-0 md:max-w-[70%]">
          <div className="flex flex-col space-y-4 md:space-y-6">
            <p className="font-semibold uppercase text-dark-grayish-blue tracking-widest">Sneaker company</p>
            <h1 className="text-3xl font-bold -mt-1 md:text-5xl">Fall Limited Edition Sneakers</h1>
            <p className="leading-7 text-dark-grayish-blue/90 md:mt-6 md:text-lg md:tracking-wide">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
          </div>

          <div className="flex items-center justify-between my-5 md:flex-col md:items-start md:space-y-3">
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
