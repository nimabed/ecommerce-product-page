import { type Products, type Variants, type HexColors, type Brands } from '@/sanity.types';


type productVariant = Omit<Variants, "colorHexCode"> & {
  colorHexCode: HexColors | null
}

export type product = Omit<Products, "variants" | "brand"> & {
  variants: productVariant[] | null;
  brand: Brands | null;
}