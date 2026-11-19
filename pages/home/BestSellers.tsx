import Link from 'next/link';
import { Image } from 'next-sanity/image';
import { ArrowRight } from 'lucide-react';
import Ranking from '../../components/ui/ranking';
import { getBestSellers } from '@/lib/sanityFunctions';
import { urlFor } from '@/sanity/lib/image'


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


export default async function BestSellers() {

  const bestSellerProducts = await getBestSellers();

  if(!bestSellerProducts) {
    return <h1>Fetching best sellers failed</h1>
  }


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
          bestSellerProducts?.map((product) => {

            const price = product.variants && product.variants[0].price;

           return (
           <Link key={product.title} href="#" className="w-full">
              <div className="group w-full flex items-center gap-4">
                <div className="relative w-full max-w-30 h-20 rounded-lg overflow-hidden md:h-25 md:shrink-0">
                  {(product.images && product.activeImage) && (
                    <Image
                      className="size-full object-cover card-hover-effect"
                      src={urlFor(product.images[product.activeImage - 1]).url()}
                      alt="Best sell image product"
                      fill
                    />
                  )}
                </div>
                <div className="flex flex-col text-nowrap">
                  <h4 className="font-bold md:text-lg">{product.title}</h4>
                  <span className="font-medium md:text-lg">${price?.toFixed(2)}</span>
                  <div className="flex items-center gap-2">
                    {product.rating && <Ranking ranking={product.rating} />}
                    <span className="text-xs font-medium text-dark-grayish-blue md:text-sm">({product.reviewCount})</span>
                  </div>
                </div>
              </div>
            </Link>
            )
          }
          )
        }
      </div>

    </div>
  )
}