import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';


import FilterAccordion from './FilterAccordion';

export default function FilterDesktop() {
  return (
    <div className="hidden w-full ring ring-dark-grayish-blue/20 ml-0.5 rounded-md md:block">
      {/* Title Section */}
      <h2 className="font-semibold text-base text-primary uppercase tracking-wide p-3">Filters</h2>
      <Separator className="bg-dark-grayish-blue/20" />

      <FilterAccordion isDesktop />


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