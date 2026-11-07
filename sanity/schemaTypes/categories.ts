import { defineType, defineField } from 'sanity';

export const categories = defineType({
  name: "categories",
  title: "Categories",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Category name",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title"
      }
    }),
    defineField({
      name: "image",
      title: "Category thumbnail",
      type: "image",
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: "isFeatured",
      title: "Featured category",
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