import { ArrowRight, Heart } from 'lucide-react';
import Link from 'next/link';
import { Image } from 'next-sanity/image';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious
} from '../../components/ui/carousel';
import { getNewProducts } from '@/lib/sanityFunctions';
import { urlFor } from '@/sanity/lib/image';
import { cn } from '@/lib/utils';


export default async function NewArrivals() {

  const newProducts = await getNewProducts(); 


  if(!newProducts) {
    return <h1>Fetching new products failed!</h1>
  }


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
            newProducts?.map((product) => {
              const price = product.variants && product.variants[0].price;

              return (
                <CarouselItem key={product.title} className="max-w-40 md:max-w-80 md:mr-2">
                  {/* Cards */}
                  <Link href="#">
                    <Card className="group w-full ring-0 pt-0 bg-dark-grayish-blue/10">
                      <div className="relative rounded-lg overflow-hidden w-full h-36 md:h-76">
                        {(product.images && product.activeImage) && (
                          <Image 
                            className="size-full card-hover-effect"
                            src={urlFor(product.images[product.activeImage - 1]).url()} 
                            alt="shoe image" 
                            fill
                          />)
                        }
                        <Heart 
                          strokeWidth={2} 
                          className={cn("size-4 absolute top-2 right-2 cursor-pointer md:top-3 md:right-3 md:size-5", product.isDark ? "text-white" : "text-black")} />
                        <Badge className="absolute bottom-2 left-2 text-[10px] font-semibold text-white rounded-sm uppercase md:text-xs">
                          New
                        </Badge>
                      </div>
                      <CardContent className="space-y-1">
                        <p className="font-semibold truncate md:text-lg">{product.title}</p>
                        <span className="font-semibold text-sm md:text-base">${price?.toFixed(2)}</span>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              )
            }
            )
          }
        </CarouselContent>
        <CarouselNext size="lg" className="hidden right-3 bg-white text-primary border-dark-grayish-blue/10 cursor-pointer md:block" />
        <CarouselPrevious size="lg" className="hidden left-3 bg-white text-primary border-dark-grayish-blue/10 cursor-pointer md:block" />
      </Carousel>
    </div>
  )
}