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
          <Card title="Blacharswo Samochodowe" src="/body-service.jpg" />
          <Card title="Lakierowanie Pojazdów" src="/painting-service.jpg" />
          <Card
            title="Naprawa Pojazdów Powypadkowych"
            src="/car-crash-service.jpg"
          />
          <Card title="Mechanika Pojazdowa" src="/mechanic-service.jpg" />
          <Card title="Elektryka Samochodowa" src="/electric-service.jpg" />
          <Card
            title="Ogrzewania Postojowe (Webasto)"
            src="/webasto-service.jpg"
          />
          <Card title="Serwis Klimatyzacji" src="/acc-service.jpg" />
        </div>
      </Container>
    </Section>
  );
};

const Card = ({ title, src }: { title: ReactNode; src: string }) => (
  <div className="relative block overflow-hidden rounded-bl-3xl rounded-tr-3xl">
    <div className="bg-black opacity-70 absolute inset-0 w-full h-full" />
    <Image
      alt=""
      src={src}
      className="h-56 w-full object-cover sm:h-64 lg:h-72 hover:scale-105 transition-transform duration-300"
      width={1280}
      height={720}
    />

    <div className="absolute inset-0 mt-4 flex items-center justify-center sm:gap-4 px-8 shadow">
      <Text
        className="uppercase font-semibold text-primary text-center lg:text-3xl"
        variant="h4"
      >
        {title}
      </Text>
    </div>
  </div>
);
