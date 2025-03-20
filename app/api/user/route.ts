import { NextRequest, NextResponse } from "next/server";

import User from "@/app/models/userModel";
import { connectToDatabase } from "@/lib/mongodb";
import Settings from "@/app/models/settingModel";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ _id: id });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const userRestrictions = await Settings.findOne({ userId: id }) || {};

    return NextResponse.json(
      { data: { ...user.toObject(), ...userRestrictions.toObject?.() || {} } },
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
