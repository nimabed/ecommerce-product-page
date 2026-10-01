import { groq } from 'next-sanity';

export const BANNERS_QUERY = groq`*[_type == "homeBanner" && isActive] | order(displayOrder) {_id, title}`;