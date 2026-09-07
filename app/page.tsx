import Container from '@/components/ui/container';
import Hero from '@/pages/home/Hero';
import HowItWorks from '@/pages/home/HowItWorks';
import NewArrivals from '@/pages/home/NewArrivals';
import ShopByCategory from '@/pages/home/ShopByCategory';
import PromotionalBanner from '@/pages/home/PromotionalBanner';
import BestSellers from '@/pages/home/BestSellers';

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <HowItWorks />
        <NewArrivals />
        <ShopByCategory />
        <PromotionalBanner />
        <BestSellers />
      </Container>
    </>
  );
}
