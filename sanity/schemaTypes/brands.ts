import { defineType, defineField } from 'sanity';

export const brands = defineType({
  name: "brands",
  title: "Brands",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Brand name",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name"
      }
    }),
    defineField({
      name: "logo",
      title: "Brand Logo",
      type: "image",
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: "isFeatured",
      title: "Featured brand",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "displayOrder",
      title: "Display order",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.required()
    })
  ]
})