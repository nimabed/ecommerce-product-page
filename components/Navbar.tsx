import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
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
                  className="relative nav-link-effect"
                >
                  <Link href='/collections'>Collections</Link>
                </li>
                <li
                  className="relative nav-link-effect"
                >
                  <Link href='/products/men'>Men</Link>
                </li>
                <li 
                  className="relative nav-link-effect"
                >
                  <Link href='/products/women'>Women</Link>
                </li>
                <li 
                  className="relative nav-link-effect"
                >
                  <Link href='/about'>About</Link>
                </li>
                <li 
                  className="relative nav-link-effect"
                >
                  <Link href='/contact'>Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* Icons */}
          <div className="flex items-center gap-1 md:gap-5 md:pr-4">
            {/* Search Button */}
            <Button className="p-2 rounded-lg text-dark-grayish-blue bg-transparent cursor-pointer hover:bg-grayish-blue/30">
              <Search className="size-5 md:size-5.5" />
            </Button>
            {/* bg-transparent Cart Button */}
            <CartButton>
              <CartModal />
            </CartButton>
            {/* Profile Button */}
            <Button className="size-8 rounded-full overflow-hidden cursor-pointer bg-transparent p-0 ml-1 hover:ring-2 hover:ring-primary md:size-10">
              <Image 
                className="size-full object-cover" 
                src='/image-avatar.png' 
                alt='profile avatar image' 
                width={50} 
                height={50} 
              />
            </Button>
          </div>
        </div>
        <div className="hidden w-full h-0.5 bg-dark-grayish-blue/10 mt-4 rounded-full md:block" /> 
      </Container>
    </header>
  )
}