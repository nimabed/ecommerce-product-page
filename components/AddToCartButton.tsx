'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';

import { useCart } from '@/store/cart-context';

export default function AddToCartButton({ product }) {

  const [quantity, setQuantity] = useState(0);

  const { addToCart } = useCart();


  const handleAddToCart = () => {
    if(quantity > 0) {
      addToCart({
        id: product.id,
        title: product.title,
        thumbnail: product.thumbnail,
        price: product.price,
        discount: product.discount,
        quantity
      });

      setQuantity(0);
    }
  }


  const handleDecreaseQuantity = () => {
    if(quantity > 0) {
      setQuantity(pervState => pervState - 1);
    }
  }

  const handleIncreaseQuantity = () => {
    setQuantity(pervState => pervState + 1);
  }


  return (
    <div className="flex flex-col space-y-3 md:flex-row md:items-center md:space-x-3">
      <div 
        className="flex justify-between items-center py-3 px-3 bg-light-grayish-blue rounded-lg md:flex-2 md:mt-3"
      >
        <button 
          className="group p-1 cursor-pointer"
          onClick={handleDecreaseQuantity}
        >
          <Minus strokeWidth={4} className="size-5 text-primary group-hover:text-primary/60" />
        </button>
        <span className="font-bold">{quantity}</span>
        <button 
          className="group p-1 cursor-pointer"
          onClick={handleIncreaseQuantity}
        >
          <Plus strokeWidth={4} className="size-5 text-primary group-hover:text-primary/60" />
        </button>
      </div>
      <button
        className="flex justify-center items-center font-semibold bg-primary py-4 px-3 rounded-lg shadow-xl shadow-primary/40 cursor-pointer hover:bg-primary/70 md:shadow-none md:flex-3"
        onClick={handleAddToCart}
      >
        <Image 
          className="mr-3 brightness-50"
          src='/icon-cart.svg' 
          alt='icon cart image' 
          width={17}
          height={17}
        />
          Add to cart
      </button>
    </div>
  )
}