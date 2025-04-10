import { format } from "date-fns";
import type { Metadata } from "next";

export const getCloudinaryPublicId = (url: string) => {
  if (!url) return null;

  try {
    const urlParts = url.split("/");
    const filenameWithExtension = urlParts.pop();
    const folder = urlParts.pop();

    if (!folder || !filenameWithExtension) return null;

    const filename = filenameWithExtension.split(".")[0];
    return `${folder}/${filename}`;
  } catch (error) {
    console.error("Error parsing Cloudinary URL:", error);
    return null;
  }
};

export const passwordValidation = (
  isValidFormat: boolean,
  isPasswordMatch: boolean
) => {
  return isValidFormat && isPasswordMatch ? true : false;
};

export const formattedDate = (date: string) => {
  return format(new Date(date), "MM/dd/yyyy");
};

export const getMetadata = (title: string, description?: string): Metadata => {
  return {
    title: `${title || "Blogify"}`,
    description: description || "Be updated on what is happening",
  };
};
