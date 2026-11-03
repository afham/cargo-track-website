import React from "react";

interface GoogleReviewCardProps {
  reviewUrl: string; // Your direct Google Business Review link
  isAr?: boolean;
}

export const GoogleReviewCard = ({
  reviewUrl,
  isAr = false,
}: GoogleReviewCardProps) => {
  return (
    <a
      href={reviewUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full max-w-[17rem] px-3.5 py-2 rounded-2xl  backdrop-blur-md bg-white/10 text-white border border-white/20  font-semibold text-[15px] transition-all duration-300 hover:border-white/50 hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300 group"
    >
      <div className="flex items-center justify-between gap-4">
        {/* Left Side: Google Logo & Rating Text */}
        <div className="flex items-center gap-3">
          {/* Official Google G Logo SVG */}
          <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-sm">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.19v3.15C3.17 21.36 7.24 24 12 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.19C.43 8.12 0 9.87 0 11.75s.43 3.63 1.19 5.17l4.09-2.65z"
              />
              <path
                fill="#EA4335"
                d="M12 4.75c1.76 0 3.34.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.24 0 3.17 2.64 1.19 6.58l4.09 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
              />
            </svg>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white text-[12px] leading-tight">
              {isAr ? "تقييمات العملاء على جوجل" : "Google Rating"}
            </h4>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="font-bold text-amber-500 text-[11px]">4.9</span>
              {/* Star Ratings */}
              <div className="flex items-center text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3 h-3 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Total Reviews & Action Arrow */}
        <div className="text-end">
          <span className="block text-[11px] whitespace-pre text-gray-100 font-medium">
            270+ {isAr ? "تقييم" : "Reviews"}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] text-primary font-bold group-hover:underline">
            {isAr ? "اقرأ الكل" : "View All"}
          </span>
        </div>
      </div>
    </a>
  );
};
