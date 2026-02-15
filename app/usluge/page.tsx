import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { CONTACT } from "@/lib/constants";
import { FadeUp, FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/shared/AnimateIn";

export const metadata = buildMetadata({
  title: "Usluge",
  description:
    "Kompletne usluge adaptacije stanova: keramičarski radovi, voda i kanalizacija, elektroinstalacije, molersko-gipsarski radovi. Sistem ključ u ruke.",
});

const services = [
  {
    id: "keramika",
    title: "Keramičarski Radovi",
    subtitle: "Precizno postavljanje svih vrsta obloga",
    description: `Naš tim keramičara ima dugogodišnje iskustvo u postavljanju keramičkih pločica, granita, mermera i mozaika.
    Radimo sve vrste keramičarskih radova u kupatilima, kuhinjama, hodnicima i na terasama.

    Posebno vodimo računa o pravilnoj hidroizolaciji pre postavljanja keramike u mokrim čvorovima,
    čime sprečavamo buduće probleme sa vlagom i curenjem.`,
    features: [
      "Postavljanje keramičkih pločica svih formata",
      "Granit, mermer i prirodni kamen",
      "Mozaik i dekorativne obloge",
      "Hidroizolacija mokrih čvorova",
      "Sečenje i obrada posebnih oblika",
      "Fugovanje i silikon završetak",
      "Terase i balkoni",
      "Podne grejanje ispod keramike",
    ],
    image:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "voda",
    title: "Voda i Kanalizacija",
    subtitle: "VIK instalacije od A do Ž",
    description: `Izvodimo kompletne vodovodne i kanalizacione instalacije u stambenim objektima.
    Od postavljanja novih cevi do montaže sanitarija i kupatilske opreme.

    Koristimo kvalitetne materijale i fitinge priznatih svetskih i domaćih proizvođača.
    Svi radovi se izvode u skladu sa važećim standardima i propisima.`,
    features: [
      "Kompletne VIK instalacije",
      "Zamena starih cevi (gvozdenih, olovnih)",
      "Montaža sanitarija i armatura",
      "Ugradnja bojlera i toplotnih pumpi",
      "Hidromasažne kade i tuševi",
      "Kanalizacione instalacije",
      "Otklanjanje curenja i havarija",
      "Radijatorsko grejanje",
    ],
    image:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "struja",
    title: "Elektroinstalacije",
    subtitle: "Struja, osvetljenje, pametni sistemi",
    description: `Naši licencirani električari projektuju i postavljaju elektroinstalacije prema važećim
    srpskim i evropskim standardima. Bezbednost je naš prioritet.

    Radimo sve — od zamene starih instalacija do projektovanja i postavljanja pametnih sistema upravljanja
    osvetljenjem i grejanjem.`,
    features: [
      "Novi električni razvod stana",
      "Razvodne table i zaštitni aparati",
      "Unutrašnje i spoljne utičnice i sklopke",
      "LED i klasično osvetljenje",
      "Interfoni i video interfoni",
      "Pametni sistemi (smart home)",
      "Ugradnja klima uređaja",
      "Atest elektroinstalacija",
    ],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "moler",
    title: "Molerski i Gipsarski Radovi",
    subtitle: "Savršeno ravni zidovi i fini završetak",
    description: `Profesionalni molersko-gipsarski radovi za savršen izgled prostora.
    Koristimo savremene gleteve i farbe vodećih proizvođača — Knauf, Baumit, Fassa Bortolo.

    Poravnamo zidove, uklanjamo neravnine, izvodimo gipsane pregrade i spuštene plafone.
    Završno farbanje izvodimo u više slojeva za dugotrajnost.`,
    features: [
      "Gletovanje i poravnanje zidova",
      "Gipsane pregrade (suva gradnja)",
      "Spušteni plafoni od gipskarton ploča",
      "Unutrašnje farbanje zidova",
      "Dekorativne teksture i efekti",
      "Akustična i termoizolaciona rešenja",
      "Krpljenje pukotina i sanacija zidova",
      "Fasadni malteri i obloge",
    ],
    image:
      "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=800&q=80&auto=format&fit=crop",
  },
];

export default function UslugePage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-navy pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <FadeUp>
            <span className="text-gold font-heading font-semibold text-sm uppercase tracking-widest">
              Šta nudimo
            </span>
            <h1 className="font-heading font-extrabold text-white text-4xl sm:text-5xl mt-4 mb-5">
              Naše Usluge
            </h1>
            <p className="text-white/60 font-body text-lg max-w-2xl mx-auto">
              Sve usluge potrebne za kompletnu adaptaciju stana pod jednim krovom.
              Jedan tim, jedna odgovornost, jedan dogovor.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Sistem ključ u ruke banner */}
      <FadeIn>
        <div className="bg-gold">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-navy">
              <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
              <span className="font-heading font-bold text-base">
                Sistem ključ u ruke — kompletna adaptacija bez vaše brige
              </span>
            </div>
            <Link
              href="/kontakt"
              className="bg-navy text-white font-heading font-bold text-sm px-6 py-2.5 rounded-lg hover:bg-navy-light transition-colors flex-shrink-0"
            >
              Zatražite ponudu
            </Link>
          </div>
        </div>
      </FadeIn>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="space-y-20">
          {services.map((service, idx) => {
            const imageDir = idx % 2 === 0 ? "left" : "right";
            const contentDir = idx % 2 === 0 ? "right" : "left";
            return (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-10 lg:gap-16 items-center scroll-mt-24`}
              >
                {/* Image */}
                <SlideIn direction={imageDir} className="w-full lg:w-5/12 flex-shrink-0">
                  <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
                  </div>
                </SlideIn>

                {/* Content */}
                <SlideIn direction={contentDir} delay={0.1} className="flex-1">
                  <span className="text-gold font-heading font-semibold text-sm uppercase tracking-widest">
                    {service.subtitle}
                  </span>
                  <h2 className="font-heading font-extrabold text-navy text-3xl sm:text-4xl mt-3 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-text-gray font-body text-base leading-relaxed mb-6 whitespace-pre-line">
                    {service.description}
                  </p>

                  {/* Features */}
                  <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
                    {service.features.map((f) => (
                      <StaggerItem key={f}>
                        <div className="flex items-center gap-2.5 text-sm text-navy font-body">
                          <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {f}
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>

                  <Link href="/kontakt" className="btn-primary inline-flex">
                    Zatražite ponudu
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </SlideIn>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA bottom */}
      <FadeUp className="bg-bg-light py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading font-extrabold text-navy text-3xl sm:text-4xl mb-4">
            Sistem Ključ u Ruke
          </h2>
          <p className="text-text-gray font-body text-lg leading-relaxed mb-8">
            Kombinujemo sve naše usluge u jedan paket. Vi ne morate da koordinišete
            različite majstore — to radimo mi. Jedan dogovor, jedan rok, jedna cena.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn-primary text-base">
              Besplatna procena
            </Link>
            <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 border-2 border-navy text-navy font-heading font-bold text-sm px-6 py-3 rounded-lg hover:bg-navy hover:text-white transition-colors justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </FadeUp>
    </>
  );
}
