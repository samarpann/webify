import React from "react";
import Link from "next/link";
import { Sparkles, Lock, ArrowUpRight, MessageSquare, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-sm">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-slate-900 tracking-tight text-base">
                Webiffy<span className="text-emerald-500">.</span>
              </span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">
              Webiffy is a modern tech & web agency engineering high-converting storefronts, 24/7 WhatsApp automation bots, and custom ERP management software.
            </p>
            <div className="space-y-1 pt-1">
              <a
                href="https://wa.me/918178557544"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: +91 81785 57544</span>
              </a>
              <p className="text-slate-500 text-xs flex items-center gap-1">
                <Mail className="w-3 h-3 text-slate-400" />
                <span>hello@webiffy.in</span>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase text-slate-900">Navigation</p>
            <ul className="space-y-1.5 text-slate-600">
              <li><Link href="/" className="hover:text-slate-900 transition-colors">Home Overview</Link></li>
              <li><Link href="/services" className="hover:text-slate-900 transition-colors">Services & Pricing</Link></li>
              <li><Link href="/portfolio" className="hover:text-slate-900 transition-colors">Client Portfolio (22+ Sites)</Link></li>
              <li><Link href="/crm-showcase" className="hover:text-slate-900 transition-colors">WhatsApp & CRM Demo</Link></li>
              <li><Link href="/contact" className="hover:text-slate-900 transition-colors">Book Consultation</Link></li>
            </ul>
          </div>

          {/* Featured Deployments */}
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase text-slate-900">Verified Client Sites</p>
            <ul className="space-y-1.5 text-slate-600">
              <li>
                <a href="https://www.balkishandass.com/" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors flex items-center gap-1">
                  <span>Balkishandass Jewellers</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://fundsphere-six.vercel.app/" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors flex items-center gap-1">
                  <span>FundSphere FinTech App</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://www.rksteelcompany.in/" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors flex items-center gap-1">
                  <span>RK Steel Company</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://www.swastikjewel.in/" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors flex items-center gap-1">
                  <span>Swastik Jewel Storefront</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a href="https://crm.swastikjewel.in/admin/dashboard" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors flex items-center gap-1">
                  <span>Swastik Jewel ERP</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Locations & Admin */}
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase text-slate-900">Locations</p>
            <p className="text-slate-600 text-xs">Ahmedabad • Surat • Mumbai • Global</p>
            <div className="pt-3">
              <Link
                href="/admin"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 transition-colors font-medium text-xs"
              >
                <Lock className="w-3 h-3" />
                <span>Webiffy CMS Console</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Webiffy Tech & Web Agency. All rights reserved.</p>
          <p>Built with Next.js 15, Tailwind & React</p>
        </div>
      </div>
    </footer>
  );
}
