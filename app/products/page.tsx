
import ProductsBanner from '@/pages/products/ProductsBanner';
import Filter from '@/pages/products/Filter';
import FilterDesktop from "@/pages/products/FilterDesktop";
import SortDesktop from '@/pages/products/SortDesktop';
import Products from '@/pages/products/Products';

import Container from '@/components/ui/container'

export default function ProductPage() {
  return (
    <>
      <ProductsBanner />
      <Filter />
      <Container>
        <main className="grid grid-cols-1 md:grid-cols-[20%_1fr] py-5">
          <FilterDesktop /> 
          <div className="md:pl-8 md:space-y-6">
            {/* Result and sort sections */}
            <div className="hidden items-center justify-between md:flex">
              <span>Showing 1-12 of 48 products</span>
              <SortDesktop />
            </div>
            <Products />
          </div>
          

        </main>
      </Container>
    </>
  );
}
