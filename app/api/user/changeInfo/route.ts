import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/app/models/userModel";
import Blog from "@/app/models/blogModel";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const { userId, username, firstname, middlename, lastname, email } =
      await request.json();

    const newUser = await User.findByIdAndUpdate(
      userId,
      {
        firstname,
        lastname,
        middlename,
        username,
        email,
      },
      { new: true, runValidators: true }
    );

    await Blog.updateMany(
      { creator_id: userId }, // Filter condition
      { $set: { username } } // Update operation
    );

    return NextResponse.json({
      data: newUser,
      message: "Information update successfully",
      isSuccess: true,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        isSuccess: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
