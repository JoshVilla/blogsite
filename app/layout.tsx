"use client";
import "./globals.css";
import ClientLayout from "./client-layout";
import Navbar from "@/components/navbar/navbar";
import { Toaster } from "@/components/ui/sonner";
import React from "react";
import Menu from "@/components/menu/menu";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientLayout>
          <Navbar />
          <Menu />
          {children}
        </ClientLayout>
        <Toaster />
      </body>
    </html>
  );
}
