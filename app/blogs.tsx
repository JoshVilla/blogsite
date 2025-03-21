"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/service/api";
import { useRouter } from "next/navigation";
import Categories from "@/components/categories/categories";
import { IBlog } from "@/utils/types";
import BlogCard from "@/components/blogCard/blogCard";
import PaginationComponent from "@/components/pagination/Pagination";
import { useDispatch } from "react-redux";

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [pageState, setPageState] = useState({
    currentPage: 1,
    totalPage: 0,
  });
  const { isLoading, data, error } = useQuery({
    queryKey: ["blog", selectedCategory, pageState], // Include category in queryKey to refetch on change
    queryFn: () =>
      getBlogs({ category: selectedCategory, page: pageState.currentPage }), // Pass category as a parameter
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

  useEffect(() => {
    if (data) {
      setPageState((prev) => ({
        ...prev,
        currentPage: data.currentPage,
        totalPage: data.totalPages,
      }));
    }
  }, [data]);

  return (
    <div>
      <Categories onChange={setSelectedCategory} />

      {/* Blog List */}
      <div className="mt-10">
        <div className="text-2xl md:text-4xl">{`${selectedCategory} Blogs`}</div>

        {isLoading && <p className="mt-5 text-center">Loading...</p>}
        {error && (
          <p className="mt-5 text-red-500 text-center">Error fetching blogs.</p>
        )}

        <div className="mt-10 flex flex-wrap gap-10 md:gap-14 justify-center md:justify-evenly">
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

        <PaginationComponent
          pageState={pageState}
          onChangePage={(page) => {
            setPageState((prev) => ({
              ...prev,
              currentPage: page,
            }));
          }}
        />
      </div>
    </div>
  );
};

export default Blogs;
