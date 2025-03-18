"use client";

import { blogAction, getBlogs } from "@/service/api";
import { IBlog, IUser } from "@/utils/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";
import { Calendar, Heart, ThumbsUp } from "lucide-react";
import DOMPurify from "dompurify";
import { formattedDate } from "@/utils/nonAsyncHelpers";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store/store";

const Blog = () => {
  const params = useParams();
  const id = params.id;
  const userState = useSelector((state:RootState) => state.user.user as IUser); // Replace with the actual logged-in user ID
  const queryClient = useQueryClient();
  console.log(userState)
  // Fetch Blog Data
  const { isLoading, data, error } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogs({ id }),
    enabled: !!id,
  });

  const blogData: IBlog | null = data?.data?.[0] ?? null;

  // Like / Unlike Mutation
  const likeMutation = useMutation({
    mutationFn: () => blogAction({  blogId: id, action: "like", userId: userState.id }),
    onSuccess: (data) => {
      toast.success(data.message);
      //@ts-ignore
      queryClient.invalidateQueries(["blog", id]); // Refetch blog data
    },
  });

  // Favorite / Unfavorite Mutation
  const favoriteMutation = useMutation({
    mutationFn: () => blogAction({ blogId: id, action: "favorite", userId: userState.id  }),
    onSuccess: (data) => {
      toast.success(data.message);
      //@ts-ignore
      queryClient.invalidateQueries(["blog", id]); // Refetch blog data
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading blog</p>;
  if (!blogData) return <p>No blog found</p>;

  // Check if the user has already liked or favorited the blog
  //@ts-ignore
  const isLiked = blogData.likedByUsers.includes(userState.id);
  //@ts-ignore
  const isFavorited = blogData.favoriteByUsers.includes(userState.id);

  return (
    <div className="w-[90%] md:w-[70%] mx-auto mt-10">
      {blogData && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Blog Image */}
          <div className="w-full h-[300px] md:h-[400px] relative">
            <Image
              src={blogData.image_url}
              alt="blog image"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
            />
          </div>

          {/* Like & Favorite Buttons */}
          <div className="mt-6 flex items-center gap-4">
            <div
              className="flex items-center gap-2 cursor-pointer hover:scale-110 transition-all"
              onClick={() => likeMutation.mutate()}
            >
              <ThumbsUp className={isLiked ? "text-blue-500" : "text-gray-500"} />
              <span className="font-bold">{blogData.likes}</span>
            </div>

            <div
              className="flex items-center gap-2 cursor-pointer hover:scale-110 transition-all"
              onClick={() => favoriteMutation.mutate()}
            >
              <Heart className={isFavorited ? "text-red-500" : "text-gray-500"} />
              <span className="font-bold">{blogData.favorites}</span>
            </div>
          </div>

          {/* Blog Info */}
          <div className="my-6">
            <div className="flex items-center flex-wrap mb-2">
              {blogData.topic_category.map((category: string, index: number) => (
                <Badge key={index}>{category}</Badge>
              ))}
            </div>
            <div className="text-xl md:text-3xl font-bold">{blogData.title}</div>
            <div className="text-md text-gray-500">By: {blogData.username}</div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="text-md text-gray-500">
                {formattedDate(blogData.createdAt)}
              </span>
            </div>
            {/* Blog Content */}
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
