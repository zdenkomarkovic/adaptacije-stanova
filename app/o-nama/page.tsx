import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { CONTACT } from "@/lib/constants";
import { FadeUp, SlideIn, StaggerContainer, StaggerItem } from "@/components/shared/AnimateIn";

export const metadata = buildMetadata({
  title: "O Nama",
  description:
    "Upoznajte tim adaptacije-stanova.com. Više od 10 godina iskustva u renoviranju stanova i kupatila u Srbiji. Kvalitet, pouzdanost i poštovanje rokova.",
});

const values = [
  {
    title: "Kvalitet bez kompromisa",
    description:
      "Koristimo isključivo materijale priznatih proizvođača i primenjujemo proverene tehnike rada. Svaki detalj je bitan.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Poštovanje rokova",
    description:
      "Rok je obaveza, ne preporuka. Planiramo radove detaljno i koordinišemo timove kako bismo uvek završili na vreme.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Transparentnost",
    description:
      "Jasna i detaljna ponuda pre početka radova. Bez skrivenih troškova i iznenađenja. Ono što dogovorimo — to i platite.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Iskustvo i stručnost",
    description:
      "Više od 10 godina radimo adaptacije stanova. Naš tim čine iskusni majstori specijalizovani za svaki zanat.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Kompletna usluga",
    description:
      "Jedan tim za sve zanate. Ne morate da tražite različite majstore — mi koordinišemo sve i preuzimamo odgovornost.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Zadovoljstvo klijenata",
    description:
      "Naš posao ne završava primopredajom. Stojimo iza svojih radova i dostupni smo ako se ikad pojavi bilo kakav problem.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
  },
];

export default function ONamaPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-navy pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <FadeUp>
            <span className="text-gold font-heading font-semibold text-sm uppercase tracking-widest">
              Ko smo mi
            </span>
            <h1 className="font-heading font-extrabold text-white text-4xl sm:text-5xl mt-4 mb-5">
              O Nama
            </h1>
            <p className="text-white/60 font-body text-lg max-w-2xl mx-auto">
              Više od 10 godina radimo adaptacije stanova i renoviranja kupatila u Srbiji. Upoznajte
              naš tim i vrednosti koje nas vode.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Story */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Image */}
            <SlideIn direction="left" className="w-full lg:w-5/12 flex-shrink-0">
              <div className="relative h-80 sm:h-[440px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop"
                  alt="Naš tim na poslu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                {/* Badge */}
                <div className="absolute bottom-6 left-6 bg-white rounded-xl px-5 py-3 shadow-lg">
                  <div className="font-heading font-extrabold text-navy text-2xl">10+</div>
                  <div className="text-text-gray text-sm font-body">godina iskustva</div>
                </div>
              </div>
            </SlideIn>

            {/* Content */}
            <SlideIn direction="right" delay={0.1} className="flex-1">
              <span className="text-gold font-heading font-semibold text-sm uppercase tracking-widest">
                Naša priča
              </span>
              <h2 className="font-heading font-extrabold text-navy text-3xl sm:text-4xl mt-3 mb-5">
                Adaptacije Stanova Beograd.
              </h2>
              <div className="space-y-4 text-text-gray font-body text-base leading-relaxed">
                <p>
                  Počeli smo kao mali tim majstora sa jednom jedinom misijom — da svakom klijentu
                  pružimo uslugu kakvu bi željeli za sopstveni dom. Tokom godina, izrasli smo u
                  pouzdan tim specijalizovan za kompletne adaptacije stanova i renoviranje kupatila.
                </p>
                <p>
                  Naša snaga leži u tome što pokrivamo sve zanate pod jednim krovom. Keramičari,
                  vodoinstalateri, električari i moleri rade kao usklađen tim, što znači brže
                  izvođenje radova, manje gnjavaže za vas i jasna odgovornost na jednom mestu.
                </p>
                <p>
                  Posebno smo ponosni na kulturu poštovanja rokova. Znamo koliko je važno da vaš
                  stan bude gotov na vreme — bilo da renovirate pre useljivanja, za vreme odmora ili
                  između stanara.
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

      {/* Values */}
      <section className="section-padding bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeUp className="text-center mb-12">
            <span className="text-gold font-heading font-semibold text-sm uppercase tracking-widest">
              Naši principi
            </span>
            <h2 className="font-heading font-extrabold text-navy text-3xl sm:text-4xl mt-3">
              <span className="heading-underline">Zašto mi?</span>
            </h2>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-border h-full">
                  <div className="w-11 h-11 bg-gold/15 rounded-xl flex items-center justify-center text-gold mb-4">
                    {v.icon}
                  </div>
                  <h3 className="font-heading font-bold text-navy text-lg mb-2">{v.title}</h3>
                  <p className="text-text-gray font-body text-sm leading-relaxed">{v.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <FadeUp>
        <section className="bg-navy py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl mb-4">
              Radujemo se saradnji
            </h2>
            <p className="text-white/60 font-body text-lg mb-8">
              Kontaktirajte nas za besplatnu procenu ili samo da porazgovaramo o vašem projektu. Tu
              smo za svako pitanje.
            </p>
            <Link href="/kontakt" className="btn-primary text-base">
              Pišite nam
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </FadeUp>
    </>
  );
}
