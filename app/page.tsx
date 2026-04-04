import { buildMetadata } from "@/lib/metadata";
import HeroSlider from "@/components/home/HeroSlider";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import StatsSection from "@/components/home/StatsSection";
import CTABanner from "@/components/home/CTABanner";
import GallerySection from "@/components/home/GallerySection";

export const metadata = buildMetadata({
  title: "Adaptacije Stanova i Renoviranje Kupatila Niš",
  description:
    "Profesionalne adaptacije stanova i renoviranje kupatila u Nišu. Keramika, voda, elektrika, moler – sistem ključ u ruke. Besplatna procena na terenu.",
  url: "https://adaptacijastanovanis.com",
});

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ServicesSection />
      <StatsSection />
      <GallerySection />
      <ProcessSection />
      <CTABanner />
    </>
  );
}
