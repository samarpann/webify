"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Lock,
  Sparkles,
  MessageSquare
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services & Pricing", href: "/services" },
    { name: "Live Portfolio (22+)", href: "/portfolio" },
    { name: "WhatsApp & CRM Demo", href: "/crm-showcase" },
    { name: "Contact & Quote", href: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Webiffy Studio Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-sm shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-extrabold text-base tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors">
                  Webiffy<span className="text-emerald-500">.</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Agency
                </span>
              </div>
              <span className="block text-[10px] text-slate-500 font-mono -mt-0.5">
                Web • Apps • WhatsApp ERP
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/80">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    active
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Items */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Link
              href="/admin"
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors"
              title="Admin CMS"
            >
              <Lock className="w-3.5 h-3.5" />
            </Link>

            <a
              href="https://wa.me/918178557544?text=Hello%20Webiffy%2C%20I%20would%20like%20to%20consult%20regarding%20a%20digital%20solution."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Book Growth Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              href="/admin"
              className="p-1.5 rounded-lg text-slate-600 border border-slate-200"
            >
              <Lock className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-lg text-slate-700 hover:text-slate-900 border border-slate-200"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-1 shadow-lg">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-xs font-semibold ${
                  active
                    ? "bg-emerald-50 text-emerald-800 font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3">
            <a
              href="https://wa.me/918178557544?text=Hello%20Webiffy%2C%20I%20want%20to%20build%20a%20website%20for%20my%20business."
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
