"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { memo, useState } from "react";
const INITIAL_FORM_STATE = {
  name: "",
  service: "",
  email: "",
  phone: "",
  origin: "",
  destination: "",
  message: "",
};

export const QuoteForm = memo(() => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setIsSuccess(true);
      setFormData(INITIAL_FORM_STATE);

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="quote-form"
      className="w-full lg:max-w-[26rem] lg:min-w-[26rem] pt-8 lg:pt-0 mb-8 lg:mb-0 scroll-mt-24"
    >
      <div className="backdrop-blur-md bg-slate-900/60 lg:bg-slate-900/40 border border-white/20 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)] text-white relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/30 rounded-full blur-2xl pointer-events-none" />

        <div className="mb-5 relative z-10">
          <h2 className="font-heading font-extrabold text-[1.5rem] tracking-tight text-white">
            Request a Quote
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Get a competitive rate for your logistics needs in minutes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="space-y-1">
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <input
                id="name"
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name *"
                className="w-full bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-300/70 outline-none focus:bg-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-md"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="service" className="sr-only">
                Select Service
              </label>
              <select
                id="service"
                required
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white outline-none focus:bg-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-md appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnPg==')] bg-no-repeat bg-[position:calc(100%-0.8rem)_center]"
              >
                <option
                  value=""
                  disabled
                  className="bg-slate-900 text-slate-300"
                >
                  Select Service *
                </option>
                <option
                  value="Moving and relocation services"
                  className="bg-slate-900 text-white"
                >
                  Moving & Relocation
                </option>
                <option
                  value="Customs Clearance"
                  className="bg-slate-900 text-white"
                >
                  Customs Clearance
                </option>
                <option
                  value="Freight Forwarding"
                  className="bg-slate-900 text-white"
                >
                  Freight Forwarding
                </option>
                <option
                  value="Transportation"
                  className="bg-slate-900 text-white"
                >
                  Transportation
                </option>
                <option value="Warehousing" className="bg-slate-900 text-white">
                  Warehousing
                </option>
                <option
                  value="Import & Export"
                  className="bg-slate-900 text-white"
                >
                  Import & Export
                </option>
                <option value="Other" className="bg-slate-900 text-white">
                  Other
                </option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="space-y-1">
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                id="email"
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                className="w-full bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-300/70 outline-none focus:bg-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-md"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-300/70 outline-none focus:bg-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="space-y-1">
              <label htmlFor="origin" className="sr-only">
                Origin
              </label>
              <input
                id="origin"
                type="text"
                name="origin"
                value={formData.origin}
                onChange={handleChange}
                placeholder="Origin (e.g. Mumbai)"
                className="w-full bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-300/70 outline-none focus:bg-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-md"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="destination" className="sr-only">
                Destination
              </label>
              <input
                id="destination"
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="Destination (e.g. Dubai)"
                className="w-full bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-300/70 outline-none focus:bg-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-md"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="sr-only">
              Additional Details
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              maxLength={500}
              rows={3}
              placeholder="Additional shipment details (weight, dimensions, cargo type)..."
              className="w-full bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-300/70 outline-none focus:bg-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all resize-none backdrop-blur-md"
            />
          </div>

          {errorMessage && (
            <div
              role="alert"
              className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-lg p-2.5"
            >
              {errorMessage}
            </div>
          )}

          <button
            disabled={isSubmitting || isSuccess}
            type="submit"
            className={`group w-full py-3 rounded-xl font-bold text-[15px] flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${
              isSuccess
                ? "bg-emerald-500 text-white shadow-emerald-500/30"
                : "bg-primary text-white hover:bg-blue-600 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0"
            } ${isSubmitting ? "opacity-80 cursor-wait" : ""}`}
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : isSuccess ? (
              <>
                <CheckCircle2 className="w-5 h-5" />
                Quote Request Sent!
              </>
            ) : (
              <>
                Request Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
});
