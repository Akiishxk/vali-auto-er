import React from "react";
import { Star, Phone, MessageSquare, MapPin, Clock, CheckCircle } from "lucide-react";
import { SHOP_INFO } from "../data/shopData";
import { Logo } from "./Logo";

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-white text-black overflow-hidden pt-8 pb-16 lg:py-20 border-b border-zinc-200">
      {/* Background Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000000 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Google Rating Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black text-white text-xs sm:text-sm font-bold shadow-md">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#84cc16] text-[#84cc16]" />
                ))}
              </div>
              <span className="font-black text-[#84cc16]">5.0 Star Score</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-200 font-medium">32 Verified Reviews</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-black leading-tight">
              Valley Auto E.R. <br />
              <span className="text-zinc-800">Boise & Garden City Auto Repair.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-zinc-700 leading-relaxed max-w-2xl font-normal">
              At <strong className="text-black font-bold">{SHOP_INFO.name}</strong>, owner <strong className="text-black font-extrabold">{SHOP_INFO.owner}</strong> and our master technician team deliver honest, fast, transparent repairs on engines, transmissions, A/C systems, brakes, and electrical with zero high-pressure upsells.
            </p>

            {/* CALL US & TEXT US Buttons (FRONT & CENTER with Lime Green Accent) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={`tel:${SHOP_INFO.phone}`}
                className="px-8 py-4 rounded-2xl bg-[#84cc16] hover:bg-[#a3e635] text-black font-black text-base sm:text-lg shadow-xl flex items-center justify-center space-x-2.5 transition-all transform hover:-translate-y-0.5 active:scale-95 text-center"
              >
                <Phone className="w-5 h-5 fill-black" />
                <span>Call Us (208) 713-9517</span>
              </a>

              <a
                href={`sms:${SHOP_INFO.phone}`}
                className="px-8 py-4 rounded-2xl bg-black hover:bg-zinc-900 text-white font-black text-base sm:text-lg border-2 border-black flex items-center justify-center space-x-2.5 transition-all transform hover:-translate-y-0.5 active:scale-95 text-center shadow-lg"
              >
                <MessageSquare className="w-5 h-5 text-[#84cc16]" />
                <span>Text Us</span>
              </a>
            </div>

            {/* Prominent 24/7 Signs */}
            <div className="bg-black text-white p-3.5 rounded-2xl border-2 border-[#84cc16] shadow-xl flex flex-wrap items-center justify-around gap-3 text-center my-3">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-[#84cc16] text-black flex items-center justify-center font-black flex-shrink-0">
                  <Phone className="w-4 h-4 fill-black text-black" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-black uppercase text-[#84cc16] tracking-wide">
                    Answers Calls 24 Hours a Day
                  </div>
                  <div className="text-[11px] text-zinc-300 font-medium">
                    Call (208) 713-9517 day or night
                  </div>
                </div>
              </div>

              <div className="hidden sm:block text-zinc-700 font-black">|</div>

              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-black flex-shrink-0 text-sm">
                  📅
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-black uppercase text-white tracking-wide">
                    Book Any Time
                  </div>
                  <div className="text-[11px] text-zinc-300 font-medium">
                    Schedule online 24/7/365
                  </div>
                </div>
              </div>
            </div>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-zinc-200 text-sm text-zinc-800 font-bold">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#84cc16] flex-shrink-0" />
                <span>Answers Calls 24 Hours a Day</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#84cc16] flex-shrink-0" />
                <span>Book Any Time 24/7</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#84cc16] flex-shrink-0" />
                <span>Zero High-Pressure Upsells</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#84cc16] flex-shrink-0" />
                <span>Direct Access to Dan Joetzki</span>
              </div>
            </div>

            {/* Quick Contact & Address */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-600">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-black flex-shrink-0" />
                <span className="text-zinc-900 font-semibold">{SHOP_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-black flex-shrink-0" />
                <span>{SHOP_INFO.hours.days}: {SHOP_INFO.hours.time}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual - Business Card Matching Layout */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-black bg-black p-1.5 shadow-2xl">
              
              {/* Business Card Showcase Container */}
              <div className="bg-black text-white rounded-2xl overflow-hidden border border-zinc-800">
                
                {/* Top Black Header Section with Lime Bars */}
                <div className="bg-black p-6 text-center relative border-b border-zinc-800 space-y-2">
                  <div className="h-1 bg-[#84cc16] w-full rounded-full" />
                  
                  <div className="py-2">
                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#84cc16] uppercase">
                      VALLEY AUTO E.R.
                    </h2>
                    <div className="text-xs sm:text-sm font-bold text-[#84cc16] tracking-widest uppercase mt-1">
                      DANIEL JOETZKI
                    </div>
                    <div className="text-xs font-black text-zinc-400 tracking-wider uppercase">
                      OWNER
                    </div>
                  </div>

                  <div className="h-1 bg-[#84cc16] w-full rounded-full" />
                </div>

                {/* Bottom Card Light Marble Container matching Business Card */}
                <div className="bg-zinc-100 text-black p-6 text-center space-y-4">
                  <div className="space-y-1">
                    <div className="text-base sm:text-lg font-black tracking-wide uppercase text-black">
                      4848 FENTON STREET
                    </div>
                    <div className="text-sm font-bold tracking-wider uppercase text-zinc-800">
                      GARDEN CITY - IDAHO 83714
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={`tel:${SHOP_INFO.phone}`}
                      className="text-xl sm:text-2xl font-black text-black hover:text-[#84cc16] transition-colors block"
                    >
                      PH. (208) 713-9517
                    </a>
                  </div>

                  <div className="pt-1 pb-2">
                    <a
                      href={`mailto:${SHOP_INFO.email}`}
                      className="text-xs sm:text-sm font-extrabold text-black hover:underline inline-block border-b-2 border-[#84cc16] pb-0.5"
                    >
                      {SHOP_INFO.email}
                    </a>
                  </div>

                  {/* Gear Logo at bottom of card */}
                  <div className="pt-3 border-t border-zinc-300 flex items-center justify-center space-x-2">
                    <Logo variant="dark" size="sm" />
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
