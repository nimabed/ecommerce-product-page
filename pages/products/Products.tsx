import ProductItem from './ProductItem';

const products = [
  {
    id: "p1",
    image: "/image-product-1.jpg",
    title: "Classic Runner",
    price: "$125.00",
    rank: 4.4,
    vote: 245,
    isDark: false,
    colors: ["bg-black", "bg-white", "bg-yellow-400", "bg-orange-400"],
    badge: "New"
  },
  {
    id: "p2",
    image: "/image-product-2.jpg",
    title: "Street Icon",
    price: "$110.00",
    rank: 4.5,
    vote: 312,
    isDark: false,
    colors: ["bg-gray-400", "bg-white"]
  },
  {
    id: "p3",
    image: "/image-product-3.jpg",
    title: "Comfy Everyday",
    price: "$130.00",
    rank: 4.7,
    vote: 198,
    isDark: true,
    colors: ["bg-black", "bg-white", "bg-amber-400", "bg-orange-400"],
    badge: "New"
  },
  {
    id: "p4",
    image: "/image-product-4.jpg",
    title: "All Day Walk",
    price: "$106.00",
    rank: 4.5,
    vote: 267,
    isDark: true,
    colors: ["bg-zinc-400", "bg-white", "bg-stone-400", "bg-orange-400"]
  }
]

export default function Products() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
      {
        products?.map(product => <ProductItem key={product.id} {...product} />)
      }
    </div>
  )
}