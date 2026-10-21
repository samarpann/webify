"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  MessageSquare, 
  ExternalLink,
  ShieldCheck, 
  Zap, 
  Layers, 
  Clock, 
  Star,
  Smartphone,
  Gem,
  Dumbbell,
  Building2,
  Users
} from "lucide-react";
import { getProjects, Project } from "../utils/storage";
import ProjectCarousel from "../components/ProjectCarousel";

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(getProjects());
  }, []);

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
        {/* Verification Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Webiffy Agency • 22+ Live Client Platforms Delivered</span>
          <span className="text-emerald-300">•</span>
          <span className="text-emerald-700 font-normal">Ahmedabad • Surat • Mumbai</span>
        </div>

        {/* Clear, High-Impact Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto">
          We Webify Your Local Business with <br className="hidden sm:inline" />
          <span className="text-emerald-600">High-Converting Websites</span>, <br className="hidden sm:inline" />
          WhatsApp Bots & Custom ERPs.
        </h1>

        {/* Clear, Simple Explanation */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Stop losing footfall and sales to local competitors. Webiffy builds fast Google Maps-ranked websites, 24/7 WhatsApp customer bots, and custom management software that makes running your store effortless.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://wa.me/918178557544?text=Hello%20Webiffy%2C%20I%20want%20to%20discuss%20a%20website%20and%20automation%20for%20my%20business."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Book a Free 15-Minute Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <Link
            href="/portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-semibold shadow-sm transition-colors"
          >
            <span>Browse 22+ Client Sites</span>
            <ArrowUpRight className="w-4 h-4 text-slate-500" />
          </Link>
        </div>

        {/* Key Metrics Strip */}
        <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-slate-200">
          <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
            <p className="text-2xl font-bold text-slate-900 font-mono">22+</p>
            <p className="text-xs text-slate-500 mt-0.5">Live Client Websites</p>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
            <p className="text-2xl font-bold text-emerald-600 font-mono">100k+</p>
            <p className="text-xs text-slate-500 mt-0.5">Automated WA Messages</p>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
            <p className="text-2xl font-bold text-blue-600 font-mono">5 Days</p>
            <p className="text-xs text-slate-500 mt-0.5">Fast Production Launch</p>
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
            <p className="text-2xl font-bold text-slate-900 font-mono">100%</p>
            <p className="text-xs text-slate-500 mt-0.5">Code & Domain Ownership</p>
          </div>
        </div>
      </section>

      {/* Interactive Showcase Carousel Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Interactive Project Slider
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Real Systems Built & Webified
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Swipe through live commercial client deployments currently generating sales across India.
          </p>
        </div>

        {/* Carousel Component */}
        <ProjectCarousel projects={projects} />
      </section>

      {/* Clear 3-Part Solution Explanation */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            How Webiffy Helps You
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Three Clear Ways We Upgrade Your Store
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            No complicated jargon. Here is exactly what Webiffy builds and how it delivers customer growth:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              1. A Fast, Modern Website
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When people search for your store or service on Google Maps, they see a stunning, mobile-friendly website that loads in under 1 second.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Shows your products, photos & pricing clearly</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Ranks higher on Google Maps search in your locality</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct WhatsApp and Call buttons for instant walk-ins</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              2. 24/7 WhatsApp Auto-Bot
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Never lose a customer who messages at night or during festival rush. Our automated bot answers inquiries and delivers catalogs in 2 seconds.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sends PDF catalogs (for Saree & Jewellery stores)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Issues 1-Day Trial Passes (for Gyms & Fitness centers)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sends automated 48-hour follow-up reminders</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              3. Custom CRM & Billing Software
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Say goodbye to messy paper bills and Excel errors. Manage inventory, generate GST bills, and send PDF receipts to customer WhatsApp automatically.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>As deployed for Swastik Jewel for diamond & gold billing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Separate logins for Owner, Manager, and Cashier</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Daily sales reports sent straight to your phone</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Real Companies */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Verified Production Deployments
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Featured Client Deployments
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Explore some of the high-impact websites and software Webiffy has engineered:
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
          >
            <span>View All 22+ Client Websites</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Balkishandass */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                  Retail & Jewellery
                </span>
                <span className="text-xs font-mono text-emerald-700 font-semibold">Live Client</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Balkishandass Jewellers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Heritage luxury jewellery and bullion brand portal featuring royal bridal collections and VIP appointment booking.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">balkishandass.com</span>
              <a
                href="https://www.balkishandass.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800"
              >
                <span>Visit Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* FundSphere */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                  FinTech & Web App
                </span>
                <span className="text-xs font-mono text-emerald-700 font-semibold">Live App</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">FundSphere Platform</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Modern financial technology application featuring real-time financial tracking, interactive charts, and portfolio analytics.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">fundsphere-six.vercel.app</span>
              <a
                href="https://fundsphere-six.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800"
              >
                <span>Visit App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* RK Steel Company */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">
                  Industrial & Metallurgy
                </span>
                <span className="text-xs font-mono text-emerald-700 font-semibold">Live Site</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">RK Steel Company</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Industrial steel supplies, structural TMT bars, and custom metal fabrication portal built for nationwide B2B purchase orders.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">rksteelcompany.in</span>
              <a
                href="https://www.rksteelcompany.in/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800"
              >
                <span>Visit Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Swastik Jewel */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                  Retail & Jewellery
                </span>
                <span className="text-xs font-mono text-emerald-700 font-semibold">Flagship</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Swastik Jewel Storefront</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Luxury jewellery storefront with real-time 22K/24K gold rates, bridal collections, and 1-tap WhatsApp SKU inquiries.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">swastikjewel.in</span>
              <a
                href="https://www.swastikjewel.in/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800"
              >
                <span>Visit Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Swastik CRM */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-50 text-purple-800 border border-purple-200">
                  Enterprise Software
                </span>
                <span className="text-xs font-mono text-emerald-700 font-semibold">Live ERP</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Swastik Jewel CRM & Invoicing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Custom ERP engine powering live diamond pricing, automated WhatsApp GST tax invoice delivery, and stock audits.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">crm.swastikjewel.in</span>
              <a
                href="https://crm.swastikjewel.in/admin/dashboard"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800"
              >
                <span>Open ERP</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Dr. Nidan */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Healthcare
                </span>
                <span className="text-xs font-mono text-emerald-700 font-semibold">Live Clinic</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Dr. Nidan Diagnostic Health</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clinical diagnostic laboratory portal allowing patients to browse test profiles, book home sample tests, and download reports.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">drnidan.in</span>
              <a
                href="https://www.drnidan.in"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800"
              >
                <span>Visit Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Simple Process */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
              Simple 3-Step Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              How Webiffy Launches Your System in 5 Days
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              No technical knowledge needed on your end. Webiffy handles everything from design to domain setup:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-3">
              <span className="text-2xl font-black text-emerald-400 font-mono">01</span>
              <h3 className="text-base font-bold">15-Minute Discovery Call</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tell us about your business, what products or services you offer, and your goals. We configure your custom scope.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-3">
              <span className="text-2xl font-black text-emerald-400 font-mono">02</span>
              <h3 className="text-base font-bold">48-Hour Live Demo Preview</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Webiffy builds a working preview of your website and tests your WhatsApp bot on your phone so you can see it in action before paying in full.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-3">
              <span className="text-2xl font-black text-emerald-400 font-mono">03</span>
              <h3 className="text-base font-bold">Launch & Customer Inquiries</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We connect your official domain, index your site with Google Maps, and start funneling customer inquiries straight to your WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 sm:p-12 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Ready to Webify your store with modern technology?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Get in touch with the Webiffy team on WhatsApp right now. We'll answer your questions and share a free live preview for your business.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/918178557544?text=Hi%20Webiffy%2C%20I%20would%20like%20to%20discuss%20a%20project%20for%20my%20business."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Message Webiffy on WhatsApp</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold text-xs transition-colors"
            >
              <span>Calculate Project Cost</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
