import { defineType, defineField } from 'sanity';

export const homeBanner = defineType({
  name: "homeBanner",
  title: "Home Banner",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "captionTitle",
      title: "Caption Title",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "captionHeadingTitle",
      title: "Caption Heading Title",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "captionSubHeadingTitle",
      title: "Caption Sub Heading Title",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "btnHref",
      title: "Button link",
      type: "string",
      description: "URL or Path for the button(e.g, /menu, /products/sneakers)",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "desktopImg",
      title: "Desktop Image",
      type: "image",
      description: "Image for desktop size page",
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "mobileImg",
      title: "Mobile Image",
      type: "image",
      description: "Image for mobile size page",
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description: "Toggle for showing or hiding the banner",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "isLeftAligned",
      title: "Is Left Aligned",
      type: "boolean",
      description: "Toggle for banner's caption alignment based on the image subject",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "displayOrder",
      title: "Display Order",
      description: "The order of displaying the banner.",
      type: "number",
      validation: (Rule) => Rule.required()
    })
  ]
})