export type Tech = "Shopify" | "WordPress";

export type Project = {
  slug: string;
  title: string;
  client: string;
  tech: Tech;
  category: string;
  year: string;
  excerpt: string;
  metrics: { label: string; value: string }[];
  scope: string[];
  /** Live client site, used for homepage screenshot cover. */
  url: string;
  /**
   * Optional card/hero image. Defaults to a thum.io homepage render of `url`.
   * Use for password-only stores, static mockups in `/public/work-covers/`, or when thum.io mis-renders.
   */
  image?: string;
};

/** ~16:10 crop of the live homepage (external screenshot service). */
export function homepageCoverUrl(websiteUrl: string): string {
  const base = websiteUrl.replace(/\/+$/, "");
  return `https://image.thum.io/get/width/1600/crop/1000/viewportWidth/1440/noanimate/${base}`;
}

export function projectCoverImage(p: Project): string {
  return p.image ?? homepageCoverUrl(p.url);
}

const S = {
  shopifyEthnic: {
    tech: "Shopify" as const,
    category: "Ethnic wear · D2C",
    metrics: [
      { label: "Platform", value: "Shopify 2.0" },
      { label: "Focus", value: "Merch & checkout" },
      { label: "Experience", value: "Mobile-first" },
    ],
    scope: ["Theme & sections", "Collections & navigation", "Checkout & payments", "Performance & SEO"],
  },
  shopifyFashion: {
    tech: "Shopify" as const,
    category: "Fashion · D2C",
    metrics: [
      { label: "Platform", value: "Shopify 2.0" },
      { label: "Focus", value: "Brand & conversion" },
      { label: "Experience", value: "Editorial PDPs" },
    ],
    scope: ["Storefront UX", "Product storytelling", "Promotions & upsells", "Analytics-ready tracking"],
  },
  shopifyKids: {
    tech: "Shopify" as const,
    category: "Kidswear · D2C",
    metrics: [
      { label: "Platform", value: "Shopify 2.0" },
      { label: "Focus", value: "Trust & clarity" },
      { label: "Experience", value: "Fast browse" },
    ],
    scope: ["Age/size navigation", "Theme customisation", "Shipping & policies", "Email capture"],
  },
  shopifySkincare: {
    tech: "Shopify" as const,
    category: "Beauty · D2C",
    metrics: [
      { label: "Platform", value: "Shopify 2.0" },
      { label: "Focus", value: "Brand & education" },
      { label: "Experience", value: "Clean PDPs" },
    ],
    scope: ["Ingredient-forward layouts", "Collections by concern", "Trust & reviews", "Subscription-ready flows"],
  },
  shopifyLounge: {
    tech: "Shopify" as const,
    category: "Loungewear · D2C",
    metrics: [
      { label: "Platform", value: "Shopify 2.0" },
      { label: "Focus", value: "Comfort-first UX" },
      { label: "Experience", value: "Size clarity" },
    ],
    scope: ["Lookbooks & grids", "Size guides", "Bundles & combos", "Checkout optimisation"],
  },
  wordpressInterior: {
    tech: "WordPress" as const,
    category: "Interior design · Studio",
    metrics: [
      { label: "Platform", value: "WordPress" },
      { label: "Focus", value: "Portfolio & leads" },
      { label: "Experience", value: "Editorial layouts" },
    ],
    scope: ["Custom theme", "Project galleries", "Services & process", "Contact & consultant CTAs"],
  },
};

export const PROJECTS: Project[] = [
  {
    slug: "alankar-chennai",
    title: "Alankar Chennai",
    client: "Alankar",
    year: "2025",
    url: "https://alankarchennai.in/",
    image: "/work-covers/cover-01.png",
    excerpt:
      "Festive and occasion wear on Shopify: anarkalis, lehengas and drape dresses with a polished, high-trust shopping flow.",
    ...S.shopifyEthnic,
  },
  {
    slug: "eitara",
    title: "Eitara",
    client: "Eitara",
    year: "2025",
    url: "https://www.myeitara.com/",
    image: "/work-covers/cover-02.png",
    excerpt:
      "Craft-led Indian wear with editorial storytelling: kurti sets, dresses and co-ords built for discovery and repeat purchases.",
    ...S.shopifyEthnic,
  },
  {
    slug: "velaura",
    title: "Velaura by Sri Shanmuga Silks",
    client: "Velaura",
    year: "2025",
    url: "https://velaura.in/",
    image: "/work-covers/cover-03.png",
    excerpt:
      "Silks and sarees online with collection-led browsing, clear pricing tiers, and a heritage brand narrative.",
    ...S.shopifyEthnic,
  },
  {
    slug: "pearloze",
    title: "Pearloze",
    client: "Pearloze",
    year: "2025",
    url: "https://pearloze.com/",
    image: "/work-covers/cover-04.png",
    excerpt:
      "Contemporary dresses, tops and skirts: a fashion-forward Shopify build with strong merchandising and social proof.",
    ...S.shopifyFashion,
  },
  {
    slug: "lifashion",
    title: "Lifashion",
    client: "PG International / Lifashion",
    year: "2025",
    url: "https://lifashion.co.in/",
    image: "/work-covers/cover-20.webp",
    excerpt:
      "Kids’ apparel and unisex essentials: catalogue-heavy Shopify with age-based navigation and parent-friendly UX.",
    ...S.shopifyKids,
  },
  {
    slug: "reviash",
    title: "Reviash",
    client: "Reviash",
    year: "2025",
    url: "https://reviash.com/",
    image: "/work-covers/cover-06.png",
    excerpt:
      "Affordable luxury womenswear: dresses, co-ords and scarves with a calm, editorial storefront.",
    ...S.shopifyFashion,
  },
  {
    slug: "yazhli-collection",
    title: "Yazhli Collection",
    client: "Yazhli",
    year: "2025",
    url: "https://yazhlicollection.com/",
    image: "/work-covers/cover-07.png",
    excerpt:
      "Western and ethnic occasion wear: gowns, lehengas and kurta sets with minimal, breathable visual design.",
    ...S.shopifyEthnic,
  },
  {
    slug: "label-jas",
    title: "Label Jas",
    client: "Label Jas",
    year: "2026",
    url: "https://labeljas.com/",
    image: "/work-covers/cover-08.png",
    excerpt:
      "Emerging fashion label on Shopify: campaign-ready homepage, crisp collections, and conversion-focused PDPs.",
    ...S.shopifyFashion,
  },
  {
    slug: "ishika-trends",
    title: "Ishika Trends",
    client: "Ishika Trends",
    year: "2025",
    url: "https://ishikatrends.com/",
    image: "/work-covers/cover-09.png",
    excerpt:
      "Full-range ethnic and fusion wear: kurti sets, gowns, sarees and maternity with strong category IA.",
    ...S.shopifyEthnic,
  },
  {
    slug: "uzvi",
    title: "Uzvi",
    client: "Uzvi",
    year: "2025",
    url: "https://www.uzviecostore.com/",
    image: "/work-covers/cover-10.png",
    excerpt:
      "Skincare and beauty retail: product education, clean typography, and a trust-led path to purchase.",
    ...S.shopifySkincare,
  },
  {
    slug: "lemoon-baby",
    title: "Le'Moon Baby",
    client: "Le'Moon",
    year: "2025",
    url: "https://www.lemoonbaby.in/",
    image: "/work-covers/cover-21.webp",
    excerpt:
      "Premium baby and toddler wear: rompers, dresses and accessories with a soft, giftable brand experience.",
    ...S.shopifyKids,
  },
  {
    slug: "suva-attire",
    title: "Suva Attire",
    client: "Suva Attire",
    year: "2025",
    url: "https://suvaattire.com/",
    image: "/work-covers/cover-12.png",
    excerpt:
      "Tamil-forward ethnic and fusion: kurti sets, maxis and brocade drops with video-led merchandising.",
    ...S.shopifyEthnic,
  },
  {
    slug: "mini-tantini",
    title: "Mini Tantini",
    client: "Mini Tantini",
    year: "2026",
    url: "https://www.minitantini.com/",
    image: "/work-covers/cover-13.png",
    excerpt:
      "Playful kidswear on pure-cotton positioning: collections, trust badges, and parent-first product detail.",
    ...S.shopifyKids,
  },
  {
    slug: "seams-to-love",
    title: "Seams to Love",
    client: "Seams to Love",
    year: "2025",
    url: "https://seamstolove.com/",
    image: "/work-covers/cover-14.png",
    excerpt:
      "Contemporary dresses and budget tiers: tiered collections, promos, and a warm boutique tone.",
    ...S.shopifyFashion,
  },
  {
    slug: "cloudy-fit-by-asmitha",
    title: "Cloudy Fit by Asmitha",
    client: "Cloudy Fit",
    year: "2025",
    url: "https://cloudyfitbyasmitha.com/",
    image: "/work-covers/cover-15.png",
    excerpt:
      "Maternity-friendly loungewear and nightwear: inclusive sizing, feeding-friendly highlights, and calm UX.",
    ...S.shopifyLounge,
  },
  {
    slug: "oggha",
    title: "Oggha",
    client: "Oggha",
    year: "2025",
    url: "https://www.oghaclothing.com/",
    image: "/work-covers/cover-16.png",
    excerpt:
      "Contemporary women’s apparel: dresses, sets and tailored coordinates with a bold, modern storefront.",
    ...S.shopifyFashion,
  },
  {
    slug: "hrudhay",
    title: "Hrudhay",
    client: "Hrudhay",
    year: "2025",
    url: "https://hrudhay.com/",
    image: "/work-covers/cover-17.png",
    excerpt:
      "Occasion and everyday ethnic: gowns, anarkalis and kurtis with editorial lookbooks and fast mobile browse.",
    ...S.shopifyEthnic,
  },
  {
    slug: "angelic-weaves",
    title: "Angelic Weaves",
    client: "Angelic Weaves",
    year: "2025",
    url: "https://angelicweaves.com/",
    image: "/work-covers/cover-18.png",
    excerpt:
      "Kurtis, dresses and co-ords: polished Shopify UX with budget and clearance paths for steady conversion.",
    ...S.shopifyEthnic,
  },
  {
    slug: "madhavas-the-design-studio",
    title: "Madhavas The Design Studio",
    client: "Madhavas",
    year: "2025",
    url: "https://madhavasds.com/",
    image: "/work-covers/cover-19.png",
    excerpt:
      "Commercial and residential interior design: portfolio, process, and lead generation on a bespoke WordPress build.",
    ...S.wordpressInterior,
  },
  {
    slug: "plumeria-by-jeyashilpa",
    title: "Plumeria by Jeyashilpa",
    client: "Plumeria",
    year: "2025",
    url: "https://plumeriabyj.com/",
    image: "/logos/client-20.png",
    excerpt:
      "Boutique ethnic wear: floral, occasion-led branding and a refined product narrative on Shopify.",
    ...S.shopifyEthnic,
  },
  {
    slug: "velzaara",
    title: "Velzaara",
    client: "Velzaara",
    year: "2025",
    url: "https://velzaara.com/",
    image: "/work-covers/cover-22.webp",
    excerpt:
      "Boutique ethnic wear: floral, occasion-led branding and a refined product narrative on Shopify.",
    ...S.shopifyEthnic,
  },
  {
    slug: "the-alp-stores",
    title: "The Alp Stores",
    client: "The Alp Stores",
    year: "2025",
    url: "https://www.thealpstores.com/",
    image: "/work-covers/cover-23.webp",
    excerpt:
      "Boutique ethnic wear: floral, occasion-led branding and a refined product narrative on Shopify.",
    ...S.shopifyEthnic,
  },
  {
    slug: "momify",
    title: "Momify",
    client: "Momify",
    year: "2025",
    url: "https://themomify.com/",
    image: "/work-covers/cover-05.png",
    excerpt:
      "Boutique ethnic wear: floral, occasion-led branding and a refined product narrative on Shopify.",
    ...S.shopifyEthnic,
  },
  {
    slug: "malliclothing",
    title: "Malliclothing",
    client: "Malliclothing",
    year: "2025",
    url: "https://malliclothing.in/",
    image: "/work-covers/cover-11.png",
    excerpt:
      "Boutique ethnic wear: floral, occasion-led branding and a refined product narrative on Shopify.",
    ...S.shopifyEthnic,
  },
  {
    slug: "sampradaya",
    title: "Sampradaya",
    client: "Sampradaya",
    year: "2025",
    url: "https://sampradaya.store/",
    image: "/work-covers/cover-24.webp",
    excerpt:
      "Boutique ethnic wear: floral, occasion-led branding and a refined product narrative on Shopify.",
    ...S.shopifyEthnic,
  },
  {
    slug: "studiomirela",
    title: "Studio Mirela",
    client: "Studio Mirela",
    year: "2025",
    url: "https://studiomirela.us/",
    image: "/work-covers/cover-25.webp",
    excerpt:
      "Boutique ethnic wear: floral, occasion-led branding and a refined product narrative on Shopify.",
    ...S.shopifyEthnic,
  },
  {
    slug: "thugiil",
    title: "Thugiil",
    client: "Thugiil",
    year: "2025",
    url: "https://thugiil.in/",
    image: "/work-covers/cover-26.webp",
    excerpt:
      "Boutique ethnic wear: floral, occasion-led branding and a refined product narrative on Shopify.",
    ...S.shopifyEthnic,
  },
  {
    slug: "pinkstories",
    title: "Pink Stories",
    client: "Pink Stories",
    year: "2025",
    url: "https://pinkstories.ae/",
    image: "/work-covers/cover-27.webp",
    excerpt:
      "Boutique ethnic wear: floral, occasion-led branding and a refined product narrative on Shopify.",
    ...S.shopifyEthnic,
  },
];

export const TECH_FILTERS: ("All" | Tech)[] = ["All", "Shopify", "WordPress"];
