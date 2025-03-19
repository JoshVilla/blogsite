import { NextRequest, NextResponse } from "next/server";

import User from "@/app/models/userModel";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const { id } = await request.json();

    let params:any = {}
    if(id) params._id = id

    const user = await User.find(params); // Changed "users" to "user" for clarity

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: user }, { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
