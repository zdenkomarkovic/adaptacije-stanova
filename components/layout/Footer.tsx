import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, CONTACT } from "@/lib/constants";

const services = [
  { label: "Keramičarski radovi", href: "/usluge#keramika" },
  { label: "Voda i kanalizacija", href: "/usluge#voda" },
  { label: "Elektroinstalacije", href: "/usluge#struja" },
  { label: "Molersko-gipsarski radovi", href: "/usluge#moler" },
  { label: "Kompletna adaptacija", href: "/usluge" },
  { label: "Sistem ključ u ruke", href: "/usluge" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Adaptacije Stanova"
                  width={160}
                  height={44}
                  className="h-18 w-auto"
                />
              </Link>
            </div>
            <p className="text-white/60 text-sm leading-relaxed font-body mb-5">
              Profesionalne usluge adaptacije stanova i renoviranja kupatila. Kvalitet, pouzdanost i
              poštovanje dogovorenih rokova.
            </p>
            <div className="flex gap-3">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href={CONTACT.viber}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-purple-500 flex items-center justify-center transition-colors"
                aria-label="Viber"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.997 0C5.518 0 .235 5.048.001 11.467c-.121 3.317.988 6.451 3.122 8.836V24l3.762-1.876c1.357.404 2.767.61 4.167.61 6.479 0 11.762-5.048 11.997-11.467C23.29 4.791 18.218 0 11.997 0zm4.37 15.957c-.23.577-.948 1.059-1.594 1.183-.437.083-.993.148-2.885-.62-2.408-.98-3.961-3.409-4.08-3.568-.119-.157-.99-1.319-.99-2.515 0-1.196.627-1.785.849-2.028.222-.245.484-.307.646-.307.161 0 .323 0 .464.007.148.007.349-.057.546.416.202.488.687 1.683.748 1.806.061.121.101.264.02.421-.078.155-.118.252-.232.386-.116.136-.244.304-.348.409-.116.116-.237.24-.102.471.136.231.603.996 1.296 1.612.89.793 1.64 1.038 1.872 1.153.232.115.368.096.504-.057.136-.155.584-.682.739-.917.155-.233.311-.194.524-.117.214.078 1.358.641 1.59.757.232.115.386.173.443.271.057.096.057.558-.173 1.136z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigacija */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-gold mb-5">
              Navigacija
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold text-sm transition-colors font-body flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Usluge */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-gold mb-5">
              Naše Usluge
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-white/60 hover:text-gold text-sm transition-colors font-body flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-gold mb-5">
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="flex items-start gap-3 text-white/60 hover:text-gold transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/10 group-hover:bg-gold/20 flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-white/40 font-body mb-0.5">
                      Telefon / Viber / WhatsApp
                    </div>
                    <div className="text-sm font-semibold font-heading">{CONTACT.phone}</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="flex items-start gap-3 text-white/60 hover:text-gold transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/10 group-hover:bg-gold/20 flex items-center justify-center flex-shrink-0 transition-colors mt-0.5">
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-white/40 font-body mb-0.5">Email</div>
                    <div className="text-sm font-semibold font-heading">{CONTACT.email}</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-white/40 font-body mb-0.5">Područje rada</div>
                    <div className="text-sm text-white/60 font-body">Srbija</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/40 text-xs font-body text-center">
            &copy; {new Date().getFullYear()} Adaptacije Stanova. Sva prava zadržana.
          </p>
          <p className="text-white/30 text-xs font-body text-center">
            Poštujemo rokove &bull; Garantujemo kvalitet
          </p>
          <p className="text-white/30 text-xs font-body text-center">
            Izrada sajta:{" "}
            <a
              href="https://manikamwebsolutions.com/sr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              Manikam Web Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
