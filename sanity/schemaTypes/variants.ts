import { defineType, defineField } from 'sanity';

export const variants = defineType({
  name: "variants",
  title: "Product variants",
  type: "object",
  fields: [
    defineField({
      name: "color",
      title: "Color",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "size",
      title: "Size (EU)",
      type: "number",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      description: "Selling price",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "originalPrice",
      title: "Original price",
      type: "number",
      description: "Price without discount",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "sku",
      title: "Product SKU",
      type: "string",
      description: "Unique product identifier(e.g NK-AM90-001)",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "stock",
      title: "Stock quantity",
      type: "number",
      validation: (Rule) => Rule.required()
    })
  ]
})