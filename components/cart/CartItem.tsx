'use client';

import Image from 'next/image';
import { Trash2 } from 'lucide-react';
import { useCart } from '@/store/cart-context';

export default function CartItem() {

  const { items, removeFromCart } = useCart();

  function handleRemoveItem() {
    removeFromCart(items[0].id)
  }

  
  if(items.length === 0) {
    return (
      <span className="font-semibold text-dark-grayish-blue">Your cart is empty.</span>
    )
  }


  return (
    <div className="size-full max-w-[90%] max-h-[85%] flex flex-col justify-center">
      <div className="flex space-x-3 items-center justify-center">
        <Image 
          className="rounded-lg"
          src={items[0].thumbnail} 
          alt='shoes thumbnail' 
          width={60} 
          height={60} 
        />
        <div>
          <p className="text-dark-grayish-blue mb-1">{items[0].title}</p>
          <p className="text-dark-grayish-blue">{`$${(items[0].price * (items[0].discount/100)).toFixed(2)}x`}<span className="mx-1">{items[0].quantity}</span><span className="text-black font-semibold">{`$${(items[0].price * items[0].quantity).toFixed(2)}`}</span></p>
        </div>
        <button 
          className="group cursor-pointer"
          onClick={handleRemoveItem}
        >
          <Trash2 className="size-5 text-dark-grayish-blue group-hover:text-primary" />
        </button>
      </div>

      <button
        className="w-full py-3 mt-6 rounded-lg font-semibold bg-primary cursor-pointer hover:bg-primary/70"
      >Checkout
      </button>
    </div>
  )
}