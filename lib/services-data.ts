// lib/services-data.ts
export const SERVICE_ITEMS = [
  { slug: "moving-relocation", index: 0, image: "/assets/photos4.webp" },
  { slug: "customs-clearance", index: 1, image: "/assets/photos5.webp" },
  { slug: "freight-forwarding", index: 2, image: "/assets/photos6.webp" },
  { slug: "transportation", index: 3, image: "/assets/photos18.webp" },
  { slug: "warehousing-storage", index: 4, image: "/assets/photos4.webp" },
  { slug: "import-export", index: 5, image: "/assets/photos17.webp" },
  { slug: "office-commercial-moving", index: 6, image: "/assets/photos6.webp" },
  {
    slug: "furniture-packing-crating",
    index: 7,
    image: "/assets/photos7.webp",
  },
  { slug: "vehicle-shipping", index: 8, image: "/assets/photos15.webp" },
  { slug: "door-to-door-cargo", index: 9, image: "/assets/photos14.webp" },
  { slug: "pet-relocation", index: 10, image: "/assets/photos13.webp" },
  { slug: "transit-insurance", index: 11, image: "/assets/photos12.webp" },
] as const;

export type ServiceSlug = (typeof SERVICE_ITEMS)[number]["slug"];

export function getServiceBySlug(slug: string) {
  return SERVICE_ITEMS.find((s) => s.slug === slug);
}
