"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { FadeUp } from "@/components/shared/AnimateIn";

const images = [
  "/IMG-4a34a8a78f4b4d1260c376df03225061-V.webp",
  "/IMG-4d76fc00e9f08992092d17882ea64ba6-V.webp",
  "/IMG-4ead74858becf81ee14141edf45b00c4-V.webp",
  "/IMG-5244e5d1729b1efd3b7252474ef94755-V.webp",
  "/IMG-64e52d1d569e971e3201c4ccf9288cd0-V.webp",
  "/IMG-6c406b581613e7de602b245c9e76c22f-V.webp",
  "/IMG-6d5ebafb82f5cb03d938408c716f32a6-V.webp",
  "/IMG-7d73fcd35473f2c7c9897dc6c2c27885-V.webp",
  "/IMG-7dd46e5504f6e41da8a913f4f40f25c0-V.webp",
  "/IMG-7e095fc123eb3e7ef0ab371c00e36273-V.webp",

  "/IMG-85031376934672d1781c8cea0c1936b6-V.webp",
  "/IMG-8a05f777757da88de27f66eeca6040c5-V.webp",
  "/IMG-92b81820c3fae3af3725190ecaaae40b-V.webp",
  "/IMG-9f7ec99913f0a5e531f7bcb2677db177-V.webp",
  "/IMG-a5597df6bdf60c147e8fa992c317e953-V.webp",
  "/IMG-a926df8d7f026e74c36f6444d9c4b3d7-V.webp",

  "/IMG-aec1b161420f96c2885138ba0ee106b2-V.webp",
  "/IMG-b35f0738e695e61b1174914490dd6210-V.webp",
  "/IMG-c219eb9b944fd4ea6b5251aec451a8ff-V.webp",
  "/IMG-c359f6eb78555e23823e2678a2bfb465-V.webp",
  "/IMG-d5efe28bec6243497590f66c46799b9a-V.webp",
  "/IMG-d6340a762df68097fe7c64f953b8d928-V.webp",
  "/IMG-fc3c29475bc599a3568f0eceab9d8f51-V.webp",
  "/IMG-fc4abe71d180da19c0d04949ec747186-V.webp",
  "/IMG-fe146c16fcf02d060fad43b285afac15-V.webp",
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);

  const prev = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, []);

  const next = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i + 1) % images.length));
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeUp className="text-center mb-14">
          <span className="text-gold font-heading font-semibold text-sm uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="font-heading font-extrabold text-navy text-3xl sm:text-4xl mt-3 mb-4">
            <span className="heading-underline">Naši Radovi</span>
          </h2>
          <p className="text-text-gray font-body text-lg max-w-2xl mx-auto mt-6">
            Pogledajte neke od naših završenih projekata — adaptacije stanova, kupatila i prostora
            širom Srbije.
          </p>
        </FadeUp>

        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          {images.map((src, idx) => (
            <div
              key={src}
              className="break-inside-avoid cursor-pointer overflow-hidden rounded-xl group relative"
              onClick={() => setLightbox(idx)}
            >
              <div className="relative w-full">
                <Image
                  src={src}
                  alt={`Radovi ${idx + 1}`}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-300 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={close}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white z-10 p-2"
            onClick={close}
            aria-label="Zatvori"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Prev */}
          <button
            className="absolute left-3 sm:left-6 text-white/80 hover:text-white z-10 p-2"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Prethodna"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox]!}
              alt={`Radovi ${lightbox + 1}`}
              width={1200}
              height={900}
              className="object-contain max-h-[85vh] rounded-lg w-auto"
              sizes="100vw"
              priority
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm font-body">
              {lightbox + 1} / {images.length}
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-3 sm:right-6 text-white/80 hover:text-white z-10 p-2"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Sledeća"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
