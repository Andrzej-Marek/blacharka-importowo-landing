import { Button } from "@/components/atoms/button";
import { Container } from "@/components/atoms/container";
import { Header } from "@/components/atoms/header";
import { Section } from "@/components/atoms/section";
import { Text } from "@/components/atoms/text";
import Image from "next/image";

const GalleryPage = () => {
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
          <div className="mt-8 [column-fill:_balance] sm:columns-2 md:columns-3 sm:gap-6 lg:gap-8">
            <Item />
            <div className="mb-4 sm:mb-6 lg:mb-8 sm:break-inside-avoid">
              <Image
                alt=""
                src="http://via.placeholder.com/1280x720"
                width={720}
                height={1080}
              />
            </div>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
          <div className="flex justify-center">
            <Button className="mt-4">Zobacz Wiecej</Button>
          </div>
        </Container>
      </Section>
    </div>
  );
};

const Item = () => (
  <div className="mb-4 sm:mb-6 lg:mb-8 sm:break-inside-avoid">
    <Image
      alt=""
      src="http://via.placeholder.com/1280x720"
      width={1280}
      height={720}
    />
  </div>
);

export default GalleryPage;
