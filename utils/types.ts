export interface IApiResponse<T> {
  data: T;
  isSuccess?: boolean;
  message: string;
  error: string;
}

export interface IServiceParams {
  [key: string]: any;
}

export interface IUser {
  firstname: string;
  middlename: string;
  lastname: string;
  username: string;
  password: string;
  _id: string;
  email: string;
  isActive: boolean;
  image_url: string | null;
  isGoogleModeRegistration: boolean;
  followers: number;
  following: number;
  isFollowed: boolean;
}

export interface IBlog {
  _id: string;
  title: string;
  image_url: string;
  content: string;
  username: string;
  topic_category: string[];
  createdAt: string;
  updatedAt: string;
  favorites: number;
  likedByUsers: string[];
  favoriteByUsers: string[];
  likes: number;
  __v: number;
  profile_image_url: string;
  creator_id: string;
}

export interface ISettings {
  hideBlogs: boolean;
  hideLikes: boolean;
  hideFavorite: boolean;
  userId: string;
  email: string;
  disabledUntil: string | null;
  isPrivate: boolean;
}
