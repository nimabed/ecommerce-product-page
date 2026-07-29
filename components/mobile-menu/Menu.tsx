import Image from 'next/image';
import Link from 'next/link';

export default function Menu({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed left-0 top-0 bottom-0 w-full max-w-[375px] bg-black/50 z-10 md:hidden">
      <div className="w-[60%] h-full p-5 bg-white">
        <button 
          className="mb-9 cursor-pointer"
          onClick={onClose}
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