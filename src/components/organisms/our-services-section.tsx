import Image from "next/image";
import { Container } from "../atoms/container";
import { Section } from "../atoms/section";
import { Text } from "../atoms/text";
import { ReactNode } from "react";

export const OurServicesSection = () => {
  return (
    <Section>
      <Container className="space-y-4 md:space-y-8">
        <div className="max-w-[450px] left-line">
          <Text className="uppercase ml-6 mb-2">USŁUGI</Text>
          <Text variant="h3" className="ml-6">
            Czym Się Zajmujemy?
          </Text>
        </div>
        <Text variant="small">
          Zajmujemy się kompleksową naprawą samochodów – od blacharki, przez
          lakierowanie, aż po mechanikę 🚗💨
        </Text>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Blacharswo Samochodowe" />
          <Card title="Lakierowanie Pojazdów" />
          <Card title="Naprawa Pojazdów Powypadkowych" />
          <Card title="Mechanika Pojazdowa" />
          <Card title="Elektryka Samochodowa" />
          <Card title="Ogrzewania Postojowe (Webasto)" />
          <Card title="Serwis Klimatyzacji" />
        </div>
      </Container>
    </Section>
  );
};

const Card = ({ title }: { title: ReactNode }) => (
  <a href="#" className="block">
    <Image
      alt=""
      src="http://via.placeholder.com/1280x720"
      className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
      width={1280}
      height={720}
    />

    <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:text-center sm:gap-4">
      <Text variant="h5">{title}</Text>
    </div>
  </a>
);
