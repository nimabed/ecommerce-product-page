import { client } from '@/sanity/lib/client';
import { BANNERS_QUERY } from './sanityQueries';
import { type HomeBanner } from '@/sanity.types';
import { PRODUCTS_QUERY } from './sanityQueries';
import { type Products } from '@/sanity.types';

export async function getBanners():Promise<HomeBanner[] | null> {

  try{
    const banners = await client.fetch(BANNERS_QUERY);
    return banners;
  } catch(error) {
    console.error('Fetching banners failed: ', error);
  }
  
  return null;

}

export async function getProducts():Promise<Products[] | null> {
  try{
    const products = await client.fetch(PRODUCTS_QUERY);
    return products;
  }catch(error) {
    console.error("Fetching products failed", error)
  }

  return null;
}