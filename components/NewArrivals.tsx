import { ArrowRight, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious
} from './ui/carousel';

const freshPicks = [
  {
    image: "/image-product-1.jpg",
    title: "Fall Limited Edition",
    price: "$125.00"
  },
  {
    image: "/image-product-2.jpg",
    title: "Essential Low",
    price: "$110.00"
  },
  {
    image: "/image-product-3.jpg",
    title: "Urben Retro",
    price: "$130.00"
  },
  {
    image: "/image-product-4.jpg",
    title: "Court Classic",
    price: "$106.00"
  },
  {
    image: "/image-product-4.jpg",
    title: "Court modern",
    price: "$106.00"
  }
]

export default function NewArrivals() {
  return (
    <div className="my-3">
      <h3 className="uppercase text-primary font-bold text-xs md:text-sm">New Arrivals</h3>
      {/* Carousel */}
      <Carousel opts={{dragFree: true}}>
        <div className="flex items-center justify-between my-2">
          <p className="font-bold text-xl md:font-extrabold md:text-3xl">Fresh Picks</p>
          <Link href="#" className="flex items-center gap-2 font-semibold text-sm text-primary">
            View all
            <ArrowRight strokeWidth={3} className="size-4" />
          </Link>
        </div>
        <CarouselContent>
          {
            freshPicks.map(item => 
              <CarouselItem key={item.title} className="max-w-40 md:max-w-80 md:mr-2">
                {/* Cards */}
                <Link href="#">
                  <Card className="w-full ring-0 pt-0 bg-dark-grayish-blue/10">
                    <div className="relative rounded-lg overflow-hidden">
                      <Image 
                        className="size-full"
                        src={item.image} 
                        alt="shoe image" 
                        width={200} 
                        height={200} 
                      />
                      <Heart strokeWidth={2} className="size-4 absolute top-2 right-2 cursor-pointer text-white md:top-3 md:right-3 md:size-5" />
                      <Badge className="absolute bottom-2 left-2 text-[10px] font-semibold text-white rounded-sm uppercase md:text-xs">
                        New
                      </Badge>
                    </div>
                    <CardContent className="space-y-1">
                      <p className="font-semibold truncate md:text-lg">{item.title}</p>
                      <span className="font-semibold text-sm md:text-base">{item.price}</span>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            )
          }
        </CarouselContent>
        <CarouselNext size="lg" className="hidden right-3 bg-white text-primary border-0 cursor-pointer md:block" />
        <CarouselPrevious size="lg" className="hidden left-3 bg-white text-primary border-0 cursor-pointer md:block" />
      </Carousel>
    </div>
  )
}