"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { categories, ICategory } from "@/utils/constant";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/service/api";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { Heart, ThumbsUp } from "lucide-react";
import Categories from "@/components/categories/categories";
import { IBlog } from "@/utils/types";
import BlogCard from "@/components/blogCard/blogCard";

const Blogs = () => {
  const route = useRouter();
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

  const formmatedDate = (date: string) => format(new Date(date), "MM/dd/yyyy");

  const gotToBlog = (id: string) => route.push(`/blog/${id}`);
  return (
    <div>
      <Categories onChange={setSelectedCategory}/>

      {/* Blog List */}
      <div className="mt-10">
        <div className="text-2xl md:text-4xl">{`${selectedCategory} Blogs`}</div>

        {isLoading && <p className="mt-5 text-center">Loading...</p>}
        {error && (
          <p className="mt-5 text-red-500 text-center">Error fetching blogs.</p>
        )}

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
      </div>
    </div>
  );
};

export default Blogs;
