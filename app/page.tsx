import Container from '@/components/ui/container';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <HowItWorks />
      </Container>
    </>

  );
}
