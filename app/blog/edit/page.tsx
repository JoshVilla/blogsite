"use client";
import TiptapEditor from "@/components/textEditor/textEditor";
import React, { useEffect, useState } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { categories, ICategory } from "@/utils/constant";
import { XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store/store";
import { IBlog, IUser } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";
import { editBlog } from "@/service/api";
import { toast } from "sonner";
import { setBlog } from "@/app/redux/slices/blogSlice";
import Container from "@/components/container/container";

const Page = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user.user as IUser);
  const blogState = useSelector((state: RootState) => state.blog.blog as IBlog);
  const form = useForm({
    defaultValues: {
      title: blogState.title,
      image: null as File | null, // Store file as state
    },
  });

  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [contentText, setContentText] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const mutation = useMutation({
    mutationFn: editBlog,
    onSuccess: (data) => {
      toast.success(data.message);
      dispatch(setBlog(data.data));
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleEditorChange = (content: string) => {
    setContentText(content);
  };

  const handleEditBlog = () => {
    if (!form.getValues("title")) {
      toast.error("Title is required!");
      return;
    }

    if (!contentText) {
      toast.error("Content cannot be empty!");
      return;
    }

    const formData = new FormData();
    formData.append("content", contentText);
    if (form.getValues("image")) {
      formData.append("image", form.getValues("image") as File);
    }
    formData.append("title", form.getValues("title"));
    formData.append("topic_category", JSON.stringify(selectedCategories));
    formData.append("username", userState.username);
    formData.append("id", blogState._id);

    mutation.mutate(formData);
  };

  const handleChooseCategory = (value: string) => {
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((cat) => cat !== value)
        : [...prev, value]
    );
  };

  useEffect(() => {
    setSelectedCategories(blogState.topic_category);
    setCoverPreview(blogState.image_url);
    setContentText(blogState.content);
  }, [blogState]);

  // TODO ADD LOADING UI

  return (
    <Container>
      <div className="mt-10">
        <div className="text-xl md:text-2xl font-semibold mb-6">Edit Blog</div>

        {/* Category Selection */}
        <div>
          <div className="text-sm font-semibold">Choose Categories</div>
          <div className="flex flex-wrap items-center mt-2 gap-2">
            {selectedCategories.map((category, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{ duration: 0.1 }}
                key={index}
                className="text-xs bg-accent p-1 px-2 w-auto rounded-lg flex items-center gap-2 cursor-pointer hover:scale-110 transition-all"
                onClick={() => handleChooseCategory(category)}
              >
                {category} <XCircle className="h-3 w-3" />
              </motion.div>
            ))}
          </div>
          <div className="flex items-center flex-wrap gap-4 my-4">
            {categories.map(
              (category: ICategory, index: number) =>
                category.label !== "All" && (
                  <Button
                    key={index}
                    className="cursor-pointer"
                    size={"sm"}
                    variant={
                      selectedCategories.includes(category.label)
                        ? "default"
                        : "outline"
                    }
                    onClick={() => handleChooseCategory(category.label)}
                  >
                    {category.label}
                  </Button>
                )
            )}
          </div>
        </div>

        {/* Form Fields */}
        <Form {...form}>
          <form className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter title" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        form.setValue("image", file); // Store file
                        form.trigger("image");
                        setCoverPreview(
                          file ? URL.createObjectURL(file) : null
                        );
                      }}
                    />
                  </FormControl>
                  {coverPreview && (
                    <img
                      src={coverPreview}
                      alt="Cover Preview"
                      className="mt-2 mx-auto h-60 w-full object-contain rounded-lg shadow-md"
                    />
                  )}
                </FormItem>
              )}
            />
          </form>
        </Form>

        {/* Content Editor */}
        <div className="mt-10 border p-4 rounded-lg">
          <div className="text-lg font-semibold mb-4">Content</div>
          <TiptapEditor
            onChange={handleEditorChange}
            contentValue={blogState.content}
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-end mt-6">
          <Button
            size="sm"
            className="cursor-pointer"
            onClick={handleEditBlog}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Updating..." : "Update"}
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Page;
