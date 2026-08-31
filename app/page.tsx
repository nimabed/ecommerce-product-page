import Container from '@/components/ui/container';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import NewArrivals from '@/components/NewArrivals';
import ShopByCategory from '@/components/ShopByCategory';
import FallBanner from '@/components/FallBanner';
import BestSellers from '@/components/BestSellers';
import JoinCommunity from '@/components/JoinCommunity';

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <HowItWorks />
        <NewArrivals />
        <ShopByCategory />
        <FallBanner />
        <BestSellers />
      </Container>
      <JoinCommunity />
    </>
  );
}
