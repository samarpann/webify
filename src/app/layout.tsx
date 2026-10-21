import type { Metadata } from "next";
import "./globals.css";
import AppShell from "../components/AppShell";

export const metadata: Metadata = {
  title: "Webiffy | Modern Tech & Web Agency for Local Businesses",
  description: "Webiffy builds high-converting mobile websites, 24/7 WhatsApp automation bots, and custom ERP software for local retailers, gyms, jewellery stores, and B2B enterprises.",
  keywords: "webiffy, web agency, tech agency, whatsapp automation bot, local business websites, custom CRM, jewellery software, gym websites",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
