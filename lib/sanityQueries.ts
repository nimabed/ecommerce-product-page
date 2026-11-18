import { groq } from 'next-sanity';

export const BANNERS_QUERY = groq`*[_type == "homeBanner" && isActive] | order(displayOrder)`;

export const PRODUCTS_QUERY = (
  groq`*[_type == "products"]{
        _id,
        title,
        images,
        activeImage,
        isDark,
        isNewArrival,
        rating,
        reviewCount,
        variants[]{
        price,
        colorHexCode->{
          hexCode
        }
        }

}`);