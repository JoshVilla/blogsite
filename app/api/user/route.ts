import { NextRequest, NextResponse } from "next/server";

import User from "@/app/models/userModel";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
    try {

        await connectToDatabase()

        const users = await User.find({})

        return NextResponse.json({
            data: users
        })
        
    } catch (error) {
        console.log(error)
        NextResponse.json({
            error
        })
    }
}