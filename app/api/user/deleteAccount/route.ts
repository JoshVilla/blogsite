import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/app/models/userModel";
import Settings from "@/app/models/settingModel";
import FollowersFollowing from "@/app/models/userFollowersFollowingModel";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const { userId } = await request.json();

    if (!userId) {
      return NextResponse.json(
        {
          isSuccess: false,
          message: "User ID is required",
        },
        { status: 400 }
      );
    }

    await Promise.all([
      User.findByIdAndDelete(userId),
      Settings.findOneAndDelete({ userId }),
      FollowersFollowing.findOneAndDelete({ userId }),
      FollowersFollowing.updateMany(
        {},
        {
          $pull: {
            following: userId,
            followers: userId,
          },
        }
      ),
    ]);

    return NextResponse.json({
      isSuccess: true,
      message: "Account has been deleted",
    });
  } catch (error) {
    console.error("Error deleting account:", error);
    return NextResponse.json(
      {
        isSuccess: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
