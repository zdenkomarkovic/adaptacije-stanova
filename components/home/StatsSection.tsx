"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/shared/AnimateIn";

const stats = [
  {
    value: "10+",
    label: "Godina iskustva",
    desc: "Radimo adaptacije od 2014. godine",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: "500+",
    label: "Završenih projekata",
    desc: "Stanovi, kupatila, kuhinje, terase",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    value: "100%",
    label: "Zadovoljnih klijenata",
    desc: "Preporučuju nas prijateljima i porodici",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
  },
  {
    value: "0",
    label: "Prekoračenja rokova",
    desc: "Uvek završavamo na vreme",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function StatsSection() {
  return (
    <section className="bg-navy py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center">
                {/* Icon */}
                <div className="w-16 h-16 bg-gold/15 rounded-2xl flex items-center justify-center text-gold mx-auto mb-4">
                  {stat.icon}
                </div>

                {/* Value */}
                <div className="font-heading font-extrabold text-gold text-4xl sm:text-5xl mb-1">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="font-heading font-bold text-white text-sm sm:text-base mb-1">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-white/45 text-xs sm:text-sm font-body">
                  {stat.desc}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
