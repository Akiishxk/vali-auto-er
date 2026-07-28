import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import rateLimit from "express-rate-limit";

interface Appointment {
  id: string;
  code: string;
  customerName: string;
  phone: string;
  email: string;
  vehicle: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
  status: "Received" | "Confirmed" | "Diagnostic In Progress" | "Ready for Pickup" | "Completed";
  createdAt: string;
  estimatedCostRange?: string;
}

// In-memory appointments store pre-seeded with sample data
const appointmentsStore: Appointment[] = [
  {
    id: "apt-1",
    code: "VA-8821",
    customerName: "Mark Moore",
    phone: "(208) 555-0192",
    email: "mmoore@example.com",
    vehicle: "2018 Toyota Tacoma TRD",
    serviceType: "Engine Diagnostics",
    preferredDate: "2026-07-29",
    preferredTime: "09:00 AM",
    notes: "Slight hesitation during cold acceleration, check engine light came on briefly.",
    status: "Confirmed",
    createdAt: new Date().toISOString(),
    estimatedCostRange: "$89 - $120"
  }
];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "10kb" })); // Body size limit to prevent payload attacks

  // Security & Rate Limiting Middleware
  const globalApiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes window
    max: 100, // max 100 requests per 15 minutes per IP
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: "Too many requests from this IP address, please try again in a few minutes." }
  });

  const strictAppointmentLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour window
    max: 10, // max 10 submissions per hour per IP
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: "Too many appointment requests submitted. Please call or text Dan directly at (208) 713-9517." }
  });

  // Apply rate limiter to all API endpoints
  app.use("/api/", globalApiLimiter);

  // API Routes
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", shopName: "Valley Auto E.R.", phone: "(208) 713-9517" });
  });

  // Appointment Submission
  app.post("/api/appointments", strictAppointmentLimiter, (req, res) => {
    const { customerName, phone, email, vehicle, serviceType, preferredDate, preferredTime, notes } = req.body;

    if (!customerName || !phone || !vehicle) {
      return res.status(400).json({ error: "Name, Phone Number, and Vehicle details are required." });
    }

    const code = "VA-" + Math.floor(1000 + Math.random() * 9000);
    const newAppointment: Appointment = {
      id: "apt-" + Date.now(),
      code,
      customerName,
      phone,
      email: email || "",
      vehicle,
      serviceType: serviceType || "General Diagnostic",
      preferredDate: preferredDate || new Date().toISOString().split("T")[0],
      preferredTime: preferredTime || "09:00 AM",
      notes: notes || "",
      status: "Received",
      createdAt: new Date().toISOString(),
      estimatedCostRange: serviceType === "A/C Service & Recharge" ? "$120 - $180" : serviceType === "Brake Service" ? "$180 - $280" : "$89 - $150"
    };

    appointmentsStore.push(newAppointment);

    return res.json({
      success: true,
      message: "Appointment request submitted successfully!",
      appointment: newAppointment
    });
  });

  // Appointment Lookup
  app.get("/api/appointments/:query", (req, res) => {
    const query = req.params.query.trim().toLowerCase();
    const match = appointmentsStore.find(
      a => a.code.toLowerCase() === query || a.phone.replace(/\D/g, "").includes(query.replace(/\D/g, ""))
    );

    if (!match) {
      return res.status(404).json({ error: "No appointment found matching that code or phone number." });
    }

    return res.json(match);
  });

  // Serve static or Vite dev
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Valley Auto E.R. server running on http://localhost:${PORT}`);
  });
}

startServer();
