'use client';
import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { FieldTitle, Field } from '@/components/ui/field';


export default function PriceSlider() {

  const [value, setValue] = useState<number[]>([30, 80]);

  return (
    <Field orientation="horizontal" className="flex flex-col items-start gap-5 py-5">
      <FieldTitle className="font-bold text-base">
        Price
      </FieldTitle>
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
    </Field>
  )
}