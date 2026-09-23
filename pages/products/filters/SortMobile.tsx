import Container from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function SortMobile({ onClose, isClosing }: {
  onClose: () => void,
  isClosing: boolean
}) {
  return (
    <div className={cn("absolute w-full h-[60%] bottom-0 duration-500 bg-white rounded-t-2xl",
      isClosing ? "animate-out slide-out-to-bottom" : "animate-in slide-in-from-bottom"
    )}>
      {/* Title Section */}
      <Container>
        <div className="flex items-center justify-between py-3">
          <h2 className="font-bold text-lg">Sort by</h2>
          <Button
            className="bg-transparent cursor-pointer -mr-2 hover:bg-dark-grayish-blue/20"
            onClick={onClose}
          >
            <X strokeWidth={2} className="size-5" />
          </Button>
        </div>
      </Container>
      <Separator className="bg-dark-grayish-blue/20" />
      {/* Selections */}
      <Container>
        <div className="py-4">
          <RadioGroup defaultValue="featured" className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="featured" className="text-base font-bold">Featured</Label>
              <RadioGroupItem value="featured" id="featured" />
            </div>
            <Separator className="bg-dark-grayish-blue/20" />
            <div className="flex items-center justify-between">
              <Label htmlFor="price-low-to-high" className="text-base text-dark-grayish-blue">Price: low to high</Label>
              <RadioGroupItem value="price-low-to-high" id="price-low-to-high" />
            </div>
            <Separator className="bg-dark-grayish-blue/20" />
            <div className="flex items-center justify-between">
              <Label htmlFor="price-high-to-low" className="text-base text-dark-grayish-blue">Price: high to low</Label>
              <RadioGroupItem value="price-high-to-low" id="price-high-to-low" />
            </div>
            <Separator className="bg-dark-grayish-blue/20" />
            <div className="flex items-center justify-between">
              <Label htmlFor="newest" className="text-base text-dark-grayish-blue">Newest arrivals</Label>
              <RadioGroupItem value="newest" id="newest" />
            </div>
            <Separator className="bg-dark-grayish-blue/20" />
            <div className="flex items-center justify-between">
              <Label htmlFor="rate" className="text-base text-dark-grayish-blue">Best rated</Label>
              <RadioGroupItem value="rate" id="rate" />
            </div>
          </RadioGroup>
        </div>
      </Container>
      <Separator className="bg-dark-grayish-blue/20" />
      {/* Action Section */}
      <Container>
        <div className="py-4">
          <Button className="w-full font-bold text-base text-white py-5">Apply</Button>
        </div>
      </Container>
    </div>
  )
}