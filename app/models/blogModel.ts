import mongoose from 'mongoose'

interface IBlog {
    title: string
    image_url: string
    content: string
    username: string,
    topic_category: string[]
    likedByUsers: string[]
    favoriteByUsers:string[],
    likes: number,
    favorites: number,
    profile_image_url: string | null,
    creator_id: string
}

const BlogSchema = new mongoose.Schema<IBlog>({
    title: { type: String, required: true },
    image_url: { type: String, default: ''},
    content: { type: String, required: true },
    creator_id: { type: String, required: true },
    username: { type: String, required: true },
    topic_category: { type: [String], required: true },
    likedByUsers: { type: [String], default: [] },
    favoriteByUsers: { type: [String], default: [] },
    likes: {type: Number, default: 0},
    favorites: {type: Number, default: 0},
    profile_image_url: {type: String, default: null}
}, { timestamps: true })

const Blog = mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema)

export default Blog