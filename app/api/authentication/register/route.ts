import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/app/models/userModel";
import { hashPassword } from "@/utils/helpers";

export async function POST(request: NextRequest) {
    try {
        await connectToDatabase();

        const { firstname, lastname, middlename, password, username, confirmPassword } = await request.json();
      

        // Validate required fields
        if (!firstname || !lastname || !username || !password || !confirmPassword) {
            return NextResponse.json({
                isSuccess: false,
                message: "All fields are required."
            }, { status: 200 });
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            return NextResponse.json({
                isSuccess: false,
                message: "Passwords do not match."
            }, { status: 200 });
        }

        // Hash the password
        const hashedPassword = await hashPassword(password);

        // Check if username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return NextResponse.json({
                isSuccess: false,
                message: "Username already exists."
            }, { status: 200 });
        }

        // Create new user
        const newUser = await User.create({
            firstname,
            middlename,
            lastname,
            username,
            password: hashedPassword, // Use correct field name
        });

        return NextResponse.json({
            data: newUser,
            isSuccess: true,
            message: "User registered successfully."
        }, { status: 201 });

    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({
            isSuccess: false,
            message: "Internal server error."
        }, { status: 500 });
    }
}
