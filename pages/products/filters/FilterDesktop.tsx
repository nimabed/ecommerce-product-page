import { Button } from '@/components/ui/button';
import FilterContents from './FilterContents';

export default function FilterDesktop() {
  return (
    <div className="hidden w-full ml-0.5 md:block">
      <div className="sticky top-3 ring ring-dark-grayish-blue/20 rounded-md overflow-y-scroll scroll-smooth overscroll-none max-h-screen">
        {/* Filter Title */}
        <div className="sticky top-0 flex items-center justify-between p-3 bg-white border-b border-b-dark-grayish-blue/20 z-1">
          <h2 className="font-semibold text-base uppercase tracking-wide">Filters</h2>
          <Button variant="link" className="font-medium text-sm text-primary no-underline! hover:opacity-80">
            Clear Filters
          </Button>
        </div>
        {/* Filter Contents */}
        <FilterContents isDesktop />
      </div>
    </div>

  )
}