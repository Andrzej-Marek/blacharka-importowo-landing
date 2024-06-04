import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Profesjonalny Serwis Blacharski | Naprawa Karoserii Samochodów i Busów",
  tagline: "Naprawiamy Karoserie z Precyzją i Pasją",
  keywords: "serwis blacharski, naprawa karoserii, usuwanie wgnieceń, renowacja karoserii, naprawa powypadkowa, naprawa blacharska, naprawa samochodów, naprawa busów",
  description_short: "Skorzystaj z usług naszego serwisu blacharskiego. Naprawa szkód blacharskich, usuwanie wgnieceń i renowacja karoserii samochodów oraz busów. Gwarancja jakości i profesjonalizmu.",
  description: "Profesjonalny serwis blacharski oferujący kompleksowe naprawy karoserii samochodów i busów. Specjalizujemy się w naprawach powypadkowych, usuwaniu wgnieceń i renowacji karoserii. Gwarantujemy najwyższą jakość usług i pełne zadowolenie klientów.",
  url: "https://blacharstwo-importowo.pl",
  author: "Andrzej Marek",
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
