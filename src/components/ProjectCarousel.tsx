"use client";

import React, { useState, useEffect } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  ArrowUpRight, 
  Check, 
  Sparkles,
  Globe,
  Play,
  Pause
} from "lucide-react";
import { Project } from "../data/projects";

interface CarouselProps {
  projects: Project[];
}

export default function ProjectCarousel({ projects }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Filter top showcase projects
  const showcaseList = projects.slice(0, 7);

  // Auto-advance carousel every 5 seconds if not paused
  useEffect(() => {
    if (isPaused || showcaseList.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showcaseList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, showcaseList.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + showcaseList.length) % showcaseList.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseList.length);
  };

  if (showcaseList.length === 0) return null;

  const current = showcaseList[currentIndex];

  return (
    <div 
      className="relative rounded-2xl bg-white border border-slate-200/90 shadow-md overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Carousel Navigation Bar */}
      <div className="bg-slate-50/80 px-6 py-3.5 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
            Featured Production Showcase
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-xs font-mono text-slate-500">
            Slide {String(currentIndex + 1).padStart(2, "0")} of {String(showcaseList.length).padStart(2, "0")}
          </span>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1.5 rounded-md hover:bg-slate-200 text-slate-500 transition-colors text-[11px] font-mono flex items-center gap-1"
            title={isPaused ? "Play Autoplay" : "Pause Autoplay"}
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={prevSlide}
            className="p-1.5 rounded-md border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 shadow-sm transition-colors"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={nextSlide}
            className="p-1.5 rounded-md border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 shadow-sm transition-colors"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Slide Content */}
      <div className="p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                {current.category}
              </span>
              {current.metric && (
                <span className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                  {current.metric}
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {current.name}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              {current.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {current.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Direct Launch Button */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href={current.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-sm transition-colors"
              >
                <span>Open Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={`https://wa.me/918178557544?text=I%20saw%20your%20work%20for%20${encodeURIComponent(current.name)}%20and%20want%20a%20similar%20system`}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                Request Similar System →
              </a>
            </div>
          </div>

          {/* Right Preview Card (Clean Browser Mockup in Light Colors) */}
          <div className="lg:col-span-7 rounded-xl bg-slate-900 text-slate-100 shadow-xl overflow-hidden border border-slate-800">
            {/* Browser Top Window */}
            <div className="bg-slate-800 px-4 py-2.5 flex items-center justify-between border-b border-slate-700">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="px-3 py-1 rounded bg-slate-900 text-[11px] font-mono text-slate-400 border border-slate-700 truncate max-w-[280px]">
                {current.url}
              </div>
              <div className="w-8 text-right">
                <Globe className="w-3.5 h-3.5 text-slate-400 inline-block" />
              </div>
            </div>

            {/* Mockup Preview Area */}
            <div className="p-8 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 min-h-[260px] flex flex-col justify-center items-center text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                {current.name.slice(0, 2).toUpperCase()}
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-white">{current.name}</h4>
                <p className="text-xs text-slate-400 font-mono">{current.badge}</p>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs text-emerald-300 font-mono">Live In Production</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Dot Nav Indicators */}
      <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex items-center justify-center gap-2">
        {showcaseList.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all ${
              currentIndex === idx
                ? "w-8 bg-emerald-600"
                : "w-2 bg-slate-300 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
