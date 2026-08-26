'use client';
import { useState, useEffect, useCallback } from 'react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { MoveRight } from 'lucide-react';
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
                    className={cn("hidden object-cover z-1 md:block", isLeft ? "object-left" : "object-center")}
                    src={image.desktopSrc} 
                    alt={image.alt}
                    fill 
                  />            
                  <Image 
                    className={cn("object-cover z-1 md:hidden")}
                    src={image.mobileSrc} 
                    alt={image.alt}
                    fill 
                  />

                  {/* Images title */}
                  <Container className={cn("absolute inset-0 z-2 flex", isLeft ? "justify-end" : "justify-start")}>
                    <div className={cn("w-full max-w-50 space-y-4 absolute top-[10%] md:top-[20%]", isLeft ? "md:left-[70%]" : "md:left-[10%]")}>
                      <h2 className="uppercase font-semibold text-sm text-primary tracking-wide md:text-lg">New collection</h2>
                      <div className="w-7 h-0.5 bg-primary rounded-full md:w-10" />
                      <p className="text-6xl font-semibold font-hero uppercase leading-13 md:text-8xl md:leading-20">Move different</p>
                      <div className="w-7 h-0.5 bg-primary rounded-full md:w-10" />
                      <p className="text-dark-blue text-lg max-w-[70%] md:max-w-none md:text-xl">Built to go beyond.</p>
                      <Button className="uppercase text-[11px] font-semibold tracking-wide text-dark-blue bg-transparent border-b-2 border-b-dark-blue rounded-none px-0 mt-5 cursor-pointer hover:bg-transparent md:text-base">
                        Explore now
                        <MoveRight />
                      </Button>
                    </div>
                  </Container>
                  </div>
              </CarouselItem>)
            }
          )
        }
      </CarouselContent>

      {/* Carousel Buttons */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-5 space-x-2 z-10">
        {
          count.map((_, index) => 
              <Button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn("w-6 h-2 rounded-[50%] cursor-pointer p-0 bg-transparent hover:bg-light-grayish-blue",
                  current === index ? "bg-primary" : "bg-light-grayish-blue"
                )}
              />
          )
        }
      </div>
    </Carousel>

    
  )
}