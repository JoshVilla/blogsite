import { connectToDatabase } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/userModel";
import { comparePassword, hashPassword } from "@/utils/helpers";

export async function POST(request: NextRequest) {
    try {
        await connectToDatabase()

        const {userId, currentPassword, newPassword} = await request.json()

        const user = await User.findById(userId)

        if(!user) {
            return NextResponse.json({
                isSuccess: false,
                message: "User not found!"
            })
        }

        const isPasswordMatched = await comparePassword(currentPassword, user.password)

        if(isPasswordMatched) {
            const newUser = await User.findByIdAndUpdate(userId, {
                password: await hashPassword(newPassword)
            },
            { new: true, runValidators: true })

            return NextResponse.json({
                data: newUser,
                isSuccess: true,
                message: "Password Updated!"
            })
        } else {
            return NextResponse.json({
                isSuccess: false,
                message: "Current Password doesnt matched with the old password"
            })
        }
        
    } catch (error) {
        console.log(error)
        NextResponse.json({
            error,
            message: "Internal Server Error"
        })
    }
}