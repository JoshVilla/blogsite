"use client";
import { usePathname } from "next/navigation";
import Menu from "@/components/menu/menu";

export default function MenuLayout() {
  const path = usePathname();

  // Hide menu on login and register pages
  if (path === "/login" || path === "/register") return null;

  return <Menu />;
}
