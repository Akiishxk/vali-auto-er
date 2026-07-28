import React from "react";
import { Star, Phone, MapPin, Clock, MessageSquare, Mail } from "lucide-react";
import { SHOP_INFO } from "../data/shopData";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-zinc-300 text-xs pt-12 pb-24 border-t-2 border-[#84cc16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <Logo variant="light" size="md" showSubtitle={true} />
            <p className="text-zinc-400 leading-relaxed font-medium pt-1">
              Boise & Garden City's premier 5.0-star rated auto repair facility. Providing honest, fast, transparent diagnostics and repair with zero high-pressure upsells.
            </p>
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-white font-bold text-[11px]">
              <Star className="w-3.5 h-3.5 fill-[#84cc16] text-[#84cc16]" />
              <span>5.0 Stars • 32 Verified Reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider text-[#84cc16]">Quick Actions</h4>
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href={`tel:${SHOP_INFO.phone}`}
                  className="hover:text-[#84cc16] transition-colors text-white font-bold flex items-center space-x-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#84cc16]" />
                  <span>Call Us ({SHOP_INFO.formattedPhone})</span>
                </a>
              </li>
              <li>
                <a
                  href={`sms:${SHOP_INFO.phone}`}
                  className="hover:text-[#84cc16] transition-colors text-white font-bold flex items-center space-x-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#84cc16]" />
                  <span>Text Us Now</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#84cc16] transition-colors">
                  Explore Repair Services
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#84cc16] transition-colors">
                  Read Customer Reviews
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#84cc16] transition-colors">
                  Get Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider text-[#84cc16]">Expertise</h4>
            <ul className="space-y-1.5 text-zinc-400 font-medium">
              <li>Engine & Transmission Diagnostics</li>
              <li>A/C System Repair & Recharge</li>
              <li>Brake Pads, Rotors & ABS Service</li>
              <li>Electrical & Battery Diagnostics</li>
              <li>Factory Scheduled Maintenance</li>
              <li>Suspension, Shocks & Steering</li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider text-[#84cc16]">Visit Us</h4>
            <div className="space-y-2 text-zinc-300 font-medium">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#84cc16] flex-shrink-0 mt-0.5" />
                <span>{SHOP_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#84cc16] flex-shrink-0" />
                <a href={`tel:${SHOP_INFO.phone}`} className="hover:underline font-bold text-white">
                  {SHOP_INFO.formattedPhone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#84cc16] flex-shrink-0" />
                <a href={`mailto:${SHOP_INFO.email}`} className="hover:underline font-bold text-white">
                  {SHOP_INFO.email}
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-[#84cc16] flex-shrink-0 mt-0.5" />
                <div>
                  <div>Mon – Fri: 8:00 AM – 5:00 PM</div>
                  <div className="text-[11px] text-[#84cc16] font-bold mt-1 uppercase">
                    📞 Calls Answered 24/7 • 💬 Texts Mon-Fri 8am-5pm
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-zinc-400 text-[11px] gap-2 font-medium">
          <p>© {new Date().getFullYear()} Valley Auto E.R. All rights reserved.</p>
          <p className="flex items-center">
            Daniel Joetzki, Owner • 4848 Fenton Street, Garden City, ID 83714
          </p>
        </div>

      </div>
    </footer>
  );
};
