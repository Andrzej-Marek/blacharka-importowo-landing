import { Container } from "@/components/atoms/container";
import { Header } from "@/components/atoms/header";
import { Section } from "@/components/atoms/section";
import { Text } from "@/components/atoms/text";
import { Map } from "@/components/atoms/map";
import { ContactUs } from "@/components/molecules/contact-us";
import { cn } from "@/utils";
import { Mail, MapIcon, Phone } from "lucide-react";
import { ReactNode } from "react";

const ContactPage = () => {
  return (
    <>
      <Header title="Masz Pytania?" subtitle="" hideContactUs />
      <Section>
        <Container>
          <div className="max-w-[450px] left-line">
            <Text className="uppercase ml-6 mb-2">KONTAKT</Text>
            <Text variant="h3" className="ml-6">
              📞 Skontaktuj się z nami!
            </Text>
          </div>
          <div className="py-8 gap-8 grid sm:grid-cols-3 justify-center">
            <Card title="Telefon" icon={<Phone />}>
              <ContactUs />
            </Card>
            <Card icon={<MapIcon />} title="Lokalizacja">
              <Text className="text-semibold text-center">
                ul. Pszczyńska 116 <br /> 43-254 Warszowice
              </Text>
            </Card>
            <Card icon={<Mail />} title="Adres E-mail">
              <Text className="text-semibold text-center">
                biuro@importowo.pl
              </Text>
            </Card>
          </div>
          <Map />
        </Container>
      </Section>
    </>
  );
};

const Card = ({
  title,
  icon,
  children,
}: {
  icon: ReactNode;
  title: ReactNode;
  children: ReactNode;
}) => (
  <div className={cn("flex flex-col justify-start items-center space-y-4")}>
    <div className="flex flex-col items-center text-primary gap-2 h-16">
      {icon}
      <Text className="uppercase">{title}</Text>
    </div>
    {children}
  </div>
);

export default ContactPage;
