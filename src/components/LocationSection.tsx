import React, { useState } from "react";
import { MapPin, Phone, Clock, Navigation, Copy, Check, ExternalLink } from "lucide-react";
import { SHOP_INFO } from "../data/shopData";

export const LocationSection: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedPlusCode, setCopiedPlusCode] = useState(false);

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SHOP_INFO.fullAddress)}`;
  const appleMapsUrl = `https://maps.apple.com/?address=${encodeURIComponent(SHOP_INFO.fullAddress)}`;

  const handleCopy = (text: string, isPlusCode: boolean = false) => {
    navigator.clipboard.writeText(text);
    if (isPlusCode) {
      setCopiedPlusCode(true);
      setTimeout(() => setCopiedPlusCode(false), 2000);
    } else {
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    }
  };

  return (
    <section id="location" className="py-16 bg-zinc-50 text-black border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black text-white text-xs font-black mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#84cc16]" />
            <span>Convenient Garden City & Boise Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black">
            Visit Valley Auto E.R.
          </h2>
          <p className="mt-2 text-zinc-600 text-sm sm:text-base">
            Located at 4848 Fenton Street in Garden City - Idaho 83714 (near Chinden Blvd and Glenwood St).
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact & Hours Info Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border-2 border-zinc-200 shadow-lg flex flex-col justify-between space-y-6 text-black">
            
            <div className="space-y-6">
              
              {/* Address Card */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-black font-black text-xs uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Shop Address</span>
                </div>
                <div className="text-lg font-black text-black">
                  {SHOP_INFO.fullAddress}
                </div>
                <div className="flex items-center space-x-2 pt-1">
                  <button
                    onClick={() => handleCopy(SHOP_INFO.fullAddress)}
                    className="text-xs text-black font-bold hover:bg-zinc-200 inline-flex items-center space-x-1 border border-zinc-300 rounded px-2.5 py-1 bg-zinc-100 transition-colors"
                  >
                    {copiedAddress ? <Check className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedAddress ? "Address Copied!" : "Copy Address"}</span>
                  </button>

                  <button
                    onClick={() => handleCopy(SHOP_INFO.plusCode, true)}
                    className="text-xs text-black font-bold hover:bg-zinc-200 inline-flex items-center space-x-1 border border-zinc-300 rounded px-2.5 py-1 bg-zinc-100 transition-colors"
                  >
                    {copiedPlusCode ? <Check className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPlusCode ? "Plus Code Copied!" : SHOP_INFO.plusCode}</span>
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div className="space-y-2 border-t border-zinc-200 pt-4">
                <div className="flex items-center space-x-2 text-black font-black text-xs uppercase tracking-wider">
                  <Phone className="w-4 h-4" />
                  <span>Phone Number</span>
                </div>
                <div>
                  <a
                    href={`tel:${SHOP_INFO.phone}`}
                    className="text-2xl font-black text-black hover:underline transition-colors"
                  >
                    {SHOP_INFO.formattedPhone}
                  </a>
                  <p className="text-xs text-zinc-600 font-medium mt-0.5">
                    Call or text anytime for service inquiries or guidance.
                  </p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="space-y-2 border-t border-zinc-200 pt-4">
                <div className="flex items-center space-x-2 text-black font-black text-xs uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>Hours of Operation</span>
                </div>
                <div className="space-y-1 text-sm text-zinc-800">
                  <div className="flex justify-between font-bold">
                    <span>Monday – Friday:</span>
                    <span className="text-black">8:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between text-zinc-500 font-medium">
                    <span>Saturday – Sunday:</span>
                    <span>Closed (Emergency Calls Monitored)</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Navigation Buttons */}
            <div className="pt-4 border-t border-zinc-200 grid grid-cols-2 gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="py-3 rounded-xl bg-[#84cc16] hover:bg-[#a3e635] text-black font-black text-xs flex items-center justify-center space-x-1.5 shadow"
              >
                <Navigation className="w-4 h-4 fill-black" />
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>

              <a
                href={appleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-black font-black text-xs flex items-center justify-center space-x-1.5 border border-black"
              >
                <Navigation className="w-4 h-4 text-black" />
                <span>Apple Maps</span>
              </a>
            </div>

          </div>

          {/* Right Column: Live Interactive Google Map Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl border-2 border-zinc-200 shadow-lg overflow-hidden relative flex flex-col justify-between min-h-[420px]">
            
            {/* Top Bar on Map */}
            <div className="p-3 bg-black text-white flex items-center justify-between z-10 border-b border-zinc-800">
              <div className="text-xs font-black text-white flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#84cc16]" />
                <span>Valley Auto E.R. • 4848 Fenton Street, Garden City, ID 83714</span>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-[#84cc16] hover:bg-[#a3e635] text-black text-[11px] font-black px-2.5 py-1 rounded transition-colors inline-flex items-center space-x-1"
              >
                <span>Open Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Live Google Maps Iframe */}
            <div className="w-full h-full min-h-[380px] bg-zinc-100 relative">
              <iframe
                title="Valley Auto E.R. Google Maps Location"
                src="https://maps.google.com/maps?q=4848+Fenton+Street,+Garden+City,+ID+83714&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[380px] border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Bottom Location Note */}
            <div className="p-3 bg-zinc-50 border-t border-zinc-200 flex flex-wrap items-center justify-between text-xs text-zinc-800 font-semibold gap-2">
              <span className="flex items-center">
                <Navigation className="w-3.5 h-3.5 text-[#84cc16] mr-1" />
                Conveniently located near Chinden Blvd & Glenwood St
              </span>
              <div className="flex items-center space-x-3">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-black hover:text-[#84cc16] font-black underline underline-offset-2 flex items-center space-x-1"
                >
                  <span>Directions (Google Maps)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={appleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-black hover:text-[#84cc16] font-black underline underline-offset-2 flex items-center space-x-1"
                >
                  <span>Apple Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
