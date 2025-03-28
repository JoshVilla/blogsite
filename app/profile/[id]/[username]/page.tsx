"use client";
import Container from "@/components/container/container";
import TitlePage from "@/components/titlePage/titlePage";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { IUser } from "@/utils/types";
import BlogList from "./blogList";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/service/api";
import { useParams, useRouter } from "next/navigation";
import { Pencil, Settings, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import FollowingFollowers from "./followingFollowers";
import useTitlePage from "@/hooks/useTitlePage";

const Profile = () => {
  const router = useRouter();
  const userState = useSelector((state: RootState) => state.user.user as IUser);
  const { id, username } = useParams();
  const { isLoading, data, error } = useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      if (!id) throw new Error("Missing user ID");
      return getUser({ id, accountId: userState._id });
    },
    enabled: !!id, // Only fetch when id exists
  });

  const isMyAccount = userState._id === id;
  const profile: IUser | null = data?.data || null;
  useTitlePage("Profile");
  return (
    <Container>
      {profile ? (
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
                  {`${profile?.firstname} ${profile?.middlename} ${profile?.lastname}`}
                </span>
              </div>
              <div className="text-lg text-gray-500 flex items-center gap-2">
                {`@${profile?.username}`}
                {isMyAccount && (
                  <Pencil
                    className="h-4 w-4 hover:scale-110 cursor-pointer"
                    onClick={() => router.push("/myAccount")}
                  />
                )}
              </div>
              {isMyAccount && (
                <Button
                  variant="link"
                  size="sm"
                  className="mt-10 flex items-center gap-2 cursor-pointer"
                  onClick={() => router.push("/myProfile/settings")}
                >
                  <Settings className="h-4 w-4" /> Settings
                </Button>
              )}
            </div>
            <div className="w-full">
              <FollowingFollowers data={profile} isMyAccount={isMyAccount} />
              <div className="mt-4">
                <BlogList data={profile} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <div className="text-sm text-gray-500 text-center">
            User not found. The account may have already been deleted.
          </div>
        </div>
      )}
    </Container>
  );
};

export default Profile;
