"use client"

import { RootState } from '@/app/redux/store/store'
import { Heart, House, Newspaper, ThumbsUp } from "lucide-react";
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Button } from '../ui/button';


interface IMenuLinks {
    label: string;
    key: string;
    path: string;
    icon: any;
  }

const Menu = () => {
    const userState = useSelector((state:RootState) => state.user.user)
    const pathname = usePathname()
    const router = useRouter();
    const [menuLinks, setMenuLinks] = useState<IMenuLinks[]>([
        {
            label: "Home",
            key: "home",
            path: "/",
            icon: House,
          }
    ])
  

      
    useEffect(() => {
        if(Object.keys(userState).length > 0) {
            setMenuLinks(prev => ([
                ...prev,
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
                  }
            ]))
        } else {
            setMenuLinks([
                {
                    label: "Home",
                    key: "home",
                    path: "/",
                    icon: House,
                  }
            ])
        }
    }, [userState] )

  return (
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
  )
}

export default Menu