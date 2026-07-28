import Image from "next/image";

import Slider from '@/components/Slider';

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
        <section className="w-full h-[200px] bg-blue-500">


        </section>
        
      
      </main>
    </>
  );
}
