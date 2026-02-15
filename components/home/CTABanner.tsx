"use client";

import Link from "next/link";
import { CONTACT } from "@/lib/constants";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/shared/AnimateIn";

export default function CTABanner() {
  return (
    <section
      className="relative py-20 sm:py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a2d44 0%, #243650 50%, #1a2d44 100%)",
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <FadeUp>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-gold rounded-full" />
            <span className="text-gold text-sm font-heading font-semibold">
              Besplatna procena
            </span>
          </div>

          <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl mb-5 leading-tight">
            Spremi za renoviranje?
            <br />
            <span className="text-gold">Pozovite nas danas.</span>
          </h2>

          <p className="text-white/65 font-body text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Zakažite besplatni izlazak na teren. Dobijate detaljnu ponudu bez obaveze,
            sa jasnim rokovima i fiksnom cenom.
          </p>
        </FadeUp>

        {/* CTA Buttons */}
        <FadeUp delay={0.15}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={CONTACT.phoneHref}
              className="btn-primary text-base w-full sm:w-auto justify-center sm:justify-start text-lg px-8 py-4"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {CONTACT.phone}
            </a>

            <Link
              href="/kontakt"
              className="btn-outline text-base w-full sm:w-auto justify-center text-lg px-8 py-4"
            >
              Pošaljite upit
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </FadeUp>

        {/* Trust badges */}
        <StaggerContainer className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-10">
          {[
            "Besplatna procena",
            "Fiksna cena bez dodataka",
            "Poštovanje rokova",
            "Garantovani radovi",
          ].map((badge) => (
            <StaggerItem key={badge}>
              <div className="flex items-center gap-2 text-white/50">
                <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-body">{badge}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
