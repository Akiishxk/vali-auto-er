/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { ServicesGrid } from "./components/ServicesGrid";
import { AboutSection } from "./components/AboutSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { LocationSection } from "./components/LocationSection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";
import { StickyContactBar } from "./components/StickyContactBar";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      
      {/* Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Key Trust Pillars */}
        <TrustBar />

        {/* Repair Services Catalog */}
        <ServicesGrid />

        {/* About Dan & The Valley Auto E.R. Guarantee */}
        <AboutSection />

        {/* Customer Reviews Showcase */}
        <ReviewsSection />

        {/* Location & Directions */}
        <LocationSection />

        {/* FAQ Accordion */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Quick-Contact Bar */}
      <StickyContactBar />

    </div>
  );
}
