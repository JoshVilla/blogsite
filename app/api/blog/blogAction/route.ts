import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Blog from "@/app/models/blogModel";
import mongoose from "mongoose";

export async function POST(request: NextRequest) {
    try {
        await connectToDatabase();
        
        const { blogId, action, userId } = await request.json();
        
        if (!mongoose.Types.ObjectId.isValid(blogId)) {
            return NextResponse.json({ message: "Invalid Blog ID" }, { status: 400 });
        }

        const blog = await Blog.findById(blogId);
        if (!blog) {
            return NextResponse.json({ message: "Blog not found" }, { status: 404 });
        }

        let updateQuery = {};

        if (action === "like") {
            const isLiked = blog.likedByUsers.includes(userId);

            updateQuery = isLiked
                ? { 
                    $inc: { likes: -1 }, 
                    $pull: { likedByUsers: userId } // Remove user from likes
                  }
                : { 
                    $inc: { likes: 1 }, 
                    $addToSet: { likedByUsers: userId } // Add user if not already there
                  };
        } 
        else if (action === "favorite") {
            const isFavorited = blog.favoriteByUsers.includes(userId);

            updateQuery = isFavorited
                ? { 
                    $inc: { favorites: -1 }, 
                    $pull: { favoriteByUsers: userId } // Remove user from favorites
                  }
                : { 
                    $inc: { favorites: 1 }, 
                    $addToSet: { favoriteByUsers: userId } // Add user if not already there
                  };
        } 
        else {
            return NextResponse.json({ message: "Invalid action" }, { status: 400 });
        }

        // Update the blog
        const updatedBlog = await Blog.findByIdAndUpdate(blogId, updateQuery, { new: true });

        return NextResponse.json({ 
            message: `${action} updated successfully`,
            likes: updatedBlog.likes,
            favorites: updatedBlog.favorites,
            likedByUsers: updatedBlog.likedByUsers,
            favoriteByUsers: updatedBlog.favoriteByUsers
        });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Internal Server Error", error }, { status: 500 });
    }
}
