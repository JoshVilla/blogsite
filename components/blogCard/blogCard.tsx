"use client"
import { IBlog } from "@/utils/types";
import { format } from "date-fns";
import { Heart, ThumbsUp } from "lucide-react";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Badge } from "../ui/badge";
interface IBlogCard {
  data: IBlog;
}
const BlogCard = ({data}: IBlogCard) => {
    const route = useRouter()
    const formattedDate = (date: string) => format(new Date(date), "MM/dd/yyyy");
    const gotToBlog = (id: string) => route.push(`/blog/${id}`);
  return (
    <div className="w-60 h-auto">
      <Image
        src={data.image_url}
        alt={data.title}
        width={240}
        height={150}
        className="h-40 object-cover"
      />
      <div className="flex gap-2 items-center my-2">
        {data.topic_category.map((category: string, index: number) => (
          <Badge key={index}>{category}</Badge>
        ))}
      </div>
      <div
        className="text-md font-semibold mt-2 line-clamp-3 cursor-pointer hover:underline"
        onClick={() => gotToBlog(data._id)}
      >
        {data.title}
      </div>
      <div className="flex items-center gap-4">
        <div className="text-xs font-semibold flex items-center gap-1  my-2">
          <ThumbsUp className="h-4 w-4" />
          <span>{data.likes} </span>
        </div>
        <div className="text-xs font-semibold flex items-center gap-1  my-2">
          <Heart className="h-4 w-4" />
          <span>{data.favorites} </span>
        </div>
      </div>
      <div className="text-forground text-xs text-gray-500 flex justify-between items-center">
        <div>{data.username}</div>
        <div>{formattedDate(data.createdAt)}</div>
      </div>
    </div>
  );
};

export default BlogCard;
