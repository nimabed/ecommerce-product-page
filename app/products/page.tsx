
import ProductsBanner from '@/pages/products/ProductsBanner';
import Filter from '@/pages/products/Filter';
import FilterDesktop from "@/pages/products/FilterDesktop";
import SortDesktop from '@/pages/products/SortDesktop';

import Container from '@/components/ui/container'

export default function ProductPage() {
  return (
    <>
      <ProductsBanner />
      <Filter />
      <Container>
        <main className="grid grid-cols-1 md:grid-cols-[20%_1fr] py-5">
          <FilterDesktop /> 
          <div className="px-3">
            {/* Result and sort sections */}
            <div className="flex items-center justify-between">
              <span>Showing 1-12 of 48 products</span>
              <SortDesktop />
            </div>
          </div>
          

        </main>
      </Container>
    </>
  );
}
