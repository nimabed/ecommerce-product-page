import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Ranking({ ranking, starSize }: {
  ranking: number,
  starSize?: string
}) {
  return (
    <div className="flex items-center gap-1">
      {
        [1,2,3,4,5].map(star => {

          const fillPercent = Math.min(Math.max(ranking - (star - 1), 0), 1) * 100;

          return (
            <div 
              key={star}
              className="relative"
            > 
              <Star 
                 
                className={cn("size-2.5 text-primary md:size-3", starSize)} 
              />
              {/* Fill portion */}
              <div className="absolute inset-0 overflow-hidden" style={{width: `${fillPercent}%`}}>
                <Star className={cn("size-2.5 fill-primary text-primary md:size-3", starSize)} />
              </div>
            </div>
          )
        }
        )
      }
    </div>
  )
}