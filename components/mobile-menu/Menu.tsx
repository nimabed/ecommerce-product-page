import Image from 'next/image';
import Link from 'next/link';

export default function Menu({ onParentClose, onChildClose }: { onParentClose: (e: React.MouseEvent) => void, onChildClose: (e: React.MouseEvent) => void }) {
  return (
    <div className="absolute inset-0 w-full bg-black/50 z-99 md:hidden" onClick={onParentClose}>
      <div className="w-[60%] h-full p-5 bg-white">
        <button 
          className="mb-9 cursor-pointer"
          onClick={onChildClose}
        >
          <Image src='/icon-close.svg' alt='close icon image' width={13} height={13} />
        </button>

        <nav className="mt-3">
          <ul className="flex flex-col items-start space-y-5 font-semibold text-dark-blue">
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