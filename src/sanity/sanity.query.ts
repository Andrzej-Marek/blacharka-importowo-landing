import { groq } from "next-sanity";
import client from "./sanity.client";
import { GalleryQueryResult, HomepageQueryResult } from "./sanity.types";

const imageQuery = `
  ...asset->{
    extension,
    _id,
    url,
 ...metadata {
      lqip, // the lqid can be used for blurHashUrl or other low-quality placeholders
      ...dimensions {
        width,
        height
      }
    }
}
`;
export async function getGalleries(): Promise<GalleryQueryResult[]> {
  return client.fetch(
    groq`*[_type == "gallery"]{
      _id,
slug,
title,
images[] {
${imageQuery}
  },
imagesAfter[] {
${imageQuery}
}
    }`,
  );
}

export const getGalleryBySlug = (slug: string) => {
  return client.fetch<GalleryQueryResult>(
    groq`*[_type == "gallery" && slug.current == $slug]{
      _id,
slug,
title,
images[] {
${imageQuery}
  },
imagesAfter[] {
${imageQuery}
}
    }[0]`,
    { slug },
  );
};

export const getHomepage = () => {
  return client.fetch<HomepageQueryResult>(
    groq`*[_type == "homepage"][0]{
      _id,
smallTitle,
title,
photos[] {
${imageQuery}
  }}`,
  );
};
