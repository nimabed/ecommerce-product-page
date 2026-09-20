import ProductItem from './ProductItem';

const products = [
  {
    id: "p1",
    image: "/product-1.jpeg",
    title: "Classic Runner",
    price: "$125.00",
    rank: 4.4,
    vote: 245,
    isDark: false,
    colors: ["bg-black", "bg-white", "bg-blue-900", "bg-green-400"],
    badge: "New"
  },
  {
    id: "p2",
    image: "/product-2.jpeg",
    title: "Street Icon",
    price: "$110.00",
    rank: 4.5,
    vote: 312,
    isDark: false,
    colors: ["bg-gray-400", "bg-white"],
    badge: "New"
  },
  {
    id: "p3",
    image: "/product-3.jpeg",
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
    image: "/product-4.jpeg",
    title: "All Day Walk",
    price: "$106.00",
    rank: 4.5,
    vote: 267,
    isDark: false,
    colors: ["bg-zinc-400", "bg-white", "bg-orange-400"],
    badge: "New"
  },
  {
    id: "p5",
    image: "/product-5.jpeg",
    title: "Essential Low",
    price: "$156.99",
    rank: 4.1,
    vote: 153,
    isDark: true,
    colors: ["bg-stone-400", "bg-orange-400"],
    badge: "New"
  },
  {
    id: "p6",
    image: "/product-6.jpeg",
    title: "Urban Ratro",
    price: "$120.00",
    rank: 4.3,
    vote: 243,
    isDark: false,
    colors: ["bg-yellow-400", "bg-blue-400", "bg-stone-400"],
    badge: "New"
  },
  {
    id: "p7",
    image: "/product-7.jpeg",
    title: "Court Classic",
    price: "$113.00",
    rank: 4.6,
    vote: 210,
    isDark: false,
    colors: ["bg-white", "bg-stone-400", "bg-indigo-400"],
    badge: "New"
  },
  {
    id: "p8",
    image: "/product-8.jpeg",
    title: "Performance Run",
    price: "$119.99",
    rank: 4.8,
    vote: 342,
    isDark: false,
    colors: ["bg-orange-400", "bg-blue-400", "bg-purple-400"],
    badge: "New"
  },
  {
    id: "p9",
    image: "/product-9.jpeg",
    title: "Urban Flex",
    price: "$116.99",
    rank: 4.9,
    vote: 301,
    isDark: true,
    colors: ["bg-white", "bg-black", "bg-stone-400"],
    badge: "New"
  },
  {
    id: "p10",
    image: "/product-10.jpeg",
    title: "Retro vibe",
    price: "$120.00",
    rank: 3.9,
    vote: 121,
    isDark: false,
    colors: ["bg-orange-400", "bg-gray-400", "bg-amber-400"],
    badge: "New"
  },
  {
    id: "p11",
    image: "/product-11.jpeg",
    title: "Modern Classic",
    price: "$135.00",
    rank: 4.2,
    vote: 186,
    isDark: false,
    colors: ["bg-black", "bg-gray-400"],
    badge: "New"
  },
    {
    id: "p12",
    image: "/product-12.jpeg",
    title: "Adventure Trail",
    price: "$149.99",
    rank: 4.8,
    vote: 253,
    isDark: true,
    colors: ["bg-orange-400", "bg-gray-400", "bg-indigo-900"],
    badge: "New"
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