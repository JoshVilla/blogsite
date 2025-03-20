import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";

// Define the form data type
type FormData = {
  blogs: boolean;
  likes: boolean;
  favorites: boolean;
};

const ManageAccount = () => {
  const form = useForm<FormData>({
    defaultValues: {
      blogs: false,
      likes: false,
      favorites: false,
    },
  });

  const hideContent = [
    {
      name: "blogs",
      label: "Hide My Blogs",
      description: "Prevent others from viewing your published blogs.",
    },
    {
      name: "likes",
      label: "Hide Liked Blogs",
      description: "Keep your liked blogs private and hidden from others.",
    },
    {
      name: "favorites",
      label: "Hide Favorite Blogs",
      description: "Conceal your favorite blogs from public view.",
    },
    {
      name: "private",
      label: "Private Account",
      description:
        "Restrict your profile visibility to approved followers only.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Provide form context correctly */}
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit((data) => console.log(data))}
          className="space-y-4"
        >
          {hideContent.map((content) => (
            <FormField
              key={content.name} // Ensure a unique key
              control={form.control}
              name={content.name as keyof FormData} // Ensure type safety
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 p-4 ">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>{content.label}</FormLabel>
                    <FormDescription>{content.description}</FormDescription>
                  </div>
                </FormItem>
              )}
            />
          ))}
          <Button
            type="submit"
            size="sm"
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Save Settings
          </Button>
        </form>
      </FormProvider>
      <div className="p-4 space-y-5">
        <div className="text-gray-300 text-sm mb-4">
          Need a break? You can <span className="text-orange-200">disable your account</span>  for now
        </div>
        <div className="flex gap-4 flex-wrap">
        <Select defaultValue="three-days">
          <SelectTrigger className="w-[180px]" size="sm">
            <SelectValue placeholder="Select a date" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="three-days">3 days</SelectItem>
              <SelectItem value="week">a week</SelectItem>
              <SelectItem value="month">a month</SelectItem>
              <SelectItem value="six-months">6 months</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button size="sm" className="bg-orange-400" variant="default">Disable Account</Button>
        </div>
        <div className="text-gray-300 text-sm mb-4">
         Delete account?
        </div>
        <div className="flex gap-4 flex-wrap">
        <Button size="sm"  variant="destructive">Delete Account</Button>
        </div>
      </div>
    </div>
  );
};

export default ManageAccount;
