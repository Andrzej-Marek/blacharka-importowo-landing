import { ContactUs } from "../molecules/contact-us";
import { Container } from "./container";
import { Text } from "./text";

export const Header = ({
  title,
  subtitle,
  hideContactUs,
}: {
  title: string;
  subtitle: string;
  hideContactUs?: boolean;
}) => {
  return (
    <div className="bg-hero min-h-[400px] md:min-h-[600px] flex flex-col justify-center bg-cover bg-center">
      <div>
        <Container>
          <div className="text-center md:text-left">
            <Text variant="h1" className="uppercase">
              {title}
            </Text>
            <Text variant="h3" className="mt-2">
              {subtitle}
            </Text>
          </div>
          <div className="mt-4 left-line">
            <Text>
              &quot;Naszą misją jest odczarować złą sławę warsztatów
              samochodowych&quot;
            </Text>
            <Text variant="small" className="italic mt-1">
              Andrzej ~ Właściciel IMPORTOWO Sp. z o.o.
            </Text>
          </div>
          {!hideContactUs && (
            <div className="mt-8">
              <ContactUs />
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};
