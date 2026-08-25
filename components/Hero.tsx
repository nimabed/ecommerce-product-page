'use client';
import { useState, useEffect, useCallback } from 'react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ArrowRight, Ellipse } from 'lucide-react';
import Container from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import hero1_desktop from '@/assets/images/image-hero-1-desktop.jpeg';
import hero1_mobile from '@/assets/images/image-hero-1-mobile.png';
import hero2_desktop from '@/assets/images/image-hero-2-desktop.png';
import hero2_mobile from '@/assets/images/image-hero-2-mobile.png';
import hero3_desktop from '@/assets/images/image-hero-3-desktop.jpeg';
import hero3_mobile from '@/assets/images/image-hero-3-mobile.jpeg';

const images = [
  {
    desktopSrc: hero1_desktop,
    mobileSrc: hero1_mobile,
    alt: "Hero image one"
  },
  {
    desktopSrc: hero2_desktop,
    mobileSrc: hero2_mobile,
    alt: "Hero image two"
  },
  {
    desktopSrc: hero3_desktop,
    mobileSrc: hero3_mobile,
    alt: "Hero image three"
  }
]


export default function Hero() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const count = api?.scrollSnapList() ?? [];

  const apiInit = useCallback((newApi: CarouselApi) => {
    setApi(newApi);
    setCurrent(newApi?.selectedScrollSnap() ?? 0)
  }, [])

  const onSelect = useCallback(() => {
    if(!api) return;
    setCurrent(api?.selectedScrollSnap() ?? 0);
  }, [api])


  const stopCarousel = () => {
    api?.plugins().autoplay?.stop();
  }
  
  const resetCarousel = () => {
    api?.plugins().autoplay?.play();
  }
  
  useEffect(() => {
    if(!api) return;

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect)
    }

  }, [api, onSelect])



  return (
    <Carousel 
      setApi={apiInit}
      className="relative w-full"
      plugins= {[Autoplay({delay: 4000})]}
      onMouseEnter={stopCarousel}
      onMouseLeave={resetCarousel}
    >
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

                  {/* <div className="absolute inset-0 bg-white/20">
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
                  </div> */}
                </div>
              </CarouselItem>)
            }
          )
        }
      </CarouselContent>

      {/* Carousel Buttons */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-10 space-x-1 z-10">
        {
          count.map((_, index) => 
              <Button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn("w-5 h-3 rounded-full cursor-pointer p-0 bg-transparent",
                  current === index ? "bg-primary" : "bg-light-grayish-blue"
                )}
              />
          )
        }
      </div>
    </Carousel>

    
  )
}