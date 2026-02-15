import { buildMetadata } from "@/lib/metadata";
import { CONTACT } from "@/lib/constants";
import ContactForm from "@/components/kontakt/ContactForm";
import { FadeUp, SlideIn, StaggerContainer, StaggerItem } from "@/components/shared/AnimateIn";

export const metadata = buildMetadata({
  title: "Kontakt",
  description:
    "Kontaktirajte nas za besplatnu procenu adaptacije stana ili renoviranja kupatila. Telefon, Viber, WhatsApp: 065/3230-730.",
});

const contactCards = [
  {
    title: "Telefon",
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
    desc: "Dostupni radnim danima 07–20h",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    ),
    color: "bg-navy",
  },
  {
    title: "Viber",
    value: CONTACT.phone,
    href: CONTACT.viber,
    desc: "Pišite nam na Viber",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.997 0C5.518 0 .235 5.048.001 11.467c-.121 3.317.988 6.451 3.122 8.836V24l3.762-1.876c1.357.404 2.767.61 4.167.61 6.479 0 11.762-5.048 11.997-11.467C23.29 4.791 18.218 0 11.997 0zm4.37 15.957c-.23.577-.948 1.059-1.594 1.183-.437.083-.993.148-2.885-.62-2.408-.98-3.961-3.409-4.08-3.568-.119-.157-.99-1.319-.99-2.515 0-1.196.627-1.785.849-2.028.222-.245.484-.307.646-.307.161 0 .323 0 .464.007.148.007.349-.057.546.416.202.488.687 1.683.748 1.806.061.121.101.264.02.421-.078.155-.118.252-.232.386-.116.136-.244.304-.348.409-.116.116-.237.24-.102.471.136.231.603.996 1.296 1.612.89.793 1.64 1.038 1.872 1.153.232.115.368.096.504-.057.136-.155.584-.682.739-.917.155-.233.311-.194.524-.117.214.078 1.358.641 1.59.757.232.115.386.173.443.271.057.096.057.558-.173 1.136z" />
      </svg>
    ),
    color: "bg-purple-600",
  },
  {
    title: "WhatsApp",
    value: CONTACT.phone,
    href: CONTACT.whatsapp,
    desc: "Chat na WhatsApp",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    color: "bg-green-500",
  },
  {
    title: "Email",
    value: CONTACT.email,
    href: CONTACT.emailHref,
    desc: "Odgovaramo u roku od 24h",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
    color: "bg-gold",
  },
];

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-navy pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <FadeUp>
            <span className="text-gold font-heading font-semibold text-sm uppercase tracking-widest">
              Stupite u kontakt
            </span>
            <h1 className="font-heading font-extrabold text-white text-4xl sm:text-5xl mt-4 mb-5">
              Kontakt
            </h1>
            <p className="text-white/60 font-body text-lg max-w-xl mx-auto">
              Javite nam se — telefonom, Viber-om, WhatsApp-om ili putem forme.
              Besplatna procena na terenu bez obaveze.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Contact cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6 relative z-10">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {contactCards.map((card) => (
            <StaggerItem key={card.title}>
              <a
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="bg-white rounded-2xl p-5 shadow-md border border-border hover:shadow-lg hover:-translate-y-1 transition-all group text-center sm:text-left block"
              >
                <div className={`w-12 h-12 ${card.color} rounded-xl flex items-center justify-center text-white mb-3 mx-auto sm:mx-0`}>
                  {card.icon}
                </div>
                <div className="font-heading font-bold text-navy text-sm mb-0.5">{card.title}</div>
                <div className="font-heading font-semibold text-navy text-base group-hover:text-gold transition-colors">
                  {card.value}
                </div>
                <div className="text-text-gray text-xs font-body mt-0.5">{card.desc}</div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Main content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Form */}
            <SlideIn direction="left" className="flex-1">
              <h2 className="font-heading font-extrabold text-navy text-2xl sm:text-3xl mb-2">
                Pošaljite nam upit
              </h2>
              <p className="text-text-gray font-body text-base mb-7">
                Opišite nam šta planirate i javićemo se u najkraćem roku sa okvirnom procenom.
              </p>
              <ContactForm />
            </SlideIn>

            {/* Info sidebar */}
            <SlideIn direction="right" delay={0.15} className="w-full lg:w-80 flex-shrink-0 space-y-6">
              {/* Working hours */}
              <div className="bg-bg-light rounded-2xl p-6 border border-border">
                <h3 className="font-heading font-bold text-navy text-lg mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Radno vreme
                </h3>
                <div className="space-y-2 text-sm font-body">
                  {[
                    { day: "Ponedeljak – Petak", time: "07:00 – 20:00" },
                    { day: "Subota", time: "08:00 – 16:00" },
                    { day: "Nedelja", time: "Po dogovoru" },
                  ].map((row) => (
                    <div key={row.day} className="flex justify-between items-center py-1.5 border-b border-border last:border-0">
                      <span className="text-text-gray">{row.day}</span>
                      <span className="font-semibold text-navy">{row.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick response */}
              <div className="bg-navy rounded-2xl p-6 text-white">
                <div className="w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">Brz odgovor</h3>
                <p className="text-white/60 font-body text-sm leading-relaxed">
                  Obično odgovaramo u roku od <strong className="text-white">2 sata</strong> tokom
                  radnog vremena. Za hitne pozive, nazovite direktno.
                </p>
                <div className="hidden lg:block">
                  <a href={CONTACT.phoneHref} className="btn-primary w-full justify-center mt-4 text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    {CONTACT.phone}
                  </a>
                </div>
                <a href={CONTACT.phoneHref} className="flex lg:hidden btn-primary w-full justify-center mt-4 text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  {CONTACT.phone}
                </a>
              </div>

              {/* Promise */}
              <div className="bg-gold/10 border border-gold/30 rounded-2xl p-6">
                <h3 className="font-heading font-bold text-navy text-base mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Naša garancija
                </h3>
                <p className="text-text-gray font-body text-sm leading-relaxed">
                  Besplatna procena na terenu. Bez obaveze, bez skrivenih troškova.
                  Fiksna cena dogovorena unapred.
                </p>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>
    </>
  );
}
