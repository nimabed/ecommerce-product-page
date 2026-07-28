import Image from 'next/image';
import Link from 'next/link';
import MenuButton from './mobile-menu/MenuButton';

export default function Navbar() {
  return (
    <header className="flex justify-between p-6 w-full md:py-8 md:px-0">
      <div className="flex items-center space-x-3">
        <MenuButton />
        <Link href='/'>
          <Image src='/logo.svg' alt='logo image' width={140} height={140} />
        </Link>
        <nav className="hidden ml-10 md:block">
          <ul className="flex space-x-8 items-center text-dark-grayish-blue">
            <li><Link href='/collections'>Collections</Link></li>
            <li><Link href='/products/men'>Men</Link></li>
            <li><Link href='/products/women'>Women</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center space-x-5 md:space-x-10 md:pr-3">
        <Image className="cursor-pointer md:mt-1" src='/icon-cart.svg' alt='cart image' width={23} height={23} />
        <Image className="cursor-pointer md:scale-200 md:ml-5" src='/image-avatar.png' alt='profile avatar image' width={25} height={25} />
      </div>
    </header>
  )
}