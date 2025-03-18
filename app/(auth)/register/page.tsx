"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import PasswordIndicator from "@/components/passwordIndicator/page";
import { passwordValidation } from "@/utils/nonAsyncHelpers";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { register } from "@/service/api";

interface ILogin {
  firstname: string;
  middlename: string;
  lastname: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const Login = () => {
  const form = useForm<ILogin>({
    defaultValues: {
      firstname: "",
      middlename: "",
      lastname: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [password, setPassword] = useState("");
  const [isPasswordValidFormat, setIsPasswordValidFormat] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = (data: ILogin) => {
    const passwordValid = passwordValidation(
      isPasswordValidFormat,
      password === form.getValues("confirmPassword")
    );

    if (passwordValid) {
      mutation.mutate(data);
    }
  };

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: (response) => {
      if (response.isSuccess) {
        toast.success(response.message || "Account Registered");
        console.log(response.data);
        form.reset()
      } else {
        toast.error(response.message || "Registration failed");
      }
    },
    onError: (error: any) => {
      toast.error(error.message || "Registration failed");
    },
  });
  
  return (
    <div className="h-full my-10 w-full flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" w-96 py-2"
      >
        <div className="text-4xl mb-6">Register</div>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(handleLogin)}>
            <FormField
              name="firstname"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter firstname" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="middlename"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter middlename" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="lastname"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter lastname" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="username"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter username" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        {...field}
                        onChange={(e) => {
                          field.onChange(e.target.value);
                          setPassword(e.target.value);
                        }}
                        className="pr-10" // Add padding to prevent overlap with the button
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <PasswordIndicator
              password={password}
              isValid={setIsPasswordValidFormat}
            />
            {errorMsg && (
              <div className="my-4 text-red-500 text-sm">{errorMsg}</div>
            )}
            <FormField
              name="confirmPassword"
              control={form.control}
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password again"
                        {...field}
                        className="pr-10" // Add padding to prevent overlap with the button
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              className="cursor-pointer"
              size="sm"
              type="submit"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
      </motion.div>
    </div>
  );
};

export default Login;
