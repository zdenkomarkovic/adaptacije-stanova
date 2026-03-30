import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { CONTACT } from "@/lib/constants";
import { FadeUp, SlideIn, StaggerContainer, StaggerItem } from "@/components/shared/AnimateIn";

export const metadata = buildMetadata({
  title: "Rušenje i Razbijanje — Niš",
  description:
    "Profesionalno rušenje i razbijanje pločica, zidova, kupatila, dvorišta, asfalta i manjih i većih objekata u Nišu. Brzo, povoljno, profesionalnim mašinama.",
});

const images = [
  "/rusenje/IMG-12ae6f27cb75a88ad15b974170c9f705-V.webp",
  "/rusenje/IMG-15a07b7e842911290a3a51314bb17366-V.webp",
  "/rusenje/IMG-32cd83ab64edf15ed7795d29171b2c4a-V.webp",
  "/rusenje/IMG-3acfa260806fbf7d8df1b1228a9a7f3c-V.webp",
  "/rusenje/IMG-3b075a7a306d90e829219ca2dd664380-V.webp",
  "/rusenje/IMG-81a909a477c6052a3ac98e029ea4db9f-V.webp",
  "/rusenje/IMG-980e490c9cad4e2630972b1e4e3e1c2f-V.webp",
  "/rusenje/IMG-ab887116210c2dbca2445504eb5ad257-V.webp",
  "/rusenje/IMG-d9a0149f693793054fac45bc6e4466e9-V.webp",
  "/rusenje/IMG-ef7ced01de674f9944ebf9fd55c2c34a-V.webp",
];

const services = [
  {
    title: "Razbijanje pločica",
    description:
      "Brzo i precizno uklanjanje keramičkih pločica sa zidova i podova kupatila, kuhinja i hodnika. Minimalna šteta na podlozi.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
  },
  {
    title: "Rušenje zidova",
    description:
      "Rušenje pregradnih i nosivih zidova prema projektu. Suva i mokra demolacija uz odvoz šuta.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Rušenje kupatila",
    description:
      "Kompletno pražnjenje kupatila — pločice, sanitarije, instalacije. Sve u jednoj usluzi, spreman prostor za adaptaciju.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    title: "Razbijanje asfalta i betona",
    description:
      "Razbijanje asfaltnih i betonskih površina dvorišta, prilaza i parkirališta elektro-pneumatskim čekićima i mašinama.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Rušenje manjih objekata",
    description:
      "Rušenje garaža, pomoćnih objekata, ograda i šupa. Kompletno sa odvozom materijala i uređenjem terena.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Rad na zahtevnim pozicijama",
    description:
      "Specijalizovani za rušenje na visinama, uskim prostorima i teško dostupnim lokacijama. Bezbedno i efikasno.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function RusenjePage() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-navy pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={images[0]}
            alt="Rušenje i razbijanje Niš"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <FadeUp>
            <span className="text-gold font-heading font-semibold text-sm uppercase tracking-widest">
              Profesionalna demolacija
            </span>
            <h1 className="font-heading font-extrabold text-white text-4xl sm:text-5xl mt-4 mb-5 leading-tight">
              Rušenje i Razbijanje — Niš
            </h1>
            <p className="text-white/70 font-body text-lg max-w-3xl mx-auto leading-relaxed">
              Razbijanje pločica, zidova, kupatila, dvorišta, asfalta, manjih i većih objekata —
              profesionalnim mašinama, brzo i povoljno. Specijalizovani i za zahtevne pozicije i
              visine.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link href="/kontakt" className="btn-primary text-base">
                Zatražite ponudu
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href={CONTACT.phoneHref} className="btn-outline text-base">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {CONTACT.phone}
              </a>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Specijalizovani smo */}
      <section className="section-padding bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <SlideIn direction="left" className="w-full lg:w-5/12 flex-shrink-0">
              <div className="relative h-80 sm:h-[440px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={images[1]}
                  alt="Rušenje zidova Niš"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                <div className="absolute bottom-6 left-6 bg-white rounded-xl px-5 py-3 shadow-lg">
                  <div className="font-heading font-extrabold text-navy text-2xl">100%</div>
                  <div className="text-text-gray text-sm font-body">profesionalni pristup</div>
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="right" delay={0.1} className="flex-1">
              <span className="text-gold font-heading font-semibold text-sm uppercase tracking-widest">
                Ko smo
              </span>
              <h2 className="font-heading font-extrabold text-navy text-3xl sm:text-4xl mt-3 mb-5">
                Specijalizovani za sve vrste rušilačkih poslova
              </h2>
              <div className="space-y-4 text-text-gray font-body text-base leading-relaxed">
                <p>
                  Naš tim je specijalizovan za obavljanje svih vrsta rušilačkih poslova — od
                  razbijanja pločica u kupatilu do rušenja celih objekata. Koristimo profesionalne
                  električne i pneumatske mašine koje obezbeđuju brz, čist i bezbedan rad.
                </p>
                <p>
                  Posebno smo ponosni na sposobnost rada na <strong className="text-navy">zahtevnim pozicijama i
                  visinama</strong> — mestima na kojima drugi ekipe odbijaju da rade. Bezbednost je uvek
                  prioritet, a efikasnost je naš standard.
                </p>
                <p>
                  Nudimo kompletnu uslugu: dolazak, rušenje, pakovanje i odvoz šuta. Vi ne morate
                  da brinete ni o čemu — mi ostavljamo čist i spreman prostor za sledeću fazu
                  radova.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link href="/kontakt" className="btn-primary">
                  Kontaktirajte nas
                </Link>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-2 border-2 border-navy text-navy font-heading font-bold text-sm px-6 py-3 rounded-lg hover:bg-navy hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  {CONTACT.phone}
                </a>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Usluge */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeUp className="text-center mb-12">
            <span className="text-gold font-heading font-semibold text-sm uppercase tracking-widest">
              Šta radimo
            </span>
            <h2 className="font-heading font-extrabold text-navy text-3xl sm:text-4xl mt-3">
              <span className="heading-underline">Naše usluge rušenja</span>
            </h2>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <div className="bg-bg-light rounded-2xl p-6 border border-border h-full">
                  <div className="w-11 h-11 bg-gold/15 rounded-xl flex items-center justify-center text-gold mb-4">
                    {s.icon}
                  </div>
                  <h3 className="font-heading font-bold text-navy text-lg mb-2">{s.title}</h3>
                  <p className="text-text-gray font-body text-sm leading-relaxed">{s.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Galerija */}
      <section className="section-padding bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeUp className="text-center mb-12">
            <span className="text-gold font-heading font-semibold text-sm uppercase tracking-widest">
              Portfolio
            </span>
            <h2 className="font-heading font-extrabold text-navy text-3xl sm:text-4xl mt-3">
              <span className="heading-underline">Naši radovi</span>
            </h2>
          </FadeUp>

          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
            {images.map((src, idx) => (
              <div key={src} className="break-inside-avoid overflow-hidden rounded-xl">
                <Image
                  src={src}
                  alt={`Rušenje radovi ${idx + 1}`}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <FadeUp>
        <section className="bg-navy py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl mb-4">
              Potrebno vam je rušenje?
            </h2>
            <p className="text-white/60 font-body text-lg mb-8">
              Kontaktirajte nas za besplatnu procenu. Dolazimo na lice mesta, procenjujemo posao i
              dajemo konkretnu cenu — bez skrivenih troškova.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="btn-primary text-base">
                Besplatna procena
              </Link>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 border-2 border-white text-white font-heading font-bold text-sm px-6 py-3 rounded-lg hover:bg-white hover:text-navy transition-colors justify-center"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {CONTACT.phone}
              </a>
            </div>
          </div>
        </section>
      </FadeUp>
    </>
  );
}
