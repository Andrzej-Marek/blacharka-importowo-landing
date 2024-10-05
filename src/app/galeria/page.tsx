import { Button } from "@/components/atoms/button";
import { Container } from "@/components/atoms/container";
import { Header } from "@/components/atoms/header";
import { Section } from "@/components/atoms/section";
import { Text } from "@/components/atoms/text";
import { getGalleries } from "@/sanity/sanity.query";
import Image from "next/image";

const GalleryPage = async () => {
  const galleires = await getGalleries();

  return (
    <div>
      <Header title="Galeria" subtitle="Zobacz, Co U Nas Się Dzieje! 🚗🔧 " />
      <Section>
        <Container>
          <div className="left-line">
            <Text className="uppercase ml-6 mb-2">
              Nasze Projekty W Akcji 🔧
            </Text>
            <Text variant="h3" className="ml-6">
              Od napraw po pełne renowacje{" "}
              <span className="text-primary">- auta wracają do życia! </span>
            </Text>
          </div>
          {galleires.map((gallery, index) => (
            <div key={gallery._id} className="mt-8">
              <Text variant="h4" className="ml-6">
                {index + 1}. {gallery.title} ({gallery.images.length})
              </Text>
              <div className="mt-8 [column-fill:_balance] sm:columns-2 md:columns-3 sm:gap-6 lg:gap-8">
                {gallery.images.map((image) => (
                  <Item
                    key={image._id}
                    height={image.height}
                    width={image.width}
                    alt={image.alt ?? ""}
                    src={image.url}
                  />
                ))}
              </div>
              {gallery.imagesAfter && (
                <>
                  <div className="mt-8 [column-fill:_balance] sm:columns-2 md:columns-3 sm:gap-6 lg:gap-8">
                    {gallery.imagesAfter?.map((image) => (
                      <Item
                        key={image._id}
                        height={image.height}
                        width={image.width}
                        alt={image.alt ?? ""}
                        src={image.url}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
          <div className="flex justify-center">
            <Button className="mt-4">Zobacz Wiecej</Button>
          </div>
        </Container>
      </Section>
    </div>
  );
};

const Item = ({
  alt,
  src,
  width,
  height,
}: {
  width: number;
  height: number;
  alt: string;
  src: string;
}) => (
  <div className="mb-4 sm:mb-6 lg:mb-8 sm:break-inside-avoid">
    <Image alt={alt} src={src} width={width} height={height} />
  </div>
);

export default GalleryPage;
