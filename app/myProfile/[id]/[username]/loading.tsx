"use client";
import Container from "@/components/container/container";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

const Loading = () => {
  return (
    <Container>
      <Skeleton className="relative w-full h-64 rounded-lg " />
      <div className="mt-24 flex gap-10 flex-col lg:flex-row">
        <div className="w-full md:w-64 space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-2 w-full" />

          <div>
            <Skeleton className="w-1/2 h-4 mt-6" />
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-end gap-10">
            <div className="w-20 text-center">
              <Skeleton className="h-10 w-10 mb-4 mx-auto" />
              <Skeleton className="h-4 w-full" />
            </div>
            <div className="w-20 text-center">
              <Skeleton className="h-10 w-10 mb-4 mx-auto" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>

          <div className="mt-10 w-full">
            <div className="flex items-center gap-6">
              <Skeleton className="w-20 h-4" />
              <Skeleton className="w-20 h-4" />
              <Skeleton className="w-20 h-4" />
            </div>
            <Separator className="my-6" />
            <Skeleton className="w-full h-56" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Loading;
