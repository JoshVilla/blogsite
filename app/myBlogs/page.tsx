"use client"
import TitlePage from "@/components/titlePage/titlePage";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/service/api";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { IBlog, IUser } from "@/utils/types";
import Categories from "@/components/categories/categories";
import BlogCard from "@/components/blogCard/blogCard";

const MyBlogs = () => {
  const userState = useSelector((state:RootState) => state.user.user as IUser)
  const [selectedCategory, setSelectedCategory] = useState("All");

  const {isLoading, data, error} = useQuery({
    queryKey: ['blog', selectedCategory],
    queryFn: () => getBlogs({username: userState.username, category: selectedCategory }),
    enabled: !!selectedCategory, // Only run query if category exists
  })

  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: index * 0.2 },
    }),
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-[90%] md:w-[70%] mx-auto my-10"
    >
      <TitlePage title="My Blogs" />
     <div className="my-4">
     <Categories onChange={setSelectedCategory} />
     </div>
         <div className="mt-10 flex flex-wrap  gap-10 justify-center md:justify-start">
               {data?.data?.length > 0 ? (
                 data.data.map((blog: IBlog, index: number) => (
                   <motion.div
                     key={blog.title + index}
                     variants={cardVariants}
                     initial="hidden"
                     animate="visible"
                     exit="hidden"
                     custom={index}
                     // className="w-60 h-auto"
                   >
                   <BlogCard data={blog} />
                   </motion.div>
                 ))
               ) : (
                 <p className="text-gray-500">No blogs found.</p>
               )}
             </div>
    </motion.div>
  );
};

export default MyBlogs;
