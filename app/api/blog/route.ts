import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Blog from "@/app/models/blogModel";

export async function POST(request: NextRequest) {
    try {
        await connectToDatabase();
        const { id, category, page = 1, limit = 8, username } = await request.json(); // Default values

        let params: any = {};

        if (category && category !== "All") {
            params.topic_category = { $in: [category] }; // Filter by category
        }
        if (id) params._id = id;
        if (username) params.username = username;

        const blogList = await Blog.find(params)
            .sort({ createdAt: -1 }) // 🔥 Sort by latest to oldest
            .skip((page - 1) * limit) // Skip previous pages
            .limit(limit) // Limit per page
            .exec();

        const totalBlogs = await Blog.countDocuments(params); // Total count

        return NextResponse.json({
            data: blogList,
            totalPages: Math.ceil(totalBlogs / limit), // Total pages
            currentPage: page,
            totalBlogs,
        });

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "Internal Server Error"
        });
    }
}
