import { IApiResponse, IUser } from "@/utils/types";
import { post } from "./service";

export const login = async (params: any):Promise<any> => {
    return await post("/api/authentication/login", params)
}

export const register = async (params: any):Promise<any> => {
    return await post("/api/authentication/register", params)
}

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

export const getBlogs = async (params: any):Promise<any> => {
  return await post("/api/blog", params)
}

export const addBlog = async (params: any):Promise<any> => {
  return await post("/api/blog/addBlog", params, true)
}

export const blogAction = async(params:any):Promise<any> => {
  return await post("/api/blog/blogAction", params)
}