import { cn } from '@/lib/utils';

export default function Container({ children, className }: {
  children: React.ReactNode;
  className?: string
}) {
  return (
    <div className={cn("relative w-full overflow-hidden px-6 md:px-0 md:max-w-360 md:mx-auto", className)}>
      {children}
    </div>
  )
}