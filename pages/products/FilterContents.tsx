import Container from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { FieldSet, FieldTitle, FieldGroup, FieldLabel, Field } from '@/components/ui/field';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import PriceSlider from './PriceSlider';

import { X } from 'lucide-react';

export default function FilterContents() {
  return (
    <>
      {/* Title Section */}
      <Container>
        <div className="flex items-center justify-between py-3">
          <h2 className="font-bold text-lg">Filter</h2>
          <Button className="bg-transparent cursor-pointer hover:bg-dark-grayish-blue/20">
            <X strokeWidth={2} className="size-5" />
          </Button>
        </div>
      </Container>
      <Separator className="bg-dark-grayish-blue/20" />
      {/* Category Section */}
      <Container>
        <div className="py-3">
          <FieldSet>
            <FieldTitle className="font-bold text-base">Category</FieldTitle>
            <FieldGroup className="gap-3">
              <Field orientation="horizontal">
                <Checkbox id="running" name="running" />
                <FieldLabel htmlFor="running" className="text-base">
                  Running
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox id="lifestyle" name="lifestyle" />
                <FieldLabel htmlFor="lifestyle" className="text-base">
                  Lifestyle
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox id="basketball" name="basketball" />
                <FieldLabel htmlFor="basketball" className="text-base">
                  Basketball
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox id="training" name="training" />
                <FieldLabel htmlFor="training" className="text-base">
                  Training
                </FieldLabel>
              </Field>
            </FieldGroup>
          </FieldSet>
        </div>
      </Container>
      <Separator className="bg-dark-grayish-blue/20" />
      {/* Price Range */}
      <Container>
        <PriceSlider />
      </Container>

    </>
  )
}