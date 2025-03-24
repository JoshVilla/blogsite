import {
  clearUserSettings,
  setUserSettings,
} from "@/app/redux/slices/userSettingsSlice";
import { persistor, RootState } from "@/app/redux/store/store";
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
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { changeSettings, deleteAccount, disableAccount } from "@/service/api";
import { ISettings } from "@/utils/types";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { addDays, addMonths } from "date-fns";
import { clearUser } from "@/app/redux/slices/userSlice";
import { clearBlog } from "@/app/redux/slices/blogSlice";
import { useRouter } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type FormData = {
  hideBlogs: boolean;
  hideLikes: boolean;
  hideFavorite: boolean;
  isPrivate: boolean;
};

const ManageAccount = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const settingState = useSelector(
    (state: RootState) => state.userSettings.userSettings as ISettings
  );

  const form = useForm<FormData>({
    defaultValues: {
      hideBlogs: settingState?.hideBlogs ?? false,
      hideLikes: settingState?.hideLikes ?? false,
      hideFavorite: settingState?.hideFavorite ?? false,
      isPrivate: settingState?.isPrivate ?? false,
    },
  });

  const [selectedDate, setSelectedDate] = useState("three-days");
  const [calculatedDate, setCalculatedDate] = useState<string>("");
  const [openDeleteAccount, setOpenDeleteAccount] = useState(false);

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
      if (data.isSuccess) {
        toast.success(data.message);
        dispatch(setUserSettings(data.data));
      }
    },
    onError: (error: any) => {
      toast.error(error?.message || "Something went wrong.");
    },
  });

  const handleLogout = async () => {
    await persistor.flush();
    await persistor.purge();
    dispatch(clearUser());
    dispatch(clearBlog());
    dispatch(clearUserSettings());
    router.push("/");
  };

  const deleteAccountMutation = useMutation({
    mutationFn: deleteAccount,
    onSuccess: async (data) => {
      if (data.isSuccess) {
        toast.success(data.message);
        await handleLogout();
      }
    },
    onError: (error: any) => {
      toast.error(error?.message || "Something went wrong.");
    },
  });

  const disableAccountMutation = useMutation({
    mutationFn: disableAccount,
    onSuccess: async (data) => {
      if (data.isSuccess) {
        toast.success(data.message);
        await handleLogout();
      }
    },
    onError: (error: any) => {
      toast.error(error?.message || "Something went wrong.");
    },
  });

  const handleChangeSettings = (data: FormData) => {
    settingsMutation.mutate({ ...data, userId: settingState.userId });
  };

  const calculateFutureDate = (value: string) => {
    let futureDate = new Date();
    switch (value) {
      case "three-days":
        futureDate = addDays(futureDate, 3);
        break;
      case "week":
        futureDate = addDays(futureDate, 7);
        break;
      case "month":
        futureDate = addMonths(futureDate, 1);
        break;
      case "six-months":
        futureDate = addMonths(futureDate, 6);
        break;
      default:
        futureDate = new Date();
    }
    return futureDate.toISOString();
  };

  useEffect(() => {
    setCalculatedDate(calculateFutureDate(selectedDate));
  }, [selectedDate]);

  const handleDisableAccount = () => {
    const newCalculatedDate = calculateFutureDate(selectedDate);
    disableAccountMutation.mutate({
      date: newCalculatedDate,
      userId: settingState.userId,
    });
    setCalculatedDate(newCalculatedDate);
  };

  const handleDeleteAccount = () => {
    deleteAccountMutation.mutate({ userId: settingState.userId });
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1">
        <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit(handleChangeSettings)}
            className="space-y-4"
          >
            {hideContent.map((content) => (
              <FormField
                key={content.name}
                control={form.control}
                name={content.name as keyof FormData}
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 p-4">
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
              disabled={settingsMutation.isPending}
              className="mt-4 px-4 py-2 rounded-md"
            >
              {settingsMutation.isPending ? "Saving..." : "Save Settings"}
            </Button>
          </form>
        </FormProvider>
      </div>
      <div className="p-4 flex-1">
        <div className="space-y-5">
          <div className="text-gray-400 text-sm mb-4">
            Need a break? You can{" "}
            <span className="text-orange-200">
              temporarily disable your account
            </span>
            . If you decide to reactivate it before your selected date, contact
            the admin with your username, email, and password.
          </div>
          <Select value={selectedDate} onValueChange={setSelectedDate}>
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
          <Button
            size="sm"
            className="bg-orange-400"
            variant="default"
            onClick={handleDisableAccount}
          >
            Disable Account
          </Button>
          <div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  size="sm"
                  variant="destructive"
                  className="cursor-pointer"
                >
                  Disable Account
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="cursor-pointer">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    className="cursor-pointer"
                    onClick={handleDeleteAccount}
                  >
                    {deleteAccountMutation.isPending ? "Deleting" : "Continue"}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAccount;
