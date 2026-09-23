import ProductsBanner from '@/pages/products/ProductsBanner';
import FilterSortMobile from '@/pages/products/filters/FilterSortMobile';
import FilterDesktop from "@/pages/products/filters/FilterDesktop";
import SortDesktop from '@/pages/products/filters/SortDesktop';
import Products from '@/pages/products/Products';
import ProductsPagination from '@/pages/products/ProductsPagination';
import Container from '@/components/ui/container';

export default function ProductPage() {
  return (
    <>
      <ProductsBanner />
      {/* Mobile Sort And Filter Section */}
      <FilterSortMobile />
      <Container className="overflow-visible">
        <main className="grid grid-cols-1 md:grid-cols-[20%_1fr] py-5">
          <FilterDesktop /> 
          <div className="space-y-6 md:pl-8">
            {/* Result and sort sections */}
            <div className="hidden items-center justify-between md:flex">
              <span>Showing 1-12 of 48 products</span>
              <SortDesktop />
            </div>
            <Products />
            {/* Pagination Section */}
            <div className="pt-3">
              <ProductsPagination />
            </div>
          </div>
        </main>
      </Container>
    </>
  );
}
