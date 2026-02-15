"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/shared/AnimateIn";

const steps = [
  {
    number: "01",
    title: "Kontakt i Konsultacija",
    description:
      "Javite nam se telefonom, Viber-om ili WhatsApp-om. Dogovaramo besplatan izlazak na teren u roku od 24 sata.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Pregled i Procena",
    description:
      "Dolazimo na teren, analiziramo prostor i dajemo detaljnu pisanu ponudu sa specificiranim radovima i materijalima.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Ugovor i Dinamika",
    description:
      "Potpisujemo ugovor sa tačnom specifikacijom radova, rokovima i cenama. Bez skrivenih troškova.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Izvodjenje Radova",
    description:
      "Naš iskusni tim počinje radove prema dogovorenom planu. Redovno vas informišemo o napretku radova.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Primopredaja",
    description:
      "Zajedno prolazimo kroz završene radove. Garantujemo kvalitet i otklanjamo sve eventualne primedbe pre isplate.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <FadeUp className="text-center mb-16">
          <span className="text-gold font-heading font-semibold text-sm uppercase tracking-widest">
            Kako radimo
          </span>
          <h2 className="font-heading font-extrabold text-navy text-3xl sm:text-4xl mt-3 mb-4">
            <span className="heading-underline">Proces Adaptacije</span>
          </h2>
          <p className="text-text-gray font-body text-lg max-w-2xl mx-auto mt-6">
            Transparentan proces od prvog kontakta do primopredaje. Znate uvek šta se dešava
            i kada — bez iznenađenja.
          </p>
        </FadeUp>

        {/* Steps */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
          {steps.map((step, idx) => (
            <StaggerItem key={step.number}>
              <div
                className={`relative flex flex-col items-center text-center ${
                  idx < steps.length - 1 ? "process-line" : ""
                }`}
              >
                {/* Circle */}
                <div className="relative w-14 h-14 rounded-full bg-navy flex items-center justify-center text-white mb-4 shadow-lg flex-shrink-0 z-10">
                  {step.icon}
                  {/* Number badge */}
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-gold rounded-full flex items-center justify-center text-white text-xs font-heading font-bold">
                    {idx + 1}
                  </span>
                </div>

                {/* Step number */}
                <div className="text-gold/30 font-heading font-extrabold text-3xl leading-none mb-2">
                  {step.number}
                </div>

                <h3 className="font-heading font-bold text-navy text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-text-gray text-sm font-body leading-relaxed">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Promise box */}
        <FadeUp delay={0.2} className="mt-16">
          <div className="bg-navy rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-heading font-bold text-white text-xl mb-2">
                Poštovanje Rokova — Naša Obaveza
              </h3>
              <p className="text-white/60 font-body text-base leading-relaxed">
                Svaki dogovoreni rok tretiramo kao obavezu, ne kao preporuku. Ukoliko dođe do
                kašnjenja van naše kontrole, odmah vas obaveštavamo i predlažemo rešenje.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2 bg-gold/20 rounded-xl px-5 py-3">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gold font-heading font-bold text-sm">Zagarantovano</span>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
