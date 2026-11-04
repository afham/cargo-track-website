import React from "react";
import Image from "next/image";
interface FidiAffiliationsCardProps {
  reviewUrl: string; // Your direct Google Business Review link
  isAr?: boolean;
}

export const FidiAffiliationsCard = ({
  reviewUrl,
  isAr = false,
}: FidiAffiliationsCardProps) => {
  return (
    <a
      href={reviewUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full flex items-center justify-between max-w-[17rem] px-3 py-1.5 rounded-2xl  backdrop-blur-md bg-white/10 text-white border border-white/20  font-semibold  transition-all duration-300 hover:border-white/50 hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300 group"
    >
      <div className="flex items-center justify-between w-full gap-4">
        {/* Left Side: Google Logo & Rating Text */}
        <div className="flex items-center gap-1">
          {/* Official Google G Logo SVG */}
          <Image
            src={"/assets/affiliations-5.webp"}
            alt="Fidi-logo"
            width={32}
            height={32}
          />

          <div className="">
            <h4 className="font-heading font-bold text-white text-[12px] leading-tight">
              {isAr ? "معتمد من الاتحاد الدولي" : "FIDI Affiliated"}
            </h4>
            <div className="items-center gap-1.5 mt-0.5 text-[8px] text-gray-200 font-medium hidden min-[360px]:flex ">
              {isAr ? "أعلى معايير الجودة العالمية" : "Global Quality Standard"}
            </div>
          </div>
        </div>

        {/* Right Side: Total Reviews & Action Arrow */}
        <div className="text-end hidden sm:block">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[8px] font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            {isAr ? "معتمد" : "Certified"}
          </span>
        </div>
      </div>
    </a>
  );
};
