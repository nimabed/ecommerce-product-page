import { type Products, type Variants, type HexColors } from '@/sanity.types';


type productVariant = Omit<Variants, "colorHexCode"> & {
  colorHexCode: HexColors | null
}

export type product = Omit<Products, "variants"> & {
  variants?: productVariant[]
}