// import type { Metadata } from "next";
// import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
// import "./globals.css";

// const plusJakarta = Plus_Jakarta_Sans({
//   variable: "--font-sans",
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["400", "500", "600", "700"],
// });

// export const metadata: Metadata = {
//   title: "CargoTrack | Global Logistics & Cargo Solutions",
//   description:
//     "Reliable tracking, freight forwarding, and supply chain solutions worldwide.",
//   icons: {
//     icon: "/assets/cargo-track-icon.png",
//     shortcut: "/assets/cargo-track-icon.png",
//     apple: "/assets/cargo-track-icon.png",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
//       className={`${plusJakarta.variable}  h-full antialiased font-sans`}
//     >
//       <body className="min-h-full flex flex-col">{children}</body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cairo } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
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

  return {
    title: t("title"),
    description: t("description"),
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
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
