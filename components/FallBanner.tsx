import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FallBanner() {
  return (
    <div className="group relative w-full h-110 rounded-lg overflow-hidden my-5 md:h-95">
      <Image
        className="size-full object-cover object-bottom md:hidden"
        src="/image-fall-banner-mobile.jpeg"
        alt="Fall banner image"
        width={450}
        height={250}
      />
      <Image
        className="hidden size-full object-cover md:block"
        src="/image-fall-banner-desktop.jpeg"
        alt="Fall banner image"
        width={1000}
        height={750}
      />
      <div className="absolute w-full max-w-[65%] flex flex-col items-start top-5 left-5 gap-2 text-white md:max-w-[25%] md:gap-4 md:left-20 md:top-1/2 md:-translate-y-1/2">
        <h4 className="font-semibold uppercase text-xs md:text-sm md:tracking-wide">Limited time only</h4>
        <p className="font-bold text-3xl md:text-5xl">Fall Collection</p>
        <span className="md:text-lg">Warm tones, premium materials and timeless design.</span>
        <Link href="#" className="flex items-center justify-center mt-3 gap-2 py-3 px-4.5  font-semibold text-sm bg-white text-black rounded-lg transition group-hover:scale-105 md:text-lg md:font-bold md:px-6">
          Shop Limited Edition
          <ArrowRight strokeWidth={2} className="size-4 md:size-5" />
        </Link>
      </div>
    </div>
  )
}