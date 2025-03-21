"use client";
import Container from "@/components/container/container";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  const arrCount = new Array(5).fill("arr");
  return (
    <Container>
      <Skeleton className="w-24 h-4" />
      <div className="flex gap-4 flex-col lg:flex-row my-10">
        <div className="w-52 space-y-6">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
        <div className="w-full p-4">
          <div className="flex gap-10 flex-col md:flex-row justify-between">
            <div className="space-y-4">
              <Skeleton className="h-52 w-52 rounded-full" />
              <Skeleton className="h-4 w-52 rounded-full" />
            </div>
            <div className="w-full md:w-64 space-y-6">
              {arrCount.map((_, index: number) => (
                <div className="space-y-2" key={index}>
                  <Skeleton className="h-2 w-32" key={index} />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
              <Skeleton className="h-6 w-20" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Loading;
