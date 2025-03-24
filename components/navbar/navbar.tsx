"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { persistor, RootState } from "@/app/redux/store/store";
import { clearUser } from "@/app/redux/slices/userSlice";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { IUser } from "@/utils/types";
import { clearBlog } from "@/app/redux/slices/blogSlice";
import { clearUserSettings } from "@/app/redux/slices/userSettingsSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const allState = useSelector((state: RootState) => state);
  const userState = useSelector((state: RootState) => state.user.user as IUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = async () => {
    try {
      await persistor.flush();
      await persistor.purge();

      dispatch(clearUser());
      dispatch(clearBlog());
      dispatch(clearUserSettings());

      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  console.log(allState);
  useEffect(() => {
    setIsLoggedIn(Object.keys(userState).length > 0); // Fix: Check if userState is not empty
    // setIsLoggedIn(false) // Fix: Check if userState is not empty
  }, [userState]);

  return (
    <div className="bg-secondary py-4 px-8 flex items-center justify-between">
      <div
        className="text-lg font-semibold cursor-pointer"
        onClick={() => router.push("/")}
      >
        Blogify
      </div>
      <div className="flex items-center gap-6">
        {/* <ThemeToggle /> */}
        {!isLoggedIn ? (
          <>
            <Link
              href={"/login"}
              className="cursor-pointer text-sm hover:underline"
            >
              Login
            </Link>
            <Link
              href={"/register"}
              className="cursor-pointer text-sm hover:underline"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <div>Hi {userState.username}</div>
            <AlertDialog>
              <AlertDialogTrigger>
                <div className="text-sm hover:underline cursor-pointer">
                  Logout
                </div>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you sure you want to logout?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This will log you out of your account. You can always log in
                    again.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleLogout}
                    className="cursor-pointer"
                  >
                    Logout
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
