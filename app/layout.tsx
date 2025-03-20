"use client";
import "./globals.css";
import ClientLayout from "./client-layout";
import Navbar from "@/components/navbar/navbar";
import { Toaster } from "@/components/ui/sonner";
import React from "react";
import Menu from "@/components/menu/menu";
import { usePathname } from "next/navigation";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname()
  console.log(path)
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientLayout>
          <Navbar />
          {path !== "/login" && path !== "/register" && <Menu />}
          {children}
        </ClientLayout>
        <Toaster />
      </body>
    </html>
  );
}
