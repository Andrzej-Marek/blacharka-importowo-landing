import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getPost() {
  return client.fetch(
    groq`*[_type == "post"]{
      _id,
mainImage{
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
}
    }`,
  );
}
