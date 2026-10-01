// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://cargotrack.co"; // Replace with your exact production domain

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/", // Protects backend API endpoints like /api/mail from crawlers
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
