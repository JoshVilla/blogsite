import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/app/models/userModel";
import { comparePassword } from "@/utils/helpers";
import Settings from "@/app/models/settingModel";
import FollowersFollowing from "@/app/models/userFollowersFollowingModel";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const { email, password } = await request.json();

    // Find user by email
    const user = await User.findOne({ email });
    const userSettings = await Settings.findOne({ email });

    // If email does not exist in both collections
    if (!user && !userSettings) {
      return NextResponse.json(
        {
          isSuccess: false,
          message: "Email does not exist.",
        },
        { status: 404 }
      );
    }

    // If user does not exist
    if (!user) {
      return NextResponse.json(
        {
          isSuccess: false,
          message: "Invalid email or password.",
        },
        { status: 401 }
      );
    }

    // if the account is disabled
    if (userSettings && new Date() <= new Date(userSettings.disabledUntil)) {
      return NextResponse.json(
        {
          isSuccess: false,
          message:
            "Account disabled, contact the admin if you wish to enable it",
        },
        { status: 401 }
      );
    }

    // Compare passwords
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        {
          isSuccess: false,
          message: "Invalid email or password.",
        },
        { status: 401 }
      );
    }

    const getFollowersFollowing = await FollowersFollowing.findOne({
      userId: user._id,
    });

    const followingCount = getFollowersFollowing?.following?.length || 0;
    const followersCount = getFollowersFollowing?.followers?.length || 0;
    const userObject = user.toObject();
    // Success response
    return NextResponse.json({
      isSuccess: true,
      message: "Login successful",
      data: {
        user: {
          ...userObject,
          following: followingCount,
          followers: followersCount,
        },
        userSettings,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json(
      {
        isSuccess: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
