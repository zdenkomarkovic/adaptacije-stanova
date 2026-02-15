// Globalne konstante sajta
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const SITE_NAME =
  process.env.NEXT_PUBLIC_SITE_NAME ?? "Adaptacije Stanova";

export const SITE_DESCRIPTION =
  "Profesionalne adaptacije stanova i renoviranje kupatila. Keramika, voda i kanalizacija, elektroinstalacije, molerski i gipsarski radovi. Sistem ključ u ruke.";

export const CONTACT = {
  phone: "065/3230-730",
  phoneHref: "tel:+381653230730",
  email: "info@adaptacije-stanova.com",
  emailHref: "mailto:info@adaptacije-stanova.com",
  whatsapp: "https://wa.me/381653230730",
  viber: "viber://chat?number=%2B381653230730",
};

export const NAV_LINKS = [
  { label: "Početna", href: "/" },
  { label: "Usluge", href: "/usluge" },
  { label: "O Nama", href: "/o-nama" },
  { label: "Kontakt", href: "/kontakt" },
];
