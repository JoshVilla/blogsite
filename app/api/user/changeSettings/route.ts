import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Settings from "@/app/models/settingModel";

export async function POST(request: NextRequest) {
    try {
        await connectToDatabase();

        const { hideBlogs, hideLikes, hideFavorite, isPrivate, userId } = await request.json();

        if (!userId) {
            return NextResponse.json({
                isSuccess: false,
                message: "User ID is required",
            }, { status: 400 });
        }

        const newSettings = await Settings.findOneAndUpdate(
            { userId }, // Corrected filter object
            { hideBlogs, hideLikes, hideFavorite, isPrivate },
            { new: true, runValidators: true, upsert: true } // Ensures settings are created if missing
        );

        return NextResponse.json({
            data: newSettings,
            isSuccess: true,
            message: "Settings saved",
        });
    } catch (error) {
        console.error("Error updating settings:", error);
        return NextResponse.json({
            isSuccess: false,
            message: "Internal Server Error",
        }, { status: 500 });
    }
}
