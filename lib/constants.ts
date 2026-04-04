// Globalne konstante sajta
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://adaptacijastanovanis.com";

export const SITE_NAME =
  process.env.NEXT_PUBLIC_SITE_NAME ?? "Adaptacije Stanova Niš";

export const SITE_DESCRIPTION =
  "Profesionalne adaptacije stanova i renoviranje kupatila u Nišu. Keramika, voda i kanalizacija, elektroinstalacije, molerski i gipsarski radovi. Sistem ključ u ruke. Besplatna procena.";

export const CONTACT = {
  phone: "063/723-9440",
  phoneHref: "tel:+381637239440",
  phone2: "063/460-010",
  phoneHref2: "tel:+38163460010",
  email: "pajakacar72@gmail.com",
  emailHref: "mailto:pajakacar72@gmail.com",
  whatsapp: "https://wa.me/381637239440",
  viber: "viber://chat?number=%2B381637239440",
};

export const NAV_LINKS = [
  { label: "Početna", href: "/" },
  { label: "Usluge", href: "/usluge" },
  { label: "Rušenje", href: "/rusenje" },
  { label: "O Nama", href: "/o-nama" },
  { label: "Kontakt", href: "/kontakt" },
];
