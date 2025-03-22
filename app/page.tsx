"use client";
import Showcase from "./showcase";
import Blogs from "./blogs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Moon, Pencil, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store/store";
import Head from "next/head";

export default function Home() {
  const userState = useSelector((state: RootState) => state.user.user);
  const router = useRouter();
  const { setTheme } = useTheme();
  const [themeName, setThemeName] = useState("light");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Fix: Toggle theme correctly
  const handleChangeTheme = () => {
    const newTheme = themeName === "light" ? "dark" : "light";
    setThemeName(newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Store theme in localStorage
  };

  // Fix: Retrieve stored theme and apply it
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    setThemeName(currentTheme);
    setTheme(currentTheme); // Apply stored theme immediately
  }, [setTheme]);

  // Fix: Set isLoggedIn based on user state
  useEffect(() => {
    setIsLoggedIn(Object.keys(userState).length > 0);
  }, [userState]);

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="relative h-screen pb-10">
        <div className="w-[90%] md:w-[70%] mx-auto ">
          <div className="my-10">
            <Showcase />
          </div>
          <div>
            <Blogs />
          </div>
          <div className="h-20" />
        </div>
        <div className="right-10 bottom-10 fixed flex flex-col gap-6">
          {isLoggedIn && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger
                  className="cursor-pointer hover:scale-110"
                  onClick={() => router.push("/create")}
                >
                  <Pencil />
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>Create Topic</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                className="cursor-pointer hover:scale-110 "
                onClick={handleChangeTheme}
              >
                {themeName === "dark" ? <Sun /> : <Moon />}
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Change Theme</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </>
  );
}
