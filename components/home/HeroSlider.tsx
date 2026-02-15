"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80&auto=format&fit=crop",
    title: "Kompletna Adaptacija Stanova Beograd",
    subtitle: "Sistem ključ u ruke",
    description:
      "Vaš stan od ideje do gotovog rezultata. Koordinišemo sve zanate, poštujemo dogovorene rokove i budžet.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&q=80&auto=format&fit=crop",
    title: "Renoviranje Kupatila",
    subtitle: "Keramika, voda, elektrika",
    description:
      "Kompletno renoviranje kupatila – od hidroizolacije i keramike do sanitarija i elektroinstalacija.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80&auto=format&fit=crop",
    title: "Molerski i Gipsarski Radovi",
    subtitle: "Glattung, gletovanje, farbanje",
    description:
      "Savršeno ravni zidovi i plafoni. Gipsarsko-molerski radovi uz primenu najkvalitetnijih materijala.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(idx);
      setTimeout(() => setIsAnimating(false), 800);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className={`object-cover transition-transform duration-[6000ms] ${
              idx === current ? "scale-110" : "scale-100"
            }`}
            priority={idx === 0}
            sizes="100vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/60 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-gold text-sm font-heading font-semibold">
                {slides[current]?.subtitle}
              </span>
            </div>

            {/* Title */}
            <h1
              key={`title-${current}`}
              className="font-heading font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5"
              style={{ animation: "countUp 0.7s ease" }}
            >
              {slides[current]?.title}
            </h1>

            {/* Description */}
            <p
              key={`desc-${current}`}
              className="text-white/80 text-lg sm:text-xl font-body leading-relaxed mb-9"
              style={{ animation: "countUp 0.9s ease" }}
            >
              {slides[current]?.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/kontakt" className="btn-primary text-base">
                Besplatna procena
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <a href={CONTACT.phoneHref} className="btn-outline text-base">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`rounded-full transition-all duration-300 ${
              idx === current ? "w-8 h-2.5 bg-gold" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Slajd ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden sm:flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-white/30">
          <div
            className="w-px bg-gold animate-bounce"
            style={{ height: "50%", animation: "scrollDown 2s infinite" }}
          />
        </div>
        <span className="text-white/40 text-xs font-body rotate-90 mt-3">scroll</span>
      </div>

      <style>{`
        @keyframes scrollDown {
          0% { height: 0; opacity: 1; }
          100% { height: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
