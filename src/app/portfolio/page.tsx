"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ExternalLink, 
  Search, 
  Globe, 
  ArrowUpRight,
  Lock,
  ArrowRight
} from "lucide-react";
import { getProjects, Project } from "../../utils/storage";
import { CATEGORIES } from "../../data/projects";

export default function PortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setProjects(getProjects());
  }, []);

  const filteredProjects = projects.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Studio Header in Light Theme */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          <Globe className="w-3.5 h-3.5 text-emerald-600" />
          <span>Verified Deployments Directory</span>
          <span className="text-emerald-300">/</span>
          <span>{projects.length} Production Systems</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Complete Production Client Portfolio
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Every website, digital catalog, diagnostic portal, and custom CRM below is an active deployment built for our clients across India. Click "Visit Website" to test any site live.
        </p>
      </div>

      {/* Control Bar: Categories & Search */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {CATEGORIES.map((cat) => {
            const count =
              cat === "All"
                ? projects.length
                : projects.filter((p) => p.category === cat).length;
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  active
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                }`}
              >
                <span>{cat}</span>
                <span className={`ml-1.5 text-[10px] ${active ? "text-slate-400" : "text-slate-500"}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by client or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400"
          />
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden"
          >
            {/* Top Bar */}
            <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-100 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                {proj.category}
              </span>
              <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Live Client
              </span>
            </div>

            {/* Body */}
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900">
                  {proj.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {proj.description}
                </p>
              </div>

              {/* Tech Tags & Launch */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {proj.tech.slice(0, 2).map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-2">
          <p className="text-sm text-slate-700">No project matched "{searchQuery}".</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="text-xs text-emerald-700 font-semibold underline"
          >
            Reset filters
          </button>
        </div>
      )}

      {/* Admin Gateway Footnote */}
      <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
        <span>Swastik Labs Verified Client Roster</span>
        <Link href="/admin" className="hover:text-slate-800 transition-colors flex items-center gap-1 font-semibold">
          <Lock className="w-3 h-3" />
          <span>Add New Client Site via Admin</span>
        </Link>
      </div>
    </div>
  );
}
