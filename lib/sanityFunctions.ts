import { client } from '@/sanity/lib/client';
import { BANNERS_QUERY } from './sanityQueries';
import { type HomeBanner } from '@/sanity.types';

export async function getBanners():Promise<HomeBanner[]> {
  return client.fetch(BANNERS_QUERY);
}