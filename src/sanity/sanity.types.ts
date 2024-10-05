export type SanityImage = {
  _id: string;

  extension: string;
  alt?: string;
  url: string;
  lqip: string;
  width: number;
  height: number;
};

export type GalleryQueryResult = {
  _id: string;
  title: string;
  images: SanityImage[];
  imagesAfter?: SanityImage[];
};
