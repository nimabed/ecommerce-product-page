import { type SchemaTypeDefinition } from 'sanity';
import { homeBanner } from './homeBanner';
import { products } from './products';
import { brands } from './brands';
import { categories } from './categories';
import { variants } from './variants';
import { hexColors } from './hexColors';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homeBanner,
    products,
    brands,
    categories,
    variants,
    hexColors
  ],
}
