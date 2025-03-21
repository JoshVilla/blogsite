import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import FollowersFollowing from "@/app/models/userFollowersFollowingModel";
import User from "@/app/models/userModel";
import mongoose from "mongoose"; // Import mongoose for ObjectId conversion

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const { userId, category, page = 1, limit = 10 } = await request.json();

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const followingData = await FollowersFollowing.findOne({ userId });

    if (!followingData || followingData?.[category].length === 0) {
      return NextResponse.json({
        data: [],
        total: 0,
        message: "No following found",
      });
    }

    const totalFollowing = followingData?.[category].length;

    // Pagination logic
    const startIndex = (page - 1) * limit;
    const followingIds = followingData?.[category]?.slice(
      startIndex,
      startIndex + limit
    );

    if (!followingIds || followingIds.length === 0) {
      return NextResponse.json({
        data: [],
        total: totalFollowing,
        currentPage: page,
        totalPages: Math.ceil(totalFollowing / limit),
      });
    }

    // Convert followingIds to ObjectId to avoid CastError
    const objectIds = followingIds.map(
      (id: string) => new mongoose.Types.ObjectId(id)
    );

    // Fetch user details for each following ID
    const followingUsers = await User.find({
      _id: { $in: objectIds },
    }).select("firstname lastname username image_url _id");

    return NextResponse.json({
      data: followingUsers,
      total: totalFollowing,
      currentPage: page,
      totalPages: Math.ceil(totalFollowing / limit),
    });
  } catch (error: any) {
    console.error("Error fetching following list:", error);
    return NextResponse.json({
      error: error.message || "Something went wrong",
      message: "Internal Server Error",
    });
  }
}
