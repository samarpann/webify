"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppWidget from "./WhatsAppWidget";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isEcommerce = pathname?.startsWith("/products") || pathname?.startsWith("/checkout");

  if (isEcommerce) {
    return <div className="min-h-screen bg-slate-50 text-slate-900">{children}</div>;
  }

  return (
    <>
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
