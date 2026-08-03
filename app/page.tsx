import Slider from '@/components/Slider';
import Card from '@/components/Card';

import DUMMY_PRODUCTS from '../data/products';

const product = DUMMY_PRODUCTS[0];

export default function ProductPage() {
  return (
    <>
      <div className="hidden w-full h-[2px] bg-dark-grayish-blue/10 mt-4 rounded-full md:block" /> 
      <main className="w-full h-screen grid grid-rows-[300px_minmax(0,1fr)] md:grid-rows-none md:grid-cols-2 md:justify-items-center md:items-center">
        {/* Image Slider */}
        <Slider sliderImages={product.images} />

        {/* Article Section */}
        <Card 
          product={{
            id: product.id,
            company: product.company,
            title: product.title,
            price: product.price,
            discount: product.discount,
            description: product.description,
            thumbnail: product.images[0].thumbnail
          }}
         />
      </main>
    </>
  );
}
