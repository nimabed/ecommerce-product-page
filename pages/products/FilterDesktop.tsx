import Container from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';

export default function FilterDesktop() {
  return (
    <Container>
      <div className="w-full max-w-[20%] bg-amber-100">
        {/* Title Section */}
        <h2 className="font-bold text-lg text-primary uppercase track-widest">Filters</h2>
        <Separator className="bg-dark-grayish-blue/20" />
      </div>
    </Container>
  )
}