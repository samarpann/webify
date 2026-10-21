"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Send, 
  Check, 
  ExternalLink, 
  ArrowUpRight, 
  Database,
  Lock,
  Layers,
  FileText,
  Activity,
  MessageSquare
} from "lucide-react";

interface ChatMessage {
  sender: "user" | "bot";
  text: string;
  time: string;
  actionButton?: {
    label: string;
    url: string;
  };
}

export default function CrmShowcasePage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "bot",
      text: "Namaste! Welcome to Webiffy Automated Assistant. Click one of the buttons below to see how our bot handles customer questions automatically 24/7:",
      time: "10:00"
    }
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const simulateBotReply = (userText: string) => {
    setIsTyping(true);
    setTimeout(() => {
      let replyText = "";
      let button = undefined;
      const lower = userText.toLowerCase();

      if (lower.includes("gold") || lower.includes("rate") || lower.includes("jewel")) {
        replyText = "Webiffy Bullion Rates (Today):\n• 24K Gold: ₹76,450 / 10g\n• 22K Gold: ₹70,080 / 10g\n• Silver: ₹91,200 / 1kg\n\nWould you like to schedule a private showroom preview?";
        button = {
          label: "Schedule Showroom Visit",
          url: "https://wa.me/918178557544?text=I%20would%20like%20to%20book%20a%20showroom%20preview%20appointment."
        };
      } else if (lower.includes("gym") || lower.includes("pass") || lower.includes("trial")) {
        replyText = "1-Day VIP Gym Trial Pass Generated!\n• Pass ID: #FIT-9024\n• Valid for: 48 Hours\n• Includes: Floor access + Free fitness trainer assessment.\n\nPlease confirm your trial date below:";
        button = {
          label: "Confirm Trial Pass on WhatsApp",
          url: "https://wa.me/918178557544?text=Confirming%20Gym%20Pass%20%23FIT-9024"
        };
      } else if (lower.includes("saree") || lower.includes("catalog")) {
        replyText = "Bridal Lookbook 2024 is ready:\n• Banarasi Handloom Silks (14 SKUs)\n• Kanjivaram Heritage (18 SKUs)\n• Partywear Organza (22 SKUs)\n\nClick below to download the collection PDF:";
        button = {
          label: "Download Lookbook PDF",
          url: "https://wa.me/918178557544?text=Please%20send%20the%20Bridal%20Collection%20PDF"
        };
      } else {
        replyText = `Thank you for asking: "${userText}". Webiffy automated bots save customer phone numbers and notify your staff instantly on WhatsApp!`;
        button = {
          label: "Discuss Custom Implementation",
          url: `https://wa.me/918178557544?text=Inquiry%20regarding%3A%20${encodeURIComponent(userText)}`
        };
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: replyText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
          actionButton: button
        }
      ]);
      setIsTyping(false);
    }, 700);
  };

  const handleSend = (text?: string) => {
    const toSend = text || inputVal;
    if (!toSend.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: toSend,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
      }
    ]);

    setInputVal("");
    simulateBotReply(toSend);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Studio Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          Live Interactive Simulator
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Webiffy WhatsApp Bot & Custom ERP
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Test our automated customer response bot below, and explore the architecture behind our live jewellery ERP running at <code className="text-slate-800 font-mono font-bold">crm.swastikjewel.in</code>.
        </p>
      </div>

      {/* Simulator Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Explanations */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              How the WhatsApp Bot Works
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              When a customer finds you on Google Maps or your website, they can click your WhatsApp link. Webiffy bots answer in under 2 seconds, share information, and capture their phone number.
            </p>
            <div className="space-y-2 pt-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Responds immediately even at midnight or weekends</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sends trial passes, price quotes & digital catalogs</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Automated 48-hour follow-up to close the sale</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-2">
            <p className="text-xs font-bold uppercase text-slate-600 tracking-wider">
              Click to Test Inquiries:
            </p>
            <div className="space-y-1.5 pt-1">
              <button
                onClick={() => handleSend("Live Gold & Silver rates today")}
                className="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 text-xs text-slate-800 font-medium transition-colors flex items-center justify-between"
              >
                <span>💎 Bullion Rate Ticker (Jewellery)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
              <button
                onClick={() => handleSend("I want a 1-day free gym trial pass")}
                className="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 text-xs text-slate-800 font-medium transition-colors flex items-center justify-between"
              >
                <span>🏋️‍♂️ 1-Day Trial Pass Bot (Gyms)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
              <button
                onClick={() => handleSend("Send bridal saree lookbook catalog")}
                className="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 text-xs text-slate-800 font-medium transition-colors flex items-center justify-between"
              >
                <span>🥻 Digital Lookbook PDF (Retail Saree)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Right: WhatsApp Device Mockup */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden max-w-lg mx-auto">
            {/* WhatsApp Header */}
            <div className="bg-emerald-700 text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                  W
                </div>
                <div>
                  <p className="text-xs font-bold leading-none">Webiffy Automation Bot</p>
                  <p className="text-[10px] text-emerald-100 mt-0.5">Online • Automated Assistant</p>
                </div>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-pulse" />
            </div>

            {/* Chat Messages Area */}
            <div className="p-4 h-[380px] overflow-y-auto space-y-3 bg-[#efeae2] bg-opacity-70">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed whitespace-pre-line shadow-sm ${
                      m.sender === "user"
                        ? "bg-[#d9fdd3] text-slate-900 rounded-tr-none"
                        : "bg-white text-slate-900 rounded-tl-none border border-slate-100"
                    }`}
                  >
                    <p>{m.text}</p>
                    {m.actionButton && (
                      <div className="pt-2 mt-2 border-t border-slate-100">
                        <a
                          href={m.actionButton.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-[11px] shadow-sm hover:bg-emerald-700 transition-colors"
                        >
                          <span>{m.actionButton.label}</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                    <span className="block text-[9px] text-slate-400 text-right mt-1 font-mono">
                      {m.time}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-1 bg-white p-2.5 rounded-xl w-16 shadow-sm">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.15s]" />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.3s]" />
                </div>
              )}
            </div>

            {/* Input Box */}
            <div className="bg-slate-100 p-2.5 flex items-center gap-2 border-t border-slate-200">
              <input
                type="text"
                placeholder="Type a message or click above..."
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600"
              />
              <button
                onClick={() => handleSend()}
                className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Production ERP Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded border border-purple-200">
              Enterprise Software Case Study
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Swastik Jewel Enterprise CRM & Billing ERP
            </h2>
            <p className="text-xs text-slate-500 font-mono mt-0.5">
              Live link: crm.swastikjewel.in/admin/dashboard
            </p>
          </div>
          <a
            href="https://crm.swastikjewel.in/admin/dashboard"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-sm transition-colors"
          >
            <span>Open Live CRM Login</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <Database className="w-5 h-5 text-emerald-600" />
            <h4 className="text-xs font-bold text-slate-900">Live Bullion Sync</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dynamic pricing matrix for 22K/24K gold, diamond weight, and making charge margins with zero manual re-entry.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <FileText className="w-5 h-5 text-blue-600" />
            <h4 className="text-xs font-bold text-slate-900">Automated WhatsApp Bills</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Generates compliant GST tax invoices into PDF and dispatches them straight to customer WhatsApp upon order confirmation.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <Lock className="w-5 h-5 text-purple-600" />
            <h4 className="text-xs font-bold text-slate-900">Staff Role Permissions</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Granular role-based security isolating Master Admin privileges, store manager access, and cashier billing screens.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <Activity className="w-5 h-5 text-amber-600" />
            <h4 className="text-xs font-bold text-slate-900">Live Inventory Audit</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Real-time stock tracking, barcode scanning, supplier purchase orders, and daily dispatch reconciliation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
