import { Container } from "../atoms/container";
import { Section } from "../atoms/section";
import { Text } from "../atoms/text";

const reasons = [
  {
    title: "💰 Brak ukrytych kosztów",
    description: `Jesteśmy z Tobą w kontakcie przez cały czas. W razie pytań, decyzji czy
      nowych pomysłów na auto – pisz, dzwoń, my jesteśmy dostępni.`,
  },
  {
    title: "🔧 Stały kontakt",
    description: `Od początku do końca jesteśmy na bieżąco z Tobą. Masz pytanie, wątpliwość albo nowy pomysł na auto? Jesteśmy dostępni i gotowi do rozmowy.`,
  },
  {
    title: "⏱ Szybki czas realizacji",
    description: `Wiemy, że czekanie na naprawę auta bywa męczące, więc robimy wszystko, żeby Twoje auto było gotowe jak najszybciej, bez straty na jakości.`,
  },
  {
    title: "🚗 Usługa Door-to-Door",
    description: `Odbierzemy Twój samochód spod drzwi i dostarczymy go naprawionego prosto do Ciebie. Ty nie musisz martwić się o transport – my załatwiamy wszystko!`,
  },
  {
    title: "📸 Dokumentacja zdjęciowa",
    description: `Każdy etap naprawy dokumentujemy zdjęciami, dzięki czemu widzisz dokładnie, co się dzieje z Twoim autem. Masz pełną kontrolę i wgląd w proces.`,
  },
  {
    title: "🔄 Elastyczność",
    description: `Chcesz użyć swoich części? Masz specjalne wymagania co do naprawy? Żaden problem! Jesteśmy elastyczni i dopasowujemy się do Twoich potrzeb.`,
  },
];

export const WhyChooseUsSection = () => (
  <Section className="bg-hero bg-cover bg-center">
    <Container className="space-y-4 md:space-y-8">
      <div className="bg-gray-800 rounded p-4 md:p-8 soace-y-8">
        <div className="text-center space-y-2">
          <Text className="text-primary uppercase">DLACZEGO MY?</Text>
          <Text variant="h3">
            {reasons.length} Powodów Dlaczego Warto Nam Zaufać
          </Text>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {reasons.map((reason, index) => (
            <ReasonCard
              order={index + 1}
              title={reason.title}
              description={reason.description}
              key={index}
            />
          ))}
        </div>
      </div>
    </Container>
  </Section>
);

const ReasonCard = ({
  order,
  title,
  description,
}: {
  order: number;
  title: string;
  description: string;
}) => (
  <div className="space-y-2">
    <Text variant="h1" as="span" className="text-primary font-bold">
      {order.toString().padStart(2, "0")}
    </Text>
    <Text variant="h5">{title}</Text>
    <Text variant="small">{description}</Text>
  </div>
);
