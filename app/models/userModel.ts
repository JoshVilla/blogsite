import mongoose from "mongoose";

interface IUser {
    firstname: string;
    middlename: string;
    lastname: string;
    username: string;
    password: string;
}

const UserSchema = new mongoose.Schema<IUser>({
    firstname: { type: String, required: true },
    middlename: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
