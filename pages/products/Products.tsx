import ProductItem from './ProductItem';
import { getProducts } from '@/lib/sanityFunctions';


export default async function Products() {

  const newProducts = await getProducts();

  if(!newProducts) {
    return <h1>Fetching products failed</h1>
  }
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
      {
        newProducts?.map(product => <ProductItem key={product._id} product={product} />)
      }
    </div>
  )
}

