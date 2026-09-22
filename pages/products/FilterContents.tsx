import Container from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import FilterAccordion from './FilterAccordion';

export default function FilterContents({ onClose, isClosing }: {
  onClose: () => void,
  isClosing: boolean
}) {
  return (
    <div className={cn("absolute size-full bottom-0 duration-500 bg-white",
      isClosing ? "animate-out slide-out-to-bottom" : "animate-in slide-in-from-bottom"
    )}>
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

      <FilterAccordion isDesktop={false} />

      {/* Actions */}
      <Container>
        <div className="flex items-center gap-3 py-4">
          <Button variant="outline" size="lg" className="font-bold p-5">Clear all</Button>
          <Button size="lg" className="font-bold text-base flex-1 py-5 text-white">Show 42 results</Button>
        </div>
      </Container>
    </div>
  )
}