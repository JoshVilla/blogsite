
'use client'
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
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

export default function Home() {
  const userState = useSelector((state:RootState) => state.user.user)
  const router = useRouter()
  const {setTheme} = useTheme()
  const [themeName, setThemeName] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  const handleChangeTheme = () => {
    setThemeName(prev => prev === "light" ? "dark" : "light")
    if(themeName === "light") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light"; // Default to 'light' if null
    setThemeName(currentTheme);
  }, [])

    useEffect(() => {
      setIsLoggedIn(Object.keys(userState).length > 0) // Fix: Check if userState is not empty
    }, [userState])
  
  return (
   <div className="relative h-screen pb-10">
     <div className="w-[90%] md:w-[70%] mx-auto ">
      <div className="  my-10">
        <Showcase />
      </div>
      <div>
        <Blogs />
      </div>
     
    </div>
    <div className=" right-10 bottom-10 fixed flex flex-col gap-10">
       {
        isLoggedIn && (
          <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="cursor-pointer hover:scale-110" onClick={() => router.push("/create")}>
              <Pencil />
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Create Topic</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        )
       }
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="cursor-pointer hover:scale-110 " onClick={handleChangeTheme}>
            {themeName === "dark" ? <Sun /> : <Moon />}
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Change Theme</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
   </div>
  );
}
