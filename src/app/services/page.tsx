"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  MessageSquare,
  Smartphone,
  Gem,
  BarChart3,
  Calculator
} from "lucide-react";

export default function ServicesPage() {
  const [hasWebsite, setHasWebsite] = useState(true);
  const [hasWhatsAppBot, setHasWhatsAppBot] = useState(true);
  const [hasCatalog, setHasCatalog] = useState(false);
  const [hasCustomCRM, setHasCustomCRM] = useState(false);
  const [hasGoogleMapsSEO, setHasGoogleMapsSEO] = useState(true);

  const calculateTotal = () => {
    let total = 0;
    if (hasWebsite) total += 18000;
    if (hasWhatsAppBot) total += 10000;
    if (hasCatalog) total += 12000;
    if (hasCustomCRM) total += 45000;
    if (hasGoogleMapsSEO) total += 8000;
    return total;
  };

  const generateWhatsAppScopeUrl = () => {
    const selected: string[] = [];
    if (hasWebsite) selected.push("Next.js Mobile-First Site");
    if (hasWhatsAppBot) selected.push("WhatsApp Auto-Inquiry Bot");
    if (hasCatalog) selected.push("Digital Catalog & Rate Sync");
    if (hasCustomCRM) selected.push("Custom B2B CRM & Invoicing");
    if (hasGoogleMapsSEO) selected.push("Google Maps Local Ranking");

    const message = `Hello Webiffy, I configured a project scope on your platform:
• Scope: ${selected.join(", ")}
• Estimated Price: ₹${calculateTotal().toLocaleString("en-IN")}
I would like to discuss implementation for my business.`;
    return `https://wa.me/918178557544?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Studio Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          Webiffy Pricing Packages
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Clear Packages with Zero Hidden Fees
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          We don't charge confusing hourly rates. Choose a pre-packaged Webiffy solution or use our interactive calculator below to configure your custom project scope.
        </p>
      </div>

      {/* 3 Core Packages */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Package 1 */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Gyms, Salons & Clinics
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">Local Growth Engine</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Fast mobile website optimized to turn Google Maps searchers into walk-ins with automated WhatsApp trial passes.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-slate-900">₹18,500</span>
                <span className="text-xs text-slate-500">one-time</span>
              </div>
              <p className="text-xs text-emerald-700 font-semibold mt-1">
                + ₹2,000/mo hosting & reminder bot maintenance
              </p>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Next.js High-Speed 1-Page Mobile Site</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Free 1-Day Trial / Booking WhatsApp Bot</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Google Maps Profile SEO & Review Link</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Automated 48-Hour Renewal Follow-Up Bot</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Turnaround: 4 Business Days</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <a
              href="https://wa.me/918178557544?text=I%20am%20interested%20in%20the%20Webiffy%20Local%20Growth%20Engine%20(Gym/Salon)%20for%20%E2%82%B918%2C500"
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-sm transition-colors"
            >
              Get Started on WhatsApp
            </a>
          </div>
        </div>

        {/* Package 2: Most Popular */}
        <div className="bg-white rounded-3xl p-8 border-2 border-emerald-600 shadow-md relative flex flex-col justify-between space-y-6">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider">
            Most Popular for Retail
          </div>

          <div className="space-y-4 pt-1">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              <Gem className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Saree & Jewellery Stores
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">Retail Showroom Suite</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Multi-page luxury catalog website, live gold/silver rate ticker, and 1-tap WhatsApp photo inquiries.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-slate-900">₹32,500</span>
                <span className="text-xs text-slate-500">one-time</span>
              </div>
              <p className="text-xs text-emerald-700 font-semibold mt-1">
                + ₹3,000/mo catalog updates & WhatsApp broadcast quota
              </p>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Multi-Page Luxury Digital Lookbook</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Live Gold/Silver 22K/24K Daily Rate Integration</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>1-Tap WhatsApp SKU Inquiry (No manual photo sharing)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>VIP Customer Club & Festive Broadcast Engine</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Turnaround: 5 to 7 Days</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <a
              href="https://wa.me/918178557544?text=I%20am%20interested%20in%20the%20Webiffy%20Retail%20Showroom%20Suite%20(Saree/Jewellery)%20for%20%E2%82%B932%2C500"
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-colors"
            >
              Claim Retail Package
            </a>
          </div>
        </div>

        {/* Package 3 */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                B2B, Wholesalers & Multi-branch
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">Custom Operations CRM</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Full custom ERP matching our Swastik CRM engine for automated GST billing, stock, and team permissions.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-slate-900">₹65,000+</span>
                <span className="text-xs text-slate-500">starting</span>
              </div>
              <p className="text-xs text-emerald-700 font-semibold mt-1">
                + ₹5,000/mo dedicated database backups & hosting
              </p>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Next.js + Node.js + PostgreSQL Backend</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Role-Based Access Control (Admin, Cashier, Auditor)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Automated WhatsApp GST Billing & PDF Invoices</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Full Source Code & Database Ownership</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <a
              href="https://wa.me/918178557544?text=I%20am%20interested%20in%20a%20Webiffy%20Custom%20Operations%20CRM%20starting%20at%20%E2%82%B965%2C000"
              target="_blank"
              rel="noreferrer"
              className="block w-full text-center py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-sm transition-colors"
            >
              Consult Architecture
            </a>
          </div>
        </div>
      </div>

      {/* Scope Estimator */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
              Interactive Price Estimator
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Select What Your Business Needs
            </h2>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-xs text-slate-500 font-medium">Estimated Cost:</span>
            <span className="text-2xl font-extrabold text-slate-900 font-mono">
              ₹{calculateTotal().toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        <div className="space-y-3">
          {[
            {
              title: "Next.js Mobile-First Production Website",
              desc: "Ultra-fast load speed, photo gallery, WhatsApp inquiry buttons.",
              checked: hasWebsite,
              setter: setHasWebsite,
              cost: "₹18,000"
            },
            {
              title: "WhatsApp 24/7 Automated Inquiry Bot",
              desc: "Instant replies, trial pass delivery, zero latency.",
              checked: hasWhatsAppBot,
              setter: setHasWhatsAppBot,
              cost: "₹10,000"
            },
            {
              title: "Digital Product Catalog & Daily Rate Ticker",
              desc: "Live gold/silver rate updates, lookbooks for Saree/Jewellery stores.",
              checked: hasCatalog,
              setter: setHasCatalog,
              cost: "₹12,000"
            },
            {
              title: "Google Maps Local SEO Optimization",
              desc: "Rank in the top 3 on Google Maps in your locality.",
              checked: hasGoogleMapsSEO,
              setter: setHasGoogleMapsSEO,
              cost: "₹8,000"
            },
            {
              title: "Custom B2B Operations CRM & WhatsApp Billing",
              desc: "Full ERP engine with role permissions and automated PDF tax invoices.",
              checked: hasCustomCRM,
              setter: setHasCustomCRM,
              cost: "₹45,000"
            }
          ].map((item, idx) => (
            <label
              key={idx}
              className="flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200 cursor-pointer transition-colors"
            >
              <div className="space-y-0.5 pr-4">
                <p className="text-xs font-bold text-slate-900">{item.title}</p>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <span className="text-xs font-bold font-mono text-slate-700">{item.cost}</span>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={(e) => item.setter(e.target.checked)}
                  className="w-4 h-4 accent-emerald-600 rounded cursor-pointer"
                />
              </div>
            </label>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            * Standard turnaround: 5 to 7 business days from project start.
          </p>
          <a
            href={generateWhatsAppScopeUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Send This Estimate to WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
