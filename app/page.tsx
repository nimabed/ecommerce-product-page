import Container from '@/components/ui/container';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import NewArrivals from '@/components/NewArrivals';
import ShopByCategory from '@/components/ShopByCategory';

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <HowItWorks />
        <NewArrivals />
        <ShopByCategory />
      </Container>
    </>
  );
}
