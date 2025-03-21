import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import FollowersFollowing from "@/app/models/userFollowersFollowingModel";
import User from "@/app/models/userModel";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const { accountId, userId, follow } = await request.json();
    const user = await User.findById(accountId);
    const userObject = user.toObject();

    if (!accountId || !userId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (follow) {
      // Add to the `followers` list of the target user (userId)
      await FollowersFollowing.findOneAndUpdate(
        { userId },
        { $addToSet: { followers: accountId } }, // Prevent duplicates
        { upsert: true, new: true }
      );

      // Add to the `following` list of the current user (accountId)
      const currentUser = await FollowersFollowing.findOneAndUpdate(
        { userId: accountId },
        { $addToSet: { following: userId } },
        { upsert: true, new: true }
      );

      //get counts for the updated followers and following of the current user
      const countFollowing = currentUser?.following?.length || 0;
      const countFollowers = currentUser?.followers?.length || 0;

      return NextResponse.json({
        data: {
          ...userObject,
          following: countFollowing,
          followers: countFollowers,
        },
        isSuccess: true,
        message: "Followed successfully",
      });
    } else {
      // Remove from the `followers` list of the target user (userId)
      await FollowersFollowing.findOneAndUpdate(
        { userId },
        { $pull: { followers: accountId } },
        { new: true }
      );

      // Remove from the `following` list of the current user (accountId)
      const currentUser = await FollowersFollowing.findOneAndUpdate(
        { userId: accountId },
        { $pull: { following: userId } },
        { new: true }
      );

      //get counts for the updated followers and following of the current user
      const countFollowing = currentUser?.following?.length || 0;
      const countFollowers = currentUser?.followers?.length || 0;

      return NextResponse.json({
        data: {
          ...userObject,
          following: countFollowing,
          followers: countFollowers,
        },
        isSuccess: true,
        message: "Unfollowed successfully",
      });
    }
  } catch (error) {
    console.error("Error updating follow status:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
