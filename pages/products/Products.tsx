import ProductItem from './ProductItem';

export default function Products() {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
      <ProductItem />
      <ProductItem />
      <div className="bg-green-500">3</div>
    </div>
  )
}