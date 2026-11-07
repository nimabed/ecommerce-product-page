import { defineType, defineField, defineArrayMember } from 'sanity';

export const products = defineType({
  name: "products",
  title: "products",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Product name",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "URL-friendly identifier",
      options: {
        source: "title"
      }
    }),
    defineField({
      name: "brand",
      title: "Brand",
      type: "reference",
      description: "Product brand",
      to: [{type: "brands"}],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "array",
      description: "Product category",
      of: [
        {type: "reference", to: [{type: "categories"}]}
      ],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Product description"
    }),
    defineField({
      name: "stockQuantity",
      title: "Stock quantity",
      type: "number",
      description: "Available quantity",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      description: "Main product images",
      of: [
        defineArrayMember({type: "image"})
      ],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "thumbnails",
      title: "Thumbnails",
      type: "array",
      description: "Product thumbnails",
      of: [
        defineArrayMember({type: "image"})
      ],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "variants",
      title: "Product variant",
      type: "array",
      of: [
        {type: "variants"}
      ]
    })
  ]
})