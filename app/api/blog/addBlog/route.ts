import { NextResponse, NextRequest } from "next/server";
import Blog from "@/app/models/blogModel";
import { connectToDatabase } from "@/lib/mongodb";
import cloudinary from "@/lib/cloudinaryConfig";
import User from "@/app/models/userModel";

export async function POST(request: NextRequest) {
    try {
        await connectToDatabase();
        const formData = await request.formData();

        const title = formData.get("title") as string;
        const image = formData.get("image");
        const blog_category_raw = formData.get("topic_category") as string;
        const blog_category = JSON.parse(blog_category_raw) || [];
        const content = formData.get("content") as string;
        const username = formData.get("username") as string;
        const creator_id = formData.get("creator_id") as string;

        if (!title || !content) {
            return NextResponse.json({
                message: "Title and content are required",
                success: false
            }, { status: 400 });
        }

        let imageUrl = "";
        if (image && image instanceof File) {
            try {
                const buffer = Buffer.from(await image.arrayBuffer());
                imageUrl = await new Promise((resolve, reject) => {
                    cloudinary.v2.uploader.upload_stream(
                        { folder: "blog_pictures" },
                        (error, result) => {
                            if (error) {
                                console.error("Cloudinary upload failed:", error);
                                reject(new Error("Failed to upload image"));
                            } else {
                                resolve(result?.secure_url || "");
                            }
                        }
                    ).end(buffer);
                });
            } catch (error) {
                console.error("Error uploading to Cloudinary:", error);
                return NextResponse.json(
                    { error: "Failed to upload image" },
                    { status: 500 }
                );
            }
        }

        //get image profile of an owner of the blog

        const user = await User.findOne({username})

        const newBlog = await Blog.create({
            title,
            content,
            username,
            creator_id,
            topic_category: blog_category,
            image_url: imageUrl,
            profile_image_url: user.image_url
        });

        return NextResponse.json({
            message: "Blog created successfully",
            success: true,
            data: newBlog
        }, { status: 201 });

    } catch (error) {
        console.error("Error creating blog:", error);
        return NextResponse.json({
            error,
            message: "Internal server error"
        }, { status: 500 });
    }
}
