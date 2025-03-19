import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/app/models/userModel";
import cloudinary from "@/lib/cloudinaryConfig";
import { replaceNewImagefromCurrentImage } from "@/utils/helpers";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();

    const formData = await request.formData();
    const userId = formData.get("userId") as string;
    const image = formData.get("image");

    let new_image_url = ""
    if (image && image instanceof File) {
      try {
        const buffer = Buffer.from(await image.arrayBuffer());
            new_image_url = await new Promise((resolve, reject) => {
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
        await replaceNewImagefromCurrentImage(User, userId);
      } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        return NextResponse.json(
          { error: "Failed to upload image" },
          { status: 500 }
        );
      }
    }

    const newUser = await User.findByIdAndUpdate(userId, {
        image_url: new_image_url
    },{ new: true, runValidators: true })

    return NextResponse.json({
        data: newUser,
        isSuccess: true,
        message: "Profile Changed Successfully"
    })
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        isSuccess: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
