import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/app/models/userModel";
import { comparePassword } from "@/utils/helpers";
import Settings from "@/app/models/settingModel";

export async function POST(request: NextRequest) {
    try {
        await connectToDatabase();

        const { email, password } = await request.json();

        // Find user by email
        const user = await User.findOne({ email });
        const userSettings = await Settings.findOne({email})

        // If user does not exist
        if (!user) {
            return NextResponse.json({
                isSuccess: false,
                message: "Invalid email or password."
            }, { status: 401 });
        }

        // Compare passwords
        const isPasswordValid = await comparePassword(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({
                isSuccess: false,
                message: "Invalid email or password."
            }, { status: 401 });
        }

        // Success response
        return NextResponse.json({
            isSuccess: true,
            message: "Login successful",
            data: {
                user,
                userSettings
            }
        });

    } catch (error) {
        console.error("Login Error:", error);
        return NextResponse.json({
            isSuccess: false,
            message: "Internal Server Error"
        }, { status: 500 });
    }
}
