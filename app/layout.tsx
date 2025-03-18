"use client"
import "./globals.css";
import ClientLayout from "./client-layout";
import Navbar from "@/components/navbar/navbar";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface IMenuLinks {
  label: string
  key: string,
  path: string
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter()

  const menuLinks: IMenuLinks[] = [
    {
      label: "Home",
      key: "home",
      path: "/"
    },
    {
      label: "My Blogs",
      key: "myBlogs",
      path: "/myBlogs"
    },
    {
      label: "My Likes",
      key: "myLikes",
       path: "/myLikes"
    },
    {
      label: "My Favorites",
      key: "myFavorites",
       path: "/myFavorites"
    }
  ]
  return (
    <html lang="en" suppressHydrationWarning>
      <body ><ClientLayout>
        <Navbar />
        <div className="w-[90%] md:w-[70%] mx-auto mt-10 flex items-center gap-6 flex-wrap">
          {
            menuLinks.map((menu: IMenuLinks, index: number) =>  <Button key={menu.key+index} variant="link" className="hover:underline cursor-pointer" size="sm" onClick={() => router.push(menu.path)}>{menu.label}</Button>)
          }
        </div>
       {children}</ClientLayout>
       <Toaster />
      </body>
    </html>
  );
}
