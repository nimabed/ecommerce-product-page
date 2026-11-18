import { defineType, defineField } from 'sanity';

export const hexColors = defineType({
  name: "hexColors",
  title: "HEX Colors",
  type: "document",
  fields: [
    defineField({
      name: "hexCode",
      title: "Hex code",
      type: "string",
      description: "Enter the hex code of the color(e.g #000000).",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "thumbnail",
      title: "Color thumbnail",
      type: "image",
      description: "Color thumbnail",
      validation: (Rule) => Rule.required()
    })
  ]
})