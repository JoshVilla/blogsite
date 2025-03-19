"use client";

import { RootState } from '@/app/redux/store/store';
import { CircleUserRound, Heart, House, Newspaper, ThumbsUp } from "lucide-react";
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../ui/button';
import { clearBlog } from '@/app/redux/slices/blogSlice';

interface IMenuLinks {
  label: string;
  key: string;
  path: string;
  icon: any;
}

const Menu = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user.user);
  const pathname = usePathname();
  const router = useRouter();
  const previousPathname = useRef<string | null>(null);

  // Use useMemo to avoid unnecessary re-renders
  const menuLinks: IMenuLinks[] = useMemo(() => {
    const baseMenu = [{ label: "Home", key: "home", path: "/", icon: House }];

    if (Object.keys(userState).length > 0) {
      return [
        ...baseMenu,
        { label: "My Account", key: "myAccount", path: "/myAccount", icon: CircleUserRound },
        { label: "My Blogs", key: "myBlogs", path: "/myBlogs", icon: Newspaper },
        { label: "My Likes", key: "myLikes", path: "/myLikes", icon: ThumbsUp },
        { label: "My Favorites", key: "myFavorites", path: "/myFavorites", icon: Heart },
      ];
    } 
    return baseMenu;
  }, [userState]);

  useEffect(() => {
    // If navigating *away* from "/blog/edit", clear the blog state
    if (previousPathname.current === "/blog/edit" && pathname !== "/blog/edit") {
      dispatch(clearBlog());
    }

    // Update previousPathname AFTER checking
    previousPathname.current = pathname;
  }, [pathname, dispatch]);

  return (
    <div className="w-[90%] md:w-[70%] mx-auto mt-10 flex items-center gap-6 flex-wrap">
      {menuLinks.map((menu) => (
        <Button
          key={menu.key}
          variant="link"
          className={`hover:underline cursor-pointer ${pathname === menu.path ? "underline" : ""}`}
          size="sm"
          onClick={() => router.push(menu.path)}
        >
          <menu.icon className="h-4 w-4" /> {menu.label}
        </Button>
      ))}
    </div>
  );
};

export default Menu;
