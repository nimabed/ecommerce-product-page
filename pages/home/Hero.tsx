import HomeCarousel from './homeCarousel';
import { getBanners } from '@/lib/sanityFunctions';

export default async function Hero() {

  const banners = await getBanners();

  return (
    <HomeCarousel banners={banners} />
  )
}