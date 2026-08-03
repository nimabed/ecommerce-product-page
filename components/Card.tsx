import AddToCartButton from './AddToCartButton';

export default function Card({ product }) {
  return (
    <article className="w-full p-6 md:p-0 md:max-w-[70%]">
      <div className="flex flex-col space-y-4 md:space-y-6">
        <p className="font-semibold uppercase text-dark-grayish-blue tracking-widest">{product.company}</p>
        <h1 className="text-3xl font-bold -mt-1 md:text-5xl">{product.title}</h1>
        <p className="leading-7 text-dark-grayish-blue/90 md:mt-6 md:text-lg md:tracking-wide">{product.description}</p>
      </div>

      <div className="flex items-center justify-between my-5 md:flex-col md:items-start md:space-y-3">
        <div className="flex items-center space-x-4">
          <span className="text-3xl font-bold">{`$${(product.price * (product.discount/100)).toFixed(2)}`}</span>
          <span className="px-2 py-[2px] bg-black text-white font-semibold rounded-md">{`${product.discount}%`}</span>
        </div>
        <del className="font-bold text-dark-grayish-blue decoration-dark-grayish-blue decoration-2">{`$${product.price.toFixed(2)}`}</del>
      </div>
      <AddToCartButton product={product} />
    </article>
  )
}