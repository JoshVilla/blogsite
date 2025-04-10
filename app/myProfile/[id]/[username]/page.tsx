"use client";
import Container from "@/components/container/container";
import Image from "next/image";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { IUser } from "@/utils/types";
import BlogList from "./blogList";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/service/api";
import { useParams, useRouter } from "next/navigation";
import { Pencil, Settings, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import Loading from "./loading";
import useTitlePage from "@/hooks/useTitlePage";

const Profile = () => {
  const router = useRouter();
  const userState = useSelector((state: RootState) => state.user.user as IUser);
  const { id, username } = useParams();
  const { isLoading, data } = useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      if (!id) throw new Error("Missing user ID");
      return getUser({ id });
    },
    enabled: !!id,
  });

  useTitlePage("My Profile");

  const isMyAccount = userState._id === id;
  const profile: IUser | null = data?.data || null;

  if (isLoading || !profile) return <Loading />;
  return (
    <Container>
      {profile && (
        <>
          <div className="relative w-full h-64 rounded-lg ">
            <Image
              src="/assets/cover_default.jpg"
              alt="cover_image"
              layout="fill"
              objectFit="cover"
            />
            <Image
              src={profile?.image_url ?? "/assets/default_profile.avif"}
              alt="profile_image"
              height={150}
              width={150}
              className="absolute w-36 h-36 md:w-48 md:h-48 -bottom-16 left-10 rounded-full object-cover p-1 bg-accent"
            />
          </div>
          <div className="mt-24 flex gap-10 flex-col lg:flex-row">
            <div className="w-full md:w-64">
              <div className="text-2xl font-semibold">
                <span>
                  {" "}
                  {`${profile?.firstname} ${profile?.middlename} ${profile?.lastname}`}
                </span>
              </div>
              <div className="text-lg text-gray-500 flex items-center gap-2">
                {`@${profile?.username}`}
              </div>

              <Button
                variant="link"
                size="sm"
                className="mt-10 flex items-center gap-2 cursor-pointer"
                onClick={() => router.push("/myProfile/settings")}
              >
                <Settings className="h-4 w-4" /> Settings
              </Button>
            </div>
            <div className="w-full">
              <div className="flex gap-10 items-center justify-start md:justify-end">
                <div className="flex flex-col items-center">
                  <div
                    className="font-bold cursor-pointer hover:scale-110"
                    onClick={() =>
                      router.push(`/profile/followers/${userState._id}`)
                    }
                  >{`${Number(userState.followers).toLocaleString()}`}</div>
                  <div>Followers</div>
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className="font-bold cursor-pointer hover:scale-110"
                    onClick={() =>
                      router.push(`/profile/following/${userState._id}`)
                    }
                  >{`${Number(userState.following).toLocaleString()}`}</div>
                  <div>Following</div>
                </div>
              </div>
              <div className="mt-4">
                <BlogList data={profile} />
              </div>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default Profile;
