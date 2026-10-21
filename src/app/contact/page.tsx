"use client";

import React, { useState } from "react";
import { 
  Send, 
  Check, 
  ArrowUpRight, 
  MapPin, 
  Phone, 
  Clock, 
  MessageSquare,
  HelpCircle 
} from "lucide-react";
import { saveInquiry } from "../../utils/storage";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState("Retail & Saree Showroom");
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Mobile-First Website",
    "WhatsApp Automation Bot"
  ]);
  const [budget, setBudget] = useState("₹20,000 - ₹35,000");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (svc: string) => {
    if (selectedServices.includes(svc)) {
      setSelectedServices(selectedServices.filter((s) => s !== svc));
    } else {
      setSelectedServices([...selectedServices, svc]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    saveInquiry({
      name,
      phone,
      businessType,
      servicesNeeded: selectedServices,
      budget,
      message
    });

    const waText = `*Webiffy Project Consultation Request:*
• Client: ${name}
• Contact: ${phone}
• Business Type: ${businessType}
• Scope: ${selectedServices.join(", ")}
• Budget Bracket: ${budget}
• Notes: ${message || "Ready to schedule kickoff"}`;

    const waUrl = `https://wa.me/918178557544?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, "_blank");

    setSubmitted(true);
  };

  const faqs = [
    {
      q: "How fast can Webiffy deliver my website and WhatsApp bot?",
      a: "Our standard turnaround time is 4 to 7 business days. We build a working preview in 48 hours so you can test it on your own mobile phone before going live."
    },
    {
      q: "Do I need technical knowledge or a computer to manage leads?",
      a: "No! All customer inquiries, free trial passes, and product requests are sent directly to your WhatsApp. You and your staff can respond from your mobile phone in seconds."
    },
    {
      q: "What are your commercial payment terms?",
      a: "We work on a transparent 50-30-20 milestone structure: 50% advance before development, 30% upon review of the staging demo, and 20% when the site is pointed to your official domain."
    },
    {
      q: "Can Webiffy build custom management software like Swastik Jewel CRM?",
      a: "Yes! Our CRM architecture can be customized for any industry: steel manufacturing, grocery wholesale, event equipment rentals, or clinic diagnostics."
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Start Your Free Webiffy Consultation
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Fill out the brief consultation form below. You will be connected directly with Samarpan on WhatsApp with your structured scope.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          {submitted ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Inquiry Received!</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Your project scope has been saved and sent to WhatsApp. The Webiffy team will reply within 15 minutes.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 underline pt-2"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Patel"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 81785 57544"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Business Sector</label>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-600"
                >
                  <option value="Retail & Saree Showroom">Retail & Saree Showroom</option>
                  <option value="Jewellery Store / Bullion">Jewellery Store / Bullion</option>
                  <option value="Gym & Fitness Studio">Gym & Fitness Studio</option>
                  <option value="Hospitality & Real Estate">Hospitality & Real Estate</option>
                  <option value="Industrial & Engineering B2B">Industrial & Engineering B2B</option>
                  <option value="Healthcare & Diagnostic Clinic">Healthcare & Diagnostic Clinic</option>
                  <option value="Custom Software / CRM Project">Custom Software / CRM Project</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Select Services Needed</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Mobile-First Website",
                    "WhatsApp Automation Bot",
                    "Digital Lookbook Catalog",
                    "Custom B2B CRM & Billing",
                    "Google Maps Local SEO"
                  ].map((svc) => (
                    <button
                      type="button"
                      key={svc}
                      onClick={() => toggleService(svc)}
                      className={`p-2.5 rounded-xl text-left text-xs font-medium transition-colors border flex items-center justify-between ${
                        selectedServices.includes(svc)
                          ? "bg-emerald-50 text-emerald-900 border-emerald-300 font-bold"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      <span>{svc}</span>
                      {selectedServices.includes(svc) && (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Estimated Budget Bracket</label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-emerald-600"
                >
                  <option value="₹18,000 - ₹25,000 (Local Starter Engine)">₹18,000 - ₹25,000 (Local Starter Engine)</option>
                  <option value="₹25,000 - ₹40,000 (Retail & Automation Suite)">₹25,000 - ₹40,000 (Retail & Automation Suite)</option>
                  <option value="₹50,000 - ₹1,00,000+ (Custom Operations ERP)">₹50,000 - ₹1,00,000+ (Custom Operations ERP)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Project Notes (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your store, products, or timeline..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Submit & Chat with Webiffy on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* Contact info cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider">
              Webiffy Contact Desk
            </h3>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-500 font-semibold">Direct Telephone</p>
                  <p className="font-bold text-slate-900">+91 81785 57544</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-500 font-semibold">WhatsApp Support</p>
                  <p className="font-bold text-emerald-700">Instant 5-Minute Reply</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-500 font-semibold">Service Locations</p>
                  <p className="font-bold text-slate-900">Ahmedabad • Surat • Mumbai • Remote</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <p className="text-[10px] text-slate-500 font-semibold">Working Hours</p>
                  <p className="font-bold text-slate-900">Mon – Sat, 09:30 AM – 07:30 PM IST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
            Clear Answers
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((f, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5"
            >
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                {f.q}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
