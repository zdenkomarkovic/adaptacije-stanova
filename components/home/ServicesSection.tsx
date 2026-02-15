"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/shared/AnimateIn";

const services = [
  {
    id: "keramika",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    title: "Keramičarski Radovi",
    description:
      "Postavljanje keramičkih pločica, granita i mozaika u kupatilima, kuhinjama i na terasama. Precizna obrada spojeva i vrhunski završni detalji.",
    features: ["Kupatila i kuhinje", "Terase i hodnike", "Granit i mozaik", "Hidroizolacija"],
    image:
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=600&q=80&auto=format&fit=crop",
    href: "/usluge#keramika",
  },
  {
    id: "voda",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Voda i Kanalizacija",
    description:
      "Kompletne VIK instalacije – od projektovanja trase do montaže sanitarija. Popravke curenja, zamena cevi, ugradnja bojlera i miksera.",
    features: ["VIK sistemi", "Sanitarije", "Bojleri i pumpe", "Otklanjanje curenja"],
    image:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80&auto=format&fit=crop",
    href: "/usluge#voda",
  },
  {
    id: "struja",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Elektroinstalacije",
    description:
      "Projektovanje i izvođenje elektroinstalacija po važećim standardima. Razvodni ormani, utičnice, osvetljenje, interfoni i pametni sistemi.",
    features: ["Novi razvod struje", "Osvetljenje", "Razvodni ormani", "Pametne instalacije"],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop",
    href: "/usluge#struja",
  },
  {
    id: "moler",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Molerski i Gipsarski Radovi",
    description:
      "Gletovanje, gipsanje, poravnanje zidova i plafona. Farbanje zidova uz upotrebu kvalitetnih boja i savremenih tehnika obrade površina.",
    features: ["Gletovanje i gipsanje", "Dekorativne fasade", "Unutrašnje farbanje", "Poravnanje zidova"],
    image:
      "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=600&q=80&auto=format&fit=crop",
    href: "/usluge#moler",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <FadeUp className="text-center mb-14">
          <span className="text-gold font-heading font-semibold text-sm uppercase tracking-widest">
            Šta radimo
          </span>
          <h2 className="font-heading font-extrabold text-navy text-3xl sm:text-4xl mt-3 mb-4">
            <span className="heading-underline">Naše Usluge</span>
          </h2>
          <p className="text-text-gray font-body text-lg max-w-2xl mx-auto mt-6">
            Pokrivamo sve zanate potrebne za kompletnu adaptaciju — jedinstven tim,
            jedinstven dogovor, jedno odgovorno lice.
          </p>
        </FadeUp>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <StaggerItem key={s.id}>
              <Link
                href={s.href}
                className="service-card bg-white rounded-2xl overflow-hidden shadow-sm border border-border group block h-full"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/20 transition-colors" />
                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-gold rounded-xl flex items-center justify-center text-white shadow-lg">
                    {s.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading font-bold text-navy text-lg mb-2 group-hover:text-gold transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-text-gray text-sm font-body leading-relaxed mb-4 line-clamp-3">
                    {s.description}
                  </p>
                  <ul className="space-y-1.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-text-gray font-body">
                        <svg className="w-3.5 h-3.5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center gap-1 text-gold font-heading font-semibold text-sm group-hover:gap-2 transition-all">
                    Više o usluzi
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <FadeUp delay={0.2} className="text-center mt-12">
          <Link href="/usluge" className="btn-primary text-base inline-flex">
            Sve usluge
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
