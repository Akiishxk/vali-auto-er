import React from "react";
import { Shield, HeartHandshake, PhoneCall } from "lucide-react";
import valleyAutoTechImg from "../assets/images/valley_auto_tech_1785260811792.jpg";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white text-black border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black text-white text-xs font-black mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-[#84cc16]" />
            <span>The Valley Auto E.R. Guarantee</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black">
            Meet Daniel Joetzki & Boise's Most Trusted Team
          </h2>
          <p className="mt-2 text-zinc-600 text-sm sm:text-base">
            We built Valley Auto E.R. on a simple promise: treat every customer like family with honest service, zero upsells, and clear explanations.
          </p>
        </div>

        {/* Content & Visual Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Workshop Photo */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border-2 border-black shadow-xl relative group bg-black">
              <img
                src={valleyAutoTechImg}
                alt="Dan Master Mechanic at Valley Auto E.R."
                className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-black/90 text-white backdrop-blur-md p-4 rounded-xl border border-zinc-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-white">Dan & Master Mechanics</h4>
                    <p className="text-xs text-amber-400 font-bold">Valley Auto E.R. Owners & Techs</p>
                  </div>
                  <span className="px-2.5 py-1 bg-white text-black text-xs font-black rounded">
                    5.0 ★ Rated
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="text-2xl font-black text-black leading-snug">
              "No Shadiness. No Scammers. Just Honest Auto Repair."
            </h3>

            <p className="text-zinc-700 text-sm leading-relaxed font-normal">
              Finding a trustworthy auto mechanic shouldn't feel like a gamble. When you bring your vehicle to Valley Auto E.R., you get direct, honest answers from the master technicians working on your car.
            </p>

            <p className="text-zinc-700 text-sm leading-relaxed font-normal">
              Whether you need complex engine or transmission troubleshooting, a quick A/C recharge for the Boise heat, or fresh brakes, Dan and the team walk you through the exact diagnostic findings with zero technical jargon and zero high-pressure sales tactics.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1">
                <div className="font-bold text-black flex items-center space-x-1.5">
                  <Shield className="w-4 h-4 text-black" />
                  <span>Transparent Explanations</span>
                </div>
                <p className="text-zinc-600">Clear breakdowns of what your car needs with no surprises.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1">
                <div className="font-bold text-black flex items-center space-x-1.5">
                  <PhoneCall className="w-4 h-4 text-black" />
                  <span>24/7 Call Answering</span>
                </div>
                <p className="text-zinc-600">Calls answered 24/7. Texts answered during shop hours (Mon-Fri 8 AM - 5 PM).</p>
              </div>
            </div>

          </div>

        </div>

        {/* Comparison Table */}
        <div className="bg-zinc-50 rounded-2xl p-6 sm:p-8 border-2 border-zinc-200 shadow-md text-black">
          <h3 className="text-xl font-black text-center text-black mb-6">
            How We Compare to Other Boise Repair Shops
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-zinc-300 text-zinc-700 font-bold">
                  <th className="py-3 px-4">Feature / Policy</th>
                  <th className="py-3 px-4 text-black bg-zinc-200 rounded-t-lg font-black text-center">
                    Valley Auto E.R.
                  </th>
                  <th className="py-3 px-4 text-zinc-600 text-center">Boise Dealerships</th>
                  <th className="py-3 px-4 text-zinc-600 text-center">National Auto Chains</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 text-zinc-800 font-medium">
                <tr>
                  <td className="py-3.5 px-4 font-bold text-black">Google Rating</td>
                  <td className="py-3.5 px-4 text-center bg-zinc-200 font-black text-black">5.0 ★ Perfect</td>
                  <td className="py-3.5 px-4 text-center">3.8 - 4.2 ★</td>
                  <td className="py-3.5 px-4 text-center">3.5 - 4.0 ★</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-black">High-Pressure Upsells</td>
                  <td className="py-3.5 px-4 text-center bg-zinc-200 text-black font-black">Never (Zero)</td>
                  <td className="py-3.5 px-4 text-center text-zinc-600">Frequent</td>
                  <td className="py-3.5 px-4 text-center text-zinc-600">High Commission Push</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-black">Direct Access to Master Tech</td>
                  <td className="py-3.5 px-4 text-center bg-zinc-200 text-black font-black">Always</td>
                  <td className="py-3.5 px-4 text-center text-zinc-500">Service Advisor Only</td>
                  <td className="py-3.5 px-4 text-center text-zinc-500">Desk Staff Only</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-black">24/7 Phone Answering</td>
                  <td className="py-3.5 px-4 text-center bg-zinc-200 text-black font-black rounded-b-lg">Yes (Calls 24/7 • Texts Mon-Fri)</td>
                  <td className="py-3.5 px-4 text-center text-zinc-500">Closed after 5 PM</td>
                  <td className="py-3.5 px-4 text-center text-zinc-500">Voicemail Only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
