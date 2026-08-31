import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Ranking from './ui/ranking';


const bestSellers = [
  {
    image: "/image-product-1.jpg",
    title: "Classic Runner",
    price: "$125.00",
    rank: 4.4,
    vote: 245
  },
  {
    image: "/image-product-2.jpg",
    title: "Street Icon",
    price: "$110.00",
    rank: 4.5,
    vote: 312
  },
  {
    image: "/image-product-3.jpg",
    title: "Comfy Everyday",
    price: "$130.00",
    rank: 4.7,
    vote: 198
  },
  {
    image: "/image-product-4.jpg",
    title: "All Day Walk",
    price: "$106.00",
    rank: 4.5,
    vote: 267
  }
]


export default function BestSellers() {
  return (
    <div className="">
      <div className="flex items-center justify-between mb-3">
        <p className="uppercase text-primary font-bold text-sm">Best sellers</p>
        <Link href="#" className="flex items-center gap-2 font-semibold text-primary text-sm">
          View all
          <ArrowRight strokeWidth={3} className="size-4" />
        </Link>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:justify-between">
        {
          bestSellers.map(item =>
            <Link key={item.title} href="#" className="w-full">
              <div className="w-full flex items-center gap-4">
                <div className="w-full max-w-30 h-20 rounded-lg overflow-hidden md:h-25 md:shrink-0">
                  <Image
                    className="size-full object-cover"
                    src={item.image}
                    alt="Best sell image product"
                    width={250}
                    height={100}
                  />
                </div>
                <div className="flex flex-col text-nowrap">
                  <h4 className="font-bold md:text-lg">{item.title}</h4>
                  <span className="font-medium md:text-lg">{item.price}</span>
                  <div className="flex items-center gap-2">
                    <Ranking ranking={item.rank} />
                    <span className="text-xs font-medium text-dark-grayish-blue md:text-sm">({item.vote})</span>
                  </div>
                </div>
              </div>
            </Link>
          )
        }
      </div>

    </div>
  )
}