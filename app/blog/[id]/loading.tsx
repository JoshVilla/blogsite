"use client";
import Container from "@/components/container/container";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <Container>
      <div className="mt-10 w-full">
        <Skeleton className="w-full lg:w-1/2 h-[300px]" />
        <div className="flex items-center gap-4 my-6">
          <Skeleton className="h-4 w-10" />
          <Skeleton className="h-4 w-10" />
        </div>
        <div className="space-y-6">
          <Skeleton className="h-4 w-14" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-4 w-14" />
          <Skeleton className="h-4 w-14" />
          <Skeleton className="h-4 w-14" />
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    </Container>
  );
};

export default Loading;
