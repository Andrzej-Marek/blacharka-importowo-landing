import Image from "next/image";
import { Section } from "../atoms/section";
import { Text } from "../atoms/text";
import { Container } from "../atoms/container";
import { Button } from "../atoms/button";

export const ServicesPhotosSection = () => (
  <Section>
    <Container className="space-y-4 md:space-y-8">
      <div className="text-center space-y-2">
        <Text className="text-primary uppercase">Realizacje</Text>
        <Text variant="h3">Sprawdź Zdjęcia Z Naszych Realizacji</Text>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="relative">
          <Image
            src="http://via.placeholder.com/1280x720"
            alt="Image of service"
            width={1280}
            height={720}
          />
        </div>
        <div>
          <Image
            src="http://via.placeholder.com/1280x720"
            alt="Image of service"
            width={1280}
            height={720}
          />
        </div>
        <div>
          <Image
            src="http://via.placeholder.com/1280x720"
            alt="Image of service"
            width={1280}
            height={720}
          />
        </div>
        <div>
          <Image
            src="http://via.placeholder.com/1280x720"
            alt="Image of service"
            width={1280}
            height={720}
          />
        </div>
        <div className="hidden sm:block">
          <Image
            src="http://via.placeholder.com/1280x720"
            alt="Image of service"
            width={1280}
            height={720}
          />
        </div>
        <div className="hidden sm:block">
          <Image
            src="http://via.placeholder.com/1280x720"
            alt="Image of service"
            width={1280}
            height={720}
          />
        </div>
      </div>
      <div className="text-center space-y-4">
        <Text>
          Do każdego serwisu podchodzimy z należytą staranością, a zadowolenie
          naszych Klientów jest dla nas najwaźniejsze.
        </Text>

        <Button>Zobacz Więcej</Button>
      </div>
    </Container>
  </Section>
);
