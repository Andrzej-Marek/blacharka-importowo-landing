import { Container } from "../atoms/container";
import { Map } from "../atoms/map";
import { Section } from "../atoms/section";
import { Text } from "../atoms/text";
import { ContactUs } from "../molecules/contact-us";

export const ContactSection = () => (
  <Section className="bg-hero bg-cover bg-center">
    <Container className="space-y-4 md:space-y-8">
      <div className="bg-gray-800 rounded p-4 md:p-8 space-y-8">
        <div className="text-center">
          <Text className="text-primary uppercase">Lokalizacja</Text>
          <Text variant="h3">Gdzie nas znaleść?</Text>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          <div className="space-y-8">
            <Text withLine variant="h4">
              Kontakt
            </Text>
            <div className="mt-4 md:mt-8 space-y-4">
              <ContactUs />
            </div>
            <Text withLine variant="h4">
              Godziny Otwarcia Biura
            </Text>
            <div>
              <Text>Poniedziałek - Piątek: 7.00 - 20.00</Text>
              <Text>Sobota: 08.00 - 16.00</Text>
              <Text variant="small" className="mt-2">
                Zapraszamy do{" "}
                <span className="text-primary">kontaktu telefonicznego </span> w
                tych godzinach
              </Text>
            </div>
            <Text withLine variant="h4">
              Godziny Otwarcia Serwisu
            </Text>
            <Text>Poniedziałek - Piątek: 7.00 - 16.00</Text>
          </div>
          <div>
            <Text withLine variant="h4">
              Lokalizacja
            </Text>
            <Map />
          </div>
        </div>
      </div>
    </Container>
  </Section>
);
