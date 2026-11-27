import Slider from '@/components/slider/Slider';
import Card from '@/components/card/Card';
import Container from '@/components/ui/container';
import { getProduct } from '@/lib/sanityFunctions';
import DUMMY_PRODUCTS from '@/data/products';

const product = DUMMY_PRODUCTS[0];

type props = {
  params: Promise<{slug: string}>
}

export default async function ProductPage({ params }: props) {

  const { slug } = await params;

  const slugProduct = await getProduct(slug);

  if(!slugProduct) {
    return <h1>Product not found!</h1>
  }


  return (
    <Container className="px-0">
      <main className="h-screen grid grid-rows-[300px_minmax(0,1fr)] md:grid-rows-none md:grid-cols-2 md:justify-items-center md:items-center">
        {/* Image Slider */}
        <Slider images={slugProduct.images} thumbnails={slugProduct.thumbnails} />

        {/* Article Section */}
        <Card product={slugProduct} />
      </main>
    </Container>
  );
}
