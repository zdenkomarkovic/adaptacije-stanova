import { buildMetadata } from "@/lib/metadata";
import HeroSlider from "@/components/home/HeroSlider";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import StatsSection from "@/components/home/StatsSection";
import CTABanner from "@/components/home/CTABanner";

export const metadata = buildMetadata({
  title: "Adaptacije Stanova i Renoviranje Kupatila",
  description:
    "Profesionalne adaptacije stanova i renoviranje kupatila u Srbiji. Keramika, voda, elektrika, moler – sistem ključ u ruke. Besplatna procena.",
});

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ServicesSection />
      <StatsSection />
      <ProcessSection />
      <CTABanner />
    </>
  );
}
