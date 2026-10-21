"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Lock,
  ArrowLeft,
  Truck,
  CheckCircle2,
  Clock,
  Sparkles,
  QrCode,
  CreditCard,
  Banknote,
  ChevronRight,
  MessageCircle,
  AlertCircle
} from "lucide-react";

const BUNDLE_DETAILS: Record<string, { title: string; pads: number; price: number; originalPrice: number; discount: string }> = {
  trial: {
    title: "Trial Pack (1 Box - 10 Pads)",
    pads: 10,
    price: 499,
    originalPrice: 899,
    discount: "44% OFF"
  },
  bogo: {
    title: "🔥 BUY 1 GET 1 FREE (2 Boxes - 20 Pads)",
    pads: 20,
    price: 699,
    originalPrice: 1499,
    discount: "53% OFF"
  },
  family: {
    title: "👑 BUY 2 GET 2 FREE (4 Boxes - 40 Pads + Gift)",
    pads: 40,
    price: 999,
    originalPrice: 2499,
    discount: "60% OFF"
  }
};

function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const bundleKey = searchParams.get("bundle") || "bogo";
  const bundle = BUNDLE_DETAILS[bundleKey] || BUNDLE_DETAILS["bogo"];

  const [paymentMethod, setPaymentMethod] = useState<"cod" | "upi" | "card">("cod");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    state: "Delhi",
    pincode: ""
  });

  const [couponCode, setCouponCode] = useState("FESTIVE50");
  const [couponApplied, setCouponApplied] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [timeLeft, setTimeLeft] = useState(599); // 10 minutes

  // Countdown timer for reserving cart
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  // UPI extra discount of ₹50
  const finalPrice = paymentMethod === "upi" ? bundle.price - 50 : bundle.price;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address || !formData.pincode) {
      alert("Please fill in your name, mobile number, address, and pincode.");
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      const generated = "ORD-" + Math.floor(100000 + Math.random() * 900000);
      setOrderId(generated);
      setIsProcessing(false);
      setOrderComplete(true);
    }, 1500);
  };

  return (
    <div className="bg-slate-100 min-h-screen text-slate-800 font-sans pb-16">
      {/* SECURE HEADER */}
      <header className="bg-white border-b border-slate-200 py-3.5 px-4 shadow-sm sticky top-0 z-40">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href="/products/kinoki-detox"
            className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Product</span>
          </Link>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-black text-sm">
              K
            </div>
            <span className="font-extrabold text-sm tracking-tight text-slate-900">
              Kinoki™ Secure Checkout
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full text-[11px] font-bold">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span>256-Bit SSL Encrypted</span>
          </div>
        </div>
      </header>

      {/* CART RESERVATION TIMER */}
      <div className="bg-amber-500 text-slate-950 text-xs font-bold py-2 px-3 text-center flex items-center justify-center gap-2 shadow-sm">
        <Clock className="w-4 h-4" />
        <span>
          High Demand: Your package is reserved for the next{" "}
          <span className="font-mono font-black underline">{formatTimer(timeLeft)}</span> minutes!
        </span>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: SHIPPING & PAYMENT DETAILS */}
          <div className="lg:col-span-7 space-y-6">
            <form onSubmit={handlePlaceOrder} className="space-y-6">
              
              {/* 1. SHIPPING ADDRESS */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-100">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">
                    1
                  </div>
                  <h3 className="font-black text-base text-slate-900">
                    Delivery Address (India Only)
                  </h3>
                </div>

                <div className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mobile Number (For WhatsApp tracking & delivery call) <span className="text-red-500">*</span>
                    </label>
                    <div className="flex">
                      <span className="bg-slate-100 border border-r-0 border-slate-300 rounded-l-xl px-3 flex items-center text-xs font-bold text-slate-600">
                        +91
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        required
                        maxLength={10}
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-300 rounded-r-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      House / Flat No., Building & Street <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="address"
                      required
                      rows={2}
                      placeholder="Flat 302, Green Valley Apartments, Near City Hospital"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Pincode <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        required
                        maxLength={6}
                        placeholder="e.g. 110001"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        City / District <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        required
                        placeholder="e.g. New Delhi"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. PAYMENT METHOD SELECTION */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-100">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">
                    2
                  </div>
                  <h3 className="font-black text-base text-slate-900">
                    Choose Payment Option
                  </h3>
                </div>

                <div className="space-y-3">
                  
                  {/* COD OPTION */}
                  <label
                    onClick={() => setPaymentMethod("cod")}
                    className={`block rounded-xl border-2 p-4 cursor-pointer transition-all ${
                      paymentMethod === "cod"
                        ? "border-emerald-600 bg-emerald-50/50 shadow-sm ring-2 ring-emerald-500/20"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            paymentMethod === "cod"
                              ? "border-emerald-600 bg-emerald-600"
                              : "border-slate-300"
                          }`}
                        >
                          {paymentMethod === "cod" && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                        <div>
                          <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                            <Banknote className="w-4 h-4 text-emerald-600" />
                            <span>Cash on Delivery (Pay at Doorstep)</span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">
                            Pay in cash or scan delivery partner UPI QR upon arrival.
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                        Available
                      </span>
                    </div>
                  </label>

                  {/* UPI OPTION (PREPAID DISCOUNT HOOK) */}
                  <label
                    onClick={() => setPaymentMethod("upi")}
                    className={`block rounded-xl border-2 p-4 cursor-pointer transition-all ${
                      paymentMethod === "upi"
                        ? "border-emerald-600 bg-emerald-50/50 shadow-sm ring-2 ring-emerald-500/20"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            paymentMethod === "upi"
                              ? "border-emerald-600 bg-emerald-600"
                              : "border-slate-300"
                          }`}
                        >
                          {paymentMethod === "upi" && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                        <div>
                          <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                            <QrCode className="w-4 h-4 text-emerald-600" />
                            <span>Pay Online via UPI (GPay / PhonePe / Paytm)</span>
                          </div>
                          <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                            ⚡ Instant ₹50 Prepaid Discount Applied!
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-amber-900 bg-amber-300 px-2 py-0.5 rounded animate-pulse">
                        SAVE ₹50
                      </span>
                    </div>

                    {paymentMethod === "upi" && (
                      <div className="mt-4 pt-3 border-t border-emerald-200/80 text-xs text-slate-600 bg-white p-3 rounded-lg border">
                        <p className="font-bold text-slate-800 mb-2">Select Your Preferred UPI App:</p>
                        <div className="grid grid-cols-4 gap-2 text-center text-[11px] font-bold">
                          <div className="border border-slate-200 p-2 rounded-lg bg-slate-50 hover:border-emerald-500 cursor-pointer">
                            Google Pay
                          </div>
                          <div className="border border-slate-200 p-2 rounded-lg bg-slate-50 hover:border-emerald-500 cursor-pointer">
                            PhonePe
                          </div>
                          <div className="border border-slate-200 p-2 rounded-lg bg-slate-50 hover:border-emerald-500 cursor-pointer">
                            Paytm
                          </div>
                          <div className="border border-slate-200 p-2 rounded-lg bg-slate-50 hover:border-emerald-500 cursor-pointer">
                            Scan QR
                          </div>
                        </div>
                      </div>
                    )}
                  </label>

                  {/* CARDS & NETBANKING */}
                  <label
                    onClick={() => setPaymentMethod("card")}
                    className={`block rounded-xl border-2 p-4 cursor-pointer transition-all ${
                      paymentMethod === "card"
                        ? "border-emerald-600 bg-emerald-50/50 shadow-sm ring-2 ring-emerald-500/20"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            paymentMethod === "card"
                              ? "border-emerald-600 bg-emerald-600"
                              : "border-slate-300"
                          }`}
                        >
                          {paymentMethod === "card" && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                        <div>
                          <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                            <CreditCard className="w-4 h-4 text-emerald-600" />
                            <span>Credit / Debit Card & Net Banking</span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">
                            Visa, Mastercard, RuPay & All Major Indian Banks
                          </p>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* COMPLETE ORDER BUTTON */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-70 text-white py-4 px-6 rounded-2xl font-black text-lg shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <span>Processing Secure Order...</span>
                ) : (
                  <>
                    <Lock className="w-5 h-5" />
                    <span>
                      {paymentMethod === "cod"
                        ? `CONFIRM CASH ON DELIVERY ORDER (₹${finalPrice})`
                        : `PAY SECURELY NOW (₹${finalPrice})`}
                    </span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* RIGHT: ORDER SUMMARY */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
              <h3 className="font-black text-base text-slate-900 pb-3 border-b border-slate-100 flex items-center justify-between">
                <span>Order Summary</span>
                <span className="text-xs font-bold text-emerald-600">1 Item in Cart</span>
              </h3>

              <div className="flex gap-3">
                <div className="relative w-16 h-16 rounded-xl border border-slate-200 bg-slate-50 overflow-hidden shrink-0">
                  <Image
                    src="/images/online-pack-20.jpg"
                    alt="Kinoki Foot Pads"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-xs md:text-sm text-slate-900 leading-snug">
                    Kinoki™ Kiyome Herbal Detox Foot Pads
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">{bundle.title}</p>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded inline-block mt-1">
                    {bundle.discount}
                  </span>
                </div>
              </div>

              {/* COUPON ROW */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <div>
                    <span className="text-xs font-bold text-slate-800">Coupon FESTIVE50 Applied</span>
                    <span className="block text-[10px] text-emerald-600 font-semibold">Special 50% discount unlocked</span>
                  </div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>

              {/* PRICE BREAKDOWN */}
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Original MRP:</span>
                  <span className="line-through">₹{bundle.originalPrice}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Special Festive Price:</span>
                  <span className="font-bold text-slate-800">₹{bundle.price}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping & Delivery:</span>
                  <span className="font-bold text-emerald-700">FREE</span>
                </div>
                {paymentMethod === "upi" && (
                  <div className="flex justify-between text-emerald-700 font-bold">
                    <span>Prepaid UPI Discount:</span>
                    <span>-₹50</span>
                  </div>
                )}
                <div className="flex justify-between text-sm md:text-base font-black text-slate-900 pt-2 border-t border-slate-200">
                  <span>Total Payable:</span>
                  <span className="text-emerald-700">₹{finalPrice}</span>
                </div>
              </div>
            </div>

            {/* TRUST BADGE BOX */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-xs space-y-2.5 text-emerald-900">
              <div className="flex items-center gap-2 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Our Buyer Protection Guarantee:</span>
              </div>
              <ul className="space-y-1.5 pl-6 text-[11px] text-emerald-800/90 list-disc">
                <li>Dispatch within 24 hours via BlueDart / Delhivery.</li>
                <li>Live SMS and WhatsApp tracking link sent immediately.</li>
                <li>7-day zero-hassle replacement guarantee for any defect.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* ORDER CONFIRMATION MODAL */}
      {orderComplete && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                Payment & Order Confirmed!
              </span>
              <h3 className="text-xl font-black text-slate-900 mt-1">
                Thank You, {formData.fullName || "Customer"}!
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Your order is confirmed and scheduled for dispatch within 24 hours via Express Courier.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Order ID:</span>
                <span className="font-mono font-bold text-slate-800">{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Selected Deal:</span>
                <span className="font-bold text-slate-800">{bundle.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Payment Mode:</span>
                <span className="font-bold uppercase text-emerald-700">{paymentMethod}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Total Amount:</span>
                <span className="font-bold text-emerald-700">₹{finalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Delivery Address:</span>
                <span className="font-medium text-slate-700 truncate max-w-[180px]">
                  {formData.address}, {formData.city} - {formData.pincode}
                </span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <a
                href={`https://wa.me/918178557544?text=Hi,%20I%20just%20placed%20Order%20${orderId}%20for%20Kinoki%20Detox%20Pads%20(Rs.${finalPrice})%20via%20${paymentMethod.toUpperCase()}.%20Please%20confirm%20my%20dispatch.`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp for Priority Dispatch</span>
              </a>

              <Link
                href="/products/kinoki-detox"
                className="block w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 px-4 rounded-xl text-xs transition-all"
              >
                Back to Store Homepage
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center font-bold">Loading Secure Checkout...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
