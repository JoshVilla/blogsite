import { IApiResponse, IUser } from "@/utils/types";
import { post } from "./service";

export const login = async (params: any): Promise<any> => {
  return await post("/api/authentication/login", params);
};

export const register = async (params: any): Promise<any> => {
  return await post("/api/authentication/register", params);
};

export const getUser = async (params: any): Promise<any> => {
  return await post("/api/user", params);
};

// export const register = async (params: any): Promise<any> => {
//     try {
//       const response = await post("/api/authentication/register", params);
//       console.log("🔍 Register Response:", response);
//       return response;
//     } catch (error) {
//       console.error("❌ Register Error:", error);
//       throw error;
//     }
//   };

export const getBlogs = async (params: any): Promise<any> => {
  return await post("/api/blog", params);
};

export const addBlog = async (params: any): Promise<any> => {
  return await post("/api/blog/addBlog", params, true);
};

export const blogAction = async (params: any): Promise<any> => {
  return await post("/api/blog/blogAction", params);
};

export const getLikeFavorite = async (params: any): Promise<any> => {
  return await post("/api/blog/getLikeFavorite", params);
};

export const editBlog = async (params: any): Promise<any> => {
  return await post("/api/blog/editBlog", params, true);
};

export const deleteBlog = async (params: any): Promise<any> => {
  return await post("/api/blog/deleteBlog", params);
};

export const changePassword = async (params: any): Promise<any> => {
  return await post("/api/user/changePassword", params);
};

export const changeProfile = async (params: any): Promise<any> => {
  return await post("/api/user/changeProfile", params, true);
};

export const changeInfo = async (params: any): Promise<any> => {
  return await post("/api/user/changeInfo", params);
};

export const googleLogin = async (params: any): Promise<any> => {
  return await post("/api/authentication/login/googleLogin", params);
};

export const changeSettings = async (params: any): Promise<any> => {
  return await post("/api/user/changeSettings", params);
};

export const disableAccount = async (params: any): Promise<any> => {
  return await post("/api/user/disableAccount", params);
};

export const followUser = async (params: any): Promise<any> => {
  return await post("/api/user/followUser", params);
};

export const getFollowing = async (params: any): Promise<any> => {
  return await post("/api/user/getFollowersAndFollowing", params);
};

export const deleteAccount = async (params: any): Promise<any> => {
  return await post("/api/user/deleteAccount", params);
};
