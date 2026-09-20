import Image from 'next/image';
import Ranking from '@/components/ui/ranking';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ProductColors from '@/components/ui/productColors';
import { Heart, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type productProps =  {
    image: string,
    title: string,
    price: string,
    rank: number,
    vote: number,
    isDark: boolean,
    badge?: string,
    colors: string[]
  }

export default function ProductItem({...props}: productProps) {
  return (
    <div className="w-full md:p-1">
      {/* Product Card */}
      <div className="relative group w-full flex items-center gap-4 ring ring-dark-grayish-blue/20 rounded-lg overflow-hidden md:flex-col md:items-start ">
        {/* Image Section */}
        <div className="relative w-full max-w-45 h-35 rounded-lg overflow-hidden md:max-w-none md:h-60 md:shrink-0">
          <Image
            className="size-full object-cover card-hover-effect"
            src={props.image}
            alt="Best sell image product"
            width={400}
            height={400}
          />
          <Button 
            size="lg" 
            className="absolute top-0 right-0 px-2 bg-transparent md:top-1 md:right-1"
          >
            <Heart 
              strokeWidth={2} 
              className={cn("size-4.5 md:size-6",
                props.isDark ? "text-white" : "text-black"
              )} 
            />
          </Button>
          {
            props.badge && (
            <Badge 
              className={cn("absolute bottom-2 left-2 text-[10px] font-bold rounded-sm uppercase md:text-sm md:p-3",
                props.isDark ? "bg-white text-primary" : "bg-primary text-white"
              )}
            >
              New
            </Badge>)
          }
        </div>
        {/* Caption Section */}
        <div className="flex flex-col items-start gap-1.5 text-nowrap md:px-4 md:pb-4">
          <h4 className="font-bold md:text-lg">{props.title}</h4>
          <span className="font-medium md:font-semibold md:text-lg">{props.price}</span>
          <div className="flex items-center gap-2">
            <Ranking ranking={props.rank} starSize="md:size-4" />
            <span className="text-xs font-medium text-dark-grayish-blue md:font-semibold md:text-base">({props.vote})</span>
          </div>
          {/* Product Colors */}
          <ProductColors colors={props.colors} />
        </div>
        {/* Action Button */}
        <div className="absolute bottom-2 right-3 md:bottom-3 md:right-4">
          <Button
            variant="label"
            size="icon"
            className="text-primary bg-white shadow-[0_1px_5px_rgb(0,0,0,0.1),0_-1px_5px_rgb(0,0,0,0.1)] transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-transparent! md:size-10"
          >
            <ArrowRight strokeWidth={3} />
          </Button>
        </div>
      </div>
    </div>
  )
}