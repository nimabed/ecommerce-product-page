import Slider from '@/components/slider/Slider';
import Card from '@/components/card/Card';
import Container from '@/components/ui/container';

import DUMMY_PRODUCTS from '@/data/products';

const product = DUMMY_PRODUCTS[0];

export default function ProductPage() {
  return (

    <main className="w-full h-screen grid grid-rows-[300px_minmax(0,1fr)] md:grid-rows-none md:grid-cols-2 md:justify-items-center md:items-center">
      {/* Image Slider */}
      <Slider sliderImages={product.images} />

      {/* Article Section */}
      <Container className="md:px-0">
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
      </Container>
    </main>
  );
}
