"use client";
import React from "react";
import { Skeleton } from "../ui/skeleton";

const BlogLoading = () => {
  const arrCount = new Array(3).fill("arr");

  return (
    <div>
      <Skeleton className="w-1/2 h-3 mx-auto" />
      <Skeleton className="w-28 h-10 mt-10" />
      <div className="mt-10 flex flex-wrap gap-10 md:gap-14 justify-center md:justify-evenly">
        {arrCount.map((_, index: number) => (
          <div className="w-60 h-auto space-y-6" key={index}>
            <Skeleton className="w-full h-36" />
            <Skeleton className="w-10 h-4" />
            <Skeleton className="w-14 h-4" />
            <div className="flex items-center gap-4">
              <Skeleton className="w-8 h-4" />
              <Skeleton className="w-8 h-4" />
            </div>
            <div className="flex justify-between items-center">
              <Skeleton className="w-14 h-4" />
              <Skeleton className="w-14 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogLoading;
