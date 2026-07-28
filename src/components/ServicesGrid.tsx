import React, { useState } from "react";
import { Wrench, Snowflake, Disc, Zap, ShieldCheck, Car, Clock, CheckCircle2, Phone, MessageSquare, X } from "lucide-react";
import { SERVICES_DATA, SHOP_INFO } from "../data/shopData";
import { ServiceCategory } from "../types";

export const ServicesGrid: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Wrench":
        return <Wrench className="w-6 h-6 text-black" />;
      case "Snowflake":
        return <Snowflake className="w-6 h-6 text-black" />;
      case "Disc":
        return <Disc className="w-6 h-6 text-black" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-black" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-black" />;
      case "Car":
        return <Car className="w-6 h-6 text-black" />;
      default:
        return <Wrench className="w-6 h-6 text-black" />;
    }
  };

  return (
    <section id="services" className="py-16 bg-zinc-50 text-black border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black text-white text-xs font-black mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Master Tech Certified Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black">
            Comprehensive Auto Repair & Diagnostics
          </h2>
          <p className="mt-2 text-zinc-600 text-sm sm:text-base">
            From complex transmission issues to ice-cold A/C recharges and brake overhauls, Dan and the team handle your vehicle with precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border-2 border-zinc-200 hover:border-black transition-all shadow-md flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Icon & Title */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-300 flex items-center justify-center shadow-inner">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-[11px] font-bold text-black bg-zinc-100 px-2.5 py-1 rounded-md border border-zinc-300 flex items-center">
                    <Clock className="w-3 h-3 mr-1 text-black" />
                    {service.timeEstimate}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-black text-black group-hover:text-zinc-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed font-medium">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Popular Features */}
                <ul className="space-y-1.5 pt-2 border-t border-zinc-100 text-xs text-zinc-800 font-semibold">
                  {service.popularFeatures.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#84cc16] flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Call & Text CTAs */}
              <div className="pt-5 mt-5 border-t border-zinc-200 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="px-3 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-xs font-bold text-black border border-zinc-300 transition-colors"
                >
                  View Details
                </button>

                <div className="flex items-center space-x-1.5">
                  <a
                    href={`tel:${SHOP_INFO.phone}`}
                    className="px-3 py-2 rounded-xl bg-black text-white hover:bg-zinc-800 font-black text-xs flex items-center space-x-1 transition-all"
                  >
                    <Phone className="w-3 h-3 fill-white" />
                    <span>Call</span>
                  </a>
                  <a
                    href={`sms:${SHOP_INFO.phone}`}
                    className="px-3 py-2 rounded-xl bg-zinc-100 text-black hover:bg-zinc-200 font-black text-xs border border-black flex items-center space-x-1 transition-all"
                  >
                    <MessageSquare className="w-3 h-3 text-black" />
                    <span>Text</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border-2 border-black w-full max-w-xl rounded-2xl p-6 shadow-2xl relative text-black">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-black p-1"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-300 flex items-center justify-center">
                {getIcon(selectedService.icon)}
              </div>
              <div>
                <h3 className="text-xl font-black text-black">{selectedService.title}</h3>
                <span className="text-xs text-zinc-600 font-bold">{selectedService.timeEstimate}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed mb-4 font-normal">
              {selectedService.detailedDesc}
            </p>

            <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-200 mb-6 space-y-2">
              <h4 className="text-xs font-black uppercase text-black">Included Procedures & Checks:</h4>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs text-zinc-800 font-semibold">
                {selectedService.popularFeatures.map((f, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-2 pt-2 border-t border-zinc-200">
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-zinc-200 text-xs font-bold text-black hover:bg-zinc-300"
              >
                Close
              </button>

              <a
                href={`tel:${SHOP_INFO.phone}`}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-black text-white font-black text-xs flex items-center justify-center space-x-1.5 shadow"
              >
                <Phone className="w-3.5 h-3.5 fill-white" />
                <span>Call Us (208) 713-9517</span>
              </a>

              <a
                href={`sms:${SHOP_INFO.phone}`}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white text-black font-black text-xs border-2 border-black flex items-center justify-center space-x-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-black" />
                <span>Text Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
