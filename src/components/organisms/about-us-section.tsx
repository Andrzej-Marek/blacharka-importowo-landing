import Image from "next/image";
import { Container } from "../atoms/container";
import { Section } from "../atoms/section";
import { Text } from "../atoms/text";

export const AboutUseSection = () => (
  <Section>
    <Container>
      <div className="max-w-[450px] left-line">
        <Text className="uppercase ml-6 mb-2">O nas</Text>
        <Text variant="h3" className="ml-6">
          Nasze Usługi To Coś Więcej Niż{" "}
          <span className="text-primary">Naprawa Samochodów</span>
        </Text>
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="ml-6 space-y-4">
          <Text className="">
            Cześć! 👋 Jeśli tu jesteś, to pewnie szukasz ekipy, która zajmie się
            Twoim samochodem tak, jakby to był ich własny.{" "}
            <span className="font-bold text-primary">Dobrze trafiłeś!</span> U
            nas nie ma miejsca na nudne procedury i tajemnicze koszty – wszystko
            robimy z pełną przejrzystością i w kontakcie z Tobą.
          </Text>
          <Text className="hidden md:block">
            Jesteśmy tu po to, żebyś mógł spać spokojnie, wiedząc, że Twoje auto
            jest w dobrych rękach. Lubimy to, co robimy, i zależy nam, żebyś Ty
            też to poczuł. Wpadaj do nas, naprawimy wszystko, co trzeba, i
            sprawimy, że znowu będziesz cieszył się jazdą!
          </Text>
        </div>
        <Image
          src="/about-us.jpg"
          className="w-full"
          alt="Image of service"
          width={1280}
          height={720}
        />
      </div>
    </Container>
  </Section>
);
