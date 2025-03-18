"use client";

import { getBlogs } from "@/service/api";
import { IBlog } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";
import { Calendar } from "lucide-react";
import DOMPurify from 'dompurify';
import { formattedDate } from "@/utils/nonAsyncHelpers";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const params = useParams();
  const id = params.id;

  const { isLoading, data, error } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogs({id}),
    enabled: !!id,
  });

  const blogData: IBlog | null = data?.data?.[0] ?? null;

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading blog</p>;
  if (!blogData) return <p>No blog found</p>;

  return (
    <div className="w-[90%] md:w-[70%] mx-auto mt-10">
      {blogData && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
            <div className="w-full h-[300px] md:h-[400px]  relative">
                <Image src={blogData.image_url} alt="blog image" layout="fill" objectFit="contain" objectPosition="left"/>
            </div>

            <div className="my-10">
              <div className="flex items-center flex-wrap mb-2">
                {
                  blogData.topic_category.map((category:string, index:number) => (
                    <Badge key={index}>{category}</Badge>
                  ))
                }
              </div>
                <div className="text-xl md:text-3xl font-bold">{blogData.title}</div>
                <div className="text-md text-gray-500">By: {blogData.username}</div>
                <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4"/>
                    <span className="text-md text-gray-500">{formattedDate(blogData.createdAt)}</span>
                </div>
                <div 
                className="prose mt-4"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blogData.content) }}
            />
            </div>
        </motion.div>
      )}
    </div>
  );
};

export default Blog;
