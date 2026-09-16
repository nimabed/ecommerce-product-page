import Link from 'next/link';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

type menuProps = {
  isClosing: boolean,
  onClose: () => void
}

export default function MenuContent({ isClosing, onClose }: menuProps) {
  return (
    <div
      className={cn("absolute left-0 w-[60%] h-full p-5 space-y-7 bg-white text-dark-blue duration-500",
        isClosing ? "animate-out slide-out-to-left" : "animate-in slide-in-from-left"
      )}
    >
      <button
        className="cursor-pointer rounded-lg -ml-1"
        onClick={onClose}
      >
        <X className="size-6" />
      </button>

      <nav>
        <ul className="flex flex-col items-start space-y-5 font-semibold">
          <li className="hover:underline hover:underline-offset-8"><Link href='#'>Collections</Link></li>
          <li className="hover:underline hover:underline-offset-8"><Link href='#'>Men</Link></li>
          <li className="hover:underline hover:underline-offset-8"><Link href='#'>Women</Link></li>
          <li className="hover:underline hover:underline-offset-8"><Link href='#'>About</Link></li>
          <li className="hover:underline hover:underline-offset-8"><Link href='#'>Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}