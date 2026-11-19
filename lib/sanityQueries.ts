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

export const NEWPRODUCTS_QUERY = (
  groq`*[_type == "products" && isNewArrival] | order(displayOrder) [0...10]{
    _id,
    title,
    images,
    activeImage,
    isDark,
    variants[]{
      price
    }
  }`
)

export const BESTSELLERS_QUERY = (
  groq`*[_type == "products" && isBestSeller] [0...4] {
    _id,
    title,
    images,
    activeImage,
    rating,
    reviewCount,
    variants[]{
      price
    }
  }`
)