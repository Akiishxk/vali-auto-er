import React from "react";
import { Phone, MessageSquare, MapPin } from "lucide-react";
import { SHOP_INFO } from "../data/shopData";

export const StickyContactBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-t-2 border-[#84cc16] p-2 sm:py-2.5 px-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        
        {/* 24/7 Call Badge */}
        <div className="hidden lg:flex items-center space-x-2 text-[11px] font-black uppercase text-[#84cc16] bg-zinc-900 px-3 py-1 rounded-lg border border-zinc-800">
          <Phone className="w-3 h-3 fill-[#84cc16]" />
          <span>Answers Calls 24 Hours a Day • Texts Mon-Fri 8am-5pm</span>
        </div>

        <div className="w-full sm:w-auto flex-1 flex items-center justify-between gap-2">
          {/* Call Button */}
          <a
            href={`tel:${SHOP_INFO.phone}`}
            className="flex-1 py-2.5 sm:py-3 px-3 rounded-xl bg-[#84cc16] hover:bg-[#a3e635] text-black font-black text-xs sm:text-sm flex items-center justify-center space-x-1.5 shadow"
          >
            <Phone className="w-4 h-4 fill-black" />
            <span className="truncate">Call 24/7: (208) 713-9517</span>
          </a>

          {/* Text Button */}
          <a
            href={`sms:${SHOP_INFO.phone}`}
            className="flex-1 py-2.5 sm:py-3 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-black text-xs sm:text-sm flex items-center justify-center space-x-1.5 border border-zinc-700 shadow"
          >
            <MessageSquare className="w-4 h-4 text-[#84cc16]" />
            <span className="truncate">Text (Mon-Fri 8-5)</span>
          </a>

          {/* Directions Button */}
          <a
            href="#location"
            className="hidden sm:flex py-2.5 sm:py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-black text-xs sm:text-sm border border-zinc-800 items-center justify-center space-x-1.5"
          >
            <MapPin className="w-4 h-4 text-[#84cc16]" />
            <span>Directions</span>
          </a>
        </div>

      </div>
    </div>
  );
};
