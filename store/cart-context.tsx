'use client';

import { createContext, useReducer, useContext } from 'react';

type cartItem = {
      id: string,
      title: string,
      thumbnail: string,
      price: number,
      quantity: number,
      discount: number
}

type cartCtx = {
  items: cartItem[],
  totalQuantity: number,
  totalPrice: number,
  addToCart: (item: cartItem) => void,
  removeFromCart: (id: string) => void
}


type initialState = {
  items: cartItem[],
  totalQuantity: number,
  totalPrice: number
}


type actions = 
  | {type: "ADD", payload: cartItem} 
  | {type: "REMOVE", payload: string}


const cartCtx: cartCtx = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  addToCart: () => {},
  removeFromCart: () => {}
}


const initialState: initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
}

export const CartContext = createContext<cartCtx>(cartCtx);

const cartReducer = (pervState: initialState, action: actions): initialState => {

  switch(action.type) {

    case "ADD":

      const existingItemIndex = pervState.items.findIndex((item) => item.id === action.payload.id);
      const updatedCartItems = [...pervState.items];

      if(existingItemIndex > -1) {
        const updatedItem = {
          ...pervState.items[existingItemIndex],
          quantity: pervState.items[existingItemIndex].quantity + action.payload.quantity 
        }
        updatedCartItems[existingItemIndex] = updatedItem;
      }else {
        updatedCartItems.push(action.payload);
      }

      return {
        ...pervState,
        totalQuantity: pervState.totalQuantity + action.payload.quantity,
        items: updatedCartItems
      }


    case "REMOVE":

      const existingIndex = pervState.items.findIndex((item) => item.id === action.payload);
      const updatedTotalQuantity = pervState.totalQuantity - pervState.items[existingIndex].quantity;
      const updatedItems = pervState.items.filter((item) => item.id !== action.payload);

      return {
        ...pervState,
        items: updatedItems,
        totalQuantity: updatedTotalQuantity
      }

    default:
      return pervState
  }


}

export default function CartContextProvider({ children }: {
  children: React.ReactNode
}) {

  const [cart, cartDispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item: cartItem) => {
    cartDispatch({
      type: "ADD",
      payload: item
    })
  }

  const removeFromCart = (id: string) => {
    cartDispatch({
      type: "REMOVE",
      payload: id
    })
  }


  const ctxValue: cartCtx = {
    items: cart.items,
    totalQuantity: cart.totalQuantity,
    totalPrice: cart.totalPrice,
    addToCart,
    removeFromCart
  }

  return <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
}


export function useCart() {
  const cartCtx = useContext(CartContext);

  if(!cartCtx) {
    throw new Error("useCart must be used in cartContextProvider!");
  }

  return cartCtx;
}