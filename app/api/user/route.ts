import { NextRequest, NextResponse } from "next/server";

import User from "@/app/models/userModel";
import { connectToDatabase } from "@/lib/mongodb";
import Settings from "@/app/models/settingModel";
import FollowersFollowing from "@/app/models/userFollowersFollowingModel";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const { id, accountId } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ _id: id });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const userRestrictions = (await Settings.findOne({ userId: id })) || {};
    const userFollowersAndFollowing = await FollowersFollowing.findOne({
      userId: id,
    });

    const followers = userFollowersAndFollowing?.followers?.length || 0;
    const following = userFollowersAndFollowing?.following?.length || 0;
    const isFollowed = userFollowersAndFollowing?.followers?.some(
      (followersId: string) => followersId === accountId
    );

    console.log(followers, following, isFollowed, accountId);

    return NextResponse.json(
      {
        data: {
          ...user.toObject(),
          ...(userRestrictions.toObject?.() || {}),
          followers,
          following,
          isFollowed,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
