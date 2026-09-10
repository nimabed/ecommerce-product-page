import Image from 'next/image';
import Container from '@/components/ui/container';

export default function ProductsBanner() {
  return (
    <div className="relative w-full h-120 md:h-110">
      <Image
        className="size-full object-cover object-bottom md:hidden"
        src="/banner-products-mobile.jpeg"
        alt="Banner image of products page"
        width={700}
        height={1000}
      />
      <Image
        className="hidden size-full object-cover md:block"
        src="/banner-products-desktop-new.jpeg"
        alt="Banner image of products page"
        width={1000}
        height={350}
      />
      <Container className="absolute inset-0">
        <div className="absolute top-[15%] w-full max-w-70 space-y-2 animate-in slide-in-from-left duration-300 md:max-w-110 md:space-y-4 md:top-[28%] md:left-[5%]">
          <h2 className="text-primary uppercase tracking-widest text-sm font-semibold">Our products</h2>
          <p className="font-bold text-4xl md:font-extrabold md:text-7xl">Products</p>
          <p className="text-dark-grayish-blue font-medium md:text-lg">Discover the perfect pair for your style. Premium quality, modern design and all-day comfort.</p>
        </div>
      </Container>
    </div>
  )
}