"use client";

import Container from "@/components/container/container";
import TitlePage from "@/components/titlePage/titlePage";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store/store";
import { IUser } from "@/utils/types";
import { Button } from "@/components/ui/button";
import ChangePassword from "./changePassword";
import { useMutation } from "@tanstack/react-query";
import { changeInfo, changeProfile } from "@/service/api";
import { toast } from "sonner";
import { setUser } from "../redux/slices/userSlice";

const Page = () => {
  const dispatch = useDispatch();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const userState = useSelector((state: RootState) => state.user.user as IUser);

  // Track file and preview
  const [profileFile, setProfileFile] = useState<File | null>(null);
  const [profilePreview, setProfilePreview] = useState<string>(
    userState.image_url || "/assets/default_profile.avif"
  );

  // Ensure profile preview updates when userState.image_url changes
  useEffect(() => {
    setProfilePreview(userState.image_url || "/assets/default_profile.avif");
  }, [userState.image_url]);

  const profileMutation = useMutation({
    mutationFn: changeProfile,
    onSuccess: (data) => {
      if (data.isSuccess) {
        toast.success(data.message);
        dispatch(setUser(data.data));
        setProfileFile(null);

        // Reset file input
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const infoMutation = useMutation({
    mutationFn: changeInfo,
    onSuccess: (data) => {
      if (data.isSuccess) {
        toast.success(data.message);
        dispatch(setUser(data.data));
        console.log(data.data)
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const form = useForm({
    defaultValues: {
      firstname: userState.firstname,
      middlename: userState.middlename,
      username: userState.username,
      lastname: userState.lastname,
    },
  });

  const handleUpdateProfilePicture = () => {
    if (!profileFile) return;

    const formData = new FormData();
    formData.append("image", profileFile);
    formData.append("userId", userState._id);

    profileMutation.mutate(formData);
  };

  const handleChangeInfo = (data: any) => {
    const params = { ...data, userId: userState._id };

    infoMutation.mutate(params);
  };
  

  return (
    <Container>
      <TitlePage title="My Account" />
      <div className="mt-6">
        <div className="flex gap-10 flex-col md:flex-row justify-between">
          {/* Profile Image Section */}
          <div>
            <Image
              src={profilePreview}
              width={200}
              height={200}
              alt="profile"
              className="h-52 w-52 object-cover rounded-full mx-auto mb-6"
            />

            <Input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                if (file) {
                  setProfileFile(file);
                  const objectUrl = URL.createObjectURL(file);
                  setProfilePreview(objectUrl);
                }
              }}
            />

            {profileFile && (
              <div className="w-20 mx-auto">
                <Button
                  size="sm"
                  className="mt-4 cursor-pointer"
                  onClick={handleUpdateProfilePicture}
                >
                  {profileMutation.isPending ? "Updating..." : "Update"}
                </Button>
              </div>
            )}
          </div>

          {/* User Info Form */}
          <div>
            <Form {...form}>
              <form className="space-y-6" onSubmit={form.handleSubmit(handleChangeInfo)}>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter username" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Firstname</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter firstname" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="middlename"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Middlename</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter middlename" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lastname</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter lastname" />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button className="cursor-pointer" type="submit" size="sm">
                  {infoMutation.isPending ? "Updating..." : "Update"}
                </Button>
              </form>
            </Form>
          </div>

          {/* Change Password Section */}
          <ChangePassword />
        </div>
      </div>
    </Container>
  );
};

export default Page;
