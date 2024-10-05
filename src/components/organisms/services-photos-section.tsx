import Image from "next/image";
import { Section } from "../atoms/section";
import { Text } from "../atoms/text";
import { Container } from "../atoms/container";
import { Button } from "../atoms/button";
import Link from "next/link";
import { routes } from "@/routes/routes";
import { getGalleryBySlug } from "@/sanity/sanity.query";

export const ServicesPhotosSection = async () => {
  const golf5Gallery = await getGalleryBySlug(`golf-5-naprawa-progow`);
  const bmw368service = await getGalleryBySlug(`bmw-e36-czerwona-podloga`);
  return (
    <Section>
      <Container className="space-y-4 md:space-y-8">
        <div className="text-center space-y-2">
          <Text className="text-primary uppercase">Realizacje</Text>
          <Text variant="h3">Sprawdź Zdjęcia Z Naszych Realizacji</Text>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8">
          {golf5Gallery.images.slice(0, 3).map((image) => (
            <Image
              key={image._id}
              src={image.url}
              alt={image.alt ?? ""}
              width={image.width}
              height={image.height}
            />
          ))}
          {bmw368service.images.slice(0, 3).map((image) => (
            <Image
              key={image._id}
              src={image.url}
              alt={image.alt ?? ""}
              width={image.width}
              height={image.height}
            />
          ))}
        </div>
        <div className="text-center space-y-4">
          <Text>
            Do każdego serwisu podchodzimy z należytą staranością, a zadowolenie
            naszych Klientów jest dla nas najwaźniejsze.
          </Text>

          <Link href={routes.gallery.path}>
            <Button className="mt-4">Zobacz Więcej</Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
};
