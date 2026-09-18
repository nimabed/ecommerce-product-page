import Container from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';
import PriceSlider from './PriceSlider';

export default function FilterDesktop() {
  return (
    <div className="hidden w-full ring ring-dark-grayish-blue/20 ml-0.5 rounded-md md:block">
      {/* Title Section */}
      <h2 className="font-bold text-lg text-primary uppercase tracking-wide p-3">Filters</h2>
      <Separator className="bg-dark-grayish-blue/20" />
      {/* Category Section */}
      <div className="space-y-3 p-3">
        <h3 className="font-bold text-lg">Category</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Checkbox id="running" name="running" />
            <Label htmlFor="running" className="text-base">
              Running
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox id="lifestyle" name="lifestyle" />
            <Label htmlFor="lifestyle" className="text-base">
              Lifestyle
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox id="basketball" name="basketball" />
            <Label htmlFor="basketball" className="text-base">
              Basketball
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox id="training" name="training" />
            <Label htmlFor="training" className="text-base">
              Training
            </Label>
          </div>
        </div>
      </div>
      <Separator className="bg-dark-grayish-blue/20" />
      {/* Price Range Section */}
      <div className="p-3">
        <PriceSlider />
      </div>
      <Separator className="bg-dark-grayish-blue/20" />
      {/* Size Section */}
      <div className="space-y-3 p-3">
        <h3 className="font-bold text-base">Size (US)</h3>
        <div className="flex items-center justify-between gap-2">
          <Button variant="outline" size="lg" className="flex-1">7</Button>
          <Button variant="outline" size="lg" className="flex-1">8</Button>
          <Button variant="active" size="lg" className="flex-1">9</Button>
          <Button variant="outline" size="lg" className="flex-1">10</Button>
          <Button variant="outline" size="lg" className="flex-1">11</Button>
        </div>
      </div>
      <Separator className="bg-dark-grayish-blue/20" />
      {/* Color Section */}
      <div className="space-y-3 p-3">
        <h3 className="font-bold text-base">Color</h3>
        <div className="space-x-2">
          <Button variant="outline" size="icon" className="rounded-full bg-black! hover:opacity-70! border-2 border-primary" />
          <Button variant="outline" size="icon" className="rounded-full bg-white! hover:opacity-70!" />
          <Button variant="outline" size="icon" className="rounded-full bg-primary! hover:opacity-70!" />
          <Button variant="outline" size="icon" className="rounded-full bg-amber-900! hover:opacity-70!" />
        </div>
      </div>
      <Separator className="bg-dark-grayish-blue/20" />
      {/* Reset Button */}
      <div className="py-3">
        <Button variant="link" className="font-bold text-base text-primary no-underline! hover:opacity-80">
          <RotateCcw strokeWidth={3} className="size-4" />
          Clear Filters
        </Button>
      </div>
    </div>

  )
}