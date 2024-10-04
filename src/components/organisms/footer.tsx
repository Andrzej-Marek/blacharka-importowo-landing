import { Facebook, Instagram } from "lucide-react";
import { Text } from "../atoms/text";
import Link from "next/link";
import { Logo } from "../atoms/logo";
import { Container } from "../atoms/container";

export const Footer = () => (
  <footer className="bg-gray-800 py-4 lg:py-8">
    <Container className="space-y-4 lg:space-y-8">
      <div className="flex flex-col justify-center text-center gap-4">
        <Logo className="h-16" />
        <Text>Dbamy o Twój spokój – naprawa bez stresu!</Text>
      </div>

      <div>
        <Text withLine variant="h5">
          Dane Firmy
        </Text>
        <div className="mt-4">
          <Text variant="small">IMPORTOWO Sp. z o.o. </Text>
          <Text variant="small"> ul. Pszczyńska 116 43-254 Warszowice </Text>
          <Text variant="small">NIP: 6381858271 KRS: 0001104662 </Text>
        </div>
      </div>

      <ul className="flex justify-center gap-6 md:gap-8">
        <li>
          <Link
            href="https://www.facebook.com/serwisimportowo/"
            rel="noreferrer"
            target="_blank"
            className="text-primary"
          >
            <span className="sr-only">Facebook</span>
            <Facebook />
          </Link>
        </li>

        <li>
          <Link
            href="https://www.instagram.com/serwisimportowo/"
            rel="noreferrer"
            target="_blank"
            className="text-primary"
          >
            <span className="sr-only">Instagram</span>
            <Instagram />
          </Link>
        </li>
      </ul>
    </Container>
  </footer>
);
