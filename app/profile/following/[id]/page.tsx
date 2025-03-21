"use client";

import TitlePage from "@/components/titlePage/titlePage";
import { getFollowing } from "@/service/api";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loading from "./loading";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Container from "@/components/container/container";

const Page = () => {
  const params = useParams();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [arrData, setArrData] = useState<any>([]);
  const [hasMore, setHasMore] = useState(true);
  const { isLoading, data } = useQuery({
    queryKey: ["following", params.id],
    queryFn: () =>
      getFollowing({ userId: params.id, category: "following", page }),
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
      <TitlePage title="Following" hasBack />

      <div className="mt-10 flex flex-col gap-4">
        {arrData.length === 0 ? (
          <p className="text-gray-500">No Following</p>
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
              <span
                onClick={() =>
                  router.push(`/profile/${account._id}/${account.username}`)
                }
              >
                {account.username}
              </span>
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
