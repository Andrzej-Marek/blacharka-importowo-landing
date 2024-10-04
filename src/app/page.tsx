import { Header } from "@/components/atoms/header";
import { AboutUseSection } from "@/components/organisms/about-us-section";
import { ContactSection } from "@/components/organisms/contact-section";
import { OurServicesSection } from "@/components/organisms/our-services-section";
import { ServicesPhotosSection } from "@/components/organisms/services-photos-section";
import { TestimonialsSection } from "@/components/organisms/testimonials-section";
import { WhyChooseUsSection } from "@/components/organisms/why-choose-us-section";

export default function Home() {
  return (
    <div>
      <Header
        title="Serwis Blacharsko Lakierniczy"
        subtitle="Warszowice / Żory"
      />
      <AboutUseSection />
      <OurServicesSection />
      <WhyChooseUsSection />
      <ServicesPhotosSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
