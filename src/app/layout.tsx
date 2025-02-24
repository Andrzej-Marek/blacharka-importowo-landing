import { Poppins } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";

import type { Metadata } from "next";

import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--poppins-font",
});

export const metadata: Metadata = {
	title:
		"Serwis Blacharsko Lakierniczy | Kompleksowe Naprawy Powypadkowe | IMPORTOWO",
	description:
		"Serwis Importowo to Twój zaufany partner w kompleksowej naprawie samochodów powypadkowych i nie tylko. Oferujemy usługi blacharskie, lakiernicze oraz naprawy mechaniczne z pełną dokumentacją zdjęciową. Bez ukrytych kosztów, szybki czas realizacji i stały kontakt.",
	keywords: [
		"blacharstwo",
		"lakiernictwo",
		"naprawy powypadkowe",
		"serwis blacharsko-lakierniczy",
		"kompleksowe naprawy powypadkowe",
		"blacharz",
		"lakiernik",
		"importowo",
		"warsztat blacharski",
		"warsztat lakierniczy",
		"naprawa samochodu",
		"naprawa auta",
		"naprawa progów",
		"naprawa samochodu z USA",
		"naprawy powypadkowe",
	],
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	authors: [{ name: "Importowo", url: "https://serwis.importowo.pl" }],
	creator: "Importowo",
	publisher: "Importowo",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<GoogleTagManager gtmId="GTM-NVSM33GZ" />
			<body className={`${poppins.className}`}>
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-NVSM33GZ"
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}
					></iframe>
				</noscript>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
