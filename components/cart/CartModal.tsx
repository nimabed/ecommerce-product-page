import CartItem from './CartItem';

export default function CartModal() {
  return (
    <div className="absolute w-89 h-64.5 left-1/2 -translate-x-1/2 top-20 flex flex-col rounded-xl shadow-xl bg-white z-9 md:left-[73%] md:translate-x-0 md:shadow-2xl">
      <header className="font-semibold p-5 border-b border-b-dark-grayish-blue/10">Cart</header>
      <div className="size-full flex justify-center items-center">
        <CartItem />
      </div>
    </div>
  )
}