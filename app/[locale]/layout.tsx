import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cairo } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/app/modules/Navbar";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const cairo = Cairo({
  variable: "--font-arabic",
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const baseUrl = "https://cargotrack.co"; // Replace with your exact domain if different
  const isAr = locale === "ar";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t("title"),
      template: isAr ? "%s | كارغو تراك" : "%s | Cargo Track",
    },
    description: t("description"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ar: "/ar",
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: isAr ? "ar_SA" : "en_US",
      url: `${baseUrl}/${locale}`,
      siteName: isAr ? "كارغو تراك" : "Cargo Track Relocations",
      images: [
        {
          url: "/assets/cargo-track-icon.png",
          width: 1200,
          height: 630,
          alt: "Cargo Track Relocations",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/assets/cargo-track-icon.png"],
    },
    icons: {
      icon: "/assets/cargo-track-icon.png",
      shortcut: "/assets/cargo-track-icon.png",
      apple: "/assets/cargo-track-icon.png",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const isRTL = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isRTL ? "rtl" : "ltr"}
      className={`${plusJakarta.variable} ${cairo.variable} ${
        isRTL ? "font-arabic" : "font-sans"
      } h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      </body>
    </html>
  );
}
