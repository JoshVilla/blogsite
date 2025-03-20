import { setUserSettings } from "@/app/redux/slices/userSettingsSlice";
import { RootState } from "@/app/redux/store/store";
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
import { changeSettings } from "@/service/api";
import { ISettings } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

// Define the form data type
type FormData = {
  hideBlogs: boolean;
  hideLikes: boolean;
  hideFavorite: boolean;
  isPrivate: boolean
};

const ManageAccount = () => {
    const dispatch = useDispatch()
    const settingState = useSelector((state:RootState) => state.userSettings.userSettings as ISettings)
  const form = useForm<FormData>({
    defaultValues: {
        hideBlogs: settingState.hideBlogs,
        hideLikes: settingState.hideLikes,
        hideFavorite: settingState.hideFavorite,
        isPrivate: settingState.isPrivate
    },
  });

  const hideContent = [
    {
      name: "hideBlogs",
      label: "Hide My Blogs",
      description: "Prevent others from viewing your published blogs.",
    },
    {
      name: "hideLikes",
      label: "Hide Liked Blogs",
      description: "Keep your liked blogs private and hidden from others.",
    },
    {
      name: "hideFavorite",
      label: "Hide Favorite Blogs",
      description: "Conceal your favorite blogs from public view.",
    },
    {
      name: "isPrivate",
      label: "Private Account",
      description:
        "Restrict your profile visibility to approved followers only.",
    },
  ];

  const settingsMutation = useMutation({
    mutationFn: changeSettings,
    onSuccess: (data) => {
        if(data.isSuccess) {
            toast.success(data.message)
            dispatch(setUserSettings(data.data))
        }
    },
    onError: (error) => {
        toast.error(error.message)
    }
  })

  const handleChangeSettings = (data: FormData) => {
    settingsMutation.mutate({...data, userId: settingState.userId})
  }

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Provide form context correctly */}
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(handleChangeSettings)}
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
