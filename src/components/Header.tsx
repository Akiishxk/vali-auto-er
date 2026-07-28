import React, { useState } from "react";
import { Phone, MessageSquare, MapPin, Clock, Menu, X, Star } from "lucide-react";
import { SHOP_INFO } from "../data/shopData";
import { Logo } from "./Logo";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-black text-white shadow-2xl border-b-2 border-[#84cc16]">
      {/* Top Accent Line Bar matching Business Card */}
      <div className="h-1 bg-[#84cc16] w-full" />

      {/* Top Info Bar */}
      <div className="bg-zinc-950 border-b border-zinc-900 py-1.5 px-4 text-xs text-zinc-300">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-black bg-[#84cc16] text-black">
              <span className="w-2 h-2 rounded-full bg-black mr-1.5 animate-pulse"></span>
              Open Mon-Fri: 8 AM - 5 PM
            </span>
            <span className="hidden md:inline text-zinc-300 font-medium">
              <Clock className="w-3.5 h-3.5 inline mr-1 text-[#84cc16]" />
              {SHOP_INFO.fullAddress}
            </span>
          </div>

          {/* Prominent 24/7 Call & Text Signs */}
          <div className="flex items-center space-x-2 text-xs font-black">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded bg-zinc-900 border border-[#84cc16] text-[#84cc16] uppercase tracking-wide">
              <Phone className="w-3 h-3 mr-1 fill-[#84cc16]" />
              Answers Calls 24 Hours a Day
            </span>
            <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-white uppercase tracking-wide">
              💬 Call or Text 24/7 to Schedule
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo Branding */}
        <a href="#" className="group flex items-center space-x-2">
          <Logo variant="light" size="md" showSubtitle={true} />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-zinc-300">
          <a href="#services" className="hover:text-[#84cc16] transition-colors">
            Services
          </a>
          <a href="#reviews" className="hover:text-[#84cc16] transition-colors">
            Reviews (5.0 ★)
          </a>
          <a href="#about" className="hover:text-[#84cc16] transition-colors">
            About Dan
          </a>
          <a href="#location" className="hover:text-[#84cc16] transition-colors flex items-center">
            <MapPin className="w-3.5 h-3.5 mr-1 text-[#84cc16]" />
            Location
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#84cc16]" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black border-b border-zinc-800 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-zinc-200 font-medium hover:text-white"
          >
            Services
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-zinc-200 font-medium hover:text-white"
          >
            Customer Reviews (5.0 ★)
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-zinc-200 font-medium hover:text-white"
          >
            Why Choose Valley Auto E.R.
          </a>
          <a
            href="#location"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-zinc-200 font-medium hover:text-white"
          >
            Location & Directions
          </a>

          <div className="pt-3 border-t border-zinc-800 grid grid-cols-2 gap-2">
            <a
              href={`tel:${SHOP_INFO.phone}`}
              className="py-3 rounded-xl bg-white text-black font-black text-center flex items-center justify-center space-x-1.5 shadow"
            >
              <Phone className="w-4 h-4 fill-black" />
              <span>Call Us</span>
            </a>
            <a
              href={`sms:${SHOP_INFO.phone}`}
              className="py-3 rounded-xl bg-zinc-900 text-white font-bold text-center flex items-center justify-center space-x-1.5 border border-zinc-700"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>Text Us</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
