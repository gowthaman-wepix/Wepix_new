export type ClientLogo = {
  src: string;
  alt: string;
  /** Client storefront; omit when no public site was provided. */
  href?: string;
};

/** Filenames are `public/logos/client-01.png` … `client-20.png` (upload order). */
export const CLIENT_LOGOS: ClientLogo[] = [
  { src: "/logos/client-01.png", alt: "Alankar Chennai", href: "https://alankarchennai.in/" },
  { src: "/logos/client-02.png", alt: "Eitara", href: "https://www.myeitara.com/" },
  { src: "/logos/client-03.png", alt: "Velaura by Sri Shanmuga Silks", href: "https://velaura.in/" },
  { src: "/logos/client-04.png", alt: "Pearloze", href: "https://pearloze.com/" },
  { src: "/logos/client-05.png", alt: "Lifashion", href: "https://lifashion.co.in/" },
  { src: "/logos/client-06.png", alt: "Reviash", href: "https://reviash.com/" },
  { src: "/logos/client-07.png", alt: "Yazhli Collection", href: "https://yazhlicollection.com/" },
  { src: "/logos/client-08.png", alt: "Label Jas", href: "https://labeljas.com/" },
  { src: "/logos/client-09.png", alt: "Ishika Trends", href: "https://ishikatrends.com/" },
  { src: "/logos/client-10.png", alt: "Uzvi skincare", href: "https://www.uzviecostore.com/" },
  { src: "/logos/client-11.png", alt: "Le'Moon", href: "https://www.lemoonbaby.in/" },
  { src: "/logos/client-12.png", alt: "Suva Attire", href: "https://suvaattire.com/" },
  { src: "/logos/client-13.png", alt: "Mini Tantini", href: "https://www.minitantini.com/" },
  { src: "/logos/client-14.png", alt: "Seams to Love", href: "https://seamstolove.com/" },
  { src: "/logos/client-15.png", alt: "Cloudy Fit by Asmitha", href: "https://cloudyfitbyasmitha.com/" },
  { src: "/logos/client-16.png", alt: "Oggha", href: "https://www.oghaclothing.com/" },
  { src: "/logos/client-17.png", alt: "Hrudhay", href: "https://hrudhay.com/" },
  { src: "/logos/client-18.png", alt: "Angelic Weaves", href: "https://angelicweaves.com/" },
  { src: "/logos/client-19.png", alt: "Madhavas The Design Studio", href: "https://madhavasds.com/" },
  { src: "/logos/client-20.png", alt: "Plumeria by Jeyashilpa", href: "https://plumeriabyj.com/" },
];
