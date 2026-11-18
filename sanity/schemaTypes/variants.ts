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
      name: "thumbnail",
      title: "Color thumbnail",
      type: "image",
      description: "Color thumbnail",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "colorHexCode",
      title: "Color Hex",
      type: "reference",
      description: "Choose the hex code of the color.",
      to: [{type: "hexColors"}]
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
    }),
    defineField({
      name: "gender",
      title: "Gender",
      type: "string",
      description: "Choose gender(for both choose nothing)",
      options: {
        list: [
          {title: "Men", value: "men"},
          {title: "Women", value: "women"}
        ],
        layout: "radio"
      }
    })
  ]
})