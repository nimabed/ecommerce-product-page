'use client';

import { useState, useEffect, useCallback } from 'react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Image } from 'next-sanity/image';
import { urlFor } from '@/sanity/lib/image';
import { type HomeBanner } from '@/sanity.types';
import { cn } from '@/lib/utils';
import { MoveRight, Ellipse } from 'lucide-react';
import Container from '@/components/ui/container';
import { Button } from '@/components/ui/button';


export default function HomeCarousel({ banners }: { banners: HomeBanner[] | null }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const count = api?.scrollSnapList() ?? [];

  const apiInit = useCallback((newApi: CarouselApi) => {
    setApi(newApi);
    setCurrent(newApi?.selectedScrollSnap() ?? 0)
  }, [])

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api?.selectedScrollSnap() ?? 0);
  }, [api])


  const stopCarousel = () => {
    api?.plugins().autoplay?.stop();
  }

  const resetCarousel = () => {
    api?.plugins().autoplay?.play();
  }

  useEffect(() => {
    if (!api) return;

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect)
    }

  }, [api, onSelect])

  if(!banners) {
    return <h1>The banners not loaded!!!</h1>
  }


  return (
    <Carousel
      setApi={apiInit}
      className="relative w-full"
      plugins={[Autoplay({ delay: 4000 })]}
      onMouseEnter={stopCarousel}
      onMouseLeave={resetCarousel}
    >
      <CarouselContent>
        {
          banners.map(banner => {
            // const isLeft = index % 2 !== 0;

            return (
              <CarouselItem key={banner?._id}>
                <div className="relative w-full h-150 md:h-170">
                  {/* Desktop hero image */}
                  {
                    banner.desktopImg && (
                      <Image
                        className={cn("hidden object-cover z-1 md:block", banner.isLeftAligned ? "object-left" : "object-center")}
                        src={urlFor(banner?.desktopImg).url()}
                        alt={banner?.title ?? ""}
                        fill
                      />
                    )
                  }
                  {/* Mobile hero image */}
                  {
                    banner.mobileImg && (
                      <Image
                        className={cn("object-cover z-1 md:hidden", banner.isLeftAligned ? "object-center" : "object-left")}
                        src={urlFor(banner?.mobileImg).url()}
                        alt={banner?.title ?? ""}
                        fill
                      />
                    )
                  }

                  {/* Images caption */}
                  <Container className={cn("absolute inset-0 z-2 flex", banner?.isLeftAligned ? "justify-end" : "justify-start")}>
                    <div className={cn("w-full max-w-50 space-y-4 absolute top-[10%] md:top-[20%] animate-in duration-500 fade-in", banner?.isLeftAligned ? "md:left-[70%] slide-in-from-right" : "md:left-[10%] slide-in-from-left")}>
                      <h2 className="uppercase font-semibold text-sm text-primary tracking-wide md:text-lg">{banner?.captionTitle}</h2>
                      <div className="w-7 h-0.5 bg-primary rounded-full md:w-10" />
                      <p className="text-6xl font-semibold font-hero uppercase leading-13 md:text-8xl md:leading-20">{banner?.captionHeadingTitle}</p>
                      <div className="w-7 h-0.5 bg-primary rounded-full md:w-10" />
                      <p className="text-dark-blue text-lg max-w-[70%] md:max-w-none md:text-xl">{banner?.captionSubHeadingTitle}</p>
                      <Button className="uppercase text-[11px] font-semibold tracking-wide text-dark-blue bg-transparent border-b-2 border-b-dark-blue rounded-none px-0 mt-5 cursor-pointer  hover:bg-transparent hover:scale-105 md:text-base">
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
              className="bg-transparent cursor-pointer p-0 active:translate-y-0!"
            >
              <Ellipse
                strokeWidth={1}
                className={cn("size-5 md:size-6",
                  current === index
                    ? "text-primary fill-primary"
                    : "text-light-grayish-blue fill-light-grayish-blue"
                )}
              />
            </Button>
          )
        }
      </div>
    </Carousel>


  )
}