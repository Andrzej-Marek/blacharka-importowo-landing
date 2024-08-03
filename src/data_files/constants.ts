import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Naprawy Blacharsko-Lakiernicze | Kompleksowy Serwis Powypadkowy",
  tagline: "Naprawiamy Karoserie z Precyzją i Pasją",
  keywords: "Naprawy blacharskie, Lakierowanie samochodów, Naprawy powypadkowe, Konserwacja podwozia, Blacharstwo samochodowe, Lakiernictwo samochodowe, Renowacja pojazdów, Naprawa karoserii, Usługi blacharskie, Profesjonalne lakierowanie, Serwis blacharsko-lakierniczy, Naprawa wgnieceń, Usuwanie korozji, Kompleksowe naprawy powypadkowe, Malowanie samochodów, Regeneracja karoserii, Ochrona przed rdzą, Lakierowanie powypadkowe, Warsztat blacharsko-lakierniczy, Blacharz samochodowy, Lakiernik samochodowy, Warsztat samochodowy, Naprawy blacharsko-lakiernicze, Usługi lakiernicze, Naprawa i lakierowanie, Blacharskie naprawy powypadkowe, Lakierowanie nadwozia, Profesjonalna naprawa samochodów, Blacharka i lakiernictwo, Autoserwis blacharsko-lakierniczy",
  description_short: "Profesjonalny serwis blacharsko-lakierniczy oferujący kompleksowe naprawy powypadkowe, blacharstwo, lakiernictwo oraz konserwację podwozia. Doświadczony zespół, nowoczesne technologie i indywidualne podejście. Skontaktuj się z nami i przywróć blask swojemu pojazdowi",
  description: "Profesjonalny serwis blacharsko-lakierniczy oferujący kompleksowe naprawy powypadkowe, blacharstwo, lakiernictwo oraz konserwację podwozia. Doświadczony zespół, nowoczesne technologie i indywidualne podejście. Skontaktuj się z nami i przywróć blask swojemu pojazdowi",
  url: "https://serwis.importowo.pl",
  author: "IMPORTOWO",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "pl-PL",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "pl_PL",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : ${SITE.tagline}`,
  description: SITE.description_short,
  image: ogImageSrc,
};
