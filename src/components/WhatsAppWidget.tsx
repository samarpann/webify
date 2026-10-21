"use client";

import React, { useState } from "react";
import { MessageSquare, X, ArrowUpRight } from "lucide-react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    { title: "🏋️‍♂️ Gym Membership Website & Bot", text: "Hello Webiffy, I want to discuss a high-converting website & WhatsApp booking bot for my gym." },
    { title: "💎 Jewellery / Saree Digital Catalog", text: "Hello Webiffy, I run a retail store and want a digital catalog with WhatsApp inquiry automation." },
    { title: "⚡ Custom Operations CRM & Billing", text: "Hello Webiffy, I want to consult regarding a custom CRM/ERP matching your Swastik Jewel architecture." }
  ];

  const handleSend = (msgText: string) => {
    const url = `https://wa.me/918178557544?text=${encodeURIComponent(msgText)}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-2">
          {/* Header */}
          <div className="bg-emerald-600 px-4 py-3 flex items-center justify-between text-white">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              <div>
                <p className="text-xs font-bold leading-none">Webiffy Instant Dispatch</p>
                <p className="text-[10px] text-emerald-100 mt-0.5">Replies typically in 5 minutes</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-3 bg-slate-50 text-xs">
            <p className="text-slate-600 leading-relaxed font-medium">
              Select what you are looking for to start an instant WhatsApp conversation with the Webiffy team:
            </p>

            <div className="space-y-2">
              {quickPrompts.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q.text)}
                  className="w-full text-left p-3 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 text-xs text-slate-800 font-medium transition-colors flex items-center justify-between shadow-sm group"
                >
                  <span className="truncate pr-2">{q.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 transition-colors shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95"
        aria-label="Direct WhatsApp Consultation"
      >
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        <span>Chat with Webiffy</span>
        <MessageSquare className="w-4 h-4" />
      </button>
    </div>
  );
}
