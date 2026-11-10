// lib/services-data.ts
export const SERVICE_ITEMS = [
  {
    slug: "home-shifting-services",
    index: 0,
    image: "/assets/photos2.webp",
  },
  {
    slug: "warehouse-and-storage-services",
    index: 1,
    image: "/assets/photos17.webp",
  },
  {
    slug: "office-relocation",
    index: 2,
    image: "/assets/photos7.webp",
  },
  {
    slug: "vehicle-relocation",
    index: 3,
    image: "/assets/photos5.webp",
  },
  { slug: "industrial-packing", index: 4, image: "/assets/photos6.webp" },
  { slug: "freight-forwarding", index: 5, image: "/assets/photos15.webp" },

  { slug: "transportation", index: 6, image: "/assets/photos9.webp" },
  { slug: "artwork-moving", index: 7, image: "/assets/photos18.webp" },
  { slug: "pet-relocation", index: 8, image: "/assets/photos2.webp" },

  { slug: "piligrim-moving", index: 9, image: "/assets/photos14.webp" },
  { slug: "mobility-services", index: 10, image: "/assets/photos13.webp" },
  { slug: "deep-cleaning-services", index: 11, image: "/assets/photos12.webp" },
] as const;

export type ServiceSlug = (typeof SERVICE_ITEMS)[number]["slug"];

export function getServiceBySlug(slug: string) {
  return SERVICE_ITEMS.find((s) => s.slug === slug);
}
