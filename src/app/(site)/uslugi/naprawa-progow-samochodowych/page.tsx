import { Container } from "@/components/atoms/container";
import { Header } from "@/components/atoms/header";
import { Section } from "@/components/atoms/section";
import { Text } from "@/components/atoms/text";
import { ContactUs } from "@/components/molecules/contact-us";
import { getProgiPage } from "@/sanity/sanity.query";
import { SanityImage } from "@/sanity/sanity.types";
import Image from "next/image";

const NaprawaProgowPage = async () => {
	const pageContent = await getProgiPage();

	return (
		<div>
			<Header title="Progi Samochodowe" subtitle="ochrona i estetyka" />
			<WhySection image={pageContent.whyImage} />
			<ServiceProcess
				image={pageContent.howItsWorksImage}
				image2={pageContent.howItsWorksImage2}
			/>
			<PricingSection />
			<QuestionsSection />
			<PortfolioSection images={pageContent.portfolioPhotos} />
		</div>
	);
};

const QuestionsSection = () => (
	<Section>
		<Container className="space-y-4">
			<div className="left-line text-center">
				<Text className="uppercase ml-6 mb-2">Pytanie</Text>
				<Text variant="h3" className="ml-6 text-primary">
					Masz jakieś pytania?
				</Text>
			</div>

			<div className="space-y-4 md:space-y-8">
				<Text>
					Nie jesteś pewien/a, jaki zakres prac będzie potrzebny? Chcesz poznać
					dokładną wycenę dla swojego auta? Skontaktuj się z nami – chętnie
					doradzimy i rozwiejemy wszelkie wątpliwości.
				</Text>
				<ContactUs className="w-full md:flex-row md:gap-8 justify-center" />
			</div>
		</Container>
	</Section>
);

const PricingSection = () => (
	<Section>
		<Container className="space-y-4">
			<div className="max-w-[450px] left-line">
				<Text className="uppercase ml-6 mb-2">💰 Cennik</Text>
				<Text variant="h3" className="ml-6">
					Ile kosztuje <span className="text-primary">nasza usługa?</span>
				</Text>
			</div>

			<div className="space-y-2">
				<Text>
					Koszt wymiany progu zaczyna się już od <strong>600zł</strong> za
					stronę, w zależności od modelu pojazdu i stopnia korozji.
				</Text>
				<Text>⏳ Czas realizacji: 3-5 dni roboczych.</Text>
				<Text>
					Do progów lakierowanych należy doliczyć koszt lakierowania, który
					ustalamy indywidualnie. Zakres cen waha się między 300 a 600 zł za
					stronę. 🎨
				</Text>
			</div>
		</Container>
	</Section>
);

const PortfolioSection = ({ images }: { images: SanityImage[] }) => (
	<Section>
		<Container className="space-y-4">
			<div className="left-line text-center">
				<Text className="uppercase ml-6 mb-2">Zdjęcia</Text>
				<Text variant="h3" className="ml-6">
					Zobacz, jak wygląda <span className="text-primary">to u nas</span>
				</Text>
			</div>

			<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{images.map((image, index) => (
					<Image
						src={image.url}
						className="w-full"
						alt={image.alt ?? ""}
						width={image.width}
						height={image.height}
						key={index}
					/>
				))}
			</div>
		</Container>
	</Section>
);

const ServiceProcess = ({
	image,
	image2,
}: {
	image: SanityImage;
	image2?: SanityImage;
}) => (
	<Section>
		<Container>
			<div className="max-w-[450px] left-line">
				<Text className="uppercase ml-6 mb-2">Jak to działa?</Text>
				<Text variant="h3" className="ml-6">
					Jak wygląda proces{" "}
					<span className="text-primary">wymiany progów</span>
				</Text>
			</div>

			<div className="mt-6 grid md:grid-cols-2 gap-4">
				<div className="ml-6 space-y-4">
					<Text className="">
						🔧 Demontaż uszkodzonego progu – usuwamy zniszczony element, aby
						ocenić stan konstrukcji pod spodem.
					</Text>
					<Text>
						🛠 Przygotowanie powierzchni – oczyszczamy i zabezpieczamy miejsce
						montażu nowego progu, eliminując ogniska korozji.
					</Text>
					<Text>
						🚗 Montaż nowego progu – precyzyjne dopasowanie i spawanie,
						zapewniające trwałość i bezpieczeństwo.
					</Text>
					<Text>
						🎨 Lakierowanie lub zabezpieczenie barankiem – na koniec dobieramy
						odpowiednie wykończenie, zgodnie z wyborem klienta.
					</Text>
				</div>

				<div className="grid gap-2 ">
					<Image
						src={image.url}
						className="w-full"
						alt={image.alt ?? ""}
						width={image.width}
						height={image.height}
					/>
					{image2 && (
						<Image
							src={image2.url}
							className="w-full"
							alt={image2.alt ?? ""}
							width={image2.width}
							height={image2.height}
						/>
					)}
				</div>
			</div>
		</Container>
	</Section>
);

const WhySection = ({ image }: { image: SanityImage }) => (
	<Section>
		<Container>
			<div className="max-w-[450px] left-line">
				<Text className="uppercase ml-6 mb-2">Teoria</Text>
				<Text variant="h3" className="ml-6">
					Dlaczego wymiana{" "}
					<span className="text-primary">uszkodzonych progów</span> jest ważna?
				</Text>
			</div>

			<div className="mt-6 grid md:grid-cols-2 gap-4">
				<div className="ml-6 space-y-4">
					<Text className="">
						🚗 Bezpieczeństwo – progi są częścią konstrukcji nośnej pojazdu i
						ich korozja osłabia wytrzymałość auta.
					</Text>
					<Text>
						🌧 Ochrona przed korozją – uszkodzone progi to otwarta droga dla
						wilgoci, co może prowadzić do poważniejszych problemów.
					</Text>
					<Text>
						💎 Wygląd i wartość auta – zardzewiałe progi obniżają estetykę
						pojazdu i jego wartość przy odsprzedaży.{" "}
					</Text>
				</div>
				<Image
					src={image.url}
					className="w-full"
					alt={image.alt ?? ""}
					width={image.width}
					height={image.height}
				/>
			</div>
		</Container>
	</Section>
);

export default NaprawaProgowPage;
