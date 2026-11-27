'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks({ isMobile }: { isMobile: boolean }) {

  const pathName = usePathname();

  const isProductsPage = pathName?.endsWith('products');

  return (
    <nav className={!isMobile ? "hidden ml-10 md:block" : undefined}>
      <ul
        className={`flex ${isMobile ? "flex-col items-start space-y-5 font-semibold" : "flex-row items-center space-x-8 text-dark-grayish-blue"}`}>
        <li
          className={`${isMobile ? "hover:underline hover:underline-offset-8" : "relative nav-link-effect"}`}
        >
          <Link href='/products' className={(isProductsPage && !isMobile) ? "text-primary" : ""}>Collections</Link>
        </li>
        <li
          className={`${isMobile ? "hover:underline hover:underline-offset-8" : "relative nav-link-effect"}`}
        >
          <Link href='/products/men'>Men</Link>
        </li>
        <li
          className={`${isMobile ? "hover:underline hover:underline-offset-8" : "relative nav-link-effect"}`}
        >
          <Link href='/products/women'>Women</Link>
        </li>
        <li
          className={`${isMobile ? "hover:underline hover:underline-offset-8" : "relative nav-link-effect"}`}
        >
          <Link href='/about'>About</Link>
        </li>
        <li
          className={`${isMobile ? "hover:underline hover:underline-offset-8" : "relative nav-link-effect"}`}
        >
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}