import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";
import Navbar from "@/components/navbar/navbar";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";

interface IMenuLinks {
  label: string
  key: string
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const menuLinks: IMenuLinks[] = [
    {
      label: "Home",
      key: "home"
    },
    {
      label: "My Blogs",
      key: "myBlogs"
    },
    {
      label: "My Likes",
      key: "myLikes"
    },
    {
      label: "My Favorites",
      key: "myFavorites"
    }
  ]
  return (
    <html lang="en" suppressHydrationWarning>
      <body ><ClientLayout>
        <Navbar />
        <div className="w-[90%] md:w-[70%] mx-auto mt-10 flex items-center gap-6 flex-wrap">
          {
            menuLinks.map((menu: IMenuLinks, index: number) =>  <Button key={menu.key+index} variant="link" className="hover:underline cursor-pointer" size="sm">{menu.label}</Button>)
          }
        </div>
       {children}</ClientLayout>
       <Toaster />
      </body>
    </html>
  );
}
