import Image from 'next/image';
import Link from 'next/link';
import MenuButton from './mobile-menu/MenuButton';
import CartButton from './cart/CartButton';
import CartModal from './cart/CartModal';

export default function Navbar() {
  return (
    <header>
      <div className="flex justify-between p-6 w-full md:py-8 md:px-0">
        <div className="flex items-center space-x-3">
          <MenuButton />
          <Link href='/'>
            <Image src='/logo.svg' alt='logo image' width={140} height={140} />
          </Link>
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
        <div className="flex items-center space-x-5 md:space-x-10 md:pr-3">
          <CartButton>
            <CartModal />
          </CartButton>
          <Image className="cursor-pointer ring rounded-full hover:ring-primary md:scale-200 md:ml-5" src='/image-avatar.png' alt='profile avatar image' width={25} height={25} />
        </div>
      </div>
      <div className="hidden w-full h-[2px] bg-dark-grayish-blue/10 mt-4 rounded-full md:block" /> 
    </header>
  )
}