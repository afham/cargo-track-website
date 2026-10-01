// app/sitemap.ts
import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blogs";
import { SERVICE_ITEMS } from "@/lib/services-data";
import { BRANCHES_DATA } from "@/lib/branches-data";

const BASE_URL = "https://cargotrack.co"; // Replace with your exact domain
const LOCALES = ["en", "ar"] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 1. Static Core Pages
  const staticRoutes = [
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/about-us", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/network", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    {
      path: "/request-a-quote",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
  ];

  LOCALES.forEach((locale) => {
    staticRoutes.forEach(({ path, priority, changeFrequency }) => {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
      });
    });
  });

  // 2. Dynamic 12 Service Pages
  LOCALES.forEach((locale) => {
    SERVICE_ITEMS.forEach((service) => {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.85,
      });
    });
  });

  // 3. Dynamic 3 City Branch Pages (Riyadh, Jeddah, Dammam)
  LOCALES.forEach((locale) => {
    Object.keys(BRANCHES_DATA).forEach((cityKey) => {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}/network/${cityKey}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    });
  });

  // 4. Dynamic Blog Posts
  LOCALES.forEach((locale) => {
    const posts = getAllPosts(locale);
    posts.forEach((post) => {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date || new Date()),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });
  });

  return sitemapEntries;
}
