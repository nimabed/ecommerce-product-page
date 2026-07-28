import Image from "next/image";

import Slider from '@/components/Slider';

export default function ProductPage() {
  return (
    <main className="w-full grid md:grid-cols-2">
      {/* Image Slider */}
      <section className="w-full">
        <Slider />
        
      </section>

      {/* Article Section */}
      <section className="w-full h-[200px] bg-blue-500">


      </section>
      
    
    </main>
  );
}
