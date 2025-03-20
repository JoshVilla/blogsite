import mongoose from "mongoose";

interface ISettings {
  hideBlogs: boolean;
  hideLikes: boolean;
  hideFavorite: boolean;
  userId: string;
  email: string,
  disabledUntil: string | null
  isPrivate: boolean
}

const SettingsSchema = new mongoose.Schema<ISettings>({
  hideBlogs: { type: Boolean, default: false },
  hideLikes: { type: Boolean, default: false },
  hideFavorite: { type: Boolean, default: false },
  isPrivate: { type: Boolean, default: false },
  userId: { type: String, required: true },
  email: { type: String, required: true },
  disabledUntil: { type: String, default: null},
});

const Settings =
  mongoose.models.Settings ||
  mongoose.model<ISettings>("Settings", SettingsSchema);

export default Settings;
