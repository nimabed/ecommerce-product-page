'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '@/store/cart-context';

export default function CartButton({ children }: {
  children: React.ReactNode;
}) {

  const [cartIsActive, setCartIsActive] = useState(false);

  const { totalQuantity } = useCart();

  return (
    <>
      <button 
        className="size-4.5 relative cursor-pointer md:size-5.5" 
        onClick={() => setCartIsActive(pervState => !pervState)}
      >
        <Image 
          src='/icon-cart.svg' 
          alt='cart image' 
          fill 
        />
        {totalQuantity > 0 && (
          <span 
          className="absolute -right-1.25 -top-2 px-2 text-[9px] font-semibold text-white rounded-full bg-primary scale-90 md:-top-1.5 md:scale-100"
        >
          {totalQuantity}
        </span>)}
      </button>

      {/* Cart Modal */}
      {cartIsActive && children}
    </>

  )
}