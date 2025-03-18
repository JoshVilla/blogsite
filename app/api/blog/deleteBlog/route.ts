import { NextResponse, NextRequest } from "next/server";
import Blog from "@/app/models/blogModel";
import { connectToDatabase } from "@/lib/mongodb";
import { deleteCloudinaryImage } from "@/utils/helpers";
import { getCloudinaryPublicId } from "@/utils/nonAsyncHelpers";

export async function POST(request: NextRequest) {
    try {
        await connectToDatabase();

        const { id, image_url } = await request.json();

        // Delete blog first
        const deletedBlog = await Blog.findByIdAndDelete(id);

        if (!deletedBlog) {
            return NextResponse.json({
                isSuccess: false,
                message: "Blog not found!",
            }, { status: 404 });
        }

        // Delete the image after successfully deleting the blog
        if(image_url) {
            const publicId = getCloudinaryPublicId(image_url)
            if(publicId) {
                await deleteCloudinaryImage(publicId);
            }
        }

        return NextResponse.json({
            isSuccess: true,
            message: "Blog deleted successfully!",
        });

    } catch (error) {
        console.error("Delete Blog Error:", error);
        return NextResponse.json({
            isSuccess: false,
            message: "Internal Server Error",
        }, { status: 500 });
    }
}
