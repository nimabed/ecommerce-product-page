'use client';
import { Button } from '../ui/button';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/store/cart-context';

export default function CartButton({ children }: {
  children: React.ReactNode;
}) {

  const [cartIsActive, setCartIsActive] = useState(false);

  const { totalQuantity } = useCart();

  return (
    <>
      <Button 
        className="relative p-2 rounded-lg cursor-pointer text-dark-grayish-blue bg-transparent hover:bg-grayish-blue/30" 
        onClick={() => setCartIsActive(pervState => !pervState)}
      >
        <ShoppingCart className="size-5 md:size-5.5" />
        {
          totalQuantity > 0 && (
          <span 
            className="absolute right-0.5 top-0 px-2 text-[9px] font-semibold text-white rounded-full bg-primary scale-90 md:scale-100"
          >
          {totalQuantity}
          </span>)
        }
      </Button>
      {/* Cart Modal */}
      {cartIsActive && children}
    </>

  )
}