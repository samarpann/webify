import { Project, INITIAL_PROJECTS } from "../data/projects";

const STORAGE_KEY = "webiffy_projects_v1";
const INQUIRIES_KEY = "webiffy_inquiries";
const SETTINGS_KEY = "webiffy_settings";

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  businessType: string;
  servicesNeeded: string[];
  budget: string;
  message: string;
  createdAt: string;
  status: "New" | "Contacted" | "Closed" | "Archived";
}

export interface AgencySettings {
  agencyName: string;
  tagline: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  location: string;
  statsProjectsDone: string;
  statsHappyClients: string;
  statsRevenueGenerated: string;
}

export const DEFAULT_SETTINGS: AgencySettings = {
  agencyName: "Webiffy Tech & Web Agency",
  tagline: "High-Converting Websites, WhatsApp Automation Bots & Custom ERPs",
  phone: "+91 81785 57544",
  whatsappNumber: "918178557544",
  email: "hello@webiffy.in",
  location: "Ahmedabad • Surat • Mumbai • Global",
  statsProjectsDone: "45+",
  statsHappyClients: "30+",
  statsRevenueGenerated: "₹1.8 Cr+"
};

export function getProjects(): Project[] {
  if (typeof window === "undefined") {
    return INITIAL_PROJECTS;
  }
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PROJECTS));
      return INITIAL_PROJECTS;
    }
    return JSON.parse(saved);
  } catch (err) {
    console.error("Error reading projects from storage", err);
    return INITIAL_PROJECTS;
  }
}

export function saveProjects(projects: Project[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  } catch (err) {
    console.error("Error saving projects", err);
  }
}

export function addProject(newProj: Omit<Project, "id">): Project {
  const current = getProjects();
  const id = newProj.name.toLowerCase().replace(/[^a-z0-9]/g, "-") + "-" + Date.now();
  const created: Project = { ...newProj, id };
  const updated = [created, ...current];
  saveProjects(updated);
  return created;
}

export function deleteProject(id: string): void {
  const current = getProjects();
  const updated = current.filter((p) => p.id !== id);
  saveProjects(updated);
}

export function resetToDefaultProjects(): void {
  saveProjects(INITIAL_PROJECTS);
}

export function getInquiries(): Inquiry[] {
  if (typeof window === "undefined") return [];
  try {
    const saved = localStorage.getItem(INQUIRIES_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function saveInquiry(inquiry: Omit<Inquiry, "id" | "createdAt" | "status">): Inquiry {
  const list = getInquiries();
  const created: Inquiry = {
    ...inquiry,
    id: "inq-" + Date.now(),
    createdAt: new Date().toISOString(),
    status: "New"
  };
  const updated = [created, ...list];
  if (typeof window !== "undefined") {
    localStorage.setItem(INQUIRIES_KEY, JSON.stringify(updated));
  }
  return created;
}

export function updateInquiryStatus(id: string, status: Inquiry["status"]): void {
  const list = getInquiries();
  const updated = list.map((inq) => (inq.id === id ? { ...inq, status } : inq));
  if (typeof window !== "undefined") {
    localStorage.setItem(INQUIRIES_KEY, JSON.stringify(updated));
  }
}

export function getAgencySettings(): AgencySettings {
  if (typeof window === "undefined") return DEFAULT_SETTINGS;
  try {
    const saved = localStorage.getItem(SETTINGS_KEY);
    return saved ? { ...DEFAULT_SETTINGS, ...JSON.parse(saved) } : DEFAULT_SETTINGS;
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveAgencySettings(settings: AgencySettings): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (err) {
    console.error("Error saving settings", err);
  }
}
