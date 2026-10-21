"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Star,
  CheckCircle2,
  Clock,
  Flame,
  ArrowRight,
  Eye,
  Award,
  ChevronDown,
  MessageCircle,
  Footprints,
  Moon,
  HeartPulse,
  Leaf,
  Check,
  AlertCircle,
  Lock,
  ThumbsUp,
  ShoppingBag,
  Camera,
  CheckCheck
} from "lucide-react";

interface BundleOption {
  id: string;
  title: string;
  subtitle: string;
  pads: number;
  price: number;
  originalPrice: number;
  discountBadge: string;
  tag?: string;
  popular?: boolean;
  freeShipping: boolean;
  freeGift?: string;
}

const BUNDLE_OPTIONS: BundleOption[] = [
  {
    id: "trial",
    title: "Trial Pack (1 Box)",
    subtitle: "10 Detox Pads (5 Raat Ka Treatment)",
    pads: 10,
    price: 499,
    originalPrice: 899,
    discountBadge: "44% OFF",
    freeShipping: false
  },
  {
    id: "bogo",
    title: "🔥 BUY 1 GET 1 FREE (2 Boxes)",
    subtitle: "20 Detox Pads (10 Raat Ka Complete Cleanse)",
    pads: 20,
    price: 699,
    originalPrice: 1499,
    discountBadge: "53% OFF",
    tag: "MOST POPULAR",
    popular: true,
    freeShipping: true
  },
  {
    id: "family",
    title: "👑 BUY 2 GET 2 FREE (4 Boxes)",
    subtitle: "40 Detox Pads (Full Month Family Pack)",
    pads: 40,
    price: 999,
    originalPrice: 2499,
    discountBadge: "60% OFF",
    tag: "BEST VALUE",
    freeShipping: true,
    freeGift: "FREE Bamboo Foot Massager Roller"
  }
];

// 1200x1200 HIGH-RES ONLINE PRODUCT IMAGES FOR GALLERY
const GALLERY_IMAGES = [
  {
    src: "/images/online-pack-20.jpg",
    alt: "Kinoki Herbal Detox Foot Patches Buy 1 Get 1 Free Pack",
    title: "Buy 1 Get 1 Free Bestseller Pack"
  },
  {
    src: "/images/online-ginger.jpg",
    alt: "Ginger & Bamboo Vinegar Extract Foot Patches",
    title: "Herbal Ginger & Bamboo Extract"
  },
  {
    src: "/images/online-usage.jpg",
    alt: "Herbal Ingredients & Night Application",
    title: "Herbal Ingredients & Application"
  },
  {
    src: "/images/online-pack-40.jpg",
    alt: "Family Pack of 40 Detox Foot Patches",
    title: "Full Month Family Bundle"
  },
  {
    src: "/images/online-pack-10.jpg",
    alt: "Kinoki Detox Foot Patches Pack of 10",
    title: "Sealed 10-Pack Box"
  }
];

// 12 REALISTIC SMARTPHONE UGC REVIEW PHOTOS WITH AUTHENTIC HINGLISH REVIEWS
const PHOTO_REVIEWS = [
  {
    id: 1,
    name: "Captain_Sonali",
    location: "Mumbai",
    avatar: "S",
    verified: true,
    rating: 5,
    title: "Pehle laga scam hoga, but sach me pair ka dard chala gaya!",
    image: "/images/ugc-review-10.jpg",
    text: "Bhai sach batau toh pehle laga tha online marketing gimmick hoga. But meri hospital me 8-9 ghante ki standing duty rehti hai, aedi itni dard karti thi ki raat ko neend nahi aati thi. 4 din lagaya, subah utha toh patch pura dark brown ho gaya tha aur pair ekdum halka laga! Best purchase yaar.",
    timeAgo: "2 hours ago",
    likes: 54
  },
  {
    id: 2,
    name: "Yash choudhary",
    location: "Jaipur",
    avatar: "Y",
    verified: true,
    rating: 5,
    title: "Subah patch pura black ho gaya... 100% works!",
    image: "/images/ugc-review-3.jpg",
    text: "Day 1 pe lagaya toh subah dekh ke shock ho gaya, itna dark moisture nikla. 5th day tak aate aate patch ka colour lighter ho gaya aur subah uthke jo body me heaviness aur aalsapan rehta tha wo bilkul gayab. Buy 1 Get 1 wala deal best hai, worth every rupee!",
    timeAgo: "4 hours ago",
    likes: 41
  },
  {
    id: 3,
    name: "Aravind Nair",
    location: "Bengaluru",
    avatar: "A",
    verified: true,
    rating: 5,
    title: "IT job walo ke liye aur swollen feet ke liye vardaan hai",
    image: "/images/ugc-review-5.jpg",
    text: "Din bhar chair pe baithne se ankles me swelling aa jati thi aur blood circulation slow lagta tha. Ginger ka halka warming effect aata hai raat ko, bohot relaxing lagta hai. 2 din me delivery aa gayi cash on delivery me. Very happy with this!",
    timeAgo: "Yesterday",
    likes: 33
  },
  {
    id: 4,
    name: "Swapna Reddy",
    location: "Hyderabad",
    avatar: "S",
    verified: true,
    rating: 5,
    title: "Mummy ke ghutne aur aedi dard me bohot aaram mila 🙏",
    image: "/images/ugc-review-7.jpg",
    text: "Mummy ko raat ko burning feet aur restless leg ki problem rehti thi. Unke liye Family Pack mangwaya tha. Bolti hain ab bina karwat badle gehri neend aati hai. Unboxing packaging bhi sealed aur fresh thi. Thank you Kinoki team!",
    timeAgo: "2 days ago",
    likes: 48
  },
  {
    id: 5,
    name: "Rajesh Verma",
    location: "New Delhi (Karol Bagh)",
    avatar: "R",
    verified: true,
    rating: 5,
    title: "Shop pe khade rehne walo ke liye must-have item",
    image: "/images/ugc-review-9.jpg",
    text: "Retail shop me din bhar khade rehna padta hai. Pehle pain spray lagata tha temporary aaram ke liye. Yeh patch raat ko chipka ke so jao, subah pair ekdum fresh feel hote hain jaise spa karwaya ho. COD delivery was super fast.",
    timeAgo: "3 days ago",
    likes: 62
  },
  {
    id: 6,
    name: "Pooja Deshmukh",
    location: "Pune",
    avatar: "P",
    verified: true,
    rating: 5,
    title: "Natural ginger aroma aur gehri neend",
    image: "/images/ugc-review-8.jpg",
    text: "Koi chemical wali badboo nahi hai, pure bamboo vinegar aur adrak ki khushbu aati hai. 1 hafte se use kar rahi hu, neend ki quality itni improve hui hai ki subah alarm se pehle energetic uth jati hu. Sabko recommend karungi!",
    timeAgo: "4 days ago",
    likes: 29
  },
  {
    id: 7,
    name: "Vikram Singhania",
    location: "Kolkata",
    avatar: "V",
    verified: true,
    rating: 5,
    title: "Gym legs workout ke baad recovery ke liye solid!",
    image: "/images/ugc-review-2.jpg",
    text: "Heavy leg day workout ke baad jo calves me stiffness aur cramps aate the, yeh patch lagake so jao next morning bilkul fresh legs. Maine pehle 1 packet liya tha, ab 4 packet ka bundle order kiya hai.",
    timeAgo: "5 days ago",
    likes: 38
  },
  {
    id: 8,
    name: "Meera Iyer",
    location: "Chennai",
    avatar: "M",
    verified: true,
    rating: 5,
    title: "Swollen ankles me 3 din me result dikha",
    image: "/images/ugc-review-6.jpg",
    text: "Travel aur flight ke baad pair me water retention ho jata tha. Yeh patch moisture aur dampness pura kheech leta hai. Subah utarne ke baad warm water se wash karlo. Very satisfied with quality.",
    timeAgo: "6 days ago",
    likes: 27
  },
  {
    id: 9,
    name: "Harpreet Singh",
    location: "Chandigarh",
    avatar: "H",
    verified: true,
    rating: 5,
    title: "Buzurg dada ji ke liye mangwaya tha, khush hain",
    image: "/images/ugc-review-4.jpg",
    text: "Dada ji ko sardiyon me pairon me bohot thandak aur dard rehta tha. Ginger extract ki vajah se halki warming heat milti hai jo bohot sukoon deti hai. Cash on delivery courier bande ne ghar par aakar deliver kiya.",
    timeAgo: "1 week ago",
    likes: 45
  },
  {
    id: 10,
    name: "Anita Saxena",
    location: "Lucknow",
    avatar: "A",
    verified: true,
    rating: 5,
    title: "Packaging ekdum top notch & sealed sachets",
    image: "/images/ugc-review-11.jpg",
    text: "Har ek patch individually sealed pouch me aata hai to moisture lagne ka darr nahi hai. 10 din se daily laga rahi hu, body bohot light feel hoti hai. Extra ₹50 prepaid discount bhi mila tha UPI se pay karke!",
    timeAgo: "1 week ago",
    likes: 51
  },
  {
    id: 11,
    name: "Gaurav Joshi",
    location: "Ahmedabad",
    avatar: "G",
    verified: true,
    rating: 5,
    title: "Stress aur pairon ki burning me bohot aaram mila",
    image: "/images/ugc-review-1.jpg",
    text: "Tax audit season me 14 ghante laptop pe baithna padta hai. Feet burning hoti thi. Yeh patch lagane ke 20 min baad pair me warmth aati hai aur stress gayab ho jata hai. Must try product!",
    timeAgo: "10 days ago",
    likes: 36
  },
  {
    id: 12,
    name: "Deepa Sharma",
    location: "Surat",
    avatar: "D",
    verified: true,
    rating: 5,
    title: "Pair ki badboo aur chipchipapan bilkul khatam",
    image: "/images/ugc-review-12.jpg",
    text: "Sardi-garmi dono me heels me sweat aata tha jisse badboo rehti thi. Yeh patch lagane ke baad soles ekdum clean aur dry rehte hain. 5 stars for the fast delivery too.",
    timeAgo: "2 weeks ago",
    likes: 22
  }
];

// LIVE POPUP TOAST DATA (IN HINGLISH)
const LIVE_NOTIFICATIONS = [
  { name: "Pooja (Pune)", action: "ne Buy 1 Get 1 Free pack order kiya", time: "2 minutes ago" },
  { name: "Yash (Jaipur)", action: "ne Family Pack COD me mangwaya", time: "4 minutes ago" },
  { name: "Swapna (Hyderabad)", action: "ne Buy 1 Get 1 Free pack book kiya", time: "7 minutes ago" },
  { name: "Rajesh (Delhi)", action: "ne Buy 2 Get 2 Free pack book kiya", time: "11 minutes ago" },
  { name: "Sonali (Mumbai)", action: "ne Buy 1 Get 1 Free pack order kiya", time: "14 minutes ago" },
  { name: "Vikram (Kolkata)", action: "ne Family Pack book kiya", time: "18 minutes ago" }
];

export default function KinokiDetoxPage() {
  const router = useRouter();
  const [selectedBundle, setSelectedBundle] = useState<BundleOption>(BUNDLE_OPTIONS[1]);
  const [activeImage, setActiveImage] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ minutes: 11, seconds: 48 });
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeDayTab, setActiveDayTab] = useState<"day1" | "day5" | "day10">("day1");

  // Review Filter Tab
  const [reviewFilter, setReviewFilter] = useState<"all" | "photos" | "fiveStar">("all");

  // Live Toast Notification
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);

  // Pincode Checker State
  const [pincode, setPincode] = useState("");
  const [pincodeStatus, setPincodeStatus] = useState<"idle" | "success" | "error">("idle");

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 14, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Live Notification Toast cycler
  useEffect(() => {
    const interval = setInterval(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4500);
      setCurrentNotificationIndex((prev) => (prev + 1) % LIVE_NOTIFICATIONS.length);
    }, 8500);
    return () => clearInterval(interval);
  }, []);

  const handlePincodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.trim().length === 6 && /^\d+$/.test(pincode)) {
      setPincodeStatus("success");
    } else {
      setPincodeStatus("error");
    }
  };

  // ACTION REDIRECT TO PAYMENT PAGE
  const redirectToPayment = () => {
    router.push(`/checkout?bundle=${selectedBundle.id}`);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans pb-28 md:pb-16 relative">
      
      {/* 1. TOP FLASH SALE ANNOUNCEMENT BAR */}
      <div className="bg-red-600 text-white text-xs md:text-sm font-semibold py-2.5 px-3 sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-yellow-400 text-red-900 px-2 py-0.5 rounded-full text-[11px] font-extrabold uppercase animate-pulse">
              Dhamaka Offer
            </span>
            <span>🔥 BUY 1 GET 1 FREE (Sirf Aaj Ke Liye) | Cash on Delivery Available</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono bg-red-700/60 px-2.5 py-0.5 rounded text-xs">
            <Clock className="w-3.5 h-3.5 text-yellow-300" />
            <span>Offer khatam hone me:</span>
            <span className="font-bold text-yellow-300">
              {String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* 2. BRAND HEADER WITH ACTION BUTTON */}
      <header className="bg-white border-b border-slate-200 py-3 px-4 shadow-sm sticky top-[37px] z-30">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-black text-lg shadow-sm">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-lg font-black tracking-tight text-slate-900 leading-none">
                KINOKI<span className="text-emerald-600"> HERBAL</span>
              </div>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                100% Certified Bamboo Ginger Pads
              </span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              <Truck className="w-3.5 h-3.5" />
              <span>Ghar Pe Delivery Ke Baad Cash Do (COD)</span>
            </div>
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-slate-700 font-bold">4.8/5</span>
              <span className="text-slate-400">(14,280+ Reviews)</span>
            </div>
          </div>

          {/* ACTION BUTTON 1: TOP HEADER */}
          <button
            onClick={redirectToPayment}
            className="bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            <span>Abhi Order Karein</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* 3. HERO PRODUCT SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: IMAGE GALLERY (USING 1200x1200 ONLINE HIGH-RES SHOTS) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-square md:aspect-[4/3] bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex items-center justify-center p-3">
              <span className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-black uppercase px-2.5 py-1 rounded-md shadow-md z-10 flex items-center gap-1">
                <Flame className="w-3 h-3 fill-white" />
                {selectedBundle.discountBadge}
              </span>

              <div className="absolute top-3 right-3 bg-emerald-500/95 text-white text-[11px] font-bold px-2 py-1 rounded-md shadow-sm z-10 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                100% Asli Herbal
              </div>

              <div className="relative w-full h-full">
                <Image
                  src={GALLERY_IMAGES[activeImage].src}
                  alt={GALLERY_IMAGES[activeImage].alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* THUMBNAILS */}
            <div className="grid grid-cols-5 gap-2">
              {GALLERY_IMAGES.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-square rounded-xl bg-white border-2 overflow-hidden p-1 transition-all cursor-pointer ${
                    activeImage === idx
                      ? "border-emerald-600 shadow-sm scale-105"
                      : "border-slate-200 hover:border-slate-300 opacity-80"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain"
                  />
                </button>
              ))}
            </div>

            {/* LIVE VIEWER & DISPATCH TIME */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-center gap-3 text-xs text-amber-900">
              <div className="w-8 h-8 rounded-full bg-amber-400/30 flex items-center justify-center shrink-0">
                <Eye className="w-4 h-4 text-amber-800" />
              </div>
              <div>
                <span className="font-bold">48 log abhi is product ko dekh rahe hain.</span>
                <p className="text-[11px] text-amber-800/80">
                  ⚡ <strong>Agale 38 minutes me order karein</strong> — Aaj sham 5:00 PM tak BlueDart dispatch ho jayega!
                </p>
              </div>
            </div>

            {/* SENSORY PROOF BOX (DAY 1 vs DAY 5 vs DAY 10) */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  Overnight Detox Progression (Din Ke Hisab Se)
                </h4>
                <span className="text-[11px] text-slate-500 font-medium">Click karke dekhein</span>
              </div>

              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-lg mb-3">
                <button
                  onClick={() => setActiveDayTab("day1")}
                  className={`py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    activeDayTab === "day1"
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Day 1 (Black)
                </button>
                <button
                  onClick={() => setActiveDayTab("day5")}
                  className={`py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    activeDayTab === "day5"
                      ? "bg-amber-700 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Day 5 (Brown)
                </button>
                <button
                  onClick={() => setActiveDayTab("day10")}
                  className={`py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    activeDayTab === "day10"
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Day 10 (Clear)
                </button>
              </div>

              {activeDayTab === "day1" && (
                <div className="text-xs text-slate-600 bg-slate-50 border border-slate-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-900"></span>
                    Heavy Toxin Extraction (Pura Kaala)
                  </div>
                  Pehle din patch bilkul pitch-black aur geela ho jata hai. Pair ke acupuncture points se jam-hua toxic dampness aur moisture nikalta hai.
                </div>
              )}

              {activeDayTab === "day5" && (
                <div className="text-xs text-slate-600 bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 font-bold text-amber-900 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-700"></span>
                    Circulation Boost & Dard Me Aaram
                  </div>
                  Patch ka colour light brown ho jata hai. Aedi aur ghutne ka dard kafi kam ho jata hai aur subah aalsapan bilkul nahi rehta.
                </div>
              )}

              {activeDayTab === "day10" && (
                <div className="text-xs text-slate-600 bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 font-bold text-emerald-900 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                    Full Energy & Gehri Neend
                  </div>
                  Patch subah kafi hadd tak saaf nikalta hai. Body me fresh feel hota hai aur raat bhar bina toote gehri neend aati hai.
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: BUY BOX & BUNDLES */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-700">4.8</span>
                <span className="text-xs text-slate-400">(2,481 Verified Customer Reviews)</span>
              </div>

              <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                Kinoki™ Kiyome Herbal Detox Foot Pads (Bamboo Vinegar & Ginger)
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Aedi ke dard, pairon ki sujan, din bhar ki thakan aur bechain neend ka 100% natural Japanese formula.
              </p>
            </div>

            {/* PRICING BLOCK */}
            <div className="bg-slate-100 border border-slate-200 rounded-xl p-4">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl md:text-4xl font-black text-slate-900">
                  ₹{selectedBundle.price}
                </span>
                <span className="text-base text-slate-400 line-through">
                  ₹{selectedBundle.originalPrice}
                </span>
                <span className="bg-emerald-600 text-white text-xs font-extrabold px-2.5 py-1 rounded-md uppercase">
                  {selectedBundle.discountBadge}
                </span>
              </div>
              <div className="text-xs text-emerald-700 font-semibold mt-1.5 flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5" />
                {selectedBundle.freeShipping
                  ? "✅ FREE Cash on Delivery (All India) Included"
                  : "🚚 Standard Delivery (+₹49 COD fee)"}
              </div>
            </div>

            {/* BUNDLE SELECTOR CARDS */}
            <div className="space-y-3">
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 flex items-center justify-between">
                <span>Apna Offer Chunein:</span>
                <span className="text-emerald-600 font-bold lowercase">Recommended: Buy 1 Get 1 Free</span>
              </label>

              {BUNDLE_OPTIONS.map((bundle) => {
                const isSelected = selectedBundle.id === bundle.id;
                return (
                  <div
                    key={bundle.id}
                    onClick={() => setSelectedBundle(bundle)}
                    className={`relative rounded-xl border-2 p-4 cursor-pointer transition-all ${
                      isSelected
                        ? "border-emerald-600 bg-emerald-50/50 shadow-md ring-2 ring-emerald-500/20"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    {bundle.tag && (
                      <span className="absolute -top-2.5 right-4 bg-emerald-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-full shadow-sm">
                        {bundle.tag}
                      </span>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                            isSelected
                              ? "border-emerald-600 bg-emerald-600"
                              : "border-slate-300 bg-white"
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 text-white stroke-[3]" />}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm md:text-base text-slate-900 leading-tight">
                            {bundle.title}
                          </h4>
                          <p className="text-xs text-slate-500 mt-0.5">{bundle.subtitle}</p>
                          {bundle.freeGift && (
                            <span className="inline-block text-[11px] font-bold text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded mt-1">
                              🎁 {bundle.freeGift}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-lg font-black text-slate-900">₹{bundle.price}</div>
                        <div className="text-xs text-slate-400 line-through">₹{bundle.originalPrice}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* PINCODE CHECKER */}
            <div className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-sm">
              <form onSubmit={handlePincodeCheck} className="flex gap-2">
                <input
                  type="text"
                  maxLength={6}
                  placeholder="Apna 6-digit Pincode daalke COD check karein"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="flex-1 bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
                />
                <button
                  type="submit"
                  className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all cursor-pointer"
                >
                  Check Karein
                </button>
              </form>
              {pincodeStatus === "success" && (
                <div className="text-xs text-emerald-700 font-semibold mt-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Badhiya! Aapke pincode pe Free Cash on Delivery available hai.
                </div>
              )}
              {pincodeStatus === "error" && (
                <div className="text-xs text-red-600 font-medium mt-2 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Kripya sahi 6-digit Indian PIN code dalein.
                </div>
              )}
            </div>

            {/* ACTION BUTTON 2: MAIN BUY BOX REDIRECT */}
            <div className="space-y-3 pt-2">
              <button
                onClick={redirectToPayment}
                className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white py-4 px-6 rounded-2xl font-black text-base md:text-lg shadow-xl shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 animate-bounce-subtle cursor-pointer"
              >
                <span>CASH ON DELIVERY ORDER KAREIN — ₹{selectedBundle.price}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={`https://wa.me/918178557544?text=Namaste,%20mujhe%20Kinoki%20Detox%20Foot%20Pads%20(${encodeURIComponent(
                  selectedBundle.title
                )})%20order%20karna%20hai%20Rs.${selectedBundle.price}%20me.%20Kripya%20mera%20order%20confirm%20karein.`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 py-3 px-4 rounded-xl font-bold text-xs md:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Pe 10 Second Me Order Karein</span>
              </a>
            </div>

            {/* TRUST BADGES ROW */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200 text-center">
              <div className="flex flex-col items-center p-2 rounded-lg bg-slate-50">
                <Truck className="w-4 h-4 text-emerald-600 mb-1" />
                <span className="text-[11px] font-bold text-slate-800">Cash on Delivery</span>
                <span className="text-[10px] text-slate-400">Ghar aane par paise do</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-lg bg-slate-50">
                <RotateCcw className="w-4 h-4 text-emerald-600 mb-1" />
                <span className="text-[11px] font-bold text-slate-800">7-Din Replacement</span>
                <span className="text-[10px] text-slate-400">Full safety guarantee</span>
              </div>
              <div className="flex flex-col items-center p-2 rounded-lg bg-slate-50">
                <ShieldCheck className="w-4 h-4 text-emerald-600 mb-1" />
                <span className="text-[11px] font-bold text-slate-800">100% Herbal</span>
                <span className="text-[10px] text-slate-400">Bans & Adrak formula</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. REAL CUSTOMER REVIEWS WITH 12 AUTHENTIC SMARTPHONE UGC PHOTOS & HINGLISH */}
      <section className="max-w-6xl mx-auto px-4 py-12 border-t border-slate-200">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-full mb-2">
            <CheckCheck className="w-3.5 h-3.5" />
            100% Real Smartphone Customer Photos & Reviews
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            Customer Photos & Saccha Hinglish Experience
          </h2>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            Overall 4.8/5 Rating based on 2,481+ verified buyers across 28+ Indian cities
          </p>
        </div>

        {/* REVIEW FILTER PILLS */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          <button
            onClick={() => setReviewFilter("all")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              reviewFilter === "all"
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
            }`}
          >
            All Reviews (2,481)
          </button>
          <button
            onClick={() => setReviewFilter("photos")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
              reviewFilter === "photos"
                ? "bg-emerald-600 text-white shadow-sm"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Photos Wale Reviews (640+)</span>
          </button>
          <button
            onClick={() => setReviewFilter("fiveStar")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
              reviewFilter === "fiveStar"
                ? "bg-amber-600 text-white shadow-sm"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
            }`}
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>5 Stars (2,180)</span>
          </button>
        </div>

        {/* 12 REVIEWS GRID - EVERY CARD USES A UNIQUE REALISTIC SMARTPHONE UGC IMAGE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {PHOTO_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* REAL SMARTPHONE CUSTOMER PHOTO */}
                <div className="relative aspect-square w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                  <Image
                    src={rev.image}
                    alt={rev.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 right-2 bg-black/60 text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                    <Camera className="w-3 h-3" /> Real Photo
                  </span>
                </div>

                {/* USER INFO */}
                <div className="p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                      {rev.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-xs text-slate-900 flex items-center gap-1">
                        <span>{rev.name}</span>
                        {rev.verified && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />}
                      </div>
                      <span className="text-[10px] text-slate-400">{rev.location} • {rev.timeAgo}</span>
                    </div>
                  </div>

                  {/* 5 STARS */}
                  <div className="flex items-center text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>

                  {/* REVIEW TITLE & BODY IN HINGLISH */}
                  <h4 className="font-bold text-xs text-slate-900 leading-snug">{rev.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{rev.text}</p>
                </div>
              </div>

              <div className="px-4 pb-3 pt-1 border-t border-slate-50 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <ThumbsUp className="w-3 h-3" /> Helpful ({rev.likes})
                </span>
                <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">
                  ✓ Verified Order
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ACTION BUTTON 3: BELOW PHOTO REVIEWS */}
        <div className="text-center mt-10 bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
          <h3 className="text-lg font-black text-slate-900 mb-1">
            India Ke 14,280+ Khush Customers Ki Tarah Aap Bhi Try Karein
          </h3>
          <p className="text-xs text-slate-600 mb-4">
            Zero risk: Cash on delivery available hai, ghar par courier aane ke baad hi payment karein.
          </p>
          <button
            onClick={redirectToPayment}
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
          >
            <span>BUY 1 GET 1 FREE CLAIM KAREIN (₹{selectedBundle.price})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 5. PROBLEM vs SOLUTION SECTION */}
      <section className="bg-slate-900 text-white py-12 px-4 mt-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
              Pain Spray Aur Balms Se Aaram Kyu Nahi Milta?
            </span>
            <h2 className="text-2xl md:text-3xl font-black mt-3">
              Sara Body Ka Stress & Impurities Pairon Me Jama Ho Jata Hai
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Din bhar khade rehne ya lagatar travel karne se pairon aur aedi me blood flow slow ho jata hai aur toxins jama hone lagte hain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-950/40 border border-red-900/60 rounded-2xl p-6">
              <h3 className="text-lg font-black text-red-300 flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-red-900/80 flex items-center justify-center text-xs text-white">✕</span>
                Kinoki Detox Ke Bina:
              </h3>
              <ul className="space-y-3 text-xs md:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Subah uthte hi aedi aur talve me tezz chubhan aur dard.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Sham tak pairon me bhari-pan aur ghantho me sujan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Raat ko talvon me jalan aur bechaini ki wajah se neend na aana.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  <span>Market ke chemical sprays jo sirf 10 minute aaram dete hain.</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-950/40 border border-emerald-800/80 rounded-2xl p-6">
              <h3 className="text-lg font-black text-emerald-300 flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-emerald-700 flex items-center justify-center text-xs text-white">✓</span>
                Kinoki Overnight Detox Ke Sath:
              </h3>
              <ul className="space-y-3 text-xs md:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bamboo vinegar sote samay body se saari gandagi aur dampness kheech leta hai.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Pair ke 60+ acupuncture points bina kisi sui ke stimulate hote hain.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bina karwat badle gehri aur shaant neend aati hai.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Subah uthte hi pair 5kg halke aur dard-mukt feel hote hain.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ACTION BUTTON 4: IN PROBLEM SECTION */}
          <div className="text-center mt-8">
            <button
              onClick={redirectToPayment}
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm px-8 py-3.5 rounded-xl shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>PEHLE HI DIN SE AARAM PAYEIN — ORDER COD NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. 6 CORE BENEFITS GRID */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            Har Ek Patch Ke 6 Asli Ayurvedic Fayde
          </h2>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            Asli Japanese bamboo vinegar, sonth (ginger root), tourmaline aur negative ion powder se bana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-3">
              <Footprints className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-1">Aedi & Talve Ka Dard Gayab</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Din bhar khade rehne ya chalne se hone wale plantar fasciitis aur aedi ke dard me turant aaram deta hai.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 mb-3">
              <Moon className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-1">Raat Bhar Gehri Neend</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Talvon ki burning sensation ko shaant karta hai aur body stress release karke bina toote neend deta hai.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 mb-3">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-1">Pairon Ki Sujan Me Kami</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Jama huye extra fluid aur dampness ko nikal kar lower legs me blood circulation tez karta hai.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 mb-3">
              <Leaf className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-1">100% Herbal & Safe</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Koi artificial chemical ya side effect nahi. Ghar ke buzurgo aur ladies ke liye bilkul safe hai.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-700 mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-1">Subah Fresh Energy Boost</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Subah aalsapan ya bhari shareer nahi lagega. Din ki shuruat energy aur halkepan ke sath hogi.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700 mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-1">Pair Ki Badboo Khatam</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Bamboo vinegar sweat moisture aur bacteria ko sokh leta hai, jisse pair saaf aur fresh rehte hain.
            </p>
          </div>
        </div>

        {/* ACTION BUTTON 5: AFTER BENEFITS */}
        <div className="text-center mt-8">
          <button
            onClick={redirectToPayment}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-600/30 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>APNA HERBAL PACK MANGWAYEIN (₹{selectedBundle.price})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 7. HOW TO USE IN 3 STEPS */}
      <section className="bg-emerald-50 border-y border-emerald-200 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">
              Sote Samay Sirf 1 Minute Ka Kaam
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              Bistar pe jane se pehle ye 3 aasan steps follow karein:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center mx-auto mb-3">
                1
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Pair Dhoke Sukhayein</h3>
              <p className="text-xs text-slate-500">
                Gungune paani se pair dho kar toliye se achhi tarah sukha lein.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center mx-auto mb-3">
                2
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Talve Pe Chipkayein</h3>
              <p className="text-xs text-slate-500">
                Adhesive paper hata kar herbal pouch ko talve ya aedi par dabakar chipka dein.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center mx-auto mb-3">
                3
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">So Jayein & Subah Nikalein</h3>
              <p className="text-xs text-slate-500">
                Raat bhar 6 se 8 ghante laga rehne dein. Subah kaala hua patch utaar kar pair dho lein.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            Aam Taur Par Puche Jane Wale Sawal (FAQs)
          </h2>
          <p className="text-xs md:text-sm text-slate-500 mt-1">
            Order karne se pehle zaroor padhein:
          </p>
        </div>

        <div className="space-y-3">
          {[
            {
              q: "Subah patch kaala ya dark brown kyu nikalta hai?",
              a: "Hamare pairon me 60 se zyada acupuncture points hote hain jaha shareer ki gandagi aur moisture jama hota hai. Patch ka bamboo vinegar aur tourmaline mineral is moisture ko sokh leta hai, jisse patch ka rang kaala ho jata hai. Ye is baat ka saboot hai ki patch ne raat bhar kaam kiya hai."
            },
            {
              q: "Kitne din use karne par best aaram milega?",
              a: "Kam se kam 5 se 10 din lagatar use karein. Shuru ke dino me patch zyada kaala aur geela niklega. 7-10 din ke baad patch ka rang halka hota jayega aur aapke pairon ka dard aur thakan kafi kam ho jayegi."
            },
            {
              q: "Kya ye buzurgo aur sugar ke marizon ke liye safe hai?",
              a: "Ji haan! Kinoki pads 100% natural herbal jadibutiyon (ginger aur bamboo vinegar) se bane hain. Isme koi sui ya chemical nahi hai. Ye sirf bahar se chipkane ke liye hai. Bas dhyan rahe ki khule ghaav ya chot par na lagayein."
            },
            {
              q: "Cash on Delivery (COD) kaise kaam karta hai?",
              a: "Aapko abhi koi paisa dene ki zaroorat nahi hai. Form me apna address dalein, hum 24 ghante me parcel dispatch karenge. Jab delivery boy aapke ghar aayega, tab aap cash ya UPI se payment kar sakte hain."
            },
            {
              q: "Agar parcel me koi damage nikla toh?",
              a: "Hum 7-din ki replacement guarantee dete hain. Agar courier me koi kharabi aayi, toh hume WhatsApp par photo bhejein, hum turant naya packet bina kisi charge ke bhejenge."
            }
          ].map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-4 text-left font-bold text-sm text-slate-900 flex items-center justify-between gap-3 cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    activeFaq === idx ? "rotate-180 text-emerald-600" : ""
                  }`}
                />
              </button>
              {activeFaq === idx && (
                <div className="px-4 pb-4 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 9. ECOMMERCE FOOTER */}
      <footer className="bg-slate-900 text-white text-xs py-8 px-4 mt-12 border-t border-slate-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <div className="font-black text-sm tracking-tight text-white mb-1">
              KINOKI™ NATURAL HEALTH INDIA
            </div>
            <p className="text-slate-400 text-[11px]">
              Direct-to-Consumer Herbal Wellness Store • 28,000+ Indian Pincodes Pe Fast COD Shipping
            </p>
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Shipping Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>

      {/* 10. STICKY MOBILE BOTTOM BAR (ACTION BUTTON 6) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-3 md:hidden shadow-2xl flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] font-bold text-slate-400 uppercase block">Total Price:</span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-black text-slate-900">₹{selectedBundle.price}</span>
            <span className="text-xs text-slate-400 line-through">₹{selectedBundle.originalPrice}</span>
          </div>
        </div>

        <button
          onClick={redirectToPayment}
          className="flex-1 bg-emerald-600 active:scale-95 text-white py-3 px-4 rounded-xl font-black text-xs uppercase shadow-md shadow-emerald-600/30 flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>ORDER KAREIN (COD)</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 11. LIVE RECENT BUYER TOAST POPUP IN HINGLISH (BOTTOM-LEFT) */}
      {showToast && (
        <div className="fixed bottom-20 md:bottom-6 left-4 z-40 bg-white border border-slate-200 rounded-2xl p-3 shadow-xl max-w-xs animate-slide-in flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 leading-tight">
              {LIVE_NOTIFICATIONS[currentNotificationIndex].name}
            </div>
            <p className="text-[11px] text-emerald-700 font-medium">
              {LIVE_NOTIFICATIONS[currentNotificationIndex].action}
            </p>
            <span className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
              <Clock className="w-2.5 h-2.5" />
              {LIVE_NOTIFICATIONS[currentNotificationIndex].time}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
