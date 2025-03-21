"use client";

import Container from "@/components/container/container";
import { Skeleton } from "@/components/ui/skeleton";
import { categories } from "@/utils/constant";
import React from "react";

const Loading = () => {
  return (
    <Container className="space-y-6">
      <Skeleton className="h-6 w-32" />
      <Skeleton className="h-4 w-36" />
      <div className="flex flex-wrap items-center mt-2 gap-2">
        {categories.map((_, index: number) => (
          <Skeleton className="h-6 w-16" key={index} />
        ))}
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-36" />
        <Skeleton className="h-6 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-36" />
        <Skeleton className="h-6 w-full" />
      </div>
      <Skeleton className="h-72 w-full" />
      <div className="flex justify-end">
        <Skeleton className="h-10 w-16" />
      </div>
    </Container>
  );
};

export default Loading;
