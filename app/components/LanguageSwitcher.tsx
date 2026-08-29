"use client";

import React, { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  scrolled?: boolean;
}

export const LanguageSwitcher = ({
  scrolled = false,
}: LanguageSwitcherProps) => {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={toggleLanguage}
      disabled={isPending}
      aria-label={t("aria.switchLanguage")}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 border ${
        scrolled
          ? "border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-primary"
          : "border-white/20 text-white hover:bg-white/10"
      } ${isPending ? "opacity-60 cursor-wait" : ""}`}
    >
      <Globe size={14} className="shrink-0" />
      <span>{locale === "en" ? "العربية" : "English"}</span>
    </button>
  );
};
