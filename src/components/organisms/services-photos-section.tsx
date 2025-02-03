import Image from "next/image";
import { Section } from "../atoms/section";
import { Text } from "../atoms/text";
import { Container } from "../atoms/container";
import { Button } from "../atoms/button";
import Link from "next/link";
import { routes } from "@/routes/routes";
import { getHomepage } from "@/sanity/sanity.query";

export const ServicesPhotosSection = async () => {
  const homepage = await getHomepage();
  return (
    <Section>
      <Container className="space-y-4 md:space-y-8">
        <div className="text-center space-y-2">
          <Text className="text-primary uppercase">{homepage.smallTitle}</Text>
          <Text variant="h3">{homepage.title}</Text>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8">
          {homepage.photos.map((image) => (
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
