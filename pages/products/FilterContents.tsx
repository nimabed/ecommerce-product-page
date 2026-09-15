import Container from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import PriceSlider from './PriceSlider';

import { X } from 'lucide-react';

export default function FilterContents({ onClose }: {
  onClose: () => void
}) {
  return (
    <>
      {/* Title Section */}
      <Container>
        <div className="flex items-center justify-between py-3">
          <h2 className="font-bold text-lg">Filter</h2>
          <Button 
            className="bg-transparent cursor-pointer hover:bg-dark-grayish-blue/20"
            onClick={onClose}  
          >
            <X strokeWidth={2} className="size-5" />
          </Button>
        </div>
      </Container>
      <Separator className="bg-dark-grayish-blue/20" />
      {/* Category Section */}
      <Container>
        <div className="space-y-3 py-4">
          <h2 className="font-bold text-base">Category</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox id="running" name="running" />
              <Label htmlFor="running" className="text-base">
                Running
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="lifestyle" name="lifestyle" />
              <Label htmlFor="lifestyle" className="text-base">
                Lifestyle
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="basketball" name="basketball" />
              <Label htmlFor="basketball" className="text-base">
                Basketball
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="training" name="training" />
              <Label htmlFor="training" className="text-base">
                Training
              </Label>
            </div>
          </div>
        </div>
      </Container>
      <Separator className="bg-dark-grayish-blue/20" />
      {/* Price Range Section */}
      <Container>
        <PriceSlider />
      </Container>
      <Separator className="bg-dark-grayish-blue/20" />
      {/* Size Section */}
      <Container>
        <div className="space-y-3 py-4">
          <h2 className="font-bold text-base">Size (US)</h2>
          <div className="flex items-center justify-between gap-2">
            <Button variant="outline" size="lg" className="flex-1">7</Button>
            <Button variant="outline" size="lg" className="flex-1">8</Button>
            <Button variant="active" size="lg" className="flex-1">9</Button>
            <Button variant="outline" size="lg" className="flex-1">10</Button>
            <Button variant="outline" size="lg" className="flex-1">11</Button>
          </div>
        </div>
      </Container>
      <Separator className="bg-dark-grayish-blue/20" />
      {/* Color Section */}
      <Container>
        <div className="space-y-3 py-4">
          <h2 className="font-bold text-base">Color</h2>
          <div className="space-x-2">
            <Button variant="outline" size="icon" className="rounded-full bg-black! hover:opacity-70! border-2 border-primary" />
            <Button variant="outline" size="icon" className="rounded-full bg-white! hover:opacity-70!" />
            <Button variant="outline" size="icon" className="rounded-full bg-primary! hover:opacity-70!" />
            <Button variant="outline" size="icon" className="rounded-full bg-amber-900! hover:opacity-70!" />
          </div>
        </div>
      </Container>
      <Separator className="bg-dark-grayish-blue/20" />
      {/* Actions */}
      <Container>
        <div className="flex items-center gap-3 py-4">
          <Button variant="outline" size="lg" className="font-bold p-5">Clear all</Button>
          <Button size="lg" className="font-bold text-base flex-1 py-5 text-white">Show 42 results</Button>
        </div>
      </Container>

    </>
  )
}