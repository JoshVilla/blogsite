import mongoose from "mongoose";

interface IUserInt {
  userId: string;
  followers: string[] | [];
  following: string[] | [];
}

const UserIntSchema = new mongoose.Schema<IUserInt>(
  {
    userId: { type: String, required: true },
    followers: { type: [String], default: [] },
    following: { type: [String], default: [] },
  },
  { timestamps: true }
);

const FollowersFollowing =
  mongoose.models.FollowersFollowing ||
  mongoose.model<IUserInt>("FollowersFollowing", UserIntSchema);

export default FollowersFollowing;
