'use client';
import { useState } from 'react';
import { Slider } from '@/components/ui/slider';

export default function PriceSlider() {

  const [value, setValue] = useState<number[]>([30, 80]);

  return (
    <div className="space-y-4 py-4">
      <h3 className="font-bold text-base">Price</h3>
      <div className="w-full">
        <Slider
          className="bg-dark-grayish-blue/30"
          value={value}
          min={10}
          max={100}
          step={5}
          onValueChange={(value) => setValue(value as number[])}
        />
        <div className="flex items-center justify-between mt-2 text-dark-grayish-blue">
          <span>{`$${value[0]}`}</span>
          <span>{`$${value[1]}`}</span>
        </div>
      </div>
    </div>
  )
}