"use client";
import BlogCard from "@/components/blogCard/blogCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getBlogs, getLikeFavorite } from "@/service/api";
import { IBlog, ISettings,  } from "@/utils/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import {  Heart, LockKeyhole, Newspaper, ThumbsUp } from "lucide-react";
import Categories from "@/components/categories/categories";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store/store";
const BlogList = ({data}: {data:any}) => {


  const [selectedMenu, setSelectedMenu] = useState("blogs");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const {id, username} = useParams();
  const queryClient = useQueryClient();

  // Invalidate previous query on menu change
  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["blogs", id] });
    queryClient.invalidateQueries({ queryKey: ["likes", id] });
    queryClient.invalidateQueries({ queryKey: ["favorites", id] });
  }, [selectedMenu, id, queryClient]);

  // Fetch My Blogs
  const blogsQuery = useQuery({
    queryKey: ["blogs", username, selectedCategory],
    queryFn: () => getBlogs({ username, category: selectedCategory }),
    enabled: selectedMenu === "blogs" && !!username, // Ensure id exists
  });

  // Fetch Liked Blogs
  const likesQuery = useQuery({
    queryKey: ["likes", id, selectedCategory],
    queryFn: () =>
      getLikeFavorite({ userId: id, category: selectedCategory, action: "liked" }),
    enabled: selectedMenu === "likes" && !!id,
  });

  // Fetch Favorite Blogs
  const favoritesQuery = useQuery({
    queryKey: ["favorites", id, selectedCategory],
    queryFn: () =>
      getLikeFavorite({ userId: id, category: selectedCategory, action: "favorited" }),
    enabled: selectedMenu === "favorites" && !!id,
  });

  // Determine which query result to display
  const activeQuery =
    selectedMenu === "blogs"
      ? blogsQuery
      : selectedMenu === "likes"
      ? likesQuery
      : favoritesQuery;

  const menus = [
    {
      label: "Blogs",
      key:"blogs",
      icon: Newspaper,
      isHidden: data.hideBlogs
    },
    {
      label: "Likes",
      key:"likes",
      icon: ThumbsUp,
      isHidden: data.hideLikes
    },
    {
      label: "Favorites",
      key:"favorites",
      icon: Heart,
      isHidden: data.hideFavorite
    }
  ]

  return (
    <div>
      {/* Menu */}
      <div className="flex items-center gap-6">
        {menus.map((menu) => (
          <Button
            key={menu.key}
            size="sm"
            variant="link"
            className={`cursor-pointer hover:underline ${
              menu.key === selectedMenu ? "underline" : ""
            }`}
            onClick={() => setSelectedMenu(menu.key)}
          >
            <menu.icon className="h-4 w-4" />
            {menu.label}
            {
              menu.isHidden && <LockKeyhole className="h-4 w-4" />
            }
          </Button>
        ))}
      </div>
        <Separator className="my-2"/>
        <Categories onChange={(category) => {
          if(category !== selectedCategory) setSelectedCategory(category)
        }} />
      {/* Loading and Error States */}
      {activeQuery.isLoading && <p>Loading...</p>}
      {activeQuery.error && <p>Error: {activeQuery.error.message}</p>}

      {/* Render Data */}
      <div className="mt-10 flex justify-start flex-wrap gap-10">
        {activeQuery.data?.data.length > 0 ? (
          activeQuery.data.data.map((blog: IBlog) => (
            <BlogCard data={blog} key={blog._id} />
          ))
        ) : (
          <p className="text-gray-500">No blogs found.</p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
