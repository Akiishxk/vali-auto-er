import React, { useState, useEffect } from "react";
import { Calendar, Clock, Car, Phone, User, Mail, FileText, CheckCircle, Copy, Check, X, ShieldCheck, AlertCircle } from "lucide-react";
import { SHOP_INFO, SERVICES_DATA } from "../data/shopData";

interface AppointmentBookingProps {
  isOpen: boolean;
  onClose: () => void;
  preFillVehicle?: string;
  preFillService?: string;
  preFillNotes?: string;
  onAppointmentCreated: (code: string) => void;
}

export const AppointmentBooking: React.FC<AppointmentBookingProps> = ({
  isOpen,
  onClose,
  preFillVehicle = "",
  preFillService = "",
  preFillNotes = "",
  onAppointmentCreated
}) => {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [vehicle, setVehicle] = useState(preFillVehicle || "2018 Toyota Tacoma");
  const [serviceType, setServiceType] = useState(preFillService || "Engine Diagnostics");
  const [preferredDate, setPreferredDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  });
  const [preferredTime, setPreferredTime] = useState("09:00 AM");
  const [notes, setNotes] = useState(preFillNotes || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [createdAppointmentCode, setCreatedAppointmentCode] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    if (preFillVehicle) setVehicle(preFillVehicle);
    if (preFillService) setServiceType(preFillService);
    if (preFillNotes) setNotes(preFillNotes);
  }, [preFillVehicle, preFillService, preFillNotes]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName,
          phone,
          email,
          vehicle,
          serviceType,
          preferredDate,
          preferredTime,
          notes
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to schedule appointment.");
      }

      setCreatedAppointmentCode(data.appointment.code);
      onAppointmentCreated(data.appointment.code);
    } catch (err: any) {
      setError(err.message || "Error submitting request. Please call (208) 713-9517.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopyCode = () => {
    if (createdAppointmentCode) {
      navigator.clipboard.writeText(createdAppointmentCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-2xl p-6 sm:p-8 shadow-2xl relative my-8 text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800/60"
        >
          <X className="w-5 h-5" />
        </button>

        {createdAppointmentCode ? (
          /* Confirmation Screen */
          <div className="text-center space-y-6 py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                Request Confirmed
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                Your Service Request is Received!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto">
                Thank you, <strong className="text-white">{customerName}</strong>. Dan or a member of our Boise team will review your appointment request and contact you at <strong className="text-amber-300">{phone}</strong> to finalize details.
              </p>
            </div>

            {/* Confirmation Code Card */}
            <div className="bg-slate-950 p-6 rounded-2xl border border-amber-500/30 max-w-sm mx-auto space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Your Unique Tracking Code
              </span>
              <div className="flex items-center justify-center space-x-3 text-3xl font-black text-amber-400 tracking-wider">
                <span>{createdAppointmentCode}</span>
                <button
                  onClick={handleCopyCode}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs"
                  title="Copy Code"
                >
                  {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-[11px] text-slate-400">
                Keep this code to check your vehicle's repair status anytime online.
              </p>
            </div>

            {/* Shop Address & Direct Contact */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1">
              <p className="font-bold text-amber-300">Valley Auto E.R. Location:</p>
              <p>{SHOP_INFO.fullAddress}</p>
              <p className="text-slate-400">Need immediate help? Call Dan directly at {SHOP_INFO.formattedPhone}</p>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow"
            >
              Done / Return to Website
            </button>
          </div>
        ) : (
          /* Form Screen */
          <div className="space-y-6">
            
            {/* Form Header */}
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-wider mb-2">
                <span className="px-2.5 py-1 rounded bg-[#84cc16] text-black flex items-center">
                  <Phone className="w-3.5 h-3.5 mr-1 fill-black" />
                  Answers Calls 24 Hours a Day
                </span>
                <span className="px-2.5 py-1 rounded bg-slate-800 text-[#84cc16] border border-slate-700 flex items-center">
                  <Calendar className="w-3.5 h-3.5 mr-1" />
                  Book Any Time
                </span>
              </div>
              <h3 className="text-2xl font-black text-white mt-1">
                Schedule Service or Request an Estimate
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                100% Honest pricing. Zero high-pressure upsells. Book online 24/7 or call Dan at (208) 713-9517 anytime.
              </p>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 p-3.5 rounded-xl text-xs text-red-300 flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Customer Contact Info */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={customerName}
                      onChange={e => setCustomerName(e.target.value)}
                      placeholder="e.g. Mark Moore"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                    Phone Number (for SMS updates) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="(208) 555-0192"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Email & Vehicle */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                    Vehicle Year, Make & Model *
                  </label>
                  <div className="relative">
                    <Car className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={vehicle}
                      onChange={e => setVehicle(e.target.value)}
                      placeholder="e.g. 2018 Toyota Tacoma"
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Service Category */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                  Required Service / Diagnostic *
                </label>
                <select
                  value={serviceType}
                  onChange={e => setServiceType(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  required
                >
                  <option value="Engine Diagnostics">Engine Diagnostics & Computer Telemetry ($89 scan)</option>
                  <option value="Engine & Transmission Diagnostics">Engine & Transmission Diagnostics</option>
                  <option value="A/C Service & Recharge">A/C & Climate Control Repair / Recharge</option>
                  <option value="Brake Service">Brake Inspection, Pads & Rotors</option>
                  <option value="Scheduled Maintenance">Scheduled Oil Service & Maintenance</option>
                  <option value="Electrical & Battery">Electrical, Starter & Battery Repair</option>
                  <option value="Steering & Suspension">Steering, Suspension & Shocks</option>
                  <option value="General Safety Inspection">General Pre-Purchase or Safety Inspection</option>
                </select>
              </div>

              {/* Date & Time Picker */}
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                    Preferred Service Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={e => setPreferredDate(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                    Preferred Time Window
                  </label>
                  <select
                    value={preferredTime}
                    onChange={e => setPreferredTime(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="08:00 AM">08:00 AM (Early Drop-off)</option>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="04:00 PM">04:00 PM (Late Drop-off)</option>
                  </select>
                </div>
              </div>

              {/* Special Notes / Issue details */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                  Issue Description or Special Notes
                </label>
                <textarea
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  rows={3}
                  placeholder="Describe what you are experiencing with your vehicle..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-amber-400 placeholder-slate-500"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-amber-600 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-bold text-base shadow-xl flex items-center justify-center space-x-2 transition-all disabled:opacity-50"
              >
                {loading ? (
                  <span>Submitting Request...</span>
                ) : (
                  <>
                    <ShieldCheck className="w-5 h-5" />
                    <span>Submit Service Booking Request</span>
                  </>
                )}
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
