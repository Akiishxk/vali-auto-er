import React from "react";
import { Star, Shield, Sparkles, PhoneCall } from "lucide-react";

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-zinc-100 border-b border-zinc-200 py-6 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          <div className="flex flex-col items-center p-3 rounded-xl bg-white border border-zinc-300 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-[#84cc16] mb-2">
              <Star className="w-5 h-5 fill-[#84cc16]" />
            </div>
            <span className="text-xl font-black text-black">5.0 ★ Score</span>
            <p className="text-xs text-zinc-600 mt-1 font-medium">32 Verified Google Reviews</p>
          </div>

          <div className="flex flex-col items-center p-3 rounded-xl bg-white border border-zinc-300 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-[#84cc16] mb-2">
              <Shield className="w-5 h-5" />
            </div>
            <span className="text-xl font-black text-black">Zero Upsell</span>
            <p className="text-xs text-zinc-600 mt-1 font-medium">Transparent Service Policy</p>
          </div>

          <div className="flex flex-col items-center p-3 rounded-xl bg-white border border-zinc-300 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-[#84cc16] mb-2">
              <PhoneCall className="w-5 h-5" />
            </div>
            <span className="text-xl font-black text-black">Answers Calls 24/7</span>
            <p className="text-xs text-zinc-600 mt-1 font-medium">Calls Answered 24 Hours a Day</p>
          </div>

          <div className="flex flex-col items-center p-3 rounded-xl bg-white border border-zinc-300 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-[#84cc16] mb-2">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-xl font-black text-black">Text Mon-Fri 8-5</span>
            <p className="text-xs text-zinc-600 mt-1 font-medium">Texts Answered During Shop Hours</p>
          </div>

        </div>
      </div>
    </section>
  );
};
