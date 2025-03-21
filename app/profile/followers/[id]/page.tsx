"use client";

import TitlePage from "@/components/titlePage/titlePage";
import { getFollowing } from "@/service/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loading from "./loading";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Container from "@/components/container/container";

const Page = () => {
  const params = useParams();

  const [page, setPage] = useState(1);
  const [arrData, setArrData] = useState<any>([]);
  const [hasMore, setHasMore] = useState(true);
  const { isLoading, data } = useQuery({
    queryKey: ["followers", params.id],
    queryFn: () =>
      getFollowing({ userId: params.id, category: "followers", page }),
    enabled: !!params.id,
  });

  useEffect(() => {
    if (data) {
      setArrData((prev: any) => [...prev, ...data.data]);
      setHasMore(page < data.totalPages);
    }
  }, [data]);

  if (isLoading) return <Loading />;
  return (
    <Container>
      <TitlePage title="Followers" hasBack />

      <div className="mt-10 flex flex-col gap-4">
        {arrData.length === 0 ? (
          <p className="text-gray-500">No followers</p>
        ) : (
          arrData.map((account: any, index: number) => (
            <div
              key={account.unername + index}
              className="flex items-center gap-4"
            >
              <Image
                width={25}
                height={25}
                alt="profile_picture"
                className="rounded-full"
                src={account.image_url ?? "/assets/default_profile.avif"}
              />
              <span>{account.username}</span>
            </div>
          ))
        )}
        {hasMore && (
          <div className="flex justify-center mt-4">
            <Button
              onClick={() => setPage((prev) => prev + 1)}
              disabled={isLoading}
              size="sm"
              className="cursor-pointer"
            >
              {isLoading ? "Loading..." : "Load More"}
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Page;
