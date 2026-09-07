import Link from 'next/link';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

type menuProps = {
    isOpen: boolean;
    isClosing: boolean;
    onParentClose: (e: React.MouseEvent) => void;
    onChildClose: (e: React.MouseEvent) => void;
}

export default function Menu({ isOpen, isClosing , onParentClose, onChildClose }: menuProps) {
  return (
    <div 
      className={cn("absolute inset-0 w-full bg-black/50 z-99 duration-300 md:hidden",
        isOpen && "animate-in fade-in",
        isClosing && "animate-out fade-out" 
      )} 
      onClick={onParentClose}
    >
      <div 
        className={cn("w-[60%] h-full p-5 bg-white text-dark-blue duration-300",
          isOpen && "animate-in slide-in-from-left",
          isClosing && "animate-out slide-out-to-left"
        )}
      >
        <button 
          className="mb-9 cursor-pointer p-2 rounded-lg hover:bg-grayish-blue/30"
          onClick={onChildClose}
        >
          <X className="size-6" />
        </button>

        <nav className="mt-3">
          <ul className="flex flex-col items-start space-y-5 font-semibold">
            <li><Link href='/collections'>Collections</Link></li>
            <li><Link href='/products/men'>Men</Link></li>
            <li><Link href='/products/women'>Women</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}