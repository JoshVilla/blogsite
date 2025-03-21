import { connectToDatabase } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/userModel";
import Settings from "@/app/models/settingModel";
import FollowersFollowing from "@/app/models/userFollowersFollowingModel";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const { email, family_name, given_name, picture } = await request.json();

    let userExist = await User.findOne({ email });

    if (userExist) {
      userExist = userExist.toObject(); // Convert Mongoose document to plain object

      const userSettings = await Settings.findOne({ email });
      const countFollowingFollowers = await FollowersFollowing.findOne({
        userId: userExist._id,
      });

      const followingCount = countFollowingFollowers?.following?.length || 0;
      const followersCount = countFollowingFollowers?.followers?.length || 0;

      return NextResponse.json({
        data: {
          user: {
            ...userExist,
            following: followingCount,
            followers: followersCount,
          },
          userSettings,
        },
        isSuccess: true,
        message: "Login successful",
      });
    }

    // If user does not exist, create a new one
    const username =
      given_name.split(" ")[0].toLowerCase() +
      Math.floor(100000 + Math.random() * 9000);

    const user = await User.create({
      firstname: given_name,
      lastname: family_name,
      username,
      isGoogleModeRegistration: true,
      image_url: picture,
      email,
    });

    await FollowersFollowing.create({
      userId: user._id,
      followers: [],
      following: [],
    });

    const userSettings = await Settings.create({
      userId: user._id,
      email,
    });

    return NextResponse.json({
      data: {
        user: {
          ...user.toObject(),
          following: 0,
          followers: 0,
        },
        userSettings,
      },
      isSuccess: true,
      message: "Your account has been registered",
    });
  } catch (error) {
    console.error("Error in authentication:", error);
    return NextResponse.json(
      {
        isSuccess: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
