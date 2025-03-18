"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { categories, ICategory } from "@/utils/constant";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/service/api";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {  format } from "date-fns";
import { useRouter } from "next/navigation";

const Blogs = () => {
  const route = useRouter()
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { isLoading, data, error } = useQuery({
    queryKey: ["blog", selectedCategory], // Include category in queryKey to refetch on change
    queryFn: () => getBlogs({ category: selectedCategory }), // Pass category as a parameter
    enabled: !!selectedCategory, // Only run query if category exists
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: index * 0.2 },
    }),
  };

  const formmatedDate = (date:string) =>  format(new Date(date), "MM/dd/yyyy")

  const gotToBlog = (id:string) => route.push(`/blog/${id}`)
  return (
    <div>
      {/* Categories */}
      <div className="flex justify-center items-center flex-wrap">
        {categories.map((category: ICategory, index: number) => (
          <motion.div
            key={category.key + index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            custom={index}
          >
            <Button
              variant="link"
              className={`cursor-pointer ${selectedCategory === category.label ? "underline" : ""}`}
              size="sm"
              onClick={() => setSelectedCategory(category.label)}
            >
              {category.label}
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Blog List */}
      <div className="mt-10">
        <div className="text-2xl md:text-4xl">{`${selectedCategory} Blogs`}</div>

        {isLoading && <p className="mt-5 text-center">Loading...</p>}
        {error && <p className="mt-5 text-red-500 text-center">Error fetching blogs.</p>}

        <div className="mt-10 flex flex-wrap  gap-4">
          {data?.data?.length > 0 ? (
            data.data.map((blog: any, index: number) => (
              <motion.div 
              key={blog.title + index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              custom={index}
              className="w-60 h-auto">
                <Image src={blog.image_url} alt={blog.title} width={240} height={150} className="h-40 object-cover" />
                <div className="flex gap-2 items-center my-2">
                {
                  blog.topic_category.map((category: string, index: number) => <Badge key={index}>{category}</Badge>)
                }
                </div>
                <div className="text-md font-semibold mt-2 line-clamp-3 cursor-pointer hover:underline" onClick={() => gotToBlog(blog._id)}>{blog.title}</div>
                <div className="text-forground text-xs text-gray-500 flex justify-between items-center mt-4">
                  <div>{blog.username}</div>
                  <div>{formmatedDate(blog.createdAt)}</div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-500">No blogs found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
