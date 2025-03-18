import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Blog from "@/app/models/blogModel";
import cloudinary from "@/lib/cloudinaryConfig";
import { replaceNewImagefromCurrentImage } from "@/utils/helpers";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const formData = await request.formData();

    const id = formData.get("id") as string;
    const title = formData.get("title") as string;
    const image = formData.get("image");
    const blog_category_raw = formData.get("topic_category") as string;
    const blog_category = JSON.parse(blog_category_raw) || [];
    const content = formData.get("content") as string;

    let params: any = {};
    if(title) params.title = title
    if(content) params.content = content
    if(blog_category) params.topic_category = blog_category



    if (image && image instanceof File) {
      try {
        const buffer = Buffer.from(await image.arrayBuffer());
        const imageUrl = await new Promise((resolve, reject) => {
          cloudinary.v2.uploader
            .upload_stream({ folder: "blog_pictures" }, (error, result) => {
              if (error) {
                console.error("Cloudinary upload failed:", error);
                reject(new Error("Failed to upload image"));
              } else {
                resolve(result?.secure_url || "");
              }
            })
            .end(buffer);
        });
        await replaceNewImagefromCurrentImage(Blog, id);
        params.image_url = imageUrl
      } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        return NextResponse.json(
          { error: "Failed to upload image" },
          { status: 500 }
        );
      }
    }

    const updatedBlog = await Blog.findByIdAndUpdate(id, params, {
      new: true,
      runValidators: true,
    });

    return NextResponse.json({
        message: "Blog updated successfully!",
        data: updatedBlog
    })
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error,
      message: "Internal Server Error",
    });
  }
}
