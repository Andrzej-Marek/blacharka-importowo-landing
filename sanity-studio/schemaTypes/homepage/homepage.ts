import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "smallTitle",
      title: "Small Title",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "photos",
      title: "photos",
      type: "array",
      of: [
        {
          title: "Photo",
          type: "image",
        },
      ],
    }),
  ],
});
