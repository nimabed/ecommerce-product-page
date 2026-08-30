import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const category = [
  {
    imageMobile: "/image-category-men-mobile.jpeg",
    alt: "Men category image",
    title: "Men"
  },
  {
    imageMobile: "/image-category-women-mobile.jpeg",
    alt: "Women category image",
    title: "Women"
  },
  {
    imageMobile: "/image-category-running-mobile.jpeg",
    alt: "Running category image",
    title: "Running"
  }
]

export default function ShopByCategory() {
  return (
    <div className="my-5">
      <h3 className="uppercase text-primary font-bold text-xs md:text-sm">Shop by category</h3>
      <div className="flex flex-col gap-3 mt-3 md:flex-row md:gap-5">
        {
          category.map(item =>
            <div key={item.title} className="group relative w-full rounded-lg overflow-hidden">
              <Image className="size-full object-cover" src={item.imageMobile} alt={item.alt} width={400} height={250} />
              <div className="absolute flex flex-col gap-1 left-4 top-1/2 -translate-y-1/2">
                <span className="font-extrabold text-xl md:text-2xl">{item.title}</span>
                <Link href="#" className="flex items-center gap-1.5 font-semibold transition group-hover:scale-105">
                  Shop Now
                  <ArrowRight className="size-4.5" />
                </Link>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}