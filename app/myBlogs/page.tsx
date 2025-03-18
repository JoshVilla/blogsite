"use client"
import TitlePage from "@/components/titlePage/titlePage";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/service/api";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { IUser } from "@/utils/types";

const MyBlogs = () => {
  const userState = useSelector((state:RootState) => state.user.user as IUser)
  const [selectedCategories, setselectedCategories] = useState("All")

  const {isLoading, data, error} = useQuery({
    queryKey: ['blog'],
    queryFn: () => getBlogs({username: userState.username})
  })
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-[90%] md:w-[70%] mx-auto my-10"
    >
      <TitlePage title="My Blogs" />
    </motion.div>
  );
};

export default MyBlogs;
