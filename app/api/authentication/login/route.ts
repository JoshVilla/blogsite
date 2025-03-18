import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/app/models/userModel";
import { comparePassword } from "@/utils/helpers";

export async function POST(request: NextRequest) {
    try {
        await connectToDatabase();

        const { username, password } = await request.json();

        // Find user by username
        const user = await User.findOne({ username });

        // If user does not exist
        if (!user) {
            return NextResponse.json({
                isSuccess: false,
                message: "Invalid username or password."
            }, { status: 401 });
        }

        // Compare passwords
        const isPasswordValid = await comparePassword(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({
                isSuccess: false,
                message: "Invalid username or password."
            }, { status: 401 });
        }

        // Success response
        return NextResponse.json({
            isSuccess: true,
            message: "Login successful",
            data: {
                id: user._id,
                username: user.username,
                firstname: user.firstname,
                lastname: user.lastname
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
