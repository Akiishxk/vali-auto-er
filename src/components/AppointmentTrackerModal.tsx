import React, { useState } from "react";
import { Search, Wrench, CheckCircle2, Clock, AlertCircle, X, ShieldCheck, Phone } from "lucide-react";
import { SHOP_INFO } from "../data/shopData";

interface AppointmentTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCode?: string;
}

export const AppointmentTrackerModal: React.FC<AppointmentTrackerModalProps> = ({
  isOpen,
  onClose,
  initialCode = ""
}) => {
  const [query, setQuery] = useState(initialCode || "VA-8821");
  const [loading, setLoading] = useState(false);
  const [appointment, setAppointment] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setAppointment(null);

    try {
      const response = await fetch(`/api/appointments/${encodeURIComponent(query.trim())}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "No appointment found matching that code or phone number.");
      }

      setAppointment(data);
    } catch (err: any) {
      setError(err.message || "Unable to look up status right now.");
    } finally {
      setLoading(false);
    }
  };

  const statusSteps = ["Received", "Confirmed", "Diagnostic In Progress", "Ready for Pickup", "Completed"];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-2xl p-6 shadow-2xl relative text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1.5 rounded-lg bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div>
            <span className="text-xs font-bold uppercase text-amber-400 tracking-wider">
              Valley Auto E.R. Live Status Tracker
            </span>
            <h3 className="text-xl font-bold text-white mt-0.5">
              Track Your Vehicle Repair Status
            </h3>
            <p className="text-xs text-slate-300">
              Enter your tracking code (e.g., <strong className="text-white">VA-8821</strong>) or phone number.
            </p>
          </div>

          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="e.g. VA-8821 or 2085550192"
              className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center space-x-1.5 shadow"
            >
              <Search className="w-4 h-4" />
              <span>{loading ? "Searching..." : "Track"}</span>
            </button>
          </form>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 p-3.5 rounded-xl text-xs text-red-300 flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Tracking Notice</p>
                <p>{error}</p>
                <p className="mt-1 text-slate-400 text-[11px]">
                  Sample Code for Testing: <strong className="text-amber-300">VA-8821</strong>
                </p>
              </div>
            </div>
          )}

          {appointment && (
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
              
              <div className="flex justify-between items-start border-b border-slate-800 pb-3">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Tracking Code</span>
                  <div className="text-lg font-black text-amber-400">{appointment.code}</div>
                  <div className="text-xs text-white font-semibold mt-0.5">{appointment.customerName}</div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Vehicle</span>
                  <div className="text-xs font-bold text-slate-200">{appointment.vehicle}</div>
                  <div className="text-[11px] text-amber-300">{appointment.serviceType}</div>
                </div>
              </div>

              {/* Status Timeline */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase text-slate-400">Current Status Progress</span>
                <div className="space-y-2 pt-1">
                  {statusSteps.map((step, idx) => {
                    const currentIdx = statusSteps.indexOf(appointment.status) >= 0
                      ? statusSteps.indexOf(appointment.status)
                      : 1;
                    const isPassed = idx <= currentIdx;
                    const isCurrent = idx === currentIdx;

                    return (
                      <div key={step} className="flex items-center space-x-3 text-xs">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px] ${
                            isCurrent
                              ? "bg-amber-500 text-slate-950 ring-2 ring-amber-400 animate-pulse"
                              : isPassed
                              ? "bg-emerald-500 text-slate-950"
                              : "bg-slate-800 text-slate-500"
                          }`}
                        >
                          {isPassed ? "✓" : idx + 1}
                        </div>
                        <span className={`font-semibold ${isCurrent ? "text-amber-300 font-bold" : isPassed ? "text-white" : "text-slate-500"}`}>
                          {step}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Notes */}
              {appointment.notes && (
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-xs text-slate-300">
                  <span className="font-bold text-slate-400 block text-[10px] uppercase mb-0.5">Service Notes:</span>
                  <p>"{appointment.notes}"</p>
                </div>
              )}

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Questions about this status?</span>
                <a
                  href={`tel:${SHOP_INFO.phone}`}
                  className="text-amber-400 hover:underline font-bold flex items-center"
                >
                  <Phone className="w-3 h-3 mr-1" />
                  <span>Call Dan</span>
                </a>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
