import { Section } from "../atoms/section";
import { Text } from "../atoms/text";
import { Container } from "../atoms/container";

const reviews = [
  {
    author: "Kamil Lechwar",
    review:
      "Serwis Blacharsko-Lakierniczy oceniam bardzo pozytywnie. Podejście do klienta na najwyższym poziomie (rzeczowo i konkretnie), a wykonanie naprawy blacharskiej w moim pięknym klasyku (Fiat Barchetta LE99) zostało wykonane z dokładną precyzją i bardzo szczegółową dokładnością. Dawno nie spotkałem się z takim podejściem do klienta i wykonaniem usługi. Polecam każdemu kto chce mieć wykonaną usługę w jak najwyższym poziomie. Cena za wykonanie prac blacharskich jest jak najbardziej akceptowalna. Bardzo polecam.",
  },
  {
    author: "Ola Łob",
    review: "Polecam, fachowa obsługa i kontakt",
  },
  {
    author: "Tomasz Brejza",
    review:
      "Profesjonalnie wykonana naprawa blacharska i bardzo dobry kontakt. Polecam w 100%",
  },
  {
    author: "Karolina Bober",
    review: "Polecam! Bardzo profesjonalna obsługa",
  },
];

export const TestimonialsSection = () => (
  <Section>
    <Container className="space-y-4 md:space-y-8">
      <div className="max-w-[450px] left-line">
        <Text className="uppercase ml-6 text-primary">OPINIE</Text>
        <Text variant="h3">💬 Co Mówią O Nas Klienci?</Text>
      </div>
      <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:gap-8">
        {reviews.map((el) => (
          <Blockquote review={el.review} author={el.author} key={el.author} />
        ))}
      </div>
    </Container>
  </Section>
);

const Blockquote = ({ author, review }: { author: string; review: string }) => {
  return (
    <div className="mb-8 sm:break-inside-avoid">
      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          <div>
            <div className="flex justify-center gap-0.5 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>

            <p className="mt-0.5 text-lg font-medium text-gray-900">{author}</p>
          </div>
        </div>

        <Text className="mt-4 text-gray-700">{review}</Text>
      </blockquote>
    </div>
  );
};
