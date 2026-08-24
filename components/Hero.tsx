import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/container';
import { Button } from '@/components/ui/button';

const images = [
  {
    desktopSrc: "/image-hero-1-desktop.jpeg",
    mobileSrc: "/image-hero-1-mobile.png",
    alt: "Hero image one"
  },
  {
    desktopSrc: "/image-hero-2-desktop.png",
    mobileSrc: "/image-hero-2-mobile.png",
    alt: "Hero image two"
  },
  {
    desktopSrc: "/image-hero-3-desktop.jpeg",
    mobileSrc: "/image-hero-3-mobile.jpeg",
    alt: "Hero image three"
  }
]



export default function Hero() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {
          images.map((image, index) => {
            const isLeft = index % 2 !== 0;

            return (
              <CarouselItem key={index}>
                <div className="relative w-full h-150 md:h-170">
                  <Image 
                    className={cn("hidden object-cover md:block", isLeft ? "object-left" : "object-center")}
                    src={image.desktopSrc} 
                    alt={image.alt}
                    fill 
                  />            
                  <Image 
                    className={cn("object-cover md:hidden")}
                    src={image.mobileSrc} 
                    alt={image.alt}
                    fill 
                  />

                  <div className="absolute inset-0 bg-white/20">
                    <Container className="space-y-3 py-6">
                      <h2 className="uppercase font-bold text-primary tracking-wide">New Season</h2>
                      <p className="text-3xl font-extrabold max-w-[70%]">Step Into Something New</p>
                      <p className="font-semibold text-dark-grayish-blue text-lg max-w-[70%]">Discover the latest sneakers designed for comfort. style and everyday movement.</p>

                      <div className="flex flex-col gap-3">
                        <Button className="text-white font-semibold max-w-[45%] py-6">
                          Shop Collection
                          <ArrowRight />
                        </Button>
                        <Button className="bg-white font-semibold max-w-[40%] py-6 ring-1 ring-dark-grayish-blue">
                          Explore Men
                        </Button>
                      </div>
                    </Container>
                  </div>



                </div>
              </CarouselItem>)
            }
          )
        }
      </CarouselContent>
    </Carousel>

    
  )
}