"use client";
import "./globals.css";
import ClientLayout from "./client-layout";
import Navbar from "@/components/navbar/navbar";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { Heart, House, Newspaper, ThumbsUp } from "lucide-react";
import React, { ReactNode } from "react";

interface IMenuLinks {
  label: string;
  key: string;
  path: string;
  icon: any;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  const router = useRouter();
  const menuLinks: IMenuLinks[] = [
    {
      label: "Home",
      key: "home",
      path: "/",
      icon: House,
    },
    {
      label: "My Blogs",
      key: "myBlogs",
      path: "/myBlogs",
      icon: Newspaper,
    },
    {
      label: "My Likes",
      key: "myLikes",
      path: "/myLikes",
      icon: ThumbsUp,
    },
    {
      label: "My Favorites",
      key: "myFavorites",
      path: "/myFavorites",
      icon: Heart,
    },
  ];
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientLayout>
          <Navbar />
          <div className="w-[90%] md:w-[70%] mx-auto mt-10 flex items-center gap-6 flex-wrap">
            {menuLinks.map((menu: IMenuLinks, index: number) => (
              <Button
                key={menu.key + index}
                variant="link"
                className={`hover:underline cursor-pointer ${pathname === menu.path ? "underline": null}`}
                size="sm"
                onClick={() => router.push(menu.path)}
              >
               <menu.icon className="h-4 w-4"/> {menu.label}
              </Button>
            ))}
          </div>
          {children}
        </ClientLayout>
        <Toaster />
      </body>
    </html>
  );
}
