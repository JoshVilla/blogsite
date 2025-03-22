import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import ClientLayout from "./client-layout";
import Navbar from "@/components/navbar/navbar";
import { Toaster } from "@/components/ui/sonner";
import React from "react";
import { metadata as siteMetadata } from "./metadata";
import MenuLayout from "./menu-layout";

export const metadata: Metadata = siteMetadata; // ✅ Set global metadata

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientLayout>
          <Navbar />
          <MenuLayout />
          {children}
          <SpeedInsights />
        </ClientLayout>
        <Toaster />
      </body>
    </html>
  );
}
