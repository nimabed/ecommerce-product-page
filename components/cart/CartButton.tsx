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
        className="relative cursor-pointer" 
        onClick={() => setCartIsActive(pervState => !pervState)}
      >
        <Image 
          className="md:mt-1" 
          src='/icon-cart.svg' 
          alt='cart image' 
          width={23} 
          height={23} 
        />
        {totalQuantity > 0 && (
          <span 
          className="absolute -right-[5px] -top-1 px-2 text-[9px] font-semibold text-white rounded-full bg-primary scale-95 md:scale-100"
        >
          {totalQuantity}
        </span>)}
      </button>

      {/* Cart Modal */}
      {cartIsActive && children}
    </>

  )
}