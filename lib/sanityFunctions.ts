import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { BANNERS_QUERY } from './sanityQueries';
import { type HomeBanner } from '@/sanity.types';
import { PRODUCTS_QUERY } from './sanityQueries';
import { type product } from '@/sanity/manualTypes';
import { NEWPRODUCTS_QUERY } from './sanityQueries';
import { BESTSELLERS_QUERY } from './sanityQueries';

export async function getBanners():Promise<HomeBanner[] | null> {

  try{
    const banners = await client.fetch(BANNERS_QUERY);
    return banners;
  } catch(error) {
    console.error('Fetching banners failed: ', error);
  }
  
  return null;

}

export async function getProduct(slug: string):Promise<product | null> {
  const PRODUCT_QUERY = (
    groq`*[_type == "products" && slug.current == "${slug}"]{
      _id,
      title,
      description,
      images,
      thumbnails,
      activeImage,
      brand->{
        name
      },
      variants[]{
        price,
        originalPrice
      }
    }`
  );

  try{
    const product = await client.fetch(PRODUCT_QUERY);
    return product[0];
  }catch(error) {
    console.error("Fetching product failed: ", error);
  }

  return null;
}



export async function getProducts():Promise<product[] | null> {
  try{
    const products = await client.fetch(PRODUCTS_QUERY);
    return products;
  }catch(error) {
    console.error("Fetching products failed", error)
  }

  return null;
}

export async function getNewProducts():Promise<product[] | null> {
  try{
    const newProducts = await client.fetch(NEWPRODUCTS_QUERY);
    return newProducts;
  }catch(error) {
    console.error('Fetching new products failed: ', error);
  }

  return null;
}


export async function getBestSellers():Promise<product[] | null> {
  try{
    const bestSellers = await client.fetch(BESTSELLERS_QUERY);
    return bestSellers;
  }catch(error) {
    console.error("Fetching best sellers product failed: ", error);
  }

  return null;
}