export interface ShopInfo {
  name: string;
  tagline: string;
  rating: number;
  reviewCount: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  fullAddress: string;
  owner: string;
  email: string;
  phone: string;
  formattedPhone: string;
  plusCode: string;
  hours: {
    days: string;
    time: string;
    isOpenNow: boolean;
    afterHoursNote: string;
  };
  highlights: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  reviewerInfo: string;
  rating: number;
  date: string;
  text: string;
  tags: string[];
  ownerResponse?: string;
  verifiedLocal: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  detailedDesc: string;
  timeEstimate: string;
  popularFeatures: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "Pricing" | "Services" | "Appointments" | "Emergency";
}

export interface AppointmentData {
  id?: string;
  code?: string;
  customerName: string;
  phone: string;
  email: string;
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
  status?: string;
  estimatedCostRange?: string;
}

export interface DiagnosticState {
  year: string;
  make: string;
  model: string;
  symptoms: string;
  sound: string;
  warningLights: string[];
}

export interface DiagnosticResult {
  summary: string;
  potentialCauses: string[];
  severity: "Low" | "Moderate" | "High - Needs Attention Soon";
  recommendedAction: string;
  inspectionCostNote: string;
  mechanicTip: string;
}
