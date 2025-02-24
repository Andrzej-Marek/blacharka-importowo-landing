import { defineField, defineType } from "sanity";

export default defineType({
	name: "progi",
	title: "Naprawa progów Page",
	type: "document",
	fields: [
		defineField({
			name: "heading",
			title: "Heading",
			type: "string",
		}),
		defineField({
			name: "subHeading",
			title: "Sub Heading",
			type: "string",
		}),
		defineField({
			name: "whyImage",
			title: "Why Image",
			type: "image",
			options: {
				hotspot: true,
			},
		}),

		defineField({
			name: "howItsWorksImage",
			title: `How It's works image`,
			type: "image",
			options: {
				hotspot: true,
			},
		}),

		defineField({
			name: "howItsWorksImage2",
			title: `How It's works image 2`,
			type: "image",
			options: {
				hotspot: true,
			},
		}),

		defineField({
			name: "portfolioPhotos",
			title: "Porfolio Photos",
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
