import Image from 'next/image';
import Ranking from '@/components/ui/ranking';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ProductColors from '@/components/ui/productColors';
import { Heart, ArrowRight } from 'lucide-react';

export default function ProductItem() {
  return (
    <div className="w-full">
      {/* Product Card */}
      <div className="relative group w-full flex items-center gap-4 ring ring-dark-grayish-blue/20 rounded-lg overflow-hidden ">
        {/* Image Section */}
        <div className="relative w-full max-w-45 h-35 rounded-lg overflow-hidden md:h-25 md:shrink-0">
          <Image
            className="size-full object-cover card-hover-effect"
            src="/image-product-1.jpg"
            alt="Best sell image product"
            width={250}
            height={100}
          />
          <Button size="lg" className="absolute top-0 right-0 px-2 bg-transparent">
            <Heart strokeWidth={2} className="size-4.5 text-white md:top-3 md:right-3 md:size-5" />
          </Button>
          <Badge className="absolute bottom-2 left-2 text-[10px] font-bold text-white rounded-sm uppercase md:text-xs">
            New
          </Badge>
        </div>
        {/* Caption Section */}
        <div className="flex flex-col items-start gap-1.5 text-nowrap">
          <h4 className="font-bold md:text-lg">Classic Runner</h4>
          <span className="font-medium md:text-lg">$125.00</span>
          <div className="flex items-center gap-2">
            <Ranking ranking={4.5} />
            <span className="text-xs font-medium text-dark-grayish-blue md:text-sm">(245)</span>
          </div>
          {/* Product Colors */}
          <ProductColors colors={["bg-black", "bg-white", "bg-red-500"]} />
        </div>
        {/* Action Button */}
        <div className="absolute bottom-2 right-2">
          <Button
            variant="label"
            size="icon"
            className="text-primary bg-white shadow-[0_1px_10px_rgb(0,0,0,0.1)]"
          >
            <ArrowRight strokeWidth={3} />
          </Button>
        </div>
      </div>
    </div>
  )
}