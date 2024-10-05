import { defineField } from "sanity";

export default {
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    },
    {
      name: "imagesAfter",
      type: "array",
      title: "Images After",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    },
    {
      name: "display",
      type: "string",
      title: "Display as",
      description: "How should we display these images?",
      options: {
        list: [
          { title: "Stacked on top of eachother", value: "stacked" },
          { title: "In-line", value: "inline" },
          { title: "Carousel", value: "carousel" },
        ],
        layout: "radio", // <-- defaults to 'dropdown'
      },
    },
    {
      name: "zoom",
      type: "boolean",
      title: "Zoom enabled",
      description: "Should we enable zooming of images?",
    },
  ],
  preview: {
    select: {
      images: "images",
      image: "images.0",
      title: "title",
    },
    prepare(selection: any) {
      const { images, image } = selection;

      return {
        title: selection.title,
        subtilte: `Gallery block of ${Object.keys(images).length} images`,
        media: image,
      };
    },
  },
};
