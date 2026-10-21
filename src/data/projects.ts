export interface Project {
  id: string;
  name: string;
  url: string;
  category: "Retail & Jewellery" | "Industrial & Engineering" | "Healthcare" | "Real Estate & Hospitality" | "B2B & Enterprise CRM";
  badge: string;
  description: string;
  tech: string[];
  featured: boolean;
  metric?: string;
  year?: string;
}

export const INITIAL_PROJECTS: Project[] = [
  {
    id: "balkishandass",
    name: "Balkishandass Jewellers",
    url: "https://www.balkishandass.com/",
    category: "Retail & Jewellery",
    badge: "Heritage Jewellery",
    description: "Prestigious luxury jewellery and bullion brand portal featuring royal diamond collections, heritage bridal ornaments, and direct showroom visit appointments.",
    tech: ["Next.js", "Tailwind CSS", "WhatsApp Catalog", "SEO"],
    featured: true,
    metric: "Heritage Luxury Brand",
    year: "2024"
  },
  {
    id: "fundsphere",
    name: "FundSphere FinTech Platform",
    url: "https://fundsphere-six.vercel.app/",
    category: "B2B & Enterprise CRM",
    badge: "Modern FinTech App",
    description: "High-tech financial management and intelligent investment dashboard featuring real-time financial tracking, portfolio analytics, and automated reporting.",
    tech: ["Next.js App Router", "TypeScript", "Tailwind", "Vercel"],
    featured: true,
    metric: "Interactive Web App",
    year: "2024"
  },
  {
    id: "rk-steel-company",
    name: "RK Steel Company",
    url: "https://www.rksteelcompany.in/",
    category: "Industrial & Engineering",
    badge: "Steel & Metallurgy",
    description: "Industrial steel supplies, structural beams, TMT rebar, and custom metal fabrication portal built for nationwide B2B purchase orders.",
    tech: ["Industrial Web", "RFQ Engine", "Mobile First", "Direct WA Quotes"],
    featured: true,
    metric: "Direct B2B Steel Tenders",
    year: "2024"
  },
  {
    id: "swastik-jewel",
    name: "Swastik Jewel",
    url: "https://www.swastikjewel.in/",
    category: "Retail & Jewellery",
    badge: "Flagship Luxury Client",
    description: "High-converting digital luxury jewellery storefront featuring live 22K/24K daily bullion rates, bridal catalogs, and 1-tap WhatsApp inquiries.",
    tech: ["Next.js", "Tailwind CSS", "WhatsApp API", "Cloudflare"],
    featured: true,
    metric: "4.8x Walk-in Inquiries",
    year: "2024"
  },
  {
    id: "swastik-crm",
    name: "Swastik Jewel Enterprise CRM & Billing",
    url: "https://crm.swastikjewel.in/admin/dashboard",
    category: "B2B & Enterprise CRM",
    badge: "Enterprise Automation ERP",
    description: "Full operations CRM suite managing live diamond carat pricing, automated WhatsApp GST invoice delivery, stock audits, and role-based staff security.",
    tech: ["Next.js", "Node.js Express", "PostgreSQL", "WhatsApp Web Bot", "PDF Engine"],
    featured: true,
    metric: "100% Automated Invoicing",
    year: "2024"
  },
  {
    id: "saurikshavilla",
    name: "Saurikshavilla Luxury Villa",
    url: "https://www.saurikshavilla.com",
    category: "Real Estate & Hospitality",
    badge: "Live Client",
    description: "High-end luxury villa booking and private estate reservation portal with interactive galleries and direct reservation lead capture.",
    tech: ["React", "Tailwind CSS", "Lead CRM", "Vercel"],
    featured: true,
    metric: "+180% High-Ticket Leads",
    year: "2024"
  },
  {
    id: "dr-nidan",
    name: "Dr. Nidan Diagnostic & Health",
    url: "https://www.drnidan.in",
    category: "Healthcare",
    badge: "Live Healthcare Portal",
    description: "Modern clinical diagnostic laboratory portal allowing patients to browse test packages, book home sample collections, and download lab reports.",
    tech: ["React Health Portal", "Report Lookup", "WhatsApp Alerts"],
    featured: true,
    metric: "1,200+ Monthly Report Views",
    year: "2024"
  },
  {
    id: "dr-nidan-ecatalogue",
    name: "Dr. Nidan Healthcare E-Catalogue",
    url: "https://e-catalouge-1.vercel.app",
    category: "Healthcare",
    badge: "Interactive App",
    description: "Interactive mobile e-catalogue displaying clinical test profiles and diagnostic health checkups with 1-tap booking links.",
    tech: ["Next.js", "Vercel Edge", "PWA Ready"],
    featured: false,
    metric: "<0.8s Load Speed",
    year: "2024"
  },
  {
    id: "shiv-iron",
    name: "Shiv Iron Steel Manufacturing",
    url: "https://www.shiviron.com",
    category: "Industrial & Engineering",
    badge: "B2B Manufacturing",
    description: "Industrial steel supply and fabrication specifications portal built for bulk contractor orders and structural engineering supplies.",
    tech: ["Fast Static Web", "B2B RFQ Flow", "Tailwind"],
    featured: false,
    metric: "35+ Monthly Bulk Enquiries",
    year: "2024"
  },
  {
    id: "shree-balaji-services",
    name: "Shree Balaji Services (Water Treatment Plant)",
    url: "https://www.watertreatmentplant.in",
    category: "Industrial & Engineering",
    badge: "Live Client",
    description: "Industrial environmental engineering and commercial water treatment plants portal for pan-India government tenders.",
    tech: ["Modern Web", "SEO Engine", "Quote Funnel"],
    featured: false,
    metric: "#1 Ranking in Region",
    year: "2024"
  },
  {
    id: "jp-engg-materials",
    name: "JP Engineering Materials",
    url: "https://www.jpsenggmaterials.com",
    category: "Industrial & Engineering",
    badge: "Live Client",
    description: "Engineering consumables and heavy construction materials digital catalog with instant quotation generator.",
    tech: ["Web Architecture", "Mobile First", "Direct WA Quotes"],
    featured: false,
    metric: "Instant RFQ Delivery",
    year: "2024"
  },
  {
    id: "shri-shri-residency",
    name: "Shri Shri Residency",
    url: "https://srisriresidency.in/",
    category: "Real Estate & Hospitality",
    badge: "Live Client",
    description: "Boutique hospitality suites showcase with room inventory preview, amenities gallery, and direct check-in booking.",
    tech: ["Interactive Web", "High-Speed CDN", "Booking Engine"],
    featured: false,
    metric: "+65% Direct Bookings",
    year: "2024"
  },
  {
    id: "safety-experts-main",
    name: "Safety Experts Industrial",
    url: "https://safety-experts-main.vercel.app",
    category: "Industrial & Engineering",
    badge: "Interactive App",
    description: "PPE, fire safety gear, and industrial protective clothing catalog featuring dynamic product search and quote requests.",
    tech: ["Next.js", "Tailwind UI", "Vercel"],
    featured: false,
    metric: "200+ Safety SKUs",
    year: "2024"
  },
  {
    id: "rastriya-safety-expert",
    name: "Rastriya Safety Expert",
    url: "https://www.safetyexpert.in",
    category: "Industrial & Engineering",
    badge: "Live Client",
    description: "Institutional fire safety engineering, compliance auditing, and emergency gear distributor portal.",
    tech: ["B2B Portal", "Compliance Forms", "Cloudflare CDN"],
    featured: false,
    metric: "Certified Government Vendor",
    year: "2024"
  },
  {
    id: "selvon-instruments",
    name: "Selvon Instruments & Automation",
    url: "https://selvon.vercel.app",
    category: "Industrial & Engineering",
    badge: "Precision Engineering",
    description: "High-precision calibration instruments, sensors, and process automation controls digital showcase with datasheet downloads.",
    tech: ["Next.js", "Vercel", "PDF Spec Integration"],
    featured: false,
    metric: "Global Tech Standards",
    year: "2024"
  },
  {
    id: "garvik-india",
    name: "Garvik India Manufacturing",
    url: "https://www.garvikindia.com",
    category: "Industrial & Engineering",
    badge: "Live Client",
    description: "Heavy manufacturing and industrial machinery components showcase built for nationwide distributor acquisition.",
    tech: ["Corporate Web", "Distributor Portal", "Fast CDN"],
    featured: false,
    metric: "3.2x Lead Volume",
    year: "2024"
  },
  {
    id: "tent-event-items",
    name: "Tent Event Items Supplies",
    url: "https://www.tenteventitems.com",
    category: "Retail & Jewellery",
    badge: "Live Client",
    description: "Wedding and event decoration supplies, luxury tent fabrics, and catering equipment catalog enabling instant bulk purchase requests.",
    tech: ["E-Catalog", "Wholesale Inquiries", "Mobile First"],
    featured: false,
    metric: "Peak Wedding Season Traffic",
    year: "2024"
  },
  {
    id: "verma-food-system",
    name: "Verma Food System",
    url: "https://www.vermafoodsystem.in",
    category: "Industrial & Engineering",
    badge: "Live Client",
    description: "Commercial kitchen setups, stainless steel food processing machines, and industrial food grade automation equipment manufacturer.",
    tech: ["Industrial Web", "Machine Demo Videos", "Quote Form"],
    featured: false,
    metric: "Turnkey Kitchen Orders",
    year: "2024"
  },
  {
    id: "mekano-engineering",
    name: "Mekano Engineering Solutions",
    url: "https://www.mekanoengineering.com",
    category: "Industrial & Engineering",
    badge: "Live Client",
    description: "Precision mechanical engineering, tooling, and heavy industrial plant fabrication services with project portfolio showcases.",
    tech: ["Enterprise Web", "High-Res Gallery", "Custom Lead Pipe"],
    featured: false,
    metric: "Tier-1 Industrial Tenders",
    year: "2024"
  },
  {
    id: "ecom-experts",
    name: "Ecom Experts Agency",
    url: "https://www.ecomexperts.co.in",
    category: "B2B & Enterprise CRM",
    badge: "Digital Services",
    description: "Growth consultancy and e-commerce acceleration agency web presence with conversion-focused funnels.",
    tech: ["Next.js", "Framer Transitions", "Lead Capture Automation"],
    featured: false,
    metric: "50+ Client Intakes",
    year: "2024"
  },
  {
    id: "ar-enterprises",
    name: "AR Enterprises (Vadilal Logistics)",
    url: "https://www.ecomexperts.co.in",
    category: "B2B & Enterprise CRM",
    badge: "Enterprise Logistics",
    description: "FMCG distribution management, temperature-controlled cold chain logistics tracking, and route billing automation.",
    tech: ["Node.js Backend", "Express", "PostgreSQL", "Daily Dispatch"],
    featured: false,
    metric: "Zero Dispatch Errors",
    year: "2024"
  }
];

export const CATEGORIES = [
  "All",
  "Retail & Jewellery",
  "Industrial & Engineering",
  "B2B & Enterprise CRM",
  "Healthcare",
  "Real Estate & Hospitality"
] as const;
