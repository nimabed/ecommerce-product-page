import Container from '@/components/ui/container';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import NewArrivals from '@/components/NewArrivals';

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <HowItWorks />
        <NewArrivals />
      </Container>
    </>
  );
}
