import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';
import Container from '@/components/ui/container';
import MenuButton from './mobile-menu/MenuButton';
import CartButton from './cart/CartButton';
import CartModal from './cart/CartModal';

export default function Navbar() {
  return (
    <header>
      <Container className="static">
        <div className="flex justify-between py-6 md:py-8">
          <div className="flex items-center space-x-3">
            {/* Mobile Menu Button */}
            <MenuButton />
            {/* Logo */}
            <Link href='/'>
              <Image src='/logo.svg' alt='logo image' width={140} height={140} />
            </Link>
            {/* Nav Links */}
            <nav className="hidden ml-10 md:block">
              <ul className="flex space-x-8 items-center text-dark-grayish-blue">
                <li 
                  className="decoration-4 decoration-primary hover:underline hover:underline-offset-[3.3rem]"
                >
                  <Link href='/collections'>Collections</Link>
                </li>
                <li
                  className="decoration-4 decoration-primary hover:underline hover:underline-offset-[3.3rem]"
                >
                  <Link href='/products/men'>Men</Link>
                </li>
                <li 
                  className="decoration-4 decoration-primary hover:underline hover:underline-offset-[3.3rem]"
                >
                  <Link href='/products/women'>Women</Link>
                </li>
                <li 
                  className="decoration-4 decoration-primary hover:underline hover:underline-offset-[3.3rem]"
                >
                  <Link href='/about'>About</Link>
                </li>
                <li 
                  className="decoration-4 decoration-primary hover:underline hover:underline-offset-[3.3rem]"
                >
                  <Link href='/contact'>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* Icons */}
          <div className="flex items-center gap-5 md:gap-9 md:pr-3">
            {/* Search Button */}
            <button className="cursor-pointer">
              <Search className="size-5 text-dark-grayish-blue md:size-5.5" />
            </button>
            {/* Cart Button */}
            <CartButton>
              <CartModal />
            </CartButton>
            {/* Profile Button */}
            <Image className="cursor-pointer ring rounded-full hover:ring-primary md:scale-200 md:ml-4" src='/image-avatar.png' alt='profile avatar image' width={25} height={25} />
          </div>
        </div>
        <div className="hidden w-full h-0.5 bg-dark-grayish-blue/10 mt-4 rounded-full md:block" /> 
      </Container>
    </header>
  )
}