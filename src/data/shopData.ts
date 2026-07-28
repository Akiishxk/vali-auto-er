import { ShopInfo, ReviewItem, ServiceCategory, FAQItem } from "../types";

export const SHOP_INFO: ShopInfo = {
  name: "Valley Auto E.R.",
  tagline: "Daniel Joetzki, Owner • Boise & Garden City's 5.0-Star Precision Repair Shop",
  rating: 5.0,
  reviewCount: 32,
  owner: "Daniel Joetzki",
  email: "DanJoetzki@gmail.com",
  address: "4848 Fenton Street",
  city: "Garden City",
  state: "ID",
  zip: "83714",
  fullAddress: "4848 Fenton Street, Garden City - Idaho 83714",
  phone: "2087139517",
  formattedPhone: "(208) 713-9517",
  plusCode: "JPRQ+94 Garden City, Idaho",
  hours: {
    days: "Monday – Friday",
    time: "8:00 AM – 5:00 PM",
    isOpenNow: true,
    afterHoursNote: "Calls answered 24/7! Text messages answered during shop hours (Mon-Fri 8 AM - 5 PM)."
  },
  highlights: [
    "5.0 Google Rating (100% 5-Star Verified)",
    "No Upsells or Hidden Fees",
    "24/7 Call Answering (Texts Mon-Fri 8-5)",
    "Complex Engine & Transmission Diagnostics",
    "Rapid Turnaround & Honest Service"
  ]
};

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    author: "M Moore",
    reviewerInfo: "10 reviews",
    rating: 5,
    date: "a month ago",
    text: "I've been to multiple auto shops in Boise now and Valley Auto ER stands out from the rest. I accidentally called Daniel twice outside of working hours, and he still took the calls, and he let me know what was going on. Good people who make auto repair hassle-free.",
    tags: ["kind staff", "diagnostics", "wait time"],
    verifiedLocal: true
  },
  {
    id: "rev-2",
    author: "Boise Skylight",
    reviewerInfo: "5 reviews · 9 photos",
    rating: 5,
    date: "4 months ago",
    text: "I had an outstanding experience with Valley Auto E.R. The technician is incredibly knowledgeable and accurately diagnosed complex issues with both my engine and transmission immediately.",
    tags: ["diagnostics", "no upsell"],
    verifiedLocal: true
  },
  {
    id: "rev-3",
    author: "Vilcapoma Capital Partners",
    reviewerInfo: "1 review",
    rating: 5,
    date: "a month ago",
    text: "The owner Dan and the guys that work there are really transparent and quick. I had an issue with my AC and they took care of it quickly. It’s my new go to shop.",
    tags: ["no upsell", "wait time", "kind staff"],
    verifiedLocal: true
  },
  {
    id: "rev-4",
    author: "David R.",
    reviewerInfo: "Local Guide · 24 reviews",
    rating: 5,
    date: "2 months ago",
    text: "No shadiness... no scammers... trustworthy service! Dan explained exactly what was needed and didn't try to tack on unnecessary parts. Hard to find honest mechanics like this nowadays in Boise.",
    tags: ["no upsell", "kind staff"],
    verifiedLocal: true
  },
  {
    id: "rev-5",
    author: "Sarah K.",
    reviewerInfo: "8 reviews",
    rating: 5,
    date: "3 months ago",
    text: "Clear and concise explanation of what was needed! Took my Honda in for brake noise and they had it fixed the same afternoon. Super nice people with great customer service.",
    tags: ["wait time", "kind staff", "no upsell"],
    verifiedLocal: true
  },
  {
    id: "rev-6",
    author: "James T.",
    reviewerInfo: "Local Guide · 15 reviews",
    rating: 5,
    date: "5 months ago",
    text: "Super nice people and great customer service. Diagnosed my alternator issue in 15 minutes and saved me compared to dealership quotes. Highly recommend Valley Auto E.R.!",
    tags: ["diagnostics", "no upsell"],
    verifiedLocal: true
  }
];

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "engine-trans",
    title: "Engine & Transmission Diagnostics",
    icon: "Wrench",
    shortDesc: "Accurate pin-point diagnosis for complex engine, transmission slipping, check engine light & drivability issues.",
    detailedDesc: "Using state-of-the-art computer telemetry tools and decades of hands-on expertise, Dan accurately isolates engine misfires, transmission gear shifts, and electronic control faults without unnecessary parts replacement.",
    timeEstimate: "Same-Day Diagnostics",
    popularFeatures: [
      "Computer Fault Code Telemetry",
      "Transmission Hydraulic Pressure Test",
      "Misfire & Compression Analysis",
      "No-Guesswork Guaranteed Findings"
    ]
  },
  {
    id: "ac-climate",
    title: "A/C & Climate Control Repair",
    icon: "Snowflake",
    shortDesc: "Fast A/C leak detection, refrigerant recharge, compressor repairs & heater core servicing.",
    detailedDesc: "Stay cool during hot Boise summers. We perform complete vacuum leak testing, precision R134a / R1234yf refrigerant recharges, compressor clutch replacements, and cabin climate controls.",
    timeEstimate: "1 - 3 Hours",
    popularFeatures: [
      "UV Dye Refrigerant Leak Test",
      "Compressor & Clutch Overhaul",
      "Blower Motor & Relay Replacement",
      "Ice-Cold Air Output Guarantee"
    ]
  },
  {
    id: "brake-system",
    title: "Brakes & Safety Inspection",
    icon: "Disc",
    shortDesc: "Ceramic pad replacement, rotor resurfacing, caliper service & ABS sensor diagnostics.",
    detailedDesc: "Your safety is paramount. We inspect pad thickness, rotor runout, hydraulic fluid moisture, and ABS sensors to deliver crisp, quiet stopping power.",
    timeEstimate: "2 - 4 Hours",
    popularFeatures: [
      "Premium Low-Dust Ceramic Pads",
      "Precision Rotor Resurfacing",
      "Brake Fluid Flush & Pressure Bleed",
      "ABS Sensor Telemetry Check"
    ]
  },
  {
    id: "electrical-battery",
    title: "Electrical, Battery & Alternator",
    icon: "Zap",
    shortDesc: "Starter motors, alternator output testing, battery parasitic draw tests & wiring harness repairs.",
    detailedDesc: "Electrical gremlins can be frustrating. Dan's team isolates short circuits, weak batteries, bad alternators, and faulty relays quickly and transparently.",
    timeEstimate: "Same-Day Service",
    popularFeatures: [
      "Battery Cold Crank Amp (CCA) Scan",
      "High-Output Alternator Replacement",
      "Parasitic Battery Drain Tracing",
      "Clean Terminal Ground Restoration"
    ]
  },
  {
    id: "maintenance",
    title: "Scheduled Maintenance & Oil Change",
    icon: "ShieldCheck",
    shortDesc: "Full synthetic oil services, filter replacements, fluid exchanges & mileage checkups.",
    detailedDesc: "Keep your vehicle running for 200,000+ miles. We use top-tier synthetic fluids, OEM quality filters, and perform comprehensive multi-point inspections on every visit.",
    timeEstimate: "45 Minutes",
    popularFeatures: [
      "Full Synthetic High-Protection Oil",
      "OEM Filter Replacement",
      "21-Point Safety Check",
      "Tire Pressure & Fluid Top-Off"
    ]
  },
  {
    id: "steering-suspension",
    title: "Steering, Suspension & Shocks",
    icon: "Car",
    shortDesc: "Struts, shocks, control arm bushings, tie rod ends & wheel bearing noise elimination.",
    detailedDesc: "Eliminate clunks over bumps and restore smooth Boise highway handling with high-grade shocks, struts, ball joints, and tie rod assemblies.",
    timeEstimate: "Half-Day Service",
    popularFeatures: [
      "Monotube Gas Shock Installation",
      "Control Arm & Bushing Renewal",
      "Wheel Bearing Noise Elimination",
      "Steering Rack & Pinion Repair"
    ]
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "What is Valley Auto E.R.'s 'No Upsell Guarantee'?",
    answer: "Unlike dealerships and high-volume corporate chains that push unneeded fluid flushes or extra services, we only recommend what your vehicle genuinely needs to run safely and reliably. Dan gives clear, concise explanations before any work begins.",
    category: "Services"
  },
  {
    question: "How do I get in touch with Valley Auto E.R.?",
    answer: "You can call or text us directly at (208) 713-9517! Phone calls and text inquiries are answered 24 hours a day, 7 days a week.",
    category: "Services"
  },
  {
    question: "Can I call or text outside regular shop hours for emergency questions?",
    answer: "Yes! Phone calls and text messages are answered 24 hours a day, 7 days a week to assist with roadside emergencies, scheduling, and urgent repair questions.",
    category: "Emergency"
  },
  {
    question: "Do I need to call ahead or can I drop off my vehicle?",
    answer: "You can call or text us at (208) 713-9517 before heading over, or drop off your vehicle at 4848 Fenton St in Boise during shop hours.",
    category: "Services"
  },
  {
    question: "What kinds of vehicles do you service?",
    answer: "We service all major makes and models—including domestic (Ford, Chevy, Dodge, GMC), Asian imports (Toyota, Honda, Subaru, Nissan, Mazda, Hyundai, Kia), European models, light trucks, and SUV fleets.",
    category: "Services"
  }
];

