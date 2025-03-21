import mongoose from "mongoose";

interface IUser {
  firstname: string;
  middlename: string;
  lastname: string;
  username: string;
  password: string;
  image_url: string | null;
  email: string;
  isGoogleModeRegistration: boolean;
  isActive: boolean;
  followers: number;
  following: number;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    firstname: { type: String, required: true },
    middlename: { type: String, default: "" },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, default: "" },
    image_url: { type: String, default: null },
    isGoogleModeRegistration: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    followers: { type: Number, default: 0 },
    following: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
