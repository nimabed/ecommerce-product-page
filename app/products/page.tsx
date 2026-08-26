import Slider from '@/components/slider/Slider';
import Card from '@/components/card/Card';
import Container from '@/components/ui/container';

import DUMMY_PRODUCTS from '@/data/products';

const product = DUMMY_PRODUCTS[0];

export default function ProductPage() {
  return (
    <Container className="px-0">
      <main className="h-screen grid grid-rows-[300px_minmax(0,1fr)] md:grid-rows-none md:grid-cols-2 md:justify-items-center md:items-center">
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
    </Container>
  );
}
