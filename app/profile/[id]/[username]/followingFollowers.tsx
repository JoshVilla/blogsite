"use client";
import { setUser } from "@/app/redux/slices/userSlice";
import { RootState } from "@/app/redux/store/store";
import { Button } from "@/components/ui/button";
import { followUser } from "@/service/api";
import { IUser } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

interface IFollowingFollowers {
  data: any;
}
const FollowingFollowers = ({ data }: IFollowingFollowers) => {
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user.user as IUser);
  const [isFollowed, setIsFollowed] = useState(data.isFollowed);
  const [followersCount, setFollowersCount] = useState(data.followers);

  const followMutation = useMutation({
    mutationFn: followUser,
    onSuccess: (data) => {
      dispatch(setUser(data.data));
      toast.success(data.message);
      setIsFollowed(!isFollowed);
      setFollowersCount((prev: number) => (isFollowed ? prev - 1 : prev + 1));
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });

  const handleFollowUser = () => {
    const initParams = { accountId: userState._id, userId: data.userId };
    followMutation.mutate({ ...initParams, follow: isFollowed ? false : true });
  };
  return (
    <div className="flex gap-10 items-center justify-between md:justify-between mb-10">
      <Button size="sm" variant={"outline"} onClick={handleFollowUser}>
        {isFollowed ? "Followed" : "Follow"}
      </Button>
      <div className="flex items-center gap-10 ">
        <div className="flex flex-col items-center">
          <div className="font-bold">{`${Number(
            followersCount
          ).toLocaleString()}`}</div>
          <div>Followers</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-bold">{`${Number(
            data.following
          ).toLocaleString()}`}</div>
          <div>Following</div>
        </div>
      </div>
    </div>
  );
};

export default FollowingFollowers;
