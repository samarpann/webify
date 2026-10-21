"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Lock, 
  Plus, 
  Trash2, 
  ExternalLink, 
  Star, 
  CheckCircle2, 
  RefreshCw, 
  Download, 
  MessageSquare, 
  Users, 
  FolderGit2, 
  Sliders
} from "lucide-react";
import { 
  getProjects, 
  saveProjects, 
  addProject, 
  deleteProject, 
  resetToDefaultProjects, 
  getInquiries, 
  updateInquiryStatus, 
  Inquiry, 
  getAgencySettings, 
  saveAgencySettings, 
  AgencySettings 
} from "../../utils/storage";
import { Project, CATEGORIES } from "../../data/projects";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [activeTab, setActiveTab] = useState<"projects" | "inquiries" | "settings">("projects");
  const [projects, setProjects] = useState<Project[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [settings, setSettings] = useState<AgencySettings>(getAgencySettings());

  // Form State
  const [newName, setNewName] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newCategory, setNewCategory] = useState<Project["category"]>("Retail & Jewellery");
  const [newBadge, setNewBadge] = useState("Live Client");
  const [newMetric, setNewMetric] = useState("+3x Inquiries");
  const [newTech, setNewTech] = useState("Next.js, Tailwind CSS, WhatsApp Bot");
  const [newDesc, setNewDesc] = useState("");
  const [newFeatured, setNewFeatured] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem("webiffy_admin_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
      loadData();
    }
  }, []);

  const loadData = () => {
    setProjects(getProjects());
    setInquiries(getInquiries());
    setSettings(getAgencySettings());
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === "1234" || pinInput.toLowerCase() === "webiffy") {
      setIsAuthenticated(true);
      sessionStorage.setItem("webiffy_admin_auth", "true");
      setErrorMsg("");
      loadData();
    } else {
      setErrorMsg("Invalid PIN. Default PIN is '1234'.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("webiffy_admin_auth");
  };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newUrl) return;

    const techArray = newTech.split(",").map((s) => s.trim()).filter(Boolean);

    addProject({
      name: newName,
      url: newUrl.startsWith("http") ? newUrl : `https://${newUrl}`,
      category: newCategory,
      badge: newBadge,
      metric: newMetric,
      tech: techArray.length ? techArray : ["Next.js", "Tailwind"],
      description: newDesc || "High-performance digital presence and lead generation website.",
      featured: newFeatured,
      year: new Date().getFullYear().toString()
    });

    setProjects(getProjects());
    setFormSuccess(true);
    setNewName("");
    setNewUrl("");
    setNewDesc("");
    setTimeout(() => setFormSuccess(false), 3000);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      deleteProject(id);
      setProjects(getProjects());
    }
  };

  const handleToggleFeatured = (id: string) => {
    const updated = projects.map((p) =>
      p.id === id ? { ...p, featured: !p.featured } : p
    );
    saveProjects(updated);
    setProjects(updated);
  };

  const handleResetDefaults = () => {
    if (confirm("Restore all default client websites from master list?")) {
      resetToDefaultProjects();
      setProjects(getProjects());
    }
  };

  const handleExportJSON = () => {
    const blob = new Blob([JSON.stringify(projects, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `webiffy-portfolio-backup-${Date.now()}.json`;
    a.click();
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    saveAgencySettings(settings);
    alert("Webiffy settings saved successfully!");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="bg-white max-w-sm w-full p-8 rounded-3xl border border-slate-200 shadow-md text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
            <Lock className="w-7 h-7" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">Webiffy Admin Console</h2>
            <p className="text-xs text-slate-500 mt-1">
              Enter your access PIN to add new client websites and review inquiries.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="Enter PIN (Default: 1234)"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-center text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 font-mono tracking-widest"
              />
              {errorMsg && (
                <p className="text-xs text-rose-600 mt-2 font-medium">{errorMsg}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-colors"
            >
              Unlock Console
            </button>
          </form>

          <p className="text-[11px] text-slate-400 font-mono">
            Default PIN: 1234
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h1 className="text-2xl font-bold text-slate-900">Webiffy Admin Console</h1>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Add client websites, manage live portfolio, and review incoming leads.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/portfolio"
            target="_blank"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm"
          >
            <span>View Live Portfolio</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={handleLogout}
            className="px-3 py-1.5 rounded-lg text-xs bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200 w-fit">
        <button
          onClick={() => setActiveTab("projects")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
            activeTab === "projects"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Client Sites ({projects.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("inquiries")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
            activeTab === "inquiries"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span>Website Leads ({inquiries.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("settings")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
            activeTab === "settings"
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>Webiffy Info</span>
        </button>
      </div>

      {/* TAB 1: ADD & MANAGE CLIENT WEBSITES */}
      {activeTab === "projects" && (
        <div className="space-y-8">
          {/* Add form */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Plus className="w-5 h-5 text-emerald-600" />
                <h3 className="text-base font-bold text-slate-900">Add New Client Website</h3>
              </div>
              {formSuccess && (
                <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" />
                  Published to Live Portfolio!
                </span>
              )}
            </div>

            <form onSubmit={handleAddProject} className="pt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Client / Store Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Royal Silk & Sarees"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Live Website URL *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. https://royalsilk.in"
                    value={newUrl}
                    onChange={(e) => setNewUrl(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Industry Category</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as Project["category"])}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-600"
                  >
                    <option value="Retail & Jewellery">Retail & Jewellery</option>
                    <option value="Industrial & Engineering">Industrial & Engineering</option>
                    <option value="B2B & Enterprise CRM">B2B & Enterprise CRM</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Real Estate & Hospitality">Real Estate & Hospitality</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Badge Label</label>
                  <input
                    type="text"
                    placeholder="e.g. Live Client, Flagship"
                    value={newBadge}
                    onChange={(e) => setNewBadge(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Metric</label>
                  <input
                    type="text"
                    placeholder="e.g. +3.5x Leads, 100% Automated"
                    value={newMetric}
                    onChange={(e) => setNewMetric(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Tech Stack (comma-separated)</label>
                  <input
                    type="text"
                    placeholder="Next.js, Tailwind, WhatsApp Bot"
                    value={newTech}
                    onChange={(e) => setNewTech(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Short Description</label>
                <textarea
                  rows={2}
                  placeholder="e.g. High-converting bridal saree lookbook with WhatsApp booking bot."
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700 font-semibold">
                  <input
                    type="checkbox"
                    checked={newFeatured}
                    onChange={(e) => setNewFeatured(e.target.checked)}
                    className="w-4 h-4 accent-emerald-600 rounded"
                  />
                  <span>Show in Carousel / Home Spotlight</span>
                </label>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors"
                >
                  Publish to Portfolio
                </button>
              </div>
            </form>
          </div>

          {/* List */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Active Client Websites ({projects.length})
                </h3>
                <p className="text-xs text-slate-500">
                  Every project listed below appears live in the Webiffy portfolio and carousel.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleExportJSON}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5 text-blue-600" />
                  <span>Backup JSON</span>
                </button>

                <button
                  onClick={handleResetDefaults}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-white border border-slate-200 text-slate-500 hover:text-rose-600 shadow-sm"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Restore Defaults</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-3"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                          {proj.category}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 mt-0.5">{proj.name}</h4>
                      </div>
                      <button
                        onClick={() => handleToggleFeatured(proj.id)}
                        className={`p-1.5 rounded-lg text-xs transition-colors ${
                          proj.featured
                            ? "bg-amber-100 text-amber-700 border border-amber-300"
                            : "text-slate-400 hover:text-slate-600"
                        }`}
                        title="Toggle Home Carousel Spotlight"
                      >
                        <Star className="w-4 h-4 fill-current" />
                      </button>
                    </div>

                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-blue-600 hover:underline flex items-center gap-1 mt-1 truncate max-w-sm font-mono"
                    >
                      <span>{proj.url}</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>

                    <p className="text-xs text-slate-600 mt-1.5 line-clamp-2">
                      {proj.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-mono text-slate-500">
                      {proj.tech.slice(0, 3).join(", ")}
                    </span>
                    <button
                      onClick={() => handleDelete(proj.id)}
                      className="text-slate-400 hover:text-rose-600 p-1 transition-colors"
                      title="Delete from Portfolio"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: INQUIRIES */}
      {activeTab === "inquiries" && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Website Inquiries ({inquiries.length})</h3>
            <p className="text-xs text-slate-500">
              Submitted from your Contact page & price calculator.
            </p>
          </div>

          {inquiries.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-2">
              <Users className="w-8 h-8 text-slate-400 mx-auto" />
              <p className="text-sm font-bold text-slate-700">No leads submitted yet.</p>
              <p className="text-xs text-slate-500">
                When visitors submit your Contact form, they appear here instantly.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {inquiries.map((inq) => (
                <div
                  key={inq.id}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-slate-900">{inq.name}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
                        {inq.businessType}
                      </span>
                    </div>

                    <p className="text-xs text-slate-700">
                      <strong>Phone:</strong> {inq.phone} • <strong>Budget:</strong> {inq.budget}
                    </p>

                    <p className="text-xs text-slate-500">
                      <strong>Services:</strong> {inq.servicesNeeded.join(", ")}
                    </p>

                    {inq.message && (
                      <p className="text-xs text-slate-600 italic bg-slate-50 p-2 rounded-lg border border-slate-100">
                        "{inq.message}"
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <select
                      value={inq.status}
                      onChange={(e) =>
                        updateInquiryStatus(inq.id, e.target.value as Inquiry["status"])
                      }
                      className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-800 focus:outline-none"
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Closed">Closed</option>
                      <option value="Archived">Archived</option>
                    </select>

                    <a
                      href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, "")}?text=Hi%20${encodeURIComponent(
                        inq.name
                      )}%2C%20thank%20you%20for%20contacting%20Webiffy.`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Lead</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 3: SETTINGS */}
      {activeTab === "settings" && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm max-w-2xl">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Webiffy Contact Configuration</h3>
          <form onSubmit={handleSaveSettings} className="space-y-4 text-xs">
            <div className="space-y-1">
              <label className="text-slate-700 font-bold">Agency Name</label>
              <input
                type="text"
                value={settings.agencyName}
                onChange={(e) => setSettings({ ...settings, agencyName: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-slate-700 font-bold">Calling Phone</label>
                <input
                  type="text"
                  value={settings.phone}
                  onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-700 font-bold">WhatsApp Number</label>
                <input
                  type="text"
                  value={settings.whatsappNumber}
                  onChange={(e) => setSettings({ ...settings, whatsappNumber: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900"
                />
              </div>
            </div>

            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors"
            >
              Save Configuration
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
